"use server";

import z from "zod";
import { formSchema, getInTouchFormSchema } from "@/lib/definitions";
import { revalidatePath } from "next/cache";

// type FormData = z.infer<typeof formSchema>;

export const handleFormSubmission = async (data: typeof formSchema) => {
  console.log(data);

  revalidatePath("/");
};

type ContactFormData = z.infer<typeof getInTouchFormSchema>;

export const handleContactForm = (data: ContactFormData) => {
  console.log(data);
};
