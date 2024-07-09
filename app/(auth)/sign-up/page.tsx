"use client";
import React, { useState } from "react";

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
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

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
function checkPassword(password: string) {
  // Regular expression explanation:
  // ^ - Matches the beginning of the string
  // (?=.*[A-Z]) - Positive lookahead assertion that ensures at least one uppercase letter (A-Z)
  // (?=.*[a-z]) - Positive lookahead assertion that ensures at least one lowercase letter (a-z)
  // (?=.*\d) - Positive lookahead assertion that ensures at least one digit (0-9)
  // (?=.*[!@#$%^&*()]) - Positive lookahead assertion that ensures at least one special character from the list
  // .{8,} - Matches at least 8 characters (adjust the number as needed)
  // $ - Matches the end of the string
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])(?=.{8,})/;
  return regex.test(password);
}
const Page = () => {
  const { data: session } = useSession();
  const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);
  const { toast } = useToast();
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
      toast({
        variant: "destructive",
        description: "Password doesnt match",
      });
      return;
    }
    if (!checkPassword(password)) {
      toast({
        variant: "destructive",
        description:
          "Password must contain atleast 1 digit,1 uppercase, 1 lowercase letter,1 special character and atleast 8 characters long",
      });
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
      const res = await response.json();
      console.log(res);
      if (res.error) {
        toast({
          variant: "destructive",
          description: res.error,
        });
        return;
      }
      toast({
        variant: "default",
        description: "Registered Successfully. Sign in please",
      });
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
                      type="password"
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
              <Checkbox
                id="terms"
                className="border border-white"
                onCheckedChange={() => setIsTermsChecked(!isTermsChecked)}
              />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none text-light-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree with{" "}
                <span className="text-dayBlue-600"> terms of use</span>
              </label>
            </span>
            <CustomButton
              otherProps={{
                disabled: !isTermsChecked,
              }}
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
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/dashboard",
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
