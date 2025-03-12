import { Button } from "../ui/button"
import { handleGoogleSignUp } from "@/actions/handleGoogleSignUp"
import GoogleIcon from "./google-icon";


function GoogleAuthButton() {

    return (
        <Button onClick={handleGoogleSignUp} type="button">
            <GoogleIcon /> Sign up/in with Google
        </Button>
    )
}

export default GoogleAuthButton