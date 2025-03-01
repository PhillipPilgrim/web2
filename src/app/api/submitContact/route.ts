"use server";

import { blacklistedMails } from "@/src/app/utils/blacklistedMails";
import { EMAIL } from "@/src/app/utils/constants";
import generateUUID from "@/src/app/utils/generateUUID";

import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import validate from "deep-email-validator";
import "dotenv/config";

let solves: string[] = [];
setInterval(() => {
	solves = [];
}, 60_000 * 5);

async function checkIfEmailIsValid(email: string) {
	try {
		const data = await validate({
			email: email,
			validateRegex: false,
			validateMx: true,
			validateTypo: false,
			validateDisposable: false,
			validateSMTP: true,
		});

		if (!data?.valid) {
			return false;
		} else {
			return true;
		}
	} catch (err) {
		console.log("Nastala chyba při ověřování pravosti e-mailu | Route: /api/submitContact");
		console.error(err);

		return false;
	}
}

export async function GET(req: NextRequest) {
	const token = req?.nextUrl?.searchParams?.get("token");
	if (!token) return new Response(null, { status: 400 });

	const contactFormData = new FormData();
	const ip = req?.ip;

	contactFormData.append("secret", process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY as string);
	contactFormData.append("response", token);
	contactFormData.append("remoteip", ip);

	const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
		method: "POST",
		body: contactFormData,
	});

	const cfResponse = await result.json();
	if (!cfResponse) return new Response(null, { status: 400 });

	const id = generateUUID();
	solves.push(id);

	return new Response(null, {
		status: 200,
		headers: {
			"set-cookie": "Captch=" + id,
		},
	});
}

export async function POST(req: NextRequest) {
	const { fullname, email, subject, message } = await req.json();

	if (!solves.includes(req?.cookies?.get("Captch")?.value || "")) {
		return NextResponse.json({ message: "Nepodařilo se ověřit, že jsi člověk. Zkus to znova!", success: false }, { status: 400 });
	}

	if (!fullname) {
		return NextResponse.json({ message: "Vaše jméno je povinné pole", success: false }, { status: 400 });
	} else if (fullname < 5) {
		return NextResponse.json({ message: "Vaše jméno musí mít alespoň 5 znaků", success: false }, { status: 400 });
	} else if (fullname > 50) {
		return NextResponse.json({ message: "Vaše jméno nemůže mít nad 50 znaků", success: false }, { status: 400 });
	}

	if (!email) {
		return NextResponse.json({ message: "E-Mail je povinné vyplnit", success: false }, { status: 400 });
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return NextResponse.json({ message: "Prosím zadejte validní e-mail", success: false }, { status: 400 });
	}

	if (!subject) {
		return NextResponse.json({ message: "Typ webu je povinný údaj", success: false }, { status: 400 });
	} else if (subject.length < 5) {
		return NextResponse.json({ message: "Typ webu musí mít alespoň 5 znaků", success: false }, { status: 400 });
	} else if (subject.length > 50) {
		return NextResponse.json({ message: "Typ webu nesmí mít víc než 50 znaků", success: false }, { status: 400 });
	}

	if (!message) {
		return NextResponse.json({ message: "Obsah zprávy je povinné pole", success: false }, { status: 400 });
	} else if (message.length < 10) {
		return NextResponse.json({ message: "Obsah zprávy musí mít minimálně 10 znaků", success: false }, { status: 400 });
	} else if (message.length > 500) {
		return NextResponse.json({ message: "Obsah zprávy nesmí mít víc než 500 znaků", success: false }, { status: 400 });
	}

	const isEmailValid = await checkIfEmailIsValid(email);
	if (!isEmailValid) {
		return NextResponse.json({ message: "Tato e-mailová adresa neexistuje", success: false }, { status: 400 });
	}

	if (blacklistedMails.includes(email.split("@")[1])) {
		return NextResponse.json({ message: "Dočasné e-mailové adresy nejsou povoleny", success: false }, { status: 400 });
	}

	if (email === "kontakt@phillippilgrim.xyz") {
		return NextResponse.json({ message: "Nelze použít tuto e-mailovou adresu", success: false }, { status: 400 });
	}

	const transporter = createTransport({
		host: "smtp.seznam.cz",
		port: 465,
		auth: {
			user: process.env.EMAIL_USER_NAME,
			pass: process.env.EMAIL_USER_PASS,
		},
	});

	try {
		await transporter.sendMail({
			from: `${fullname} <${process.env.EMAIL_USER_NAME}>`,
			to: EMAIL,
			subject: subject,
			html: `<body style="margin: 0; padding: 0;">
  <div style="max-width: 600px; margin: 20px auto; background-color: #111111;">
    <!-- Header Section -->
    <div style="display: flex; align-items: center; padding: 20px; background-color: #1d1e22; border-radius: 10px;">
      <div style="margin-right: 40px;">
        <img src="cid:logo" alt="logo" style="width: 90px; height: 90px;">
      </div>
      <div>
        
        <h1 style="font-size: 40px; color: #FBFBFB; margin: 0; font-weight: bold;">Nová objednávka</h1>
      </div>
    </div>
    
    <!-- Content Section -->
    <div style="padding: 15px;">
      <p style="font-size: 15px; font-weight: 300; margin: 5px 0 20px;">
        Přišla nová objednávka na stránku. Vyřídit, co nejdříve a odpovědět.
      </p>
      
      <!-- Objednávka Section -->
      <div style="padding: 10px; margin-bottom: 15px;">
        <h2 style="font-size: 20px; font-weight: bold; margin: 0 0 10px;">Objednávka:</h2>
        
        <!-- Box for Full Name, E-Mail, and Subject -->
        <div style="padding: 10px; border: 1px solid #ccc; margin-bottom: 10px;">
          <p style="font-size: 15px; margin: 5px 0;">Full name: ${fullname}</p>
          <p style="font-size: 15px; margin: 5px 0;">E-Mail: ${email}</p>
          <p style="font-size: 15px; margin: 5px 0;">Subject: ${subject}</p>
        </div>
        
        <!-- Box for Message -->
        <div style="padding: 10px; border: 1px solid #ccc;">
          <p style="font-size: 15px; margin: 0;">Message: ${message}</p>
        </div>
      </div>
    </div>
  </div>
</body>

  `,
  attachments: [
	{
		filename: "Logo-White.png",
		path: `${process.cwd()}/public/assets/Logo-White.png`,
		cid: "logo",
	},
],
		});

		return NextResponse.json({ message: "Vaše zpráva byla úspěsně poslána!", success: true }, { status: 200 });
	} catch (err) {
		console.log("Vyskytl se problém při odesílání e-mailu | Route: /api/submitContact");
		console.error(err);

		return NextResponse.json({ message: "Vyskytla se chyba při vyplnění formuláře", success: false }, { status: 500 });
	}
}
