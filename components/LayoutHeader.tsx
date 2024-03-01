import Link from "next/link"
import AuthButton from "./AuthButton"
import { ThemeToggleButton } from "./ThemeToggleButton"
import { Button } from "./ui/button"
import { User } from "lucide-react"
import { auth } from "@/auth"

export default async function LayoutHeader() {

    const session = await auth()

    return (
        <header className="sticky w-full z-10 top-0 backdrop-blur">
            <nav className="container max-w-screen-2xl h-14 flex items-center justify-between">
                <Link href={"/"}>
                    <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">NextJS Boilerplate</h1>
                </Link>
                <div className="flex gap-2">
                    <ThemeToggleButton />
                    {session?.user && (
                        <Link href={"/dashboard"}>
                            <Button size={"icon"} variant={"outline"}>
                                <User />
                            </Button>
                        </Link>
                    )}
                    <AuthButton />
                </div>
            </nav>
        </header>
    )
}