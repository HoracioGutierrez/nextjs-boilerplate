import { handleSignUp } from '@/actions/handleSignUp';
import GoogleAuthButton from '@/components/google-auth/google-auth';
import SignUpButton from '@/components/signup/signup-button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Form from 'next/form'

function SignupPage() {

    return (
        <section className="grow flex flex-col justify-center items-center">
            <h2 className="mb-16 font-bold text-2xl">Signup</h2>
            <Form action={handleSignUp} className="max-w-sm w-full flex gap-4 flex-col">
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='email'>Email</Label>
                    <Input type='email' id='email' name='email' placeholder='example@mail' />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor='password'>Password</Label>
                    <Input type='password' id='password' name="password" placeholder='password' />
                </div>
                <SignUpButton />
                <GoogleAuthButton/>
            </Form>
        </section>
    )
}

export default SignupPage