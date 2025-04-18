import { handleSignUp } from "@/actions/handleSignUp";
import GoogleAuthButton from "@/components/google-auth/google-auth";
import SignUpButton from "@/components/signup/signup-button";
import { getI18n } from "@/locales/server";
import type { Metadata } from "next";
import AuthForm from "@/components/auth/auth-form";

export const metadata: Metadata = {
	title: "Sign Up",
};

async function SignupPage() {
	const t = await getI18n();

	return (
		<section className="grow flex flex-col justify-center items-center">
			<h2 className="mb-16 font-bold text-2xl">{t("signup.title")}</h2>
			<AuthForm action={handleSignUp} formType="signup">
				<SignUpButton />
				<GoogleAuthButton />
			</AuthForm>
		</section>
	);
}

export default SignupPage;
