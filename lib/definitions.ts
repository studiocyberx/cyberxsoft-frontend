import z from "zod";

export interface PageProps {
  params: { slug: string };
}

export const formSchema = z.object({
  fullname: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  phone: z
    .number()
    .min(11, { message: "Required!!" })
    .max(12, { message: "Invalid number" }),
  company: z.string(),
  industry: z.string(),
  project: z.string({
    required_error: "Please select a project",
  }),
  service: z.string({
    required_error: "Please select a service",
  }),
  budget: z
    .number({
      required_error: "Please enter a budget range",
    })
    .min(0, { message: "Budget cannot be negative" }),
});

export const getInTouchFormSchema = z.object({
  name: z.string().min(4, { message: "Cannot be empty!!!" }),
  email: z.string().email().min(5, { message: "Cannot be empty!!!" }),
  message: z
    .string({ required_error: "Required" })
    .max(350, { message: "Message cannot be longer than 350 characters" }),
});
