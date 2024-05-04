"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import CustomButton from "@/components/shared/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  email: z.string().min(8, {
    message: "email must be at least 8 characters.",
  }),
  password: z
    .string()
    .min(8, {
      message: "password must be at least 8 characters.",
    })
    .max(30, {
      message: "password must be at less than 30 characters.",
    }),
  confirmPassword: z
    .string()
    .min(8, {
      message: "password must be at least 8 characters.",
    })
    .max(30, {
      message: "password must be at less than 30 characters.",
    }),
});

const Page = () => {
  const { data: session } = useSession();
  if (session) {
    redirect("/dashboard");
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, username, lastName, firstName, password, confirmPassword } =
      values;
    if (password !== confirmPassword) {
      return;
    }
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          username,
          lastName,
          firstName,
          password,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Process response here
      console.log("Registration Successful", response);
    } catch (error: any) {
      console.error("Registration Failed:", error);
    }
  }
  return (
    <>
      <div className="grid min-h-screen md:grid-cols-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 grid-rows-11-max gap-x-4 gap-y-6 px-20 py-4 max-xs:px-10"
          >
            <Link
              href="/"
              className="my-10 text-xl text-light-700 duration-300 hover:text-light-400"
            >
              &#8592;
            </Link>
            <h1 className="h1-bold col-span-2 text-light-700">Documentrio</h1>
            <p className="col-span-2 text-light-700">
              Welcome to the Documentrio
            </p>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="max-lg:col-span-2">
                  <FormLabel className="mb-1 text-dark-300">
                    First Name
                  </FormLabel>

                  <FormControl>
                    {/* <span className="input-gradient flex rounded-md p-px"> */}
                    <Input
                      placeholder="First Name"
                      className="border border-solid !border-dark-500 bg-dark-600 text-dark-300 outline-none transition-all duration-300 ease-linear focus:shadow-input"
                      {...field}
                    />
                    {/* </span> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="max-lg:col-span-2">
                  <FormLabel className="mb-1 text-dark-300">
                    Last Name
                  </FormLabel>

                  <FormControl>
                    {/* <span className="input-gradient flex rounded-md p-px"> */}
                    <Input
                      placeholder="Last Name"
                      className="border border-solid !border-dark-500 bg-dark-600 text-dark-300 outline-none transition-all duration-300 ease-linear focus:shadow-input"
                      {...field}
                    />
                    {/* </span> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="max-lg:col-span-2">
                  <FormLabel className="mb-1 text-dark-300">Username</FormLabel>

                  <FormControl>
                    {/* <span className="input-gradient flex rounded-md p-px"> */}
                    <Input
                      placeholder="Username"
                      className="border border-solid !border-dark-500 bg-dark-600 text-dark-300 outline-none transition-all duration-300 ease-linear focus:shadow-input"
                      {...field}
                    />
                    {/* </span> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="max-lg:col-span-2">
                  <FormLabel className="mb-1 text-dark-300">Email</FormLabel>

                  <FormControl>
                    {/* <span className="input-gradient flex rounded-md p-px"> */}
                    <Input
                      placeholder="Email"
                      className="border border-solid !border-dark-500 bg-dark-600 text-dark-300 outline-none transition-all duration-300 ease-linear focus:shadow-input"
                      {...field}
                    />
                    {/* </span> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="max-lg:col-span-2">
                  <FormLabel className="mb-1 text-dark-300">Password</FormLabel>

                  <FormControl>
                    {/* <span className="input-gradient flex rounded-md p-px"> */}
                    <Input
                      placeholder="Password"
                      className="border border-solid !border-dark-500 bg-dark-600 text-dark-300 outline-none transition-all duration-300 ease-linear focus:shadow-input"
                      {...field}
                    />
                    {/* </span> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="max-lg:col-span-2">
                  <FormLabel className="mb-1 text-dark-300">
                    confirmPassword
                  </FormLabel>

                  <FormControl>
                    {/* <span className="input-gradient flex rounded-md p-px"> */}
                    <Input
                      placeholder="confirmPassword"
                      className="border border-solid !border-dark-500 bg-dark-600 text-dark-300 outline-none transition-all duration-300 ease-linear focus:shadow-input"
                      {...field}
                    />
                    {/* </span> */}
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <span className="col-span-2 flex items-center gap-4">
              <Checkbox id="terms" className="border border-white" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none text-light-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree with{" "}
                <span className="text-dayBlue-600"> terms & conditions</span>
              </label>
            </span>
            <CustomButton
              type="submit"
              title="Sign Up"
              style="ocotonary"
              otherClasses="h-max col-span-2"
            />
            <span className="hr-lines col-span-2 px-2 text-center text-light-700">
              or continue with
            </span>
            <Button
              type="button"
              className="h-max bg-dark-600 py-4 text-dark-300 transition-all duration-200 hover:bg-dark-700 hover:text-dark-200 active:bg-dark-500 max-lg:col-span-2"
            >
              <Image
                src="/icons/google.svg"
                width={20}
                height={20}
                alt="Google"
                className="mr-1"
              />
              Google Account
            </Button>
            <Button
              type="button"
              className="h-max bg-dark-600 py-4 text-dark-300 transition-all duration-200 hover:bg-dark-700 hover:text-dark-200 active:bg-dark-500 max-lg:col-span-2"
            >
              <Image
                src="/icons/github.svg"
                width={20}
                height={20}
                alt="Google"
                className="mr-1 fill-white brightness-[118%] contrast-[100%] hue-rotate-[216deg] invert-[97%] saturate-[500%] sepia-[3%]"
              />
              Github
            </Button>
            <p className="col-span-2 mb-5 text-light-700">
              Already have an account?{" "}
              <Link
                href="/sign-in"
                className="text-dayBlue-600 transition-all duration-500 hover:text-dayBlue-500 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        </Form>
        <div className="bg-login-img bg-cover max-md:hidden"></div>
      </div>
    </>
  );
};

export default Page;
