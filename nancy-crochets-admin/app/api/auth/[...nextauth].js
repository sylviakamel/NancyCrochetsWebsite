import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

// taken from https://next-auth.js.org/

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ]
})