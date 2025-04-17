"use server";

import { userSchema } from "@/lib/schemas";
import client from "@/prisma/prisma-client";
import { createClient } from "@/supabase/server";

export const handleSignUp = async (formData: FormData) => {
	try {
		const email = formData.get('email') as string;
		const password = formData.get('password') as string;
		const newUserData = { email, password };

		if (!userSchema.isValidSync(newUserData)) {
			return {
				data: null,
				hasError: true,
				errorMessage: "Invalid user data",
			};
		}

		const supabase = await createClient();
		const { data, error: authError } = await supabase.auth.signUp(newUserData);

		if (authError) {
			return {
				data: null,
				hasError: true,
				errorMessage: authError.message,
			};
		}

		const newUser = await client.users.create({
			data: { email }
		});

		if (!newUser) {
			return {
				data: null,
				hasError: true,
				errorMessage: "Error creating user profile",
			};
		}

		return {
			data,
			hasError: false,
			errorMessage: "",
		};
	} catch (error) {
		if (error instanceof Error) {
			return {
				data: null,
				hasError: true,
				errorMessage: error.message,
			};
		}
		return {
			data: null,
			hasError: true,
			errorMessage: "An unexpected error occurred during sign up",
		};
	}
};