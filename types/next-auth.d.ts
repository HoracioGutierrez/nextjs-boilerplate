import NextAuth, { DefaultSession } from "next-auth"
import { AdapterSession, AdapterUser } from "next-auth/adapters"

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name: string | null;
            email: string | null;
            emailVerified: Date | null;
            image: string | null;
        } & DefaultSession["user"]
    }
}