"use client";

import { Book, Mail, House } from "@deemlol/next-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
	const [isHovered, setIsHovered] = useState(false);
	const [isMail, setIsMail] = useState(false);
	const [isHome, setIsHome] = useState(false);

	return (
		<nav className="fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 transform space-x-5 rounded-xl border-2 border-zinc-500 bg-zinc-900 px-2 py-2 shadow-lg">
			<div className="flex flex-col items-center" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
				<AnimatePresence>
					{isHovered && (
						<motion.span
							initial={{ y: 0, opacity: 0 }}
							animate={{ y: 30, opacity: 1 }}
							whileHover={{ y: -30, opacity: 1 }}
							transition={{ duration: 0.3 }}
							className="pointer-events-none absolute bottom-16 mb-4 rounded-lg border border-zinc-500 bg-zinc-900 px-2 py-1 text-sm text-zinc-200"
						>
							Projekty
						</motion.span>
					)}
				</AnimatePresence>
				<a href="/projects" className="cursor-pointer text-white transition-transform duration-300 hover:scale-[1.5]">
					<Book size={25} />
				</a>
			</div>
			<div className="flex flex-col items-center" onMouseEnter={() => setIsHome(true)} onMouseLeave={() => setIsHome(false)}>
				<AnimatePresence>
					{isHome && (
						<motion.span
							initial={{ y: 0, opacity: 0 }}
							animate={{ y: 30, opacity: 1 }}
							whileHover={{ y: -30, opacity: 1 }}
							transition={{ duration: 0.3 }}
							className="pointer-events-none absolute bottom-16 mb-4 rounded-lg border border-zinc-500 bg-zinc-900 px-2 py-1 text-sm text-zinc-200"
						>
							Úvod
						</motion.span>
					)}
				</AnimatePresence>
				<a href="/" className="cursor-pointer text-white transition-transform duration-300 hover:scale-[1.5]">
					<House size={25} />
				</a>
			</div>
			<div className="flex flex-col items-center" onMouseEnter={() => setIsMail(true)} onMouseLeave={() => setIsMail(false)}>
				<AnimatePresence>
					{isMail && (
						<motion.span
							initial={{ y: 0, opacity: 0 }}
							animate={{ y: 30, opacity: 1 }}
							whileHover={{ y: -30, opacity: 1 }}
							transition={{ duration: 0.3 }}
							className="pointer-events-none absolute bottom-16 mb-4 rounded-lg border border-zinc-500 bg-zinc-900 px-2 py-1 text-sm text-zinc-200"
						>
							Kontakt
						</motion.span>
					)}
				</AnimatePresence>
				<a href="/contact" className="cursor-pointer text-white transition-transform duration-300 hover:scale-[1.5]">
					<Mail size={25} />
				</a>
			</div>
		</nav>
	);
}
