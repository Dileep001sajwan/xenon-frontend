"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import InputBox from "../components/InputBox";
import Buttons from "../components/Button";
import useRequest from "../hooks/userRequest";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { doRequest, errors, loading } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: { username, email, password },
    onSuccess: () => {
      localStorage.setItem("token", token);
      router.push("/");
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
          Sign up for an account
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <InputBox
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
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
          <Buttons label="Sign up" loading={loading} />
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/signin"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
