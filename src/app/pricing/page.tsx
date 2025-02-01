"use client";

import { motion } from "framer-motion";
import { PricingCard } from "@/src/components/ui/dark-gradient-pricing";

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
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<p className="pt-4 text-sm text-red-700">Veškeré objednávky s vámi ještě budou projednány pro zjištění veškerých bližších informací</p>
				</motion.div>
			</div>
		</section>
	);
}
