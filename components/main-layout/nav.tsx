import { links } from "@/lib/constants"
import Link from "next/link"
import SignOutButton from "../signout/signout-button"
import { ModeToggle } from "./mode-toggle"

function Nav() {
    return (
        <nav>
            {links.map((link) => {
                return (
                    <Link href={link.href} key={link.id}>{link.text}</Link>
                )
            })}
            <SignOutButton/>
            <ModeToggle/>
        </nav>
    )
}

export default Nav