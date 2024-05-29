import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Logo: FC<IClassName> = ({ className }) => (
  <Link href="/">
    <Image
      src="/logo.svg"
      width={196}
      height={46}
      className={cn("h-auto", className)}
      alt="Message Moment Logo"
    />
  </Link>
);
