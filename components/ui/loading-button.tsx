"use client";

import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { useFormStatus } from "react-dom";
import { useI18n } from "@/locales/client";

interface LoadingButtonProps {
	loadingTextKey: string;
	textKey: string;
	className?: string;
	type?: "button" | "submit" | "reset";
}

export function LoadingButton({
	loadingTextKey,
	textKey,
	className = "",
	type = "submit",
}: LoadingButtonProps) {
	const { pending } = useFormStatus();
	const t = useI18n();

	return (
		<Button type={type} className={className} disabled={pending}>
			{pending && <Loader className="animate-spin" />}
			<span className="text-xs-sm-clamp font-bold md:font-medium">
				{/* @ts-ignore */}
				{pending ? t(loadingTextKey) : t(textKey)}
			</span>
		</Button>
	);
}
