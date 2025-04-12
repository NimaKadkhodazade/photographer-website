"use client";

import Link from "next/link";
import Input from "./Input";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AuthForm() {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password: pass,
      options: {
        data: {
          first_name: "نیما",
          last_name: "کدخدازاده",
        },
      },
    });

    if (error) {
      setMessage(`خطا: ${error.message}`);
    } else {
      setMessage("ثبت‌نام با موفقیت انجام شد! لطفا ایمیل‌ت رو چک کن.");
    }
  };

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSignUp}>
      <div className="w-ful">
        <p className="text-3xl">Create Account</p>
      </div>
      <div>
        <p className="text-sm font-light">
          Already have an account?{" "}
          <Link href="/" className="underline text-blue-900">
            Log in
          </Link>
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
      <button className="cursor-pointer border-2 border-white" type="submit">
        Create Account
      </button>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </form>
  );
}
