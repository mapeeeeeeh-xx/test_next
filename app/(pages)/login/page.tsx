"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { z } from "zod";
import { dashboardURL, registerURL } from "../../api/routes";
import { loginUser } from "@/app/api/lib/auth";

// Define the Zod schema
const loginSchema = z.object({
  identifier: z.string().min(1, { message: "Email or username is required" }), // Email or username validation
  password: z.string().min(1, { message: "Password is required" }), // Password validation
});

const Loginpage: React.FC = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the form data using zod schema
    const formData = { identifier, password };
    const validation = loginSchema.safeParse(formData);

    if (!validation.success) {
      // Handle validation errors
      setError(validation.error.issues[0].message);
      return;
    }

    try {
      console.log("Sending login request...");
      const res = await loginUser(identifier, password);
      console.log("Login response:", res);

      if (res.status === 200 && res.data.retcode === "200") {
        console.log("Login Success");
        router.push(dashboardURL); // Ensure this line is executed
      } else {
        setError(res.data.message);
      }
    } catch (err: any) {
      console.error("Login error:", err);
      setError("Login Failed. Please try again");
    }
  };

  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <div className="bg-gray-800 text-slate-500 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="identifier"
              className="block text-lg font-medium mb-2"
            >
              Email or Username
            </label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              onChange={(e) => setIdentifier(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-slate-300 text-black rounded-md font-medium hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500"
          >
            Login
          </button>
          <div className="text-center">
            <Link href={registerURL}>
              <p className="text-blue-400 hover:underline">
                No account yet? Register here
              </p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginpage;
