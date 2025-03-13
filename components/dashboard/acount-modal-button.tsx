"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader } from "lucide-react";

function AccountModalButton() {

    const { pending } = useFormStatus()

    return (
        <Button type="submit" disabled={pending} className="flex items-center gap-2">
            {pending && <Loader className="animate-spin" />}
            {pending ? 'Loading...' : 'Edit Account'}
        </Button>
    )
}

export default AccountModalButton