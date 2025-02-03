"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Instagram, Briefcase, Discord } from "@deemlol/next-icons";
import { motion, } from "framer-motion";
import { AnimatedTitle } from "@/src/components/ui/AnimatedTitle";

export default function Home() {
	const staggerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: 1 + i * 0.3 },
		}),
	};

	const links = [
		{
			href: "https://github.com/PhillipPilgrim",
			icon: <Github className="text-zinc-400 transition-colors hover:text-orange-400" size={35} />,
			label: "GitHub",
		},
		{
			href: "https://www.instagram.com/filipmusalek/",
			icon: <Instagram className="text-zinc-400 transition-colors hover:text-[#fec102]" size={35} />,
			label: "Instagram",
		},
		{ href: "https://www.flusbe.org/", icon: <Briefcase className="text-zinc-400 transition-colors hover:text-red-600" size={35} />, label: "Organizace" },
		{
			href: "https://discord.com/users/257475725068599296",
			icon: <Discord className="text-zinc-400 transition-colors hover:text-[#5662f6]" size={35} />,
			label: "Discord",
		},
	];

	return (
		<motion.div>
			{/* Main Content */}
			<main className="mx-auto max-w-7xl px-6">
				<div className="relative min-h-screen pt-24 font-[family-name:var(--font-switzer-regular)] md:pt-52">
					<div className="flex flex-col justify-center gap-12 md:gap-36 text-start md:flex-row">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.4 }}
							className="max-w-3xl space-y-8"
						>
							<div className="space-y-2">
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
										href="/contact"
										className="rounded-lg border-2 border-zinc-600 bg-zinc-900/50 px-4 py-2 font-medium text-white transition-opacity hover:bg-zinc-800/50 hover:opacity-90"
									>
										Kontaktuj mě
									</Link>
									<Link
										href="/projects"
										className="rounded-lg border-2 border-zinc-600 bg-zinc-900/50 px-4 py-2 font-medium transition-colors hover:bg-zinc-800/50"
									>
										Moje práce
									</Link>
								</div>
							</motion.div>

							<motion.div initial="hidden" animate="visible" className="flex items-center justify-start space-x-6 pb-0 pt-4 md:pb-12">
								{links.map((link, index) => (
									<motion.div key={link.label} variants={staggerVariants} custom={index}>
										<Link href={link.href} rel="noopener noreferrer" target="_blank">
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
								width={300}
								height={500}
								className="mx-auto rounded-bl-3xl rounded-tr-3xl shadow-lg shadow-zinc-800"
							/>
							<Image src="/assets/Logo-White.png" alt="Filip Musálek" width={60} height={60} className="mx-auto -translate-y-6" />
						</motion.div>
					</div>
				</div>
			</main>
		</motion.div>
	);
}
