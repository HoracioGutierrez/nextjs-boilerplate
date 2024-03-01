import NextAuth, { Session } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import authConfig from "./auth.config"

export interface NextAuthRequest extends NextRequest {
    auth: Session | null
}

const { auth } = NextAuth(authConfig)

export default auth((req: NextAuthRequest) => {
    const url = new URL(req.url)
    const sessionToken = req.cookies.get("authjs.session-token")

    if (url.pathname.includes("login") && sessionToken) {
        return Response.redirect(new URL("/", req.url))
    }
    return NextResponse.next()
})


export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico).*)"
    ],
}