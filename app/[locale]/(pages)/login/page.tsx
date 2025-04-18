import GoogleAuthButton from "@/components/google-auth/google-auth";
import SignInButton from "@/components/signin/signin-button";
import { getI18n } from "@/locales/server";
import type { Metadata } from "next";
import AuthForm from "@/components/auth/auth-form";
import { handleSignIn } from "@/actions/handleSignIn";

export const metadata: Metadata = {
	title: "Sign In",
};

async function LoginPage() {
	const t = await getI18n();

	return (
		<section className="grow flex flex-col justify-center items-center">
			<h2 className="mb-16 font-bold text-2xl">{t("signin.title")}</h2>
			<AuthForm action={handleSignIn} formType="signin">
				<SignInButton />
				<GoogleAuthButton />
			</AuthForm>
		</section>
	);
}

export default LoginPage;
