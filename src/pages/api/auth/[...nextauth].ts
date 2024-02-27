import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { User } from "@/models";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        userName: {
          label: "Username",
          type: "text",
          placeholder: "Username",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(
        credentials,
        request
      ): Promise<{
        id: string;
        statusCode: number;
        data: User;
        message: string;
        serverTokens: {
          accessToken: string;
          refreshToken: string;
        };
      } | null> {
        const response = await fetch(
          process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/user/login",
          {
            method: "POST",
            body: JSON.stringify({
              userName: credentials?.userName,
              password: credentials?.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        const userData = await response.json();

        if (userData && userData.statusCode === 200) {
          return userData;
        } else {
          const errorMessage = "Account credentials failed.";

          throw new Error(errorMessage);
        }
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      session.refreshToken = token.refreshToken as string;
      session.accessToken = token.accessToken as string;
      session.user = token.user as User;

      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.refreshToken = user.serverTokens.refreshToken;
        token.accessToken = user.serverTokens.accessToken;
        token.user = user.data;
      }

      return token;
    },
  },
  pages: {
    error: "/auth/error",
    signIn: "/auth/login",
    signOut: "/auth/logout",
  },
};

const handler = NextAuth(authOptions);

export { authOptions };
export default handler;
