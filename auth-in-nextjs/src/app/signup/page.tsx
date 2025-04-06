"use client";
import Link from "next/link";
import React, { use, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast, { Toaster } from "react-hot-toast";

export default function SignupPage() {
  const router = useRouter();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [loading, setLoading] = useState(false);

  const onSignup = async (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      const user = {
        username: name.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      await axios.post("/api/users/signup", user);
      toast.success(<div>signed up successfully</div>);
      router.push("/login");
    } catch (err: any) {
      toast.error(<div>{err.response.data.error}</div>);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-svh flex justify-center items-center">
        <form
          className="w-[320px] md:w-[520px] flex flex-col items-center gap-6 outline p-6 rounded-2xl"
          onSubmit={onSignup}
        >
          <h1 className="text-xl font-semibold">Signup</h1>
          <div className="w-full flex flex-col gap-2">
            {/* userName */}
            <Label htmlFor="Username">Username</Label>
            <Input
              type="text"
              id="Username"
              placeholder="Username"
              className="bg-white"
              ref={name}
              required
            />
            {/* Email */}
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Email"
              className="bg-white"
              ref={email}
              required
            />
            {/* password */}
            <Label htmlFor="Password">Password</Label>
            <Input
              type="password"
              id="Password"
              placeholder="Password"
              className="bg-white"
              ref={password}
              required
            />
          </div>
          <Button className="cursor-pointer" type="submit" disabled={loading}>
            {loading ? "Loading" : "signup"}
          </Button>
          <span>
            have an account,{" "}
            <Link href="/login" className="underline">
              login here
            </Link>
          </span>
        </form>
        <Toaster position="top-center" />
      </div>
    </>
  );
}
