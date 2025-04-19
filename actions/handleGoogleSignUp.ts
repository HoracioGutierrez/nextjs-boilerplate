"use server";

import { executeAction } from "@/lib/actionWrapper";
import type { ActionResponse } from "@/lib/types";
import { createErrorResponse } from "@/lib/utils";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export const handleGoogleSignUp = async (): Promise<ActionResponse | never> => {
	return executeAction(async () => {
		const supabase = await createClient();
		const { data, error } = await supabase.auth.signInWithOAuth({
			provider: "google",
			options: {
				redirectTo: process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL,
			},
		});

		if (error) {
			return createErrorResponse(error.message, 400);
		}

		if (data.url) {
			// This will terminate the function execution with a redirect
			redirect(data.url);
		}

		// This should never be reached due to the redirect
		return createErrorResponse("No redirect URL was provided", 500);
	}, "An unexpected error occurred during Google sign up");
};
