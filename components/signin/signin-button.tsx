"use client";

import { LoadingButton } from "@/components/ui/loading-button";

export default function SignInButton() {
	return (
		<LoadingButton
			loadingTextKey="signin.button-loading"
			textKey="signin.button"
		/>
	);
}
