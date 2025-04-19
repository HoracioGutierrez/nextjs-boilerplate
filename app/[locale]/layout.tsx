import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { RootLayoutProps } from "@/lib/types";
import Header from "@/components/main-layout/header";
import { ThemeProvider } from "@/components/main-layout/theme-provider";
import Footer from "@/components/main-layout/footer";
import { Toaster } from "react-hot-toast";
import { getCurrentLocale } from "@/locales/server";
import { I18nProviderClient } from "@/locales/client";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "NextJS Boilerplate",
		template: "NextJS Boilerplate | %s",
	},
	description:
		"NextJS Boilerplate with TypeScript, TailwindCSS, Internationalization, Supabase and more.",
};

async function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang={(await getCurrentLocale()) || "es"} suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-dvh flex flex-col`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<I18nProviderClient locale={(await getCurrentLocale()) || "es"}>
						<div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[radial-gradient(rgba(0,0,0,0.1)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:24px_24px]" />
						<Header />
						<main className="p-2 md:p-4 grow flex-col flex">{children}</main>
						<Footer />
						<Toaster />
					</I18nProviderClient>
				</ThemeProvider>
			</body>
		</html>
	);
}

export default RootLayout;
