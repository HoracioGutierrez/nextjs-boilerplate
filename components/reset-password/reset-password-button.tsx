"use client";

import { useI18n } from "@/locales/client";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

export default function ResetPasswordButton() {
	const t = useI18n();
	const { pending } = useFormStatus();

	return (
		<Button type="submit" className="w-full" disabled={pending}>
			{pending
				? t("reset-password.button-loading")
				: t("reset-password.button")}
		</Button>
	);
}
