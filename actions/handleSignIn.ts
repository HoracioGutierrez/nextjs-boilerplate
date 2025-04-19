"use server";

import { withErrorHandling } from "@/lib/actionWrapper";
import { userSchema } from "@/lib/schemas";
import type { ActionResponse } from "@/lib/types";
import {
	createErrorResponse,
	createSuccessResponse,
	createValidationErrorResponse,
} from "@/lib/utils";
import { createClient } from "@/supabase/server";

const signInAction = async (formData: FormData): Promise<ActionResponse> => {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;
	const newUserData = { email, password };

	if (!userSchema.isValidSync(newUserData)) {
		return createValidationErrorResponse("Invalid user data");
	}

	const supabase = await createClient();
	const { data, error: authError } =
		await supabase.auth.signInWithPassword(newUserData);

	if (authError) {
		return createErrorResponse(authError.message, 401);
	}

	return createSuccessResponse(data);
};

export const handleSignIn = withErrorHandling(
	signInAction,
	"An unexpected error occurred during sign in",
);
