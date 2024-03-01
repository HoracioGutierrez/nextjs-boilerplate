import LoginButton from "@/components/LoginButton";

export default function Login() {
    return (
        <main className="container max-w-screen-2xl grow flex items-center justify-center">
            <div className="rounded-sm bg-primary-foreground p-4 max-w-2xl w-full">
                <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">Login</h2>
                <p className="leading-7 [&:not(:first-child)]:mt-2 pb-4">Para crear una cuenta o acceder a ella simplemente haga click en el siguiente boton y use su cuenta de google preferida.</p>
                <LoginButton/>
            </div>
        </main>
    );
}
