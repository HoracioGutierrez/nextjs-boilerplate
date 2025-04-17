"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function handleResetPasswordConfirm(formData: FormData) {
    const password = formData.get("password") as string;
    const supabase = await createClient();

    const { error } = await supabase.auth.updateUser({
        password: password,
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