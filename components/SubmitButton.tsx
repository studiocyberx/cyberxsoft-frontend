"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SubmitButton = ({
  text,
  variant,
  className,
}: {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  className?: string;
}) => {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={variant}
      type="submit"
      disabled={pending}
      aria-disabled={pending}
      className={cn(
        `bg-transparent text-white ${
          pending ? "cursor-not-allowed opacity-50" : ""
        }`,
        className
      )}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
