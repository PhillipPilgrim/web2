"use client";

import Image from "next/image";
import { Github, Instagram, Briefcase, Discord } from "@deemlol/next-icons";
import { motion } from "framer-motion";

export default function AboutMe() {
	return (
		<div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
			<div className="max-w-4xl p-8 md:flex md:items-center md:space-x-8">
				<motion.div 
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 1.4 }}
				className="flex justify-center md:w-1/3">
					<Image
						src="/assets/filip-musalek.jpeg"
						alt="Filip Musálek"
						width={300}
						height={300}
						className="rounded-bl-2xl rounded-tr-2xl border-4 border-zinc-500 shadow-md"
					/>
				</motion.div>
				<motion.div 
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="md:w-2/3">
					<div className="text-sm font-semibold uppercase tracking-wide text-zinc-400">O mně</div>
					<h1 className="mt-2 text-4xl font-extrabold text-zinc-300">Filip Musálek</h1>
					<p className="mt-4 text-md text-zinc-400">
						Tvořím inovativní, výkonné a vizuálně poutavé digitální vizitky, které osloví a zaujmou. Specializuji se na bezproblémové UI/UX, moderní
						technologie a vytváření efektivních online řešení, která přinášejí výsledky mým klientům v oblasti profesionálních webových stránek.
					</p>
					<p className="mt-4 text-md text-zinc-400">
						Kódování je pro mě i hlavní práce, proto mám mnohem více času na veškeré projekty, které s klienty realizuji. Věnuji se jim svůj plný
						čas a snažím se proto s klienty vytvořit co nejlepší výsledek.
					</p>
					<motion.div 
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-6 space-y-4">
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
						<motion.h2 
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="text-2xl font-bold text-zinc-300">Jazyky</motion.h2>
						<div className="mt-3 flex flex-wrap gap-2">
							{["JavaScript", "React", "TailwindCSS", "TypeScript", "Node.js", "Tailwind CSS", "NPM", "Git", "VS-Code", "CSS3", "HTML5"].map(
								(skill, i) => (
									<motion.span
										key={skill}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ duration: 1, delay: 1 + i * 0.2 }}
										className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
									>
										{skill}
									</motion.span>
								),
							)}
						</div>
					</motion.div>
				</motion.div>
			</div>
		</div>
	);
}
