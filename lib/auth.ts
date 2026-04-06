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
          return "/admin/login?error=AccessDenied"; // Redirect back to login with error
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      // Capture the Google access_token and refresh_token upon initial login
      if (account && user) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt =
          Math.floor(Date.now() / 1000) + (account.expires_in as number);

        // Initialize the role during sign-in
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

      // If token does not have expiration date or it hasn't expired yet, return it untouched
      let finalToken = token;

      if (
        token.expiresAt &&
        Math.floor(Date.now() / 1000) >= (token.expiresAt as number)
      ) {
        // Access token has expired, try to update it
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
            refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
          };
        } catch (error) {
          console.error("Error refreshing access token", error);
          finalToken = { ...token, error: "RefreshAccessTokenError" };
        }
      }

      // Fetch role from DB carefully if user object is not available but we have the token
      if (finalToken.email) {
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
