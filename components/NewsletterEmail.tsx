"use client";

import z from "zod";
import React from "react";
import { Input } from "./ui/input";
import SubmitButton from "./SubmitButton";
import { subscriberEmail } from "@/lib/actions";
import { toast } from "./ui/use-toast";
import { useForm } from "react-hook-form";
import { newsletterEmailSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";

type FormData = z.infer<typeof newsletterEmailSchema>;

const NewsletterEmail = () => {
  const form = useForm<z.infer<typeof newsletterEmailSchema>>({
    resolver: zodResolver(newsletterEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) =>
      formData.append(key, value as string)
    );
    const response = await subscriberEmail(formData);
    console.log(response);

    if (response) {
      if (!response.errors) {
        toast({
          title: "Success",
          description: response.message,
          variant: "success",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: response.message,
        });
      }
    }
  };
  return (
    <div>
      <Form {...form}>
        <form
          className="flex items-center pt-4 max-w-lg"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    required
                    placeholder="Subscribe To Newsletter"
                    className="rounded-l-sm rounded-r-none text-black"
                  />
                </FormControl>

                <FormMessage className="absolute" />
              </FormItem>
            )}
          />

          <SubmitButton
            text="Subscribe"
            className="rounded-r-sm rounded-l-none bg-custom-purple-300/50 hover:bg-custom-purple-300 px-8"
          />
        </form>
      </Form>
    </div>
  );
};

export default NewsletterEmail;
