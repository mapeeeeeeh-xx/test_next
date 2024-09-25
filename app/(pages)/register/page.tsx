"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import {
  useForm,
  FormProvider,
  Controller,
  SubmitHandler,
} from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/app/(pages)/components/ui/form"; // Adjust the import path as needed
import { loginURL } from "../../api/routes";
import { registerUser } from "@/app/api/lib/auth";

// Define Zod schema for form validation
const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters long" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  api: z.string().optional(),
});

// Define form data type based on Zod schema
type FormData = z.infer<typeof registerSchema>;

// Define the component
const RegisterPage: React.FC = () => {
  const router = useRouter();

  // Initialize react-hook-form with Zod resolver
  const methods = useForm<FormData>({
    resolver: zodResolver(registerSchema), // Apply Zod schema for validation
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const {
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = methods;

  // Define submit handler
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { email, username, password } = data;

    try {
      const res = await registerUser(email, username, password);
      console.log("Server Response:", res);

      if (res.retcode === "200") {
        console.log("Register Success");
        clearErrors();
        router.push(loginURL); // Replace with loginURL if you have it
      } else {
        console.log("Response Retcode:", res.retcode);
        setError("api" as keyof FormData, {
          type: "manual",
          message: res.message,
        }); // Type assertion here
      }
    } catch (e) {
      console.error("Error during registration:", e);
      setError("api" as keyof FormData, {
        type: "manual",
        message: "Register Failed. Please try again",
      }); // Type assertion here
    }
  };

  return (
    <div className="bg-black flex items-center justify-center h-screen">
      <div className="bg-gray-800 text-slate-400 p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-6 text-center">Registration</h1>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <FormItem>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormControl>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="email"
                      className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  )}
                />
              </FormControl>
              <FormDescription>Email used for registration.</FormDescription>
              <FormMessage>{errors.email?.message}</FormMessage>
            </FormItem>

            <FormItem>
              <FormLabel htmlFor="username">Username</FormLabel>
              <FormControl>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      id="username"
                      className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  )}
                />
              </FormControl>
              <FormDescription>Username for your account.</FormDescription>
              <FormMessage>{errors.username?.message}</FormMessage>
            </FormItem>

            <FormItem>
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormControl>
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="password"
                      id="password"
                      className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-900 text-slate-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                  )}
                />
              </FormControl>
              <FormDescription>Your account password.</FormDescription>
              <FormMessage>{errors.password?.message}</FormMessage>
            </FormItem>

            <FormMessage>{errors.api?.message}</FormMessage>

            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-300 text-black rounded-md font-medium hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Register
            </button>

            <span className="text-center">
              <Link href={loginURL}>
                <p className="text-blue-400 hover:underline pt-4">
                  Have an account? Log in here
                </p>
              </Link>
            </span>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default RegisterPage;
