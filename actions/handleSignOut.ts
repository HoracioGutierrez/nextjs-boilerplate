"use server";
import { executeAction } from "@/lib/actionWrapper";
import type { ActionResponse } from "@/lib/types";
import { createErrorResponse } from "@/lib/utils";
import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export const handleSignOut = async (): Promise<never> => {
	return executeAction(async () => {
		const supabase = await createClient();
		const { error } = await supabase.auth.signOut();
		
		if (error) {
			return createErrorResponse(error.message, 400);
		}
		
		// This will terminate the function execution
		redirect("/login");
		
		// This code is unreachable due to the redirect
		// But needed for TypeScript
		throw new Error("Unreachable");
	}, "An unexpected error occurred during sign out") as never;
};
