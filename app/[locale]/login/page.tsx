import { handleSignIn } from "@/actions/handleSignIn"
import SignInButton from "@/components/signin/signin-button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Form from "next/form"

function LoginPage() {
    return (
        <Form action={handleSignIn}>
            <div>
                <Label htmlFor='email'>Email</Label>
                <Input type='email' id='email' name='email' placeholder='example@mail' />
            </div>
            <div>
                <Label htmlFor='password'>Password</Label>
                <Input type='password' id='password' name="password" placeholder='password' />
            </div>
            <SignInButton />
        </Form>
    )
}

export default LoginPage