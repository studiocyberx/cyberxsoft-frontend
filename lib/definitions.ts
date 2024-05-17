import z from "zod";

export interface PageProps {
  params: { slug: string };
}

export interface FontProps {
  className: string;
  style: {
    fontFamily: string;
    fontWeight?: number;
    fontStyle?: string;
  };
  variable: string;
}

export const formSchema = z.object({
  fullname: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Enter a valid email." }).trim(),
  phone: z.coerce
    .number({
      required_error: "Telphone number required!",
      invalid_type_error: "Invalid Number!",
    })
    .positive()
    .min(11),
  company: z.string(),
  industry: z.string(),
  service: z.string(),
  budget: z.coerce
    .number({
      required_error: "Enter a budget range",
      invalid_type_error: "Enter a budget range",
    })
    .min(1, { message: "Budget cannot be 0" })
    .positive(),
});

export const getInTouchFormSchema = z.object({
  name: z.string().min(4, { message: "Cannot be empty!!!" }),
  email: z.string().email().min(5, { message: "Cannot be empty!!!" }),
  message: z
    .string({ required_error: "Required" })
    .max(350, { message: "Message cannot be longer than 350 characters" }),
});
