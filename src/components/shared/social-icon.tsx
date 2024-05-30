import { social } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IIsNav } from ".";

export const SocialIcon: FC<IIsNav> = ({ nav }) => {
  const data = nav
    ? social
    : social.map((item) => {
        const obj = (width: number, height: number) => ({
          ...item,
          image: {
            ...item.image,
            width: width,
            height: height,
          },
        });
        if (item.title === "X" || item.title === "Instagram") {
          return obj(23, 23);
        }
        if (item.title === "Facebook") return obj(25, 25);
        if (item.title === "Youtube") return obj(28, 23);
        return item;
      });

  return (
    <div className="flex justify-start items-center gap-[20px]">
      {data.map(({ title, href, image }) => (
        <Link key={title} href={href} className="hover:text-primary">
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={title}
            className={(title === "Youtube" && "min-w-[27.5px]") || ""}
          />
        </Link>
      ))}
    </div>
  );
};
