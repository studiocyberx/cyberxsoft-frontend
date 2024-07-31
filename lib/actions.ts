"use server";

import { db } from "@/db/db";
import { subscriberEmailTable } from "@/db/schema";
import {
  formSchema,
  getInTouchFormSchema,
  newsletterEmailSchema,
} from "@/lib/definitions";
import { Transporter, createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { action } from "./safe-action";

//Function for nodemailer transporter
function getNodemailerTransporter(): Transporter {
  return createTransport({
    service: process.env.NODEMAILER_HOST as string,
    auth: {
      user: process.env.NODEMAILER_USERNAME,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });
}

export const contactFormAction = action
  .schema(getInTouchFormSchema)
  .action(async ({ parsedInput: { name, email, message } }) => {
    if (!name || !email) {
      return { success: false, message: "Please add all required fields" };
    }

    const transporter = getNodemailerTransporter();

    const mailOptions: Mail.Options = {
      from: process.env.NODEMAILER_USERNAME,
      to: process.env.NODEMAILER_USERNAME,
      subject: `Message from Contact Form`,
      text: `New Submission from ${name}
      Email: ${email}
      Message: ${message}
      `,
    };

    const sendMailPromise = () => {
      return new Promise<void>((resolve, reject) => {
        transporter.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve();
          } else {
            reject(new Error(err.message));
          }
        });
      });
    };

    try {
      await sendMailPromise();
      return { success: true, message: "Form submitted successfully" };
    } catch (error) {
      return {
        success: false,
        message: `An error occurred: ${(error as Error).message}`,
      };
    }
  });

export const quoteFormAction = action
  .schema(formSchema)
  .action(
    async ({
      parsedInput: {
        fullname,
        email,
        phone,
        company,
        industry,
        service,
        budget,
      },
    }) => {
      if (!fullname || !email || !phone || !company || !budget) {
        return { success: false, message: "Please add all required fields" };
      }

      const transport = getNodemailerTransporter();
      const mailOptions: Mail.Options = {
        from: process.env.NODEMAILER_USERNAME,
        to: process.env.NODEMAILER_USERNAME,
        subject: `New quote from ${fullname} ${email}`,
        text: `${fullname} Submitted following data: 
        Fullname: ${fullname}
        Email: ${email}
        Phone Number: ${phone}
        Company: ${company}
        Industry: ${industry}
        Service Required: ${service}
        Estimated Budget: ${budget}
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
        return { success: true, message: "Form Submitted Successfully" };
      } catch (error) {
        if (error) {
          return {
            success: false,
            message: `An error occurred: ${(error as Error).message}`,
          };
        }
      }
    }
  );

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
  const transport = getNodemailerTransporter();

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

//Handle Subscriber Email
export const subscriberEmailAction = action
  .schema(newsletterEmailSchema)
  .action(async ({ parsedInput: { email } }) => {
    if (!email) {
      return { success: false, message: "Entire a valid email" };
    }

    try {
      await db.insert(subscriberEmailTable).values({ email: email });
      return { success: true, message: "Email Sent!!" };
    } catch (err) {
      if (err)
        return {
          errors: { message: "Email already subscribed" },
          message: "Email already subscribed",
        };
    }
  });
