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

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  userName: z.string().min(4, {
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      <div className="grid min-h-screen grid-cols-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4 px-20 py-4"
          >
            <h1 className="h1-bold col-span-2 text-light-700">Documentrio</h1>
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
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
                <FormItem>
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
              name="userName"
              render={({ field }) => (
                <FormItem>
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
                <FormItem>
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
                <FormItem>
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
                <FormItem>
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
              className="h-max bg-dark-600 py-4 text-dark-300 transition-all duration-200 hover:bg-dark-700 hover:text-dark-200 active:bg-dark-500"
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
              className="h-max bg-dark-600 py-4 text-dark-300 transition-all duration-200 hover:bg-dark-700 hover:text-dark-200 active:bg-dark-500"
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
        <div className="bg-login-img bg-cover"></div>
      </div>
    </>
  );
};

export default Page;
