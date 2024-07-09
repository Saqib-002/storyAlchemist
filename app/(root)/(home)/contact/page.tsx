"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CustomButton from "@/components/shared/CustomButton";
import { useToast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string(),
  email: z.string(),
  subject: z.string(),
  message: z.string(),
});

const Page = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.email === "") {
      toast({
        variant: "destructive",
        description: "Please enter your email",
      });
      return;
    }
    if (values.message === "") {
      toast({
        variant: "destructive",
        description: "Message can't be empty",
      });
      return;
    }
    const OPTIONS = {
      publicKey: "z8AyekktlBiCMxwAq",
      // Do not allow headless browsers
      blockHeadless: true,
      blockList: {
        // Block the suspended emails
        list: [],
        watchVariable: "userEmail",
      },
      limitRate: {
        id: "app",
        throttle: 10000,
      },
    };
    const templateParams = {
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    };

    emailjs
      .send("service_vd76xh3", "template_t4grpvp", templateParams, OPTIONS)
      .then(
        (response) => {
          toast({
            variant: "default",
            description: "Your message has been received",
          });
        },
        (error) => {
          console.log(error);
          toast({
            variant: "destructive",
            description: "Your message was not able to be send",
          });
        }
      );
  }
  function resetForm() {
    form.reset();
  }
  return (
    <div className="">
      <header className="py-12 text-center text-white">
        <h1 className="mt-16 text-4xl font-bold">Contact Us</h1>
      </header>
      <section className="px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-white">Get In Touch</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white">
          We are here to help you. Reach out to us via any of the following
          methods.
        </p>
        <div className=" mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          <div className="primary-gradient scale-90 rounded-lg border border-solid border-cyan-500 p-4 text-light-800  shadow-md  transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Call Us</h3>
            <p className="mt-2">+1 123 456 7890</p>
          </div>
          <div className="primary-gradient scale-90 rounded-lg border border-solid border-cyan-500 p-4 text-light-800 shadow-md transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="mt-2">contact@wisedoctors.com</p>
          </div>
          <div className="primary-gradient scale-90 rounded-lg border border-solid border-cyan-500 p-4 text-light-800 shadow-md transition-colors hover:scale-100">
            <h3 className="text-xl font-bold">Visit Us</h3>
            <p className="mt-2">123 Health St, Wellness City</p>
          </div>
        </div>
      </section>
      <div className="primary-gradient flex min-h-screen flex-col justify-center py-6 sm:py-12">
        <div className="relative py-3 sm:mx-auto sm:max-w-xl">
          <div className="absolute inset-0 -skew-y-6 bg-gradient-to-r from-cyan-700 to-blue-700 shadow-lg sm:-rotate-6 sm:skew-y-0 sm:rounded-3xl"></div>
          <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-10 text-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="pb-6 text-center">
              <h1 className="text-3xl">Contact Us!</h1>

              <p className="text-gray-300">
                Fill up the form below to send us a message.
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Name"
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
                          placeholder="Email"
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
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Subject"
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          placeholder="Message"
                          className="resize-none  !border-dark-200 bg-light-900 text-dark-600 outline-none transition-all duration-300 ease-linear focus:shadow-input focus-visible:!ring-transparent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between gap-4">
                  <Button
                    type="button"
                    className="bg-red-600 text-red-50 hover:bg-red-800"
                    onClick={resetForm}
                  >
                    Reset
                  </Button>
                  <CustomButton style="senary" type="submit" title="Send ➤" />
                  {/* <Button type="submit">Send ➤</Button> */}
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <section className="px-4 py-12 text-center text-light-800">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-8">
          <div className="scale-90 rounded-lg border border-cyan-500 p-4 shadow-md transition hover:scale-95">
            <h3 className="text-xl font-bold text-light-800">
              What are your operating hours?
            </h3>
            <p className="mt-2 text-light-800">
              We operate from 9 AM to 5 PM, Monday to Friday.
            </p>
          </div>
          <div className="mt-4 scale-90 rounded-lg border border-cyan-500 p-4 text-light-800 shadow-md transition hover:scale-95">
            <h3 className="text-xl font-bold">
              How can I book an appointment?
            </h3>
            <p className="mt-2">
              You can book an appointment through our website or by calling our
              office.
            </p>
          </div>
          <div className="mt-4 scale-90 rounded-lg border border-cyan-500 p-4 text-light-800 shadow-md transition hover:scale-95">
            <h3 className="text-xl font-bold">
              Do you offer telemedicine services?
            </h3>
            <p className="mt-2">Yes, we offer telemedicine consultations.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
