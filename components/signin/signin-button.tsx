"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

function SignInButton() {

    const { pending } = useFormStatus()

    return (
        <Button disabled={pending}>
            {pending && <Loader className="animate-spin" />}
            {pending ? 'Signing in...' : 'Sign in'}
        </Button>
    )
}

export default SignInButton