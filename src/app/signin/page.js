"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputBox from "../components/InputBox";
import Buttons from "../components/Button";
import useRequest from "../hooks/userRequest";

export default function Example() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { doRequest, errors, loading } = useRequest({
    url: "/api/users/signIn",
    method: "post",
    body: { email, password },
    onSuccess: (token) => {
      router.push("/");
      localStorage.setItem("token", token);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await doRequest();
  };
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-6 py-8 -mt-12">
      <div className="w-full max-w-xl rounded-lg border border-gray-300 bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <InputBox
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <InputBox
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Buttons label="Sign in" loading={loading} />
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Not a member?{" "}
          <Link
            href="/signup"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
