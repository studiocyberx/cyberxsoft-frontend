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
      className={cn("bg-transparent text-white", className)}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
