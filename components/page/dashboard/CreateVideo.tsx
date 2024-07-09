"use client";
import React, { useEffect, useState } from "react";
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
import { createVideo } from "@/lib/actions/video.action";
import { useRouter } from "next/navigation";
import AutoScrollCarousel from "@/components/shared/AutoScrollCarousel";
import { createCreation } from "@/lib/actions/creation.action";
import { deductUserCredits, getUserById } from "@/lib/actions/user.action";
import LottieAnimation from "@/components/ui/loading-animation";
import { PROMPTS1, PROMPTS2 } from "@/constants";

const formSchema = z.object({
  prompt: z.string().min(2, "Enter a valid prompt").max(50),
  voice: z.string().min(2, "one of the voice should be selected").max(50),
});
interface Props {
  userId: string;
}
function CreateVideo({ userId }: Props) {
  const { toast } = useToast();
  const router = useRouter();
  const [prompt, setPrompt] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      voice: "",
    },
  });
  useEffect(() => {
    if (prompt !== "") {
      form.setValue("prompt", prompt);
      setPrompt("");
    }
  }, [prompt]);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsCreating(true);
      const user = JSON.parse(await getUserById({ userId }));
      if (user.credits < 3) {
        toast({
          variant: "destructive",
          description: "Low Credits",
        });
        return;
      }
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/`, {
        next: { tags: ["videos"] },
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          ...values,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (result.error) {
        toast({
          variant: "destructive",
          description: result.error,
        });
        return;
      }
      const newVid = await createVideo({
        ...result,
        title: values.prompt,
        user: userId,
      });
      const newVideo = JSON.parse(newVid);
      await createCreation({
        user: userId,
        createdAt: Date.now(),
        creditsConsumed: 3,
      });
      await deductUserCredits({ userId });
      router.push(`/videos/${newVideo._id}`);
    } catch (error) {
      console.log(error);
      toast({
        variant: "destructive",
        description: "Server not responding",
      });
    } finally {
      setIsCreating(false);
    }
  }
  const handleSubmitPrompt = () => {
    const values = form.getValues();
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
    <div className="flex size-full flex-col items-center justify-around">
      {isCreating ? (
        <div className="relative rounded-full bg-light-700 [&>div>svg]:!size-max">
          <p className="body-semibold absolute left-[4.7rem] top-10 text-dark-700">
            Please be Patient
          </p>
          <LottieAnimation />
          <p className="body-semibold absolute bottom-[24px] left-[4.7rem] w-[140px] text-center text-dark-700">
            your video is in progress...
          </p>
        </div>
      ) : (
        <Form {...form}>
          <div className="relative w-[1024px]">
            <div className="left-floating-gradient absolute z-[999] h-full w-6"></div>
            <AutoScrollCarousel
              setPrompt={setPrompt}
              direction="forward"
              data={PROMPTS1}
            />
            <AutoScrollCarousel
              setPrompt={setPrompt}
              direction="backward"
              data={PROMPTS2}
            />
            <div className="right-floating-gradient absolute right-0 top-0 z-[999] h-full w-6"></div>
          </div>
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
                      className="no-focus resize-none border-primary-200 bg-dark-600 xs:w-[300px] md:w-[600px]"
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
      )}
    </div>
  );
}

export default CreateVideo;
