"use client";
import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Textarea } from "@/components/ui/textarea";
import CustomButton from "@/components/shared/CustomButton";
import { useToast } from "@/components/ui/use-toast";
import OptionDialogue from "./OptionDialogue";

const formSchema = z.object({
  prompt: z.string().min(2).max(50),
  voice: z.string().min(2).max(50),
});
interface Props {
  userId: string;
  voice: string;
}
function CreateVideo({ userId }: Props) {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      voice: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await fetch("/api/createVideo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          ...values,
        }),
      })
        .then(async (res) => {
          return await res.json();
        })
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  }
  const handleSubmitPrompt = () => {
    const values = form.getValues();
    console.log(values);
    if (values.prompt.length <= 2) {
      toast({
        variant: "destructive",
        description: "Enter a prompt first",
      });
    } else {
      setIsDialogOpen(!isDialogOpen);
    }
  };
  return (
    <div className="h-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex-center mx-auto w-max flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Give me a simple prompt or detailed instructions"
                    className="no-focus w-[600px] resize-none border-primary-200 bg-dark-600"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <CustomButton
            style="nonary"
            type="button"
            onClick={() => handleSubmitPrompt()}
            title="Create Video"
            imgUrl="/icons/star.svg"
            imgLoc="after"
            otherClasses="self-end"
          />
          {isDialogOpen && (
            <OptionDialogue
              form={form}
              isDialogOpen={isDialogOpen}
              handleSubmitPrompt={handleSubmitPrompt}
            />
          )}
        </form>
      </Form>
    </div>
  );
}

export default CreateVideo;
