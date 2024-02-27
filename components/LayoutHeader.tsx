import AuthButton from "./AuthButton"
import { ThemeToggleButton } from "./ThemeToggleButton"

type Props = {}
export default function LayoutHeader({ }: Props) {
    return (
        <header className="sticky w-full z-10 top-0 backdrop-blur">
            <nav className="container max-w-screen-2xl h-14 flex items-center justify-between">
                <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">NextJS Boilerplate</h1>
                <div className="flex gap-2">
                    <ThemeToggleButton />
                    <AuthButton />
                </div>
            </nav>
        </header>
    )
}