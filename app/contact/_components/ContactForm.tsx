"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { getInTouchFormSchema } from "@/lib/definitions";
import { toast } from "@/components/ui/use-toast";
import SubmitButton from "@/components/SubmitButton";
import { Card } from "@/components/ui/card";
import { handleContactForm } from "@/lib/actions";

const ContactForm = () => {
  const form = useForm<z.infer<typeof getInTouchFormSchema>>({
    resolver: zodResolver(getInTouchFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof getInTouchFormSchema>) {
    handleContactForm(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-full sm:w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white w-full text-wrap whitespace-pre-wrap">
            {JSON.stringify(data, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return (
    <Card className="max-w-4xl mx-auto bg-gray-200 border-none shadow-md overflow-hidden gap-8 p-8">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Enter Name"
                      {...field}
                      className="text-black"
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
                  <FormLabel>Email *</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="Enter Email"
                      type="email"
                      {...field}
                      className="text-black"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                {" "}
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type Your Message..."
                    className="resize-y text-black"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <SubmitButton
            className="bg-custom-purple-400 hover:bg-custom-purple-500 hover:text-white uppercase px-10 py-6 text-xl"
            text="Send "
          />
        </form>
      </Form>
    </Card>
  );
};

export default ContactForm;
