import { Button } from "@/components/ui/button";
import { getI18n } from "@/locales/server";
import Link from "next/link";

async function HomePage() {
	const t = await getI18n();

	return (
		<section className="font-[family-name:var(--font-geist-sans)] grow flex flex-col justify-center">
			<div className="container mx-auto flex flex-col items-center text-center  xl:max-w-3xl">
				<h1 className="text-4xl font-bold leading-none sm:text-5xl">
					NextJS &nbsp;
					<span className="text-black/20 dark:text-accent">Boilerplate</span>
				</h1>
				<p className="px-8 mt-8 mb-12 text-lg max-w-[50ch]">
					This battery included templates is a collection of well put together
					libraries and tools that will help you start up your next project
					faster.
				</p>
				<div className="flex flex-wrap justify-center gap-2">
					<Button variant="outline" size="lg" asChild>
						<Link href="/signup">{t("home.button-get-started")}</Link>
					</Button>
					<Button variant="secondary" size="lg">
						<Link href="/info">{t("home.button-learn-more")}</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}

export default HomePage;
