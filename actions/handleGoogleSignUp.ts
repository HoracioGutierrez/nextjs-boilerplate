"use server";

import { createClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export const handleGoogleSignUp = async () => {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo: "http://localhost:3000/en/auth/callback" } })

    if (error) {
        throw new Error(error.message)
    }

    if (data.url) {
        redirect(data.url)
    }
}