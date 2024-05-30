import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const variantsFn = cva("tracking-normal text-black", {
  variants: {
    variant: {
      P1: "font-dm-sans font-normal text-[17px] leading-[24px]",
      P2: "font-jetbrains-mono font-normal text-[15px] leading-[20px]",
      P3: "font-dm-sans font-medium text-[17px] leading-[24px]",
    },
  },
  defaultVariants: {
    variant: "P1",
  },
});

interface PProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof variantsFn> {}

export const P = forwardRef<HTMLParagraphElement, PProps>(
  ({ className, variant, ...props }, ref) => (
    <p
      ref={ref}
      {...props}
      className={cn(variantsFn({ variant, className }))}
    />
  )
);

P.displayName = "P";
