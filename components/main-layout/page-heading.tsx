import { cn } from "@/lib/utils";

interface PageHeadingProps {
	text: string;
	className?: string;
}

export default function PageHeading({ text, className }: PageHeadingProps) {
	return (
		<h2 className={cn("mb-4-8-clamp font-bold text-2xl-3xl-clamp", className)}>
			{text}
		</h2>
	);
}
