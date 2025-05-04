import { connectDb } from "@/dbConfig/dbConfig";
import User from "@/models/userModel.js";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connectDb();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User doesn't exist" },
        { status: 400 }
      );
    }
    const isPassOk = await bcrypt.compare(password, user.password);
    if (!isPassOk) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }
    const tokenD = {
      email: user.email,
      id: user._id,
    };
    const token = jwt.sign(tokenD, process.env.TOKEN_SECRET!, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({ message: "Login Successfull" });
    response.cookies.set("token", token, { httpOnly: true ,expires:new Date(Date.now() + 24 * 60 * 60 * 1000)});
    return response;
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
