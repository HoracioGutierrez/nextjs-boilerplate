"use client";

import { LoadingButton } from "@/components/ui/loading-button";

export default function SignUpButton() {
	return (
		<LoadingButton
			loadingTextKey="signup.button-loading"
			textKey="signup.button"
		/>
	);
}
