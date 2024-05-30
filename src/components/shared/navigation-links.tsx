import { P } from "@/components/typography";
import { navLinks } from "@/lib/constant";
import Link from "next/link";
import { FC } from "react";

export type IIsNav = { nav?: boolean };
export const NavigationLinks: FC<IIsNav> = ({ nav }) => (
  <div className="flex justify-start items-center gap-[30px]">
    {navLinks.slice(0, nav ? 2 : 4).map(({ title, href }) => (
      <Link key={title} href={href} className="hover:text-primary">
        <P variant="P3" className={nav ? "text-[16px]" : "text-dark"}>
          {title}
        </P>
      </Link>
    ))}
  </div>
);
