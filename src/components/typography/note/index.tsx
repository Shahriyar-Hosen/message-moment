import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const noteVariants = cva("common style", {
  variants: {
    variant: {
      N1: "n1 style",
      N2: "n2 style",
    },
  },
  defaultVariants: {
    variant: "N1",
  },
});

interface NoteProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof noteVariants> {}

export const Note = forwardRef<HTMLParagraphElement, NoteProps>(
  ({ className, variant, ...props }, ref) => (
    <p
      ref={ref}
      {...props}
      className={cn(noteVariants({ variant, className }))}
    />
  )
);

Note.displayName = "Note";
