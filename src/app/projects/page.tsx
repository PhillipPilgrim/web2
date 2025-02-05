"use client";

import { Mail } from "@deemlol/next-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface Project {
	id: number;
	title: string;
	imageUrl: string;
}

const projects: Project[] = [
	{ id: 1, title: "Procházky", imageUrl: "/assets/prochazky1.png" },
	{ id: 2, title: "Dětské hry", imageUrl: "/assets/detskehry1.png" },
	{ id: 3, title: "Dětské hry", imageUrl: "/assets/detskehry2.png" },
	{ id: 4, title: "Procházky", imageUrl: "/assets/prochazky2.png" },
];

export default function PortfolioExamples() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<div className="mx-auto min-h-screen max-w-7xl px-4 py-16 md:py-32">
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="md:mb-12 mb-8 text-center text-5xl font-[family-name:var(--font-switzer-semibold)]"
			>
				Ukázky mé práce
			</motion.h1>
			<div className="flex flex-col gap-8 md:flex-row">
				
				<div className="space-y-6 text-justify md:w-1/3">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						className="space-y-4"
					>
						<h2 className="text-3xl font-[family-name:var(--font-switzer-semibold)]">O mých projektech</h2>
					</motion.div>
					<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }} className="space-y-4">
						<p className="text-md text-zinc-400">
							Zde jsou ukázky mých nejnovějších projektů. Každý z nich představuje jedinečnou výzvu a příležitost k tvorbě něčeho výjimečného.
						</p>
						<p className="text-md text-zinc-400">
							Mé portfolio zahrnuje různorodé projekty, od webových stránek pro majitele psů až po stránky určené pro aplikaci Dětské-hry slabiky,
							kde se soustředí na barvy a celkově dětský vzhled. Každý projekt je navržen s důrazem na detail a uživatelský zážitek.
						</p>
						<p className="text-md text-zinc-400">
							Pokud vás zaujal některý z mých projektů a chtěli byste spolupracovat nebo se dozvědět více, neváhejte mě kontaktovat.
						</p>
					</motion.div>
				</div>
				<motion.div
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="grid grid-cols-1 gap-6 md:w-2/3 md:grid-cols-2"
				>
					{projects.map(project => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1 + project.id * 0.4 }}
							key={project.id}
							onClick={() => setSelectedImage(project.imageUrl)}
							className="cursor-pointer overflow-hidden rounded-lg duration-300 hover:scale-105"
						>
							<Image
								src={project.imageUrl || "/placeholder.svg"}
								alt={project.title}
								width={400}
								height={300}
								className="h-52 w-full object-cover"
							/>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* MODAL */}
			{selectedImage && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.4 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
					onClick={() => setSelectedImage(null)} // Close modal on click outside
				>
					<div className="relative max-w-4xl" onClick={e => e.stopPropagation()}>
						{/* Close Button */}
						<button className="absolute right-3 top-3 px-3 text-3xl font-bold text-black hover:scale-110" onClick={() => setSelectedImage(null)}>
							&times;
						</button>
						{/* Large Image */}
						<Image src={selectedImage} alt="Selected" width={1400} height={1200} className="rounded-xl" />
					</div>
				</motion.div>
			)}
		</div>
	);
}
