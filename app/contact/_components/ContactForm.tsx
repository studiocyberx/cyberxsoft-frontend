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
import { useFormState } from "react-dom";
import { useRef } from "react";
import { Label } from "@/components/ui/label";

const initialState = { message: "", errors: {} };
const ContactForm = () => {
  const [state, formAction] = useFormState(handleContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof getInTouchFormSchema>>({
    resolver: zodResolver(getInTouchFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  if (state && state.success) {
    toast({
      title: "Success",
      variant: "success",
      description: state.message,
    });
  } else if (state?.errors?.message) {
    toast({
      title: "Error",
      variant: "destructive",
      description: state.errors?.message,
    });
  }
  return (
    <Card className="max-w-4xl mx-auto bg-gray-200 border-none shadow-md overflow-hidden gap-8 p-8">
      <form
        action={async (formData: FormData) => {
          formAction(formData);
          formRef.current?.reset();
        }}
        ref={formRef}
        className="space-y-3"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <FormItem>
            <Label htmlFor="name">Name *</Label>

            <Input
              name="name"
              required
              placeholder="Enter Name"
              className="text-black"
            />
          </FormItem>
          <FormItem>
            <Label htmlFor="email">Email *</Label>

            <Input
              required
              name="email"
              type="email"
              placeholder="Enter Email"
              className="text-black"
            />
          </FormItem>
        </div>
        <FormItem>
          <Label htmlFor="message">Message</Label>

          <Textarea
            name="message"
            placeholder="Type Your Message..."
            className="resize-y text-black"
          />
        </FormItem>

        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>

        <SubmitButton
          className="bg-custom-purple-400 hover:bg-custom-purple-500 hover:text-white uppercase px-10 py-6 text-xl"
          text="Send "
        />
      </form>
    </Card>
  );
};

export default ContactForm;
