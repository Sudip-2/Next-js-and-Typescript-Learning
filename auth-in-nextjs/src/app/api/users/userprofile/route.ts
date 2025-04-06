import getDataFromJWT from "@/helpers/getDataFromJWT";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import {connectDb} from "@/dbConfig/dbConfig"

connectDb()

export async function GET(req:NextRequest) {
  try{
    const token = getDataFromJWT(req);
    const user = await User.findOne({_id:token}).select("-password") // means pass word not selected
    return NextResponse.json({data:user})
  }catch(err:any){
    return NextResponse.json({error:err.message})
  }
}