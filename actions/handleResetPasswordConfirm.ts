"use server";

import type { ActionResponse } from "@/lib/types";
import { createErrorResponse, createSuccessResponse } from "@/lib/utils";
import { createClient } from "@/supabase/server";

export async function handleResetPasswordConfirm(
	formData: FormData,
): Promise<ActionResponse> {
	try {
		const password = formData.get("password") as string;
		const supabase = await createClient();

		const { error } = await supabase.auth.updateUser({
			password,
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
			"An unexpected error occurred while confirming password reset",
		);
	}
}
