import type { Metadata, Viewport } from "next";
import "../../public/styles/globals.css";
import Navbar from "../components/NavigationBar";
import AnimatedGridPattern from "../components/animated-grid-pattern";
import { cn } from "@/src/lib/utils";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
import { AnimatePresence } from "framer-motion";

const switzerbold = localFont({
	src: "../../public/assets/fonts/Switzer-Bold.otf",
	variable: "--font-switzer-bold",
});

const switzerregular = localFont({
	src: "../../public/assets/fonts/Switzer-Regular.otf",
	variable: "--font-switzer-regular",
});

const switzersemibold = localFont({
	src: "../../public/assets/fonts/Switzer-Semibold.otf",
	variable: "--font-switzer-semibold",
});

const switzermedium = localFont({
	src: "../../public/assets/fonts/Switzer-Medium.otf",
	variable: "--font-switzer-medium",
});

export const metadata: Metadata = {
	title: "Phillip Pilgrim",
	description: "Website developer and designer",
};

export const viewport: Viewport = {
	initialScale: 1,
	minimumScale: 1,
	width: "device-width",
	themeColor: "#ffffff",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<meta property="og:title" content="Phillip Pilgrim Web" />
			<meta property="og:description" content="Front-End Developer Phillip Pilgrim" />
			<meta property="og:image" content="https://i.ibb.co/DPrJPD46/filip-musalek-transformed.jpg" />
			<meta property="og:image:secure_url" content="https://i.ibb.co/DPrJPD46/filip-musalek-transformed.jpg" />
			<meta property="og:url" content="https://phillippilgrim.xyz" />
			<meta property="og:type" content="website" />
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			<meta name="slurp" content="index, follow" />
			<meta name="naver" content="index, follow" />
			<meta name="yandex" content="index, follow" />
			<meta name="robots" content="index, follow" />
			<meta name="bingbot" content="index, follow" />
			<meta name="googlebot" content="index, follow" />
			<meta name="twitterbot" content="index, follow" />
			<meta name="twitterbot" content="index, follow" />
			<meta name="duckduckbot" content="index, follow" />
			<meta name="baiduspider" content="index, follow" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta name="facebookexternalhit" content="index, follow" />
			<head>
				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-38D7H1GSST" id="google-stats"></Script>

				<Script
					id="google-stats-script"
					dangerouslySetInnerHTML={{
						__html: `
	 window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-38D7H1GSST');
  `,
					}}
				/>
			</head>
			<body
				className={`${switzerbold.variable} ${switzersemibold.variable} ${switzerregular.variable} ${switzermedium.variable} bg-[#1b1b1b] font-sans text-white antialiased`}
			>
				<div className="relative flex-grow overflow-hidden">
					<AnimatedGridPattern
						numSquares={30}
						maxOpacity={0.1}
						duration={3}
						repeatDelay={1}
						className={cn("absolute inset-0 skew-y-12 opacity-30 [mask-image:radial-gradient(500px_circle_at_center,white,transparent)]")}
					/>
					<div className="relative z-50">
						<NextTopLoader color="#D1D1D1" showSpinner={false} />
						<main>
							<Navbar />
							<AnimatePresence mode="wait">{children}</AnimatePresence>
						</main>
					</div>
				</div>
			</body>
		</html>
	);
}
