import AccountModal from "@/components/dashboard/account-modal";
import { getI18n } from "@/locales/server";
import { createClient } from "@/supabase/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import PageHeading from "@/components/main-layout/page-heading";
export const metadata: Metadata = {
	title: "Dashboard",
};

async function DashboardPage() {
	const supabase = await createClient();
	const { data, error } = await supabase.auth.getUser();
	const t = await getI18n();

	if (error) {
		return redirect("/login");
	}

	return (
		<section className="grow flex flex-col">
			<PageHeading text={t("dashboard.title")} />
			<div className="flex flex-col gap-8">
				<Card>
					<CardHeader>
						<CardTitle>{t("dashboard.sections.account.title")}</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="flex items-center gap-4">
							<Image
								src={
									data.user.user_metadata.avatar_url ||
									"https://api.dicebear.com/9.x/identicon/svg"
								}
								alt="avatar"
								width={75}
								height={75}
								className="rounded-full"
							/>
							<div>
								<h3 className="font-bold text-xl">
									{data.user.user_metadata.first_name || "Not set"}
								</h3>
								<p className="text-muted-foreground">{data.user.email}</p>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader>
						<CardTitle className="flex justify-between items-start relative">
							{t("dashboard.sections.personal_info.title")}
							<AccountModal user={data.user || {}} />
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl">
							<div>
								<Label className="block text-sm font-medium text-muted-foreground/30 dark:text-muted">
									{t("dashboard.sections.personal_info.first_name")}
								</Label>
								<p className="text-muted-foreground">
									{data.user.user_metadata.first_name || "Not set"}
								</p>
							</div>
							<div>
								<Label className="block text-sm font-medium text-muted-foreground/30 dark:text-muted">
									{t("dashboard.sections.personal_info.last_name")}
								</Label>
								<p className="text-muted-foreground">
									{data.user.user_metadata.last_name || "Not set"}
								</p>
							</div>
							<div>
								<Label className="block text-sm font-medium text-muted-foreground/30 dark:text-muted">
									{t("dashboard.sections.personal_info.email")}
								</Label>
								<p className="text-muted-foreground">
									{data.user.email || "Not set"}
								</p>
							</div>
							<div>
								<Label className="block text-sm font-medium text-muted-foreground/30 dark:text-muted">
									{t("dashboard.sections.personal_info.phone")}
								</Label>
								<p className="text-muted-foreground">
									{data.user.user_metadata.phone || "Not set"}
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}

export default DashboardPage;
