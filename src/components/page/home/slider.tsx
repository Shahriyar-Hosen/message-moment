"use client";

import { SubTitle } from "@/components/typography";
import Image from "next/image";
import { useState } from "react";

const defaultData = [
  {
    icon: "/images/auth-success.svg",
    label: "Secure",
  },
  {
    icon: "/images/auth-lock.svg",
    label: "Private",
  },
  {
    icon: "/images/world.svg",
    label: "Browser Based",
  },
  {
    icon: "/images/project.png",
    label: "Project Mode",
  },
];

export const DiscoverSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = [...defaultData, ...defaultData];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 4 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 4 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex justify-center items-center gap-[54px]">
      <Image
        onClick={handlePrev}
        src="/icon/right-arrow.svg"
        width={20}
        height={35}
        alt=""
        className="rotate-180"
      />
      <div className="relative overflow-hidden  max-w-[1100px]">
        <div
          className="flex transition-transform duration-700 ease-in-out gap-5"
          style={{ transform: `translateX(-${currentIndex * 25.45}%)` }}
        >
          {data.map(({ icon, label }, index) => (
            <div key={index} className="w-[260px] h-[242px] flex-shrink-0">
              <div className="flex justify-center items-center gap-[27px] flex-col w-[260px] h-[242px] bg-white rounded-[20px] text-dark">
                <Image src={icon} width={80} height={80} alt={label} />
                <SubTitle variant="H4">{label}</SubTitle>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Image
        onClick={handleNext}
        src="/icon/right-arrow.svg"
        width={20}
        height={35}
        alt=""
      />
    </div>
  );
};
