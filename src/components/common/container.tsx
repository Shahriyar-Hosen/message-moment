import { cn } from "@/lib/utils";
import { FC } from "react";

export const Container: FC<IChildrenClassName> = ({ children, className }) => (
  <div className={cn("bg-transparent", className)}>
    <div className="max-w-[1440px] mx-auto">{children} </div>
  </div>
);
