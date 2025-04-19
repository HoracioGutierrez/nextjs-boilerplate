"use server";

import { withErrorHandling } from "@/lib/actionWrapper";
import type { ActionResponse } from "@/lib/types";
import { createErrorResponse, createSuccessResponse } from "@/lib/utils";
import { createClient } from "@/supabase/server";

// Core reset password logic without try/catch
const resetPasswordAction = async (
	formData: FormData,
): Promise<ActionResponse> => {
	const email = formData.get("email") as string;
	const supabase = await createClient();

	const { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password/confirm`,
	});

	if (error) {
		return createErrorResponse(error.message, 400);
	}

	return createSuccessResponse(null);
};

// Exported function with error handling
export const handleResetPassword = withErrorHandling(
	resetPasswordAction,
	"An unexpected error occurred while resetting password",
);
