import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/userModel.js";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

connectDb();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;

    const userEmail = await User.findOne({ email });
    const userName = await User.findOne({ username });
    if (userName) {
      return NextResponse.json(
        { error: "User already exists with same Username" },
        { status: 400 }
      );
    }
    if (userEmail) {
      return NextResponse.json(
        { error: "User already exists with same email" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(8);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPass,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "user Created successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
