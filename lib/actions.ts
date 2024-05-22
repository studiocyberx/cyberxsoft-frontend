"use server";

import { db } from "@/db/db";
import { subscriberEmailTable } from "@/db/schema";
import {
  formSchema,
  getInTouchFormSchema,
  newsletterEmailSchema,
} from "@/lib/definitions";
import { redirect } from "next/navigation";
import z from "zod";

export const handleFormSubmission = async (formdata: FormData) => {
  const data = formSchema.safeParse({
    fullname: formdata.get("fullname"),
    email: formdata.get("email"),
    phone: formdata.get("phone"),
    company: formdata.get("company"),
    industry: formdata.get("industry"),
    service: formdata.get("service"),
    budget: formdata.get("budget"),
  });

  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
      message: "Please fill all required fields",
    };
  }

  console.log(data);
  return { message: "Form Submitted Successfully" };
};

export const handleContactForm = async (prev: any, formdata: FormData) => {
  const data = getInTouchFormSchema.safeParse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    message: formdata.get("message"),
  });

  if (!data.success) {
    console.log(data.error.flatten().fieldErrors);
    return {
      errors: data.error.flatten().fieldErrors,
      message: "Please fill all required fields",
    };
  }

  redirect("/");
};

export const getDatabase = async () => {
  // await db.insert(subscriberEmailTable).values({
  //   email: "test2@mail.com",
  // });

  const user = await db.query.subscriberEmailTable.findMany();
  console.log(user);
};

export const sendEmail = async (formdata: FormData) => {
  console.log(formdata);
  const parseResult = newsletterEmailSchema.safeParse({
    email: formdata.get("email"),
  });

  if (!parseResult.success) {
    return {
      errors: parseResult.error.flatten().fieldErrors,
      message: "Email is not correct",
    };
  }

  await db
    .insert(subscriberEmailTable)
    .values({ email: parseResult.data.email });

  return { message: "Email subscribed!!" };
};
