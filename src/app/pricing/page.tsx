"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "@deemlol/next-icons";

export default function Pricing() {
	return (
		<section>
			<div className="relative mx-auto max-w-2xl px-4 pt-24 md:px-8">
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.2 }}
					transition={{ duration: 0.5 }}
					className="mb-12 space-y-3"
				>
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
						<div className="mb-4 flex flex-col space-y-3 bg-gradient-to-br rounded-xl border border-zinc-400 from-zinc-900/70 to-zinc-700/40 p-6 shadow-lg hover:scale-105 transition-all">
							<h1 className="flex justify-center font-[family-name:var(--font-switzer-semibold)] text-4xl text-zinc-200">Základní</h1>
							<p className="flex justify-center font-[family-name:var(--font-switzer-regular)] text-2xl text-zinc-300">13 499 Kč</p>
							<p className="flex justify-center text-zinc-500">Vhodné pro menší stránky</p>
							<div className="border-b border-white"></div>
							<ul className="text-md flex flex-col items-start justify-start space-y-2 text-zinc-300">
								<li className="flex flex-row">
									<CheckCircle size={20} color="#FFFFFF" className="mr-2" />1 stránka
								</li>
								<li className="flex flex-row">
									<CheckCircle size={20} color="#FFFFFF" className="mr-2" />
									SEO optimalizace
								</li>
								<li className="flex flex-row">
									<CheckCircle size={20} color="#FFFFFF" className="mr-2" />1 revize webu
								</li>
								<li className="flex flex-row">
									<CheckCircle size={20} color="#FFFFFF" className="mr-2" />
									Jednoduché animace
								</li>
								<li className="flex flex-row">
									<CheckCircle size={20} color="#FFFFFF" className="mr-2" />
									Plán lze kdykoliv pozastavit
								</li>
							</ul>
							<div className="border-b border-white"></div>

							<a
								className="mx-auto rounded-lg border border-zinc-400 bg-zinc-900/70 px-4 py-1 text-center text-white transition-all hover:scale-110 hover:border-zinc-300 hover:bg-zinc-800/70"
								href="/contact"
								rel="noopener noreferrer"
								target="_blank"
							>
								Objednat
							</a>
						</div>
					</motion.div>
					<motion.div
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: false, amount: 0.2 }}
						initial={{ opacity: 0, x: 50 }}
						transition={{ duration: 0.5, delay: 0.6 }}
					>
						<div className="mb-4 flex flex-col space-y-3 rounded-xl border border-zinc-400 bg-gradient-to-br from-zinc-900/70 to-zinc-700/40 p-6 shadow-lg hover:scale-105 transition-all">
							<h1 className="flex justify-center font-[family-name:var(--font-switzer-semibold)] text-4xl text-zinc-200">Komplexní</h1>
							<p className="flex justify-center font-[family-name:var(--font-switzer-regular)] text-2xl text-zinc-300">24 999 Kč</p>
							<p className="flex justify-center text-zinc-500">Vhodné pro menší stránky</p>
							<div className="border-b border-white"></div>
							<ul className="text-md flex flex-col items-start justify-start space-y-2 text-zinc-300">
								<li className="flex flex-row">
									<CheckCircle size={20} color="#FFFFFF" className="mr-2" />Více stránek
								</li>
								<li className="flex flex-row">
									<CheckCircle size={20} color="#FFFFFF" className="mr-2" />
									Vše ze základního balíčku
								</li>
								<li className="flex flex-row">
									<CheckCircle size={20} color="#FFFFFF" className="mr-2" />3 revize webu
								</li>
								<li className="flex flex-row">
									<CheckCircle size={20} color="#FFFFFF" className="mr-2" />
									Komplexní animace
								</li>
								<li className="flex flex-row">
									<CheckCircle size={20} color="#FFFFFF" className="mr-2" />
									Přidání sožitých funkcí
								</li>
							</ul>
							<div className="border-b border-white"></div>

							<a
								className="mx-auto rounded-lg border border-zinc-400 bg-zinc-900/70 px-4 py-1 text-center text-white transition-all hover:scale-110 hover:border-zinc-300 hover:bg-zinc-800/70"
								href="/contact"
								rel="noopener noreferrer"
								target="_blank"
							>
								Objednat
							</a>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					viewport={{ once: false, amount: 0.2 }}
					transition={{ duration: 0.8, delay: 1 }}
				>
					<p className="mx-auto mt-2 max-w-xl text-center text-sm text-red-700">
						Veškeré projekty s vámi budou konzultovány. Pokud si přejete individuální konzultaci,{" "}
						<a className="font-bold text-red-700 underline" href="/contact">
							kontakujte mě zde
						</a>
					</p>
				</motion.div>
			</div>
		</section>
	);
}
