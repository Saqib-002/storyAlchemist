"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { updateUser } from "@/lib/actions/user.action";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string(),
});

const ProfileForm = ({ user }: { user: any }) => {
  const { toast } = useToast();
  const parsedUser = JSON.parse(user);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: parsedUser.firstName || "",
      lastName: parsedUser.lastName || "",
      username: parsedUser.username || "",
      email: parsedUser.email || "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(parsedUser);
    const updatedUser = await updateUser({
      userId: parsedUser._id,
      updateData: values,
    });
    if (updatedUser) {
      toast({
        variant: "default",
        description: "Profile updated successfully",
      });
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="First Name"
                  className="border border-solid !border-dark-800 bg-light-900 text-dark-600 outline-none transition-all duration-300 ease-linear focus:shadow-input"
                  {...field}
                />
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
              <FormControl>
                <Input
                  placeholder="Last Name"
                  className="border border-solid !border-dark-800 bg-light-900 text-dark-600 outline-none transition-all duration-300 ease-linear focus:shadow-input"
                  {...field}
                />
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
              <FormControl>
                <Input
                  placeholder="email"
                  className="border border-solid !border-dark-800 bg-light-900 text-dark-600 outline-none transition-all duration-300 ease-linear focus:shadow-input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Username"
                  className="border border-solid !border-dark-800 bg-light-900 text-dark-600 outline-none transition-all duration-300 ease-linear focus:shadow-input"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-between gap-4">
          <Button
            type="submit"
            className="bg-cyan-900 text-red-50 hover:bg-cyan-700"
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProfileForm;
