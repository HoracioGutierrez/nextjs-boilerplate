import { handleSignOut } from "@/actions/handleSignOut"
import { Button } from "../ui/button"

function SignOutButton() {
    return (
        <Button variant="link" className="cursor-pointer p-0" onClick={handleSignOut}>signout</Button>
    )
}

export default SignOutButton