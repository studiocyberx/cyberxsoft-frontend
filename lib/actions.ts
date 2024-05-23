"use server";

import { db } from "@/db/db";
import { subscriberEmailTable } from "@/db/schema";
import {
  formSchema,
  getInTouchFormSchema,
  newsletterEmailSchema,
} from "@/lib/definitions";
import { redirect } from "next/navigation";
import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import z from "zod";

export const handleFormSubmission = async (formdata: FormData) => {
  //Get data from the form
  const data = formSchema.safeParse({
    fullname: formdata.get("fullname"),
    email: formdata.get("email"),
    phone: formdata.get("phone"),
    company: formdata.get("company"),
    industry: formdata.get("industry"),
    service: formdata.get("service"),
    budget: formdata.get("budget"),
  });

  //Check for errors in the form
  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
      message: "Please fill all required fields",
    };
  }

  //Nodemailer config
  const transport = createTransport({
    service: process.env.NODEMAILER_HOST as string,
    auth: {
      user: process.env.NODEMAILER_USERNAME,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_USERNAME,
    to: process.env.NODEMAILER_USERNAME,
    subject: `Message from ${data.data.fullname} ${data.data.email}`,
    text: `${data.data.fullname} Submitted following data: 
    Fullname: ${data.data.fullname}
    Email: ${data.data.email}
    Phone Number: ${data.data.phone}
    Company: ${data.data.company}
    Industry: ${data.data.industry}
    Service Required: ${data.data.service}
    Estimated Budget: ${data.data.budget}
    `,
  };

  const sendMailPromise = () =>
    new Promise<void>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve();
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return { message: "Form Submitted Successfully" };
  } catch (error) {
    if (error) {
      return {
        errors: { message: "An error occured" },
        message: "An error occured",
      };
    }
  }
};

export const handleContactForm = async (prevState: any, formdata: FormData) => {
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

  //Nodemailer config
  const transport = createTransport({
    service: process.env.NODEMAILER_HOST as string,
    auth: {
      user: process.env.NODEMAILER_USERNAME,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_USERNAME,
    to: process.env.NODEMAILER_USERNAME,
    subject: `Message from Contact Form`,
    text: `New Submission from ${data.data.name}
    Email: ${data.data.email}
    Message: ${data.data.message}
    `,
  };
  const sendMailPromise = () =>
    new Promise<void>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve();
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return { success: true, message: "Your message was sent successfully" };
  } catch (error) {
    if (error) {
      return {
        errors: { message: "An error occured" },
        message: "An error occured",
      };
    }
  }
};

export const subscriberEmail = async (formdata: FormData) => {
  const parseResult = newsletterEmailSchema.safeParse({
    email: formdata.get("email"),
  });

  if (!parseResult.success) {
    return {
      errors: parseResult.error.flatten().fieldErrors,
      message: "Email is not correct",
    };
  }

  try {
    await db
      .insert(subscriberEmailTable)
      .values({ email: parseResult.data.email });

    return { message: "Email subscribed!!" };
  } catch (err) {
    if (err) {
      return {
        errors: { email: "Email already exists" },
        message: "Email already subscribed",
      };
    }
  }
};
