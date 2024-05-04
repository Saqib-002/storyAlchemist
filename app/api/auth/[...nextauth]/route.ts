import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { createUser, getUserByEmail } from "@/lib/actions/user.action";
import { compare } from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const user = await getUserByEmail({ email: credentials?.email });
        console.log("User", user);
        const passwordCorrect = await compare(
          credentials?.password || "",
          user.password
        );
        if (passwordCorrect) {
          return Promise.resolve({
            id: user.id,
            email: user.email,
            name: user.username,
          });
        }
        console.log("credentials", credentials);
        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ account, user }) {
      if (account?.provider === "google" || account?.provider === "github") {
        const dbUser = await getUserByEmail({ email: user.email });
        if (!dbUser) {
          await createUser({ email: user.email, username: user.name });
        }
      }
      return true;
    },
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
