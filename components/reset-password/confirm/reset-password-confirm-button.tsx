"use client";

import { LoadingButton } from "@/components/ui/loading-button";

export default function ResetPasswordConfirmButton() {
	return (
		<LoadingButton
			loadingTextKey="reset-password.confirm.button-loading"
			textKey="reset-password.confirm.button"
			className="w-full"
		/>
	);
}
