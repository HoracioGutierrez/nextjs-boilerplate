import { links } from "@/lib/constants"
import Link from "next/link"
import SignOutButton from "../signout/signout-button"

function Nav() {
    return (
        <nav>
            {links.map((link) => {
                return (
                    <Link href={link.href} key={link.id}>{link.text}</Link>
                )
            })}
            <SignOutButton/>
        </nav>
    )
}

export default Nav