"use client";

import * as z from "zod";
import { Code2, MessageSquare } from "lucide-react";
import { Heading } from "@/components/heading";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { ChatCompletionUserMessageParam } from "openai/resources/index.mjs";
import Empty from "@/components/empty";
import { cn } from "@/lib/utils";
import UserAvatar from "@/components/user-avatar";
import BotAvatar from "@/components/bot-avatar";
import Loader from "@/components/loader";
import CopyButton from "@/components/copy-button";

const ConversationPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionUserMessageParam[]>(
    []
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionUserMessageParam = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/conversation", {
        messages: newMessages,
      });

      setMessages((current) => [...current, response.data, userMessage]);

      form.reset();
    } catch (error: any) {
      //TODO: Open Pro Modal
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
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
                          placeholder="What is the tallest building in the world"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full bg-violet-500"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        {isLoading && (
          <div className="p-8 rounded-lg w-full">
            <Loader />
          </div>
        )}
        <div className="space-y-4 mt-4">
          {messages.length === 0 && !isLoading && (
            <Empty
              label="No conversation started."
              icon={<MessageSquare size={256} className="ghostViolet" />}
            />
          )}
        </div>
        <div className="space-y-4 mt-4">
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg border relative",
                  message.role === "user"
                    ? "bg-white border border-black/10"
                    : "bg-muted mb-12"
                )}
              >
                {message.role !== "user" && (
                  <div className="w-full bg-violet-700/10 absolute top-0 left-0 h-10">
                    <div className="flex items-center h-full justify-end">
                      <CopyButton bgColor={"bg-violet-700/60"} />
                    </div>
                  </div>
                )}
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                {Array.isArray(message.content) ? (
                  message.content.map((part) => (
                    <span key={part.type}>{part.type}</span>
                  ))
                ) : (
                  <p
                    className={cn(
                      "text-sm overflow-hidden leading-7",
                      message.role !== "user" && "mt-8"
                    )}
                  >
                    {message.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationPage;
