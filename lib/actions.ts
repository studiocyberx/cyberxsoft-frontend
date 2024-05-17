"use server";

import z from "zod";
import { formSchema, getInTouchFormSchema } from "@/lib/definitions";

// type FormData = z.infer<typeof formSchema>;

export const handleFormSubmission = async (data: FormData) => {
  const rawFormData = {
    fullname: data.get("fullname"),
    email: data.get("email"),
  };
  console.log(rawFormData);
};

type ContactFormData = z.infer<typeof getInTouchFormSchema>;

export const handleContactForm = (data: ContactFormData) => {
  console.log(data);
};
