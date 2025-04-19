"use server";

import { withErrorHandling } from "@/lib/actionWrapper";
import type { ActionResponse } from "@/lib/types";
import { createErrorResponse, createSuccessResponse } from "@/lib/utils";
import { createClient } from "@/supabase/server";

// Core password confirmation logic without try/catch
const resetPasswordConfirmAction = async (
	formData: FormData,
): Promise<ActionResponse> => {
	const password = formData.get("password") as string;
	const supabase = await createClient();

	const { error } = await supabase.auth.updateUser({
		password,
	});

	if (error) {
		return createErrorResponse(error.message, 400);
	}

	return createSuccessResponse(null);
};

// Exported function with error handling
export const handleResetPasswordConfirm = withErrorHandling(
	resetPasswordConfirmAction,
	"An unexpected error occurred while confirming password reset",
);
