"use server";

import type { ActionResponse } from "@/lib/types";
import { createErrorResponse, createSuccessResponse } from "@/lib/utils";
import { createClient } from "@/supabase/server";

export async function handleResetPassword(
	formData: FormData,
): Promise<ActionResponse> {
	try {
		const email = formData.get("email") as string;
		const supabase = await createClient();

		const { error } = await supabase.auth.resetPasswordForEmail(email, {
			redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password/confirm`,
		});

		if (error) {
			return createErrorResponse(error.message, 400);
		}

		return createSuccessResponse(null);
	} catch (error) {
		if (error instanceof Error) {
			return createErrorResponse(error.message);
		}
		return createErrorResponse(
			"An unexpected error occurred while resetting password",
		);
	}
}
