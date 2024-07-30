import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";


export const authOptions: NextAuthOptions = {
  
  secret : process.env.NEXT_PUBLIC_SECRET,
  providers: [
    GitHubProvider({
        clientId: process.env.NEXT_PUBLIC_GITHUB_ID as string,
        clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET as string
      }),
  ]
};
