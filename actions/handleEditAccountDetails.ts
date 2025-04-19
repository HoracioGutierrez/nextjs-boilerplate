"use server";

import { executeAction } from "@/lib/actionWrapper";
import { userWithProfile } from "@/lib/schemas";
import type { ActionResponse } from "@/lib/types";
import {
	createErrorResponse,
	createSuccessResponse,
	createValidationErrorResponse,
} from "@/lib/utils";
import client from "@/prisma/prisma-client";
import { createClient } from "@/supabase/server";
import { revalidatePath } from "next/cache";

export const handleEditAccountDetails = async (
	formData: FormData,
): Promise<ActionResponse> => {
	return executeAction(async () => {
		const email = formData.get("email") as string;
		const phone = formData.get("phone") as string;
		const first_name = formData.get("first_name") as string;
		const last_name = formData.get("last_name") as string;
		const userWithNewData = { email, phone, first_name, last_name };

		if (!userWithProfile.isValidSync(userWithNewData)) {
			return createValidationErrorResponse("Invalid user data");
		}

		const supabase = await createClient();
		const { data: authUser, error } = await supabase.auth.updateUser({
			data: { email, phone, first_name, last_name },
		});

		if (error) {
			return createErrorResponse(error.message, 400);
		}

		const updatedUser = await client.users.update({
			where: { email },
			data: { name: first_name },
		});

		if (!updatedUser) {
			return createErrorResponse("Error updating user profile", 500);
		}

		revalidatePath("/dashboard");

		return createSuccessResponse(authUser);
	}, "An unexpected error occurred while updating account details");
};
