import { cn } from "@/lib/utils";
import { FC } from "react";

type IProps = IChildrenClassName & { customClass?: string };
export const Container: FC<IProps> = ({ children, className, customClass }) => (
  <div className={cn("bg-transparent", customClass)}>
    <div className={cn("max-w-[1440px] mx-auto px-[60px]", className)}>
      {children}
    </div>
  </div>
);
