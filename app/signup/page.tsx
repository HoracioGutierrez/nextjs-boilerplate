import Form from 'next/form'

function SignupPage() {

    const handleSignUp = async (formData: FormData) => {
        "use server";
        console.log(formData)
    }

    return (
        <Form action={handleSignUp}>
            <input type="text" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" value="Sign Up" />
        </Form>
    )
}

export default SignupPage