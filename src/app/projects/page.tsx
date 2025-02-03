"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Tag } from "@deemlol/next-icons";


interface Project {
	id: number;
	title: string;
	imageUrl: string;
}

const projects: Project[] = [
	{ id: 1, title: "Procházky", imageUrl: "/assets/prochazky1.png" },
	{ id: 2, title: "Procházky", imageUrl: "/assets/prochazky2.png" },
	{ id: 3, title: "Dětské hry", imageUrl: "/assets/detskehry1.png" },
	{ id: 4, title: "Dětské hry", imageUrl: "/assets/detskehry2.png" },
];

export default function PortfolioExamples() {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<div className="mx-auto min-h-screen max-w-7xl px-4 py-24">
			<motion.h1 
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="mb-12 text-center text-5xl font-bold">Ukázky mé práce</motion.h1>
			<div className="flex flex-col gap-8 md:flex-row">
				<motion.div 
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
				className="grid grid-cols-1 gap-6 md:w-2/3 md:grid-cols-2">
					{projects.map((project) => (
						<div
							key={project.id}
							onClick={() => setSelectedImage(project.imageUrl)}
							className="overflow-hidden rounded-lg border-2 border-zinc-500 transition-transform duration-300 hover:scale-105 cursor-pointer"
						>
							<Image
								src={project.imageUrl || "/placeholder.svg"}
								alt={project.title}
								width={400}
								height={300}
								className="h-52 w-full object-cover"
							/>
						</div>
					))}
				</motion.div>
				<motion.div 
				initial={{ opacity: 0, x: 20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5, delay: 0.6 }}
				className="space-y-6 text-justify md:w-1/3">
					<h2 className="text-3xl font-semibold">O mých projektech</h2>
					<p className="text-md text-zinc-400">
						Zde jsou ukázky mých nejnovějších projektů. Každý z nich představuje jedinečnou výzvu a příležitost k tvorbě něčeho výjimečného.
					</p>
					<p className="text-md text-zinc-400">
						Mé portfolio zahrnuje různorodé projekty, od fotografií z procházek až po interaktivní dětské hry. Každý projekt je navržen s důrazem na
						detail a uživatelský zážitek.
					</p>
					<p className="text-md text-zinc-400">
						Pokud vás zaujal některý z mých projektů a chtěli byste spolupracovat nebo se dozvědět více, neváhejte mě kontaktovat.
					</p>
					<div className="flex flex-row justify-center gap-4 pr-16 pt-6 md:pt-8">
					
						<a
							href="/pricing"
							className="rounded-lg border-2 flex flex-row border-zinc-600 bg-zinc-900/50 px-4 py-2 font-medium text-white transition-opacity hover:bg-zinc-800/50 hover:opacity-90"
						>
							Ceník mých služeb
							
						</a>
						<a
							href="/contact"
							className="rounded-lg border-2 border-zinc-600 bg-zinc-900/50 px-4 py-2 font-medium text-white transition-opacity hover:bg-zinc-800/50 hover:opacity-90"
						>
							Kontakt
						</a>
					</div>
				</motion.div>
			</div>

			{/* MODAL */}
			{selectedImage && (
				<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4 }}
					className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
					onClick={() => setSelectedImage(null)} // Close modal on click outside
				>
					<div className="relative max-w-2xl" onClick={(e) => e.stopPropagation()}>
						{/* Close Button */}
						<button
							className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-xl font-bold text-black"
							onClick={() => setSelectedImage(null)}
						>
							&times;
						</button>
						{/* Large Image */}
						<Image src={selectedImage} alt="Selected" width={1000} height={800} className="rounded-lg" />
					</div>
				</motion.div>
			)}
		</div>
	);
}
