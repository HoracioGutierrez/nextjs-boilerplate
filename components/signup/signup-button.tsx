"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

function SignUpButton() {

    const { pending } = useFormStatus()

    return (
        <Button disabled={pending}>
            {pending && <Loader className="animate-spin" />}
            {pending ? 'Signing up...' : 'Sign up'}
        </Button>
    )
}

export default SignUpButton