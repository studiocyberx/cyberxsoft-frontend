"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formSchema } from "@/lib/definitions";
import SubmitButton from "@/components/SubmitButton";
import { handleFormSubmission } from "@/lib/actions";
import { toast } from "./ui/use-toast";

type FormData = z.infer<typeof formSchema>;

const QuoteForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      company: "",
      industry: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) =>
      formData.append(key, value as string)
    );
    const response = await handleFormSubmission(formData);

    if (response) {
      if (!response.errors) {
        toast({
          title: "Success",
          description: response.message,
          variant: "success",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error",
          description: response.message,
        });
      }
    }

    form.reset();
  };
  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      required
                      placeholder="Full Name *"
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
                  <FormControl>
                    <Input
                      {...field}
                      required
                      placeholder="Email *"
                      className="text-black"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      required
                      type="tel"
                      inputMode="tel"
                      autoComplete="off"
                      placeholder="Phone No. *"
                      className="text-black"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      required
                      {...field}
                      placeholder="Company Name *"
                      className="text-black"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Industry"
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
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      name="service"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="business-intelligence">
                          Business Intelligence
                        </SelectItem>
                        <SelectItem value="responsible-ai">
                          Responsible AI
                        </SelectItem>
                        <SelectItem value="cloud">Cloud</SelectItem>
                        <SelectItem value="iot">
                          Internet Of Things (IOT)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      inputMode="numeric"
                      autoComplete="off"
                      placeholder="Budget *"
                      min={0}
                      {...field}
                      className="text-black"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <SubmitButton
            className="bg-custom-purple-400 hover:bg-custom-purple-500 hover:text-white uppercase px-10 py-6 text-xl"
            text="Submit "
          />
        </form>
      </Form>
    </div>
  );
};

export default QuoteForm;
