"use client";
import React, { useState } from "react";
import { signIn, useSession } from "next-auth/react";
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
import CustomButton from "@/components/shared/CustomButton";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const formSchema = z.object({
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
});

const Page = () => {
  const [error, setError] = useState<string>("");

  const { data: session } = useSession();
  if (session) {
    redirect("/dashboard");
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values;

    try {
      const response: any = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (response.status === 401) {
        setError("Invalid email or password");
        return;
      }
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Process response here
      console.log("Login Successful", response);
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
            className="grid grid-cols-2 grid-rows-8-max gap-x-4 gap-y-6 px-20 py-4 max-xs:px-10"
          >
            <Link
              href="/"
              className="my-10 text-xl text-light-700 duration-300 hover:text-light-400"
            >
              &#8592;
            </Link>
            <h1 className="h1-bold col-span-2 text-light-700">Documentrio</h1>
            <p className="col-span-2 text-light-700">
              Welcome back to the Documentrio
            </p>
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
                      type="password"
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
            <span className="col-span-2 text-center text-red-500">{error}</span>
            <CustomButton
              type="submit"
              title="Sign In"
              style="ocotonary"
              otherClasses="h-max col-span-2"
            />
            <span className="hr-lines col-span-2 my-2 px-2 text-center text-light-700">
              or continue with
            </span>
            <Button
              type="button"
              className="h-max bg-dark-600 py-4 text-dark-300 transition-all duration-200 hover:bg-dark-700 hover:text-dark-200 active:bg-dark-500 max-lg:col-span-2"
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/dashboard",
                })
              }
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
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/dashboard",
                })
              }
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
            <p className="col-span-2 text-light-700">
              Don&apos;t have an account?{" "}
              <Link
                href="/sign-up"
                className="text-dayBlue-600 transition-all duration-500 hover:text-dayBlue-500 hover:underline"
              >
                Register
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
