"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { Button } from "./ui/button"
import { KeyRound, Loader, LogOut } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { useRouter } from "next/navigation"

const AuthButton = () => {

    const session = useSession()
    const router = useRouter()

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button onClick={() => session.status === "authenticated" ? signOut() : router.push("/login")} variant={"outline"} size={"icon"}>
                        {session.status === "loading" && <Loader />}
                        {session.status === "unauthenticated" && <KeyRound />}
                        {session.status === "authenticated" && <LogOut />}
                    </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        {session.status === "unauthenticated" && "login"}
                        {session.status === "authenticated" && "logout"}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default AuthButton