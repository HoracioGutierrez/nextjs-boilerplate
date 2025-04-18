"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useI18n } from "@/locales/client";
import Form from "next/form";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import type { AuthResponse } from "@supabase/supabase-js";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AuthFormProps {
	children?: React.ReactNode;
	action: (formData: FormData) => Promise<{
		data: AuthResponse["data"] | null;
		hasError: boolean;
		errorMessage: string;
	}>;
	formType: "signin" | "signup" | "reset-password" | "reset-password-confirm";
}

function AuthForm({ children, action, formType }: AuthFormProps) {
	const t = useI18n();

	const handleFormAction = async (formData: FormData) => {
		const result = await action(formData);

		if (result.hasError) {
			toast.error(result.errorMessage);
			return;
		}

		if (formType === "reset-password") {
			toast.success("Check your email for a password reset link");
			return;
		}

		if (formType === "reset-password-confirm") {
			toast.success("Password updated successfully");
			redirect("/login");
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
			{formType !== "reset-password-confirm" && (
				<div className="flex flex-col gap-2">
					<Label htmlFor="email">
						{t(
							formType === "reset-password"
								? "reset-password.email.label"
								: `${formType}.email.label`,
						)}
					</Label>
					<Input
						type="email"
						id="email"
						name="email"
						placeholder={t(
							formType === "reset-password"
								? "reset-password.email.placeholder"
								: `${formType}.email.placeholder`,
						)}
					/>
				</div>
			)}
			{formType !== "reset-password" && (
				<div className="flex flex-col gap-2">
					<Label htmlFor="password">
						{t(
							formType === "reset-password-confirm"
								? "reset-password.confirm.password.label"
								: `${formType}.password.label`,
						)}
					</Label>
					<div className="flex flex-col items-end">
						<Input
							type="password"
							id="password"
							name="password"
							placeholder={t(
								formType === "reset-password-confirm"
									? "reset-password.confirm.password.placeholder"
									: `${formType}.password.placeholder`,
							)}
						/>
						{(formType === "signin" || formType === "signup") && (
							<Button variant="link" className="p-0" asChild>
								<Link
									href="/reset-password"
									className="text-xs-sm-clamp !text-muted-foreground"
								>
									{t("signin.forgot-password")}
								</Link>
							</Button>
						)}
					</div>
				</div>
			)}
			{children}
		</Form>
	);
}

export default AuthForm;
