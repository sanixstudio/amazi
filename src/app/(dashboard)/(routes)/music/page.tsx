"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { Music2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { Heading } from "@/components/heading";
import { formSchema } from "./constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Empty from "@/components/empty";
import Loader from "@/components/loader";

const MusicPage = () => {
  const router = useRouter();
  const [music, setMusic] = useState<{ audio: string }>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setMusic({ audio: "" });
      const response = await axios.post("/api/music", values);
      setMusic(response.data);
      form.reset();
    } catch (error: any) {
      //TODO: Open Pro Modal
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  console.log(music);

  return (
    <div>
      <Heading
        title="Music Generation"
        description="Generate music with your descriptive prompts"
        icon={Music2Icon}
        iconColor="text-emerald-500"
        bgColor="bg-emerald-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => {
                  return (
                    <FormItem className="col-span-12 lg:col-span-10">
                      <FormControl className="m-0 p-0">
                        <Input
                          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                          disabled={isLoading}
                          placeholder="Ex: jazz music"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full bg-emerald-700"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        {isLoading && (
          <div className="p-8 rounded-lg w-full">
            <Loader color="#15803D" />
          </div>
        )}
        <div className="space-y-4 mt-4">
          {!music === undefined && !isLoading && (
            <Empty
              label="No music generated yet."
              icon={<Music2Icon size={256} className="ghostEmerald" />}
            />
          )}
        </div>
        <div className="space-y-4 mt-4">
          {music && (
            <audio controls className="w-full mt8">
              <source src={music.audio} type="audio/wav" />
            </audio>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusicPage;
