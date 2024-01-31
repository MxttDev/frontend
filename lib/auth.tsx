import { NextAuthOptions, User, getServerSession } from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"

export const authConfig: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: "927503594571-n4stmfshbo9f44msf902adbg3ebob1t2.apps.googleusercontent.com",
            clientSecret: "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"
          })
    ]
}