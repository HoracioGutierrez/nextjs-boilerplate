"use client";

import { handleSignIn } from "@/actions/handleSignIn";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/locales/client";
import Form from "next/form";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";

interface SignInFormProps {
	children: React.ReactNode;
}

function SignInForm({ children }: SignInFormProps) {
	const t = useI18n();

	const handleFormAction = async (formData: FormData) => {
		const result = await handleSignIn(formData);

		if (result.hasError) {
			toast.error(result.errorMessage);
			return;
		}

		if (result.data) {
			redirect("/dashboard");
		}
	};

	return (
		<Form
			action={handleFormAction}
			className="max-w-sm w-full flex gap-4 flex-col"
		>
			<div className="flex flex-col gap-2">
				<Label htmlFor="email">{t("signin.email.label")}</Label>
				<Input
					type="email"
					id="email"
					name="email"
					placeholder={t("signin.email.placeholder")}
				/>
			</div>
			<div className="flex flex-col gap-2">
				<Label htmlFor="password">{t("signin.password.label")}</Label>
				<Input
					type="password"
					id="password"
					name="password"
					placeholder={t("signin.password.placeholder")}
				/>
			</div>
			{children}
		</Form>
	);
}

export default SignInForm; 