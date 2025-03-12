import { handleSignUp } from '@/actions/handleSignUp';
import SignUpButton from '@/components/signup/signup-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Form from 'next/form'

function SignupPage() {

    return (
        <Form action={handleSignUp}>
            <div>
                <Label htmlFor='email'>Email</Label>
                <Input type='email' id='email' name='email' placeholder='example@mail' />
            </div>
            <div>
                <Label htmlFor='password'>Password</Label>
                <Input type='password' id='password' name="password" placeholder='password' />
            </div>
            <SignUpButton />
        </Form>
    )
}

export default SignupPage