"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function handleResetPassword(formData: FormData) {
	const email = formData.get("email") as string;
	const supabase = await createClient();

	const { error } = await supabase.auth.resetPasswordForEmail(email, {
		redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password/confirm`,
	});

	if (error) {
		return {
			data: null,
			hasError: true,
			errorMessage: error.message,
		};
	}

	return {
		data: null,
		hasError: false,
		errorMessage: "",
	};
}
