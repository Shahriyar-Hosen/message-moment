import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const variantsFn = cva("font-dm-sans", {
  variants: {
    variant: {
      H1: "font-medium text-[80px] leading-[80px] tracking-[-2px]",
      H2: "font-bold text-[60px] leading-[70px] tracking-normal",
    },
  },
  defaultVariants: {
    variant: "H1",
  },
});

interface TitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof variantsFn> {}

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, variant = "H1", ...props }, ref) => {
    const allProps = {
      ref: ref,
      ...props,
      className: cn(variantsFn({ variant, className })),
    };

    return variant === "H2" ? <h2 {...allProps} /> : <h2 {...allProps} />;
  }
);

Title.displayName = "Title";
