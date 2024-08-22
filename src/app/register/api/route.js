import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";
const bcrypt = require('bcryptjs');

export const POST = async (request) => {
    const newUser = await request.json();
    try {
        const db = await connectDB();
        const userCollection = db.collection("users");
        const hashPassword = bcrypt.hashSync(newUser.password, 14);
        const existuser = await userCollection.findOne({email:newUser.email})
        // if (existuser){
        //     return NextResponse.json({ message: "already have your account !!" }, { status: 304 });
        // }
        const resp = await userCollection.insertOne({ ...newUser, password: hashPassword });
        return NextResponse.json({ message: "User Created" }, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "Something Went Wrong", error },
            { status: 500 }
        );
    }
};