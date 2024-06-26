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
import { createVideo } from "@/lib/actions/video.action";
import VideoPlayer from "@/components/shared/VideoPlayer";
import { getPresignedUrl } from "@/lib/utils";

const formSchema = z.object({
  prompt: z.string().min(2, "Enter a valid prompt").max(50),
  voice: z.string().min(2, "one of the voice should be selected").max(50),
});
interface Props {
  userId: string;
}
function CreateVideo({ userId }: Props) {
  const { toast } = useToast();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [preSignedUrl, setPreSignedUrl] = useState<{
    url: string;
    thumbUrl: string;
  }>({
    url: "",
    thumbUrl: "",
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      voice: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/`, {
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
      const newVid = await createVideo({ ...result, user: userId });
      const newVideo = JSON.parse(newVid);
      const url = await getPresignedUrl(newVideo.videos.final);
      const thumbUrl = await getPresignedUrl(newVideo.images[0][0]);
      setPreSignedUrl({ url, thumbUrl });
    } catch (error) {
      console.log(error);
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
    <div className="flex-center h-full">
      {preSignedUrl.url !== "" ? (
        <>
          <VideoPlayer
            videoSrc={preSignedUrl.url}
            imgUrl={preSignedUrl.thumbUrl}
            title=""
          />
        </>
      ) : (
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
      )}
    </div>
  );
}

export default CreateVideo;
