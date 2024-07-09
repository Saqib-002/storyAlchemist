import React, { useRef, useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import CustomButton from "@/components/shared/CustomButton";
import { AUDIOS } from "@/constants";
import { IAudios } from "@/types";

const OptionDialogue = ({ form, handleSubmitPrompt }: any) => {
  const [playing, setPlaying] = useState<string>("");
  const audioRefs = useRef<Array<HTMLAudioElement | null>>([]);
  function togglePlayback(value: string, idx: number) {
    const audio = audioRefs!.current[idx] as unknown as HTMLAudioElement;
    if (value !== playing && playing) {
      for (const audio of audioRefs.current) {
        audio?.pause();
      }
      setPlaying("");
      audio.play();
      setPlaying(value);
    } else if (playing) {
      audio?.pause();
      setPlaying("");
    } else {
      audio.play();
      setPlaying(value);
    }
  }
  return (
    <div className="flex-center absolute left-0 top-0 size-full">
      <button
        onClick={() => handleSubmitPrompt()}
        className="absolute z-10 size-full cursor-default bg-black/50"
      ></button>
      <div className="flex-center relative z-20 size-max flex-col gap-4 rounded-md border border-primary-600 bg-primary-850 p-8 text-light-700">
        <h3 className="h3-semibold mb-2">Options</h3>
        <p className="paragraph-regular mb-4 text-light-400">
          Select a voice that you like
        </p>
        <FormField
          control={form.control}
          name="voice"
          render={({ field }: any) => (
            <FormItem>
              <FormControl>
                <RadioGroup onValueChange={field.onChange} value={field.value}>
                  {AUDIOS.map(({ src, value, label }: IAudios, idx) => {
                    return (
                      <FormItem
                        className="flex items-center space-x-2"
                        key={idx}
                      >
                        <FormControl>
                          <RadioGroupItem
                            value={value}
                            id={value}
                            className="peer hidden"
                          />
                        </FormControl>
                        <audio
                          ref={(element) => {
                            audioRefs.current[idx] = element;
                          }}
                          onPlaying={() => setPlaying(value)}
                          onPause={() => setPlaying("")}
                          onEnded={() => setPlaying("")}
                          id={value}
                        >
                          <source src={src} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                        <button
                          type="button"
                          onClick={() => togglePlayback(value, idx)}
                        >
                          {playing === value ? (
                            <>&#10074;&#10074;</>
                          ) : (
                            <>&#9658;</>
                          )}
                        </button>
                        <Label
                          htmlFor={value}
                          className="cursor-pointer peer-aria-checked:text-dayBlue-500"
                        >
                          {label}
                        </Label>
                      </FormItem>
                    );
                  })}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CustomButton
          style="nonary"
          type="submit"
          title="Create Video"
          imgUrl="/icons/star.svg"
          imgLoc="after"
          otherClasses="self-end"
        />
      </div>
    </div>
  );
};

export default OptionDialogue;
