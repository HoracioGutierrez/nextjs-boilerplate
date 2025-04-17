import { getI18n } from "@/locales/server";
import AuthForm from "@/components/auth/auth-form";
import { handleResetPasswordConfirm } from "@/actions/handleResetPasswordConfirm";

export default async function ResetPasswordConfirmPage() {
	const t = await getI18n();

	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-4">
			<div className="w-full max-w-md space-y-8">
				<div className="text-center">
					<h1 className="text-2xl font-bold">
						{t("reset-password.confirm.title")}
					</h1>
					<p className="mt-2 text-sm text-muted-foreground">
						{t("reset-password.confirm.description")}
					</p>
				</div>
				<AuthForm
					action={handleResetPasswordConfirm}
					formType="reset-password-confirm"
				/>
			</div>
		</div>
	);
}
