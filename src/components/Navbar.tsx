"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	return (
		<nav className="relative top-0 p-2 z-50 mx-auto w-full border-b border-zinc-400">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between font-[family-name:var(--font-switzer-regular)]">
                    <Link href="/">
                        <Image width={50} height={50} src="/assets/Logo-White.png" className="text-2xl" alt="Filip Musálek" />
                    </Link>

					{/* Desktop Navigation Links */}
					<div className="hidden items-center space-x-14 text-xl md:flex">
						<Link href="/about" className="transition-colors hover:text-zinc-400">
							O mně
						</Link>
						<Link href="/projects" className="transition-colors hover:text-zinc-400">
							Projekty
						</Link>
						<Link href="/contact" className="transition-colors hover:text-zinc-400">
							Kontakt
						</Link>
						<Link href="/offers" className="transition-colors hover:text-zinc-400">
							Nabídka
						</Link>
					</div>

					{/* Mobile menu button */}
					<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 md:hidden" aria-label="Toggle menu">
						<div className="space-y-2">
							<span className={`block h-0.5 w-8 bg-current transition-transform ${isMenuOpen ? "translate-y-2.5 rotate-45" : ""}`}></span>
							<span className={`block h-0.5 w-8 bg-current ${isMenuOpen ? "opacity-0" : ""}`}></span>
							<span className={`block h-0.5 w-8 bg-current transition-transform ${isMenuOpen ? "-translate-y-2.5 -rotate-45" : ""}`}></span>
						</div>
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
				<div className="space-y-1 border-t border-zinc-200 px-2 pb-3 pt-2">
					<Link href="#about" className="block rounded-md px-3 py-2 transition-colors hover:bg-zinc-100" onClick={() => setIsMenuOpen(false)}>
						About
					</Link>
					<Link href="#projects" className="block rounded-md px-3 py-2 transition-colors hover:bg-zinc-100" onClick={() => setIsMenuOpen(false)}>
						Projects
					</Link>
					<Link href="#contact" className="block rounded-md px-3 py-2 transition-colors hover:bg-zinc-100" onClick={() => setIsMenuOpen(false)}>
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
}
