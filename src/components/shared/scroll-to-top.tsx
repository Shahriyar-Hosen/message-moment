"use client";

import Image from "next/image";
import { Button } from "../ui/button";

export const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className="border-[3px] border-white w-20 h-20 rounded-full flex justify-center items-center absolute -top-20 right-[60px]"
    >
      <Image
        src="/icon/top.svg"
        width={24.77}
        height={14}
        alt="Scroll to Top"
      />
    </Button>
  );
};
