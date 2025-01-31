import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";

interface BenefitProps {
	text: string;
	checked: boolean;
}

const Benefit = ({ text, checked }: BenefitProps) => {
	return (
		<div className="flex items-center gap-3">
			{checked ? (
				<span className="bg-primary text-primary-foreground grid size-4 place-content-center rounded-full text-sm">
					<Check className="size-3" />
				</span>
			) : (
				<span className="grid size-4 place-content-center rounded-full bg-zinc-200 text-sm text-zinc-600">
					<X className="size-3" />
				</span>
			)}
			<span className="text-sm text-zinc-200 dark:text-zinc-300">{text}</span>
		</div>
	);
};

interface PricingCardProps {
	tier: string;
	price: string;
	bestFor: string;
	CTA: string;
	benefits: Array<{ text: string; checked: boolean }>;
	className?: string;
}

export const PricingCard = ({ tier, price, bestFor, CTA, benefits, className }: PricingCardProps) => {
	return (
		<motion.div initial={{ filter: "blur(2px)" }} whileInView={{ filter: "blur(0px)" }} transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}>
			<Card className={cn("relative h-full w-full overflow-hidden border", "", "border-zinc-700 bg-zinc-900/30", "p-6", className)}>
				<div className="flex flex-col items-center border-b border-zinc-200 pb-2 dark:border-zinc-700">
					<span className="mb-6 inline-block text-zinc-200 dark:text-zinc-50">{tier}</span>
					<span className="mb-3 inline-block text-4xl font-medium">{price}</span>
					<span className="bg-gradient-to-br bg-clip-text text-center text-transparent text-zinc-400 dark:bg-gradient-to-br dark:from-zinc-200 dark:to-zinc-500">
						{bestFor}
					</span>
				</div>
				<div className="space-y-4 py-9">
					{benefits.map((benefit, index) => (
						<Benefit key={index} {...benefit} />
					))}
				</div>
				<Button className="w-full rounded-lg border-2 border-zinc-400" variant={tier === "Pro" ? "default" : "ghost"}>
					{CTA}
				</Button>
			</Card>
		</motion.div>
	);
};
