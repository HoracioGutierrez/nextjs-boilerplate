"use client";

import { LoadingButton } from "@/components/ui/loading-button";

export default function ResetPasswordButton() {
	return (
		<LoadingButton
			loadingTextKey="reset-password.button-loading"
			textKey="reset-password.button"
			className="w-full"
		/>
	);
}
