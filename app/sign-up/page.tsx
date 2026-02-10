"use client";

import Link from "next/link";
import React, { useState } from "react";
import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    const data = await fetcher([
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/sign-in`,
      "POST",
      { email, password },
    ]);

    console.log("LOGIN RESPONSE:", data);

    localStorage.setItem("token", data.token);

    router.push("/");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center gap-12">
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="font-semibold text-2xl ">Log in</h3>
          <p className="text-gray-400 ">
            Log in to enjoy your favorite dishes.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <input
            className="border border-gray-400 rounded-lg w-104 px-3 py-2 text-[14px]"
            type="text"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="border border-gray-400 rounded-lg w-104 px-3 py-2 text-[14px]"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Link href="#">Forgot password ?</Link>
        </div>

        <button
          onClick={handleLogin}
          className="bg-black h-9 rounded-lg text-white"
        >
          Let's go
        </button>

        <div className="flex gap-3 justify-center items-center">
          Don't have an account?
          <Link href="/sign-up" className="text-indigo-400">
            Sign up
          </Link>
        </div>
      </div>

      <img src="sign-in.jpg" className="w-214 h-226 rounded-2xl object-cover" />
    </div>
  );
};

export default Page;
