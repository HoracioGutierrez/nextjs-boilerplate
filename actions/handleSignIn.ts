"use server";

import { userSchema } from "@/lib/schemas";
import { createClient } from "@/supabase/server";

export const handleSignIn = async (formData: FormData) => {
	try {
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const newUserData = { email, password };

		if (!userSchema.isValidSync(newUserData)) {
			return {
				data: null,
				hasError: true,
				errorMessage: "Invalid user data",
			};
		}

		const supabase = await createClient();
		const { data, error: authError } =
			await supabase.auth.signInWithPassword(newUserData);

		if (authError) {
			return {
				data: null,
				hasError: true,
				errorMessage: authError.message,
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
			errorMessage: "An unexpected error occurred during sign in",
		};
	}
};
