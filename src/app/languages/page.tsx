"use client";

import { Github, TypeScript, JavaScript, HTML5, TailwindCSS, ReactJS, NodeJs, NPMJs } from "@deemlol/next-icons";
import { BiLogoVisualStudio } from "react-icons/bi";
import { TbBrandCss3 } from "react-icons/tb";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Languages() {
	const iconsRef = useRef<HTMLDivElement>(null);
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
	const iconVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: i * 0.2 }, // Staggered effect
		}),
	};

	return (
		<div className="relative mx-auto min-h-screen max-w-7xl pt-24 font-[family-name:var(--font-switzer-regular)]">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
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
	);
}
