"use client";

import Image from "next/image";

interface Project {
	id: number;
	title: string;
	imageUrl: string;
}

const projects: Project[] = [
	{
		id: 1,
		title: "Procházky",
		imageUrl: "/assets/prochazky1.png",
	},
	{
		id: 2,
		title: "Procházky",
		imageUrl: "/assets/prochazky2.png",
	},
	{
		id: 3,
		title: "Dětské hry",
		imageUrl: "/assets/detskehry1.png",
	},
	{
		id: 4,
		title: "Dětské hry",
		imageUrl: "/assets/detskehry2.png",
	},
];

export default function PortfolioExamples() {
	return (
		<div className="mx-auto min-h-screen max-w-7xl px-4 py-24">
			<h1 className="mb-12 text-center text-4xl font-bold">Ukázky mé práce</h1>
			<div className="flex flex-row gap-8">
				<div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-2">
					{projects.map(project => (
						<div key={project.id} className="overflow-hidden rounded-lg border-2 border-zinc-500 transition-transform duration-300 hover:scale-105">
							<Image
								src={project.imageUrl || "/placeholder.svg"}
								alt={project.title}
								width={400}
								height={300}
								className="h-52 w-full object-cover"
							/>
						</div>
					))}
				</div>
                <div>
                    <h1>
                        Něco hovno něco
                    </h1>
                    <p>AKfaknfaofnaoa</p>
                </div>
			</div>
		</div>
	);
}
