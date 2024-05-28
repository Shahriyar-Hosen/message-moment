import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const variantsFn = cva(
  "font-medium text-[13px] leading-normal tracking-normal",
  {
    variants: {
      variant: {
        N1: "font-dm-sans",
        N2: "font-jetbrains-mono",
      },
    },
    defaultVariants: {
      variant: "N1",
    },
  }
);

interface NoteProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof variantsFn> {}

export const Note = forwardRef<HTMLParagraphElement, NoteProps>(
  ({ className, variant, ...props }, ref) => (
    <p
      ref={ref}
      {...props}
      className={cn(variantsFn({ variant, className }))}
    />
  )
);

Note.displayName = "Note";
