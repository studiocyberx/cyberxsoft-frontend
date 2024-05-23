"use client";

import z from "zod";
import React, { useRef } from "react";
import { Input } from "./ui/input";
import SubmitButton from "./SubmitButton";
import { subscriberEmail } from "@/lib/actions";
import { toast } from "./ui/use-toast";
import { useForm } from "react-hook-form";
import { newsletterEmailSchema } from "@/lib/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { useFormState } from "react-dom";

const initialState = { message: "", errors: {} };
const NewsletterEmail = () => {
  const [state, formAction] = useFormState(subscriberEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  if (state && state.success) {
    toast({
      title: "Success",
      variant: "success",
      description: state.message,
    });
  } else if ((state?.errors as { message: string })?.message) {
    toast({
      title: "Error",
      variant: "destructive",
      description: (state?.errors as { message: string }).message,
    });
  }
  return (
    <div>
      <form
        className="flex items-center pt-4 max-w-xl"
        ref={formRef}
        action={async (formData: FormData) => {
          formAction(formData);
          formRef.current?.reset();
        }}
      >
        <FormItem>
          <Input
            name="email"
            required
            placeholder="Subscribe To Newsletter"
            className="rounded-l-sm rounded-r-none text-black"
          />
        </FormItem>
        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>

        <SubmitButton
          text="Subscribe"
          className="rounded-r-sm rounded-l-none bg-custom-purple-300/50 hover:bg-custom-purple-300 px-8"
        />
      </form>
    </div>
  );
};

export default NewsletterEmail;
