"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { KeyRound, Loader, LogIn, LogOut } from "lucide-react"

const AuthButton = () => {

    const session = useSession()

    return (
        <Button onClick={() => session.status === "authenticated" ? signOut() : signIn()} variant={"outline"} size={"icon"}>
            {session.status === "loading" && <Loader />}
            {session.status === "unauthenticated" && <KeyRound />}
            {session.status === "authenticated" && <LogOut />}
        </Button>
    )
}

export default AuthButton