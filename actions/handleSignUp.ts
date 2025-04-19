"use server";

import { userSchema } from "@/lib/schemas";
import type { ActionResponse } from "@/lib/types";
import {
	createErrorResponse,
	createSuccessResponse,
	createValidationErrorResponse,
} from "@/lib/utils";
import client from "@/prisma/prisma-client";
import { createClient } from "@/supabase/server";

export const handleSignUp = async (
	formData: FormData,
): Promise<ActionResponse> => {
	try {
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const newUserData = { email, password };

		if (!userSchema.isValidSync(newUserData)) {
			return createValidationErrorResponse("Invalid user data");
		}

		const supabase = await createClient();
		const { data, error: authError } = await supabase.auth.signUp(newUserData);

		if (authError) {
			return createErrorResponse(authError.message, 401);
		}

		const newUser = await client.users.create({
			data: { email },
		});

		if (!newUser) {
			return createErrorResponse("Error creating user profile", 500);
		}

		return createSuccessResponse(data);
	} catch (error) {
		if (error instanceof Error) {
			return createErrorResponse(error.message);
		}
		return createErrorResponse("An unexpected error occurred during sign up");
	}
};
