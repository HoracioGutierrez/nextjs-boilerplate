import { handleSignUp } from "@/actions/handleSignUp";
import GoogleAuthButton from "@/components/google-auth/google-auth";
import SignUpButton from "@/components/signup/signup-button";
import { getI18n } from "@/locales/server";
import type { Metadata } from "next";
import AuthForm from "@/components/auth/auth-form";
import PageHeading from "@/components/main-layout/page-heading";
export const metadata: Metadata = {
	title: "Sign Up",
};

async function SignupPage() {
	const t = await getI18n();

	return (
		<section className="grow flex flex-col justify-center items-center">
			<PageHeading text={t("signup.title")} className="mb-14-20-clamp"/>
			<AuthForm action={handleSignUp} formType="signup">
				<SignUpButton />
				<GoogleAuthButton />
			</AuthForm>
		</section>
	);
}

export default SignupPage;
