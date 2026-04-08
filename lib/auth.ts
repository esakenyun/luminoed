import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import { authConfig } from "../auth.config";

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(prisma) as any,
  callbacks: {
    ...authConfig.callbacks,
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email as string },
        });

        if (!existingUser) {
          return "/admin/login?error=AccessDenied";
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt =
          Math.floor(Date.now() / 1000) + (account.expires_in as number);

        token.id = user.id as string;
        token.role = (user as any).role || "ADMIN";

        const dbUser = await prisma.user.findUnique({
          where: { email: user.email as string },
        });

        if (dbUser) {
          token.role = dbUser.role;
        }

        return token;
      }

      let finalToken = token;

      if (
        token.expiresAt &&
        Math.floor(Date.now() / 1000) >= (token.expiresAt as number)
      ) {
        try {
          const response = await fetch("https://oauth2.googleapis.com/token", {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              client_id: process.env.GOOGLE_CLIENT_ID!,
              client_secret: process.env.GOOGLE_CLIENT_SECRET!,
              grant_type: "refresh_token",
              refresh_token: token.refreshToken as string,
            }),
            method: "POST",
          });

          const refreshedTokens = await response.json();

          if (!response.ok) {
            throw refreshedTokens;
          }

          finalToken = {
            ...token,
            accessToken: refreshedTokens.access_token,
            expiresAt:
              Math.floor(Date.now() / 1000) + refreshedTokens.expires_in,
            refreshToken: refreshedTokens.refresh_token ?? token.refreshToken,
          };
        } catch (error) {
          console.error("Error refreshing access token", error);
          finalToken = { ...token, error: "RefreshAccessTokenError" };
        }
      }

      if (finalToken.email && !finalToken.role) {
        const dbUser = await prisma.user.findUnique({
          where: { email: finalToken.email as string },
        });
        if (dbUser) {
          finalToken.role = dbUser.role;
        }
      }

      return finalToken;
    },
  },
});
