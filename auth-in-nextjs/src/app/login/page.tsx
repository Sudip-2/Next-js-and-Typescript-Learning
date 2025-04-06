"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const email = useRef(null);
  const password = useRef(null);

  const onLogin = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const user = {
        email: email.current.value,
        password: password.current.value,
      };
      await axios.post("/api/users/login", user);
      toast.success(<div>logged in successfully</div>);
      router.push('/profile')
    } catch (err: any) {
      console.log(err)
      toast.error(<div>{err.response.data.error}</div>);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-svh flex justify-center items-center">
      <form
        className="w-[320px] md:w-[520px] flex flex-col items-center gap-6 outline p-6 rounded-2xl"
        onSubmit={onLogin}
      >
        <h1 className="text-xl font-semibold">Login</h1>
        <div className="w-full flex flex-col gap-2">
          {/* Email */}
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-white"
            required
            ref={email}
          />
          {/* password */}
          <Label htmlFor="Password">Password</Label>
          <Input
            type="password"
            id="Password"
            placeholder="Password"
            className="bg-white"
            required
            ref={password}
          />
        </div>
        <Button className="cursor-pointer" type="submit" disabled={loading}>
          {loading ? "Loading" : "login"}
        </Button>
        <span>
          create an account,{" "}
          <Link href="/signup" className="underline">
            signup here
          </Link>
        </span>
        <Toaster />
      </form>
    </div>
  );
}
