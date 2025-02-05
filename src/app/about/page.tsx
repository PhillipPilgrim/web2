"use client";

import { Github, Instagram, Briefcase, Discord, Mail, Phone } from "@deemlol/next-icons";
import { EMAIL, CISLO } from "@/src/app/utils/constants";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { AnimatedLanguage } from "@/src/components/ui/AnimatedLanguage";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function AboutMe() {
	const [show, setShow] = useState(true);
	const router = useRouter();

	const handleNavigation = (url: string) => {
		// Trigger exit animation
		setShow(false);

		// Delay navigation until animation completes
		setTimeout(() => {
			router.push(url); // Navigate to the target URL
		}, 500); // Match this duration to the exit animation duration
	};

	return (
		<AnimatePresence mode="wait">
			{" "}
			{show && (
				<div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
					<div className="flex max-w-4xl flex-col items-center space-x-8 p-8 md:flex-row">
						<div className="flex flex-col">
							<motion.div
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.5, delay: 1 }}
								className="flex flex-col justify-center"
							>
								<Image
									src="/assets/filip-musalek.jpeg"
									alt="Filip Musálek"
									width={300}
									height={500}
									className="rounded-bl-2xl rounded-tr-2xl border-2 border-zinc-900 shadow-md"
								/>
								<Image src="/assets/Logo-White.png" alt="Filip Musálek" width={70} height={70} className="mx-auto -translate-y-8" />
							</motion.div>

							<motion.div
								className="mt-10"
								initial={{ opacity: 0, x: -50 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -50 }}
								transition={{ duration: 0.5, delay: 1 }}
							>
								<ul className="flex flex-col space-x-4 space-y-6">
									<li className="flex items-center">
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/50">
											<Mail size={25} className="text-white" />
										</div>

										<Link href={`mailto:${EMAIL}`} className="ml-4 text-white">
											<small className="block text-gray-300">Email:</small>
											{EMAIL}
										</Link>
									</li>
									<li className="flex items-center pb-7">
										<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-800/50">
											<Phone size={25} className="text-white" />
										</div>

										<Link href={`tel:${CISLO}`} className="ml-4 text-white">
											<small className="block text-gray-300">Telefon:</small>
											{CISLO}
										</Link>
									</li>
								</ul>
							</motion.div>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, x: -20 }}
							transition={{ duration: 0.5 }}
							className="md:w-2/3"
						>
							<div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">O mně</div>
							<h1 className="mt-2 text-4xl font-extrabold text-zinc-300">Filip Musálek</h1>
							<p className="text-md mt-4 text-zinc-400">
								Tvořím inovativní, výkonné a vizuálně poutavé digitální vizitky, které nejen osloví, ale i zaujmou na první pohled. Specializuji
								se na špičkové UI/UX, moderní technologie a chytrá online řešení, která skutečně přinášejí výsledky.
							</p>
							<p className="text-md mt-4 text-zinc-400">
								Kódování je nejen mou vášní, ale i hlavní prací, což mi umožňuje věnovat se každému projektu naplno. Klientům poskytuji
								maximální péči a společně tvoříme weby, které nejen skvěle vypadají, ale také efektivně fungují a pomáhají růst jejich byznysu.
							</p>
							<motion.div
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -20 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								className="mt-6 space-y-4"
							>
								<div className="flex items-center text-zinc-300">
									<a href="https://www.flusbe.org/" className="flex flex-row">
										<Briefcase className="mr-2 h-8 w-8 cursor-pointer text-red-600 hover:scale-125" />
										<span>Front-End Developer and UI/UX Designer at Flusbe.org</span>
									</a>
								</div>
								<div className="flex items-center text-zinc-300">
									<a href="https://www.instagram.com/filipmusalek/" className="flex flex-row">
										<Instagram className="mr-2 h-8 w-8 cursor-pointer text-[#fec102] hover:scale-125" />
										<span>Instagram, kde je také možné mi napsat</span>
									</a>
								</div>
								<div className="flex items-center text-zinc-300">
									<a href="https://github.com/PhillipPilgrim" className="flex flex-row">
										<Github className="mr-2 h-8 w-8 cursor-pointer text-orange-400 hover:scale-125" />
										<span>Phillip Pilgrim - Github Profile</span>
									</a>
								</div>
								<div className="flex items-center text-zinc-300">
									<a href="https://discord.com/users/257475725068599296" className="flex flex-row">
										<Discord className="mr-2 h-8 w-8 cursor-pointer text-[#5662f6] hover:scale-125" />
										<span>Phillip Pilgrim</span>
									</a>
								</div>
							</motion.div>

							<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mt-8">
								<motion.div
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
									transition={{ duration: 0.5, delay: 1 }}
								>
									<AnimatedLanguage />
								</motion.div>
								<div className="mt-3 flex flex-wrap gap-2">
									{[
										"JavaScript",
										"React",
										"TailwindCSS",
										"TypeScript",
										"Node.js",
										"Tailwind CSS",
										"NPM",
										"Git",
										"VS-Code",
										"CSS3",
										"HTML5",
									].map((skill, i) => (
										<motion.span
											key={skill}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											exit={{ opacity: 0, x: -20 }}
											transition={{ duration: 1, delay: 1.4 + i * 0.2 }}
											className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
										>
											{skill}
										</motion.span>
									))}
								</div>
							</motion.div>
						</motion.div>
					</div>
				</div>
			)}
		</AnimatePresence>
	);
}
