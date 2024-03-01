import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import authConfig from "./auth.config"

const prisma = new PrismaClient()

export const {
    handlers: { GET, POST },
    auth,
} = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    callbacks: {
        async session({ session, user, token }) {
            if (session) {
                const client = await new PrismaClient()

                const query = await client.user.findUnique({
                    where: {
                        email: session.user.email
                    }
                })

                return {
                    ...session,
                    user : {
                        ...session.user,
                        ...query
                    }
                }

            }

            return session
        },
    },
    ...authConfig
})