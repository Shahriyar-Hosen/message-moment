import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const myClass = "tracking-normal";
const variantsFn = cva("tracking-normal", {
  variants: {
    variant: {
      H3: "font-dm-sans font-normal text-[17px] leading-[24px]",
      H4: "font-jetbrains-mono font-normal text-[15px] leading-[20px]",
      H5: "font-dm-sans font-medium text-[17px] leading-[24px]",
      H6: "font-dm-sans font-medium text-[17px] leading-[24px]",
      H7: "font-dm-sans font-medium text-[17px] leading-[24px]",
    },
  },
  defaultVariants: {
    variant: "H3",
  },
});

interface SubTitleProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof variantsFn> {}

export const SubTitle = forwardRef<HTMLHeadingElement, SubTitleProps>(
  ({ className, variant = "H3", ...props }, ref) => {
    const allProps = {
      ref: ref,
      ...props,
      className: cn(variantsFn({ variant, className })),
    };
    switch (variant) {
      case "H3":
        return <h3 {...allProps} />;
      case "H4":
        return <h4 {...allProps} />;
      case "H5":
        return <h5 {...allProps} />;
      case "H6":
        return <h6 {...allProps} />;
      case "H7":
        return <h6 {...allProps} />;

      default:
        return <h3 {...allProps} />;
    }
  }
);

SubTitle.displayName = "SubTitle";
