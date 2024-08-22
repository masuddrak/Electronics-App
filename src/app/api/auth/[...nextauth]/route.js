import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProviders from "next-auth/providers/credentials";

const bcrypt = require('bcryptjs');
const hadler = NextAuth({

    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60
    },
    providers: [
        CredentialsProviders({
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const { email, password } = credentials;
                if (!email || !password) return null
                // checkin email db users collection
                const db = await connectDB();
                const existuser = await db.collection("users").findOne({ email })
                if (!existuser) return null
                // checkin password in user macth 
                const matchPassword = bcrypt.compareSync(password, existuser?.password);
                if (!matchPassword) return null

                return existuser

            }
        })
    ],
    callbacks: {},
    pages: {
        signIn: "/login"
    }
})
export { hadler as GET, hadler as POST }