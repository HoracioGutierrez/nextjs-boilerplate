import { handleSignOut } from "@/actions/handleSignOut"
import { Button } from "../ui/button"

function SignOutButton() {
    return (
        <Button variant="link" className="cursor-pointer" onClick={handleSignOut}>Signout</Button>
    )
}

export default SignOutButton