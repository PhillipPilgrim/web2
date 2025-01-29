"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Briefcase, Discord } from "@deemlol/next-icons";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div>
			{/* Main Content */}
			<main className="mx-auto max-w-7xl pt-32">
				<div className="mx-auto max-w-2xl font-[family-name:var(--font-switzer-regular)]">
					<motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-8 text-center">
						<div className="space-y-2">
							<p className="text-2xl text-zinc-500">Zdravím, já jsem</p>
							<h1 className="font-[family-name:var(--font-switzer-semibold)] text-4xl tracking-tight sm:text-5xl lg:text-6xl">Filip Musálek</h1>
							<Image
								src="/assets/filip.png"
								alt="Filip Musálek"
								width={200}
								height={200}
								className="mx-auto rounded-3xl border-2 border-zinc-500 shadow-[0_0_10px_rgba(16,185,129,0.1)] shadow-zinc-500"
							/>
							<p className="text-2xl font-light text-zinc-200">Front-end Developer</p>
						</div>

						<p className="text-lg text-zinc-500">
							S vášní pro čistý kód a inovativní technologie se specializuji na tvorbu rychlých, responzivních a esteticky dokonalých webů. Mým
							cílem je proměnit vaše nápady v digitální zážitek, který zaujme a funguje na všech úrovních.
						</p>

						<div className="flex flex-wrap items-center justify-center gap-4">
							<Link
								href="#contact"
								className="rounded-lg bg-zinc-800 px-6 py-3 font-medium text-white transition-opacity hover:bg-zinc-900 hover:opacity-90"
							>
								Kontaktuj mě
							</Link>
							<Link href="#projects" className="rounded-lg bg-zinc-600 px-6 py-3 font-medium transition-colors hover:bg-zinc-800">
								Moje práce
							</Link>
						</div>

						<div className="flex items-center justify-center space-x-6 pb-12 pt-4">
							<Link href="https://github.com/PhillipPilgrim" target="_blank" className="text-zinc-400 transition-colors hover:text-zinc-300">
								<Github size={35}>GitHub</Github>
							</Link>
							<Link
								href="https://www.instagram.com/filipmusalek/"
								target="_blank"
								className="text-zinc-400 transition-colors hover:text-zinc-300"
							>
								<Instagram size={35}>Instagram</Instagram>
							</Link>
							<Link href="https://www.flusbe.org/" target="_blank" className="text-zinc-400 transition-colors hover:text-zinc-300">
								<Briefcase size={35}>Organizace</Briefcase>
							</Link>
							<Link
								href="https://discord.com/users/257475725068599296"
								target="_blank"
								className="text-zinc-400 transition-colors hover:text-zinc-300"
							>
								<Discord size={35}>Discord</Discord>
							</Link>
						</div>
						
					</motion.div>
				</div>
			</main>
		</div>
	);
}
