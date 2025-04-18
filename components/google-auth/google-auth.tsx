import { Button } from "../ui/button";
import { handleGoogleSignUp } from "@/actions/handleGoogleSignUp";
import GoogleIcon from "./google-icon";
import { getI18n } from "@/locales/server";

async function GoogleAuthButton() {
	const t = await getI18n();

	return (
		<Button onClick={handleGoogleSignUp} type="button">
			<GoogleIcon />
			<span className="text-xs-sm-clamp font-bold md:font-medium">
				{t("google-auth")}
			</span>
		</Button>
	);
}

export default GoogleAuthButton;
