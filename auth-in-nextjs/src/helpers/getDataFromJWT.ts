import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export default function getDataFromJWT(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value || "";
    const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
    return decodedToken.id;
  } catch (err: any) {
    throw new Error(err.message);
  }
}
