import { links } from "@/lib/constants";
import Link from "next/link";
import SignOutButton from "../signout/signout-button";
import { ModeToggle } from "./mode-toggle";
import LangToggle from "./lang-toggle";
import { createClient } from "@/supabase/server";
import { Button } from "../ui/button";
import { getI18n } from "@/locales/server";
import Drawer from "./drawer";

async function Nav() {
	const supabase = await createClient();
	const { data } = await supabase.auth.getUser();
	const t = await getI18n();

	const filteredLinks = links.filter((link) => {
		if (link.visible === "always") return true;
		if (link.visible === "auth") return !!data.user;
		if (link.visible === "no-auth") return !data.user;
		return true;
	});

	return (
		<nav className="flex gap-1 items-center">
			{filteredLinks.map((link) => {
				return (
					<Button
						asChild
						variant="ghost"
						key={link.id}
						className="text-sm hidden md:flex"
						size="sm"
					>
						<Link href={link.href}>
							{t(`layout.links.${link.text}` as any, {})}
						</Link>
					</Button>
				);
			})}
			{data.user && <SignOutButton />}
			<LangToggle />
			<ModeToggle />
			<Drawer links={filteredLinks} />
		</nav>
	);
}

export default Nav;
