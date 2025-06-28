import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials"
import connect from "@/utils/db"
import User from "@/models/User"

export const authOptions = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      id:"credentials",
      name:"Credentials",
      async authorize (credentials){

        await connect();

        try {
          const user = await User.findOne({email:credentials.email})

          if(!user || credentials.password !== user.password){
            throw new Error("Invalid email or password")
          }

          return user;

        } catch (error) {
          throw new Error("Failed to log in" + error)
        }
      }

    }),
    // ...add more providers here
  ],
  pages: {error:"/dashboard/login"}
})

export  {authOptions as GET , authOptions as POST}