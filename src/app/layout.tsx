import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../public/styles/globals.css";
import Navbar from "../components/Navbar";
import AnimatedGridPattern from "../components/animated-grid-pattern";
import cn from "@/lib/utils";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import Script from "next/script";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

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
				<Navbar />
				<div className="relative flex-grow overflow-hidden">
					<AnimatedGridPattern
						numSquares={30}
						maxOpacity={0.1}
						duration={3}
						repeatDelay={1}
						className={cn("absolute inset-16 opacity-30 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]")}
					/>
					<div className="relative z-50">
						<NextTopLoader color="#D1D1D1" showSpinner={false} />
						<main>{children}</main>
					</div>
				</div>
			</body>
		</html>
	);
}
