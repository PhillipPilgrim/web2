"use client";

import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";
import { Navigation, Mail } from "@deemlol/next-icons";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface ContactFormData {
	fullname: string;
	email: string;
	subject: string;
	message: string;
}

interface ContactFormErrors {
	fullname?: string;
	email?: string;
	subject?: string;
	message?: string;
}

interface InputFieldProps {
	name: string;
	label: string;
	value: string;
	error?: string;
	textarea?: boolean;
	placeholder?: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function Contact() {
	const initialContactFormState: ContactFormData = { fullname: "", email: "", subject: "", message: "" };

	const [contactFormData, setContactFormData] = useState(initialContactFormState);
	const [errors, setErrors] = useState<ContactFormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const turnstileRef = useRef<TurnstileInstance>(null);
	const [canSubmit, setCanSubmit] = useState(true);

	const handleCloudFlareChallenge = async (token: string) => {
		const response = await fetch(`/api/submitContact?token=${token}`);

		setCanSubmit(response?.ok ? true : false);
	};

	function handleContactFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const { name, value } = e?.target;
		const newErrors = { ...errors };

		delete newErrors[e?.target?.name as keyof typeof newErrors];

		setErrors(prev => ({ ...prev, [name]: undefined }));
		setContactFormData(prev => ({ ...prev, [name]: value }));
	}

	const validateContactForm = (): ContactFormErrors => {
		const newErrors: ContactFormErrors = {};

		if (!contactFormData.fullname.trim()) {
			newErrors.fullname = "Vaše jméno je povinné pole";
		} else if (contactFormData.fullname.length < 5) {
			newErrors.fullname = "Vaše jméno musí mít alespoň 5 znaků";
		} else if (contactFormData.fullname.length > 50) {
			newErrors.fullname = "Vaše jméno nemůže mít nad 50 znaků";
		}

		if (!contactFormData.email.trim()) {
			newErrors.email = "E-Mail je povinné vyplnit";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactFormData.email)) {
			newErrors.email = "Prosím zadejte validní e-mail";
		}

		if (!contactFormData.subject.trim()) {
			newErrors.subject = "Typ webu je povinný údaj";
		} else if (contactFormData.subject.length < 5) {
			newErrors.subject = "Typ webu musí mít alespoň 5 znaků";
		} else if (contactFormData.subject.length > 50) {
			newErrors.subject = "Typ webu nesmí mít víc než 50 znaků";
		}

		if (!contactFormData.message.trim()) {
			newErrors.message = "Obsah zprávy je povinné pole";
		} else if (contactFormData.message.length < 10) {
			newErrors.message = "Obsah zprávy musí mít minimálně 10 znaků";
		} else if (contactFormData.message.length > 500) {
			newErrors.message = "Obsah zprávy nesmí mít víc než 500 znaků";
		}

		return newErrors;
	};

	async function handleContactFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		const newErrors = validateContactForm();

		e.preventDefault();
		e.stopPropagation();

		setErrors(newErrors);

		try {
			if (Object.keys(newErrors).length == 0) {
				setIsSubmitting(true);

				const contactApiResponse = await fetch("/api/submitContact", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(contactFormData),
				});

				setIsSubmitting(false);

				if (contactApiResponse?.ok) {
					setContactFormData(initialContactFormState);
					setCanSubmit(false);

					turnstileRef.current?.reset();

					return toast.success("Vaše zpráva byla úspěsně poslána!", {
						duration: 5_000,
					});
				} else {
					const errData = await contactApiResponse.json();

					return toast.error(errData.message, {
						duration: 5_000,
					});
				}
			}
		} catch (err) {
			setIsSubmitting(false);

			console.log("Vyskytla se chyba při vyplnění formuláře | Route: /contact/page.tsx");
			console.error(err);
		}
	}

	return (
		<div className="flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-14">
			<div className="max-w-2xl">
                <Mail size={50} className="mx-auto" />
				<motion.h1
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="mb-0 font-[family-name:var(--font-switzer-semibold)] text-6xl text-center text-white lg:mb-4"
				>
					Kontaktuj mě
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="text-center text-gray-300"
				>
					Máš nějaký projekt, co bys chtěl rozjet? Neváhej a kontaktuj mě.
				</motion.p>
                <motion.p
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="text-center text-sm text-gray-300"
				>
					Veškeré domluvy jsou nezávazné a zdarma.
				</motion.p>
			</div>

			<form className="grid gap-2 pt-10 w-full max-w-xl" onSubmit={handleContactFormSubmit}>
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
					<InputField
						label="Vaše jméno"
						name="fullname"
						value={contactFormData?.fullname}
						onChange={e => handleContactFormChange(e)}
						error={errors?.fullname}
						placeholder="Vaše jméno a příjmení"
					/>
					<InputField
						label="E-mail"
						name="email"
						value={contactFormData?.email}
						onChange={e => handleContactFormChange(e)}
						error={errors?.email}
						placeholder="text@email.xyz"
					/>
				</div>
				<InputField
					label="Typ webu"
					name="subject"
					value={contactFormData?.subject}
					onChange={e => handleContactFormChange(e)}
					error={errors?.subject}
					placeholder="Stránka pro kadeřnictví"
				/>
				<InputField
					label="Obsah zprávy"
					name="message"
					value={contactFormData?.message}
					onChange={e => handleContactFormChange(e)}
					error={errors?.message}
					placeholder="Popis vašeho nápadu na web ve zkratce (Zbytek s vámi prokonzultuji)"
					textarea={true}
				/>

				<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="flex justify-center">
					<Turnstile
						siteKey="0x4AAAAAAA2I0F0Qzre3SdcV"
						id="Filda-Portfolio"
						ref={turnstileRef}
						options={{
							theme: "dark",
							language: "en",
							size: "normal",
						}}
						onError={() => setCanSubmit(false)}
						onExpire={() => turnstileRef.current?.reset()}
						onSuccess={handleCloudFlareChallenge}
						className="mb-4 lg:mb-2"
					/>
				</motion.div>

				<motion.button
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					type="submit"
					disabled={isSubmitting || !canSubmit}
				>
					<div className="flex w-80 cursor-pointer items-center justify-center rounded-lg bg-zinc-800/70 px-2 py-1.5 mx-auto text-lg text-white">
						{isSubmitting ? (
							<div className="flex h-7 w-7 items-center justify-center rounded-full border-r-2 border-t-2 border-gray-500"></div>
						) : (
							<span className="flex items-center justify-center">
								<Navigation className="mr-2 h-5 w-5" aria-hidden="true" />
								Poslat zprávu
							</span>
						)}
					</div>
				</motion.button>
			</form>
		</div>
	);
}

function InputField({ label, name, value, onChange, error, placeholder, textarea = false }: InputFieldProps) {
	const InputComponent = textarea ? "textarea" : "input";

	return (
		<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
			<label htmlFor={name} className="mb-1.5 block text-base text-white">
				{label} <span className="text-red-500">*</span>
			</label>

			<InputComponent
				id={name}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className={`mb-2 block w-full rounded-lg border bg-[#151515] p-2 text-sm text-white outline-none placeholder:text-gray-400 ${error ? "border-red-500" : "border-white/30"}`}
				rows={textarea ? 4 : undefined}
				autoComplete="off"
			/>

			{error && <p className="mt-1 text-xs text-red-500">{error}</p>}
		</motion.div>
	);
}
