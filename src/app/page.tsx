"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { BiLogoVisualStudio } from "react-icons/bi";
import { TbBrandCss3 } from "react-icons/tb";
import { Github, Instagram, Briefcase, Discord, TypeScript, JavaScript, HTML5, TailwindCSS, ReactJS, NodeJs, NPMJs, ChevronDown2 } from "@deemlol/next-icons";
import { motion, useInView } from "framer-motion";
import { PricingCard } from "@/src/components/ui/dark-gradient-pricing";
import {AnimatedTitle} from "@/src/components/ui/AnimatedTitle";

export default function Home() {
	const iconsRef = useRef<HTMLDivElement>(null);

	const scrollToIcons = () => {
		iconsRef.current?.scrollIntoView({ behavior: "smooth" });
	};

	const iconVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: i * 0.2 }, // Staggered effect
		}),
	};

	const staggerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: 1 + i * 0.3 },
		}),
	};

	const links = [
		{ href: "https://github.com/PhillipPilgrim", icon: <Github className="text-zinc-400 hover:text-orange-400" size={35} />, label: "GitHub" },
		{ href: "https://www.instagram.com/filipmusalek/", icon: <Instagram className="text-zinc-400 hover:text-[#fec102]" size={35} />, label: "Instagram" },
		{ href: "https://www.flusbe.org/", icon: <Briefcase className="text-zinc-400 hover:text-purple-400" size={35} />, label: "Organizace" },
		{ href: "https://discord.com/users/257475725068599296", icon: <Discord className="text-zinc-400 hover:text-[#5662f6]" size={35} />, label: "Discord" },
	];

	const icons = [
		{ component: <JavaScript className="mx-auto h-16 w-16 text-yellow-300" />, name: "JavaScript" },
		{ component: <TypeScript className="mx-auto h-16 w-16 text-cyan-600" />, name: "TypeScript" },
		{ component: <HTML5 className="mx-auto h-16 w-16 text-orange-400" />, name: "HTML5" },
		{ component: <TailwindCSS className="mx-auto h-16 w-16 text-blue-400" />, name: "TailwindCSS" },
		{ component: <ReactJS className="mx-auto h-16 w-16 text-cyan-300" />, name: "ReactJS" },
		{ component: <TbBrandCss3 className="mx-auto h-16 w-16 text-blue-300" />, name: "CSS3" },
		{ component: <NPMJs className="mx-auto h-16 w-16 text-red-500" />, name: "NPM" },
		{ component: <Github className="mx-auto h-16 w-16 text-orange-600" />, name: "GitHub" },
		{ component: <BiLogoVisualStudio className="mx-auto h-16 w-16 text-blue-500" />, name: "VS Code" },
		{ component: <NodeJs className="mx-auto h-16 w-16 text-green-400" />, name: "NodeJS" },
	];
	return (
		<div>
			{/* Main Content */}
			<main className="mx-auto max-w-7xl px-6 pb-44">
				<div className="relative min-h-screen max-w-7xl pt-24 font-[family-name:var(--font-switzer-regular)] md:pt-52">
					<div className="flex flex-col justify-center gap-36 text-start md:flex-row">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}
							className="max-w-2xl space-y-8"
						>
							<div className="space-y-2">
								<p className="text-xl text-zinc-500">Zdravím, já jsem</p>
								<AnimatedTitle />

								<p className="text-2xl font-light text-zinc-500">Front-end Developer</p>
							</div>
							<motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
								<p className="text-lg text-zinc-400">
									S vášní pro čistý kód a inovativní technologie se specializuji na tvorbu rychlých, responzivních a esteticky lákavých webů.
									Mým cílem je proměnit vaše nápady v digitální zážitek, který zaujme a funguje na všech úrovních.
								</p>

								<div className="flex flex-wrap items-center justify-start gap-4 pt-4">
									<Link
										href="#contact"
										className="rounded-lg border-2 border-zinc-600 bg-zinc-900/50 px-4 py-2 font-medium text-white transition-opacity hover:bg-zinc-800/50 hover:opacity-90"
									>
										Kontaktuj mě
									</Link>
									<Link
										href="#projects"
										className="rounded-lg border-2 border-zinc-600 bg-zinc-900/50 px-4 py-2 font-medium transition-colors hover:bg-zinc-800/50"
									>
										Moje práce
									</Link>
								</div>
							</motion.div>

							<motion.div initial="hidden" animate="visible" className="flex items-center justify-start space-x-6 pb-0 pt-4 md:pb-12">
								{links.map((link, index) => (
									<motion.div key={link.label} variants={staggerVariants} custom={index}>
										<Link href={link.href} rel="noopener noreferrer" className="text-zinc-400 transition-colors hover:text-zinc-300">
											{link.icon}
										</Link>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
						<motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1 }}>
							<Image
								src="/assets/filip-musalek.jpeg"
								alt="Filip Musálek"
								width={200}
								height={400}
								className="mx-auto h-80 w-64 rounded-3xl shadow-lg shadow-zinc-800"
							/>
						</motion.div>
					</div>
					<motion.button
						onClick={scrollToIcons}
						className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 cursor-pointer text-zinc-400 transition-colors hover:text-zinc-300 md:block"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
					>
						<ChevronDown2 className="bg-zinc-900 rounded-full" size={40} />
					</motion.button>
				</div>

				<div>
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						viewport={{ once: true, amount: 0.2 }}
						whileInView="visible"
					>
						<p ref={iconsRef} className="pt-24 text-center font-[family-name:var(--font-switzer-semibold)] text-4xl text-zinc-300 md:pt-12">
							Kódovací jazyky
						</p>
						<p className="text-md mt-2 text-center font-[family-name:var(--font-switzer-regular)] text-zinc-500">
							Jazyky, které používám ke kódování k dosažení nejlepšího výsledku pro klienta i vůči přehlednosti v kódu.
						</p>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							className="mx-auto mt-24 grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-5"
						>
							{icons.map((icon, index) => (
								<motion.div key={icon.name} variants={iconVariants} custom={index}>
									{icon.component}
									<p className="mt-4 text-center">{icon.name}</p>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>
				<section>
					<div className="relative mx-auto max-w-2xl px-4 pt-24 md:px-8">
						<motion.div 
						initial={{ opacity: 0, y: -50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.2 }}
						transition={{ duration: 0.5, delay: 0.5 }}
						className="mb-12 space-y-3">
							<h2 className="text-center font-[family-name:var(--font-switzer-semibold)] text-2xl sm:text-3xl md:text-4xl">Cenová nabídka</h2>
							<p className="font-regular text-center text-zinc-400 md:text-lg">
								Vyberte si z předem připravené cenové nabídky nebo mě kontaktujte pro projednání individuální nabídky.
							</p>
						</motion.div>
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: false, amount: 0.2 }}
								initial={{ opacity: 0, x: -50 }}
								transition={{ duration: 0.5, delay: 0.6 }}
							>
								<PricingCard
									tier="Základní"
									price="14 999 Kč"
									bestFor="Vhodné pro jednoduché weby"
									CTA="Objednat"
									benefits={[
										{ text: "Jedna stránka", checked: true },
										{ text: "Základní animace", checked: true },
										{ text: "1 revize webu", checked: true },
										{ text: "Plán lze kdykoliv pozastavit", checked: true },
										{ text: "Podpora webu", checked: true },
										{ text: "SEO", checked: true },
									]}
								/>
							</motion.div>
							<motion.div
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: false, amount: 0.2 }}
								initial={{ opacity: 0, x: 50 }}
								transition={{ duration: 0.5, delay: 0.6 }}
							>
								<PricingCard
									tier="Pokročilý"
									price="34 999 Kč"
									bestFor="Nejlepší pro komplexní weby"
									CTA="Objednat"
									benefits={[
										{ text: "2+ Stránek", checked: true },
										{ text: "Složitější funkce (Fórum, Prodej, apod...)", checked: true },
										{ text: "Komplexní animace", checked: true },
										{ text: "5 revizí webu", checked: true },
										{ text: "Prioritní podpora", checked: true },
										{ text: "Vše ze základního balíčku", checked: true },
									]}
								/>
							</motion.div>
						</div>
						<motion.div 
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.2 }}
						transition={{ duration: 0.5, delay: 0.5 }} >
						<p className="text-sm pt-4 text-red-700">Veškeré objednávky s vámi ještě budou projednány pro zjištění veškerých bližších informací</p>
						</motion.div>

					</div>
				</section>
			</main>
		</div>
	);
}
