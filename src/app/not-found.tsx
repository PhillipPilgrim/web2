"use client";

export default function NotFound() {
	return (
		<div className="flex flex-col min-h-screen items-center justify-center">
			<h1 className="text-7xl font-[family-name:var(--font-switzer-semibold)] text-zinc-300">404</h1>
			<h1 className="text-4xl font-[family-name:var(--font-switzer-semibold)] text-zinc-300">Stránka nenalezena</h1>
			<p className="text-lg mt-6 font-[family-name:var(--font-switzer-regular)] text-zinc-400">Tato stránka neexistuje.</p>
		</div>
	);
}
