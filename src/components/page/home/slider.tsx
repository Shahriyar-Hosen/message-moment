"use client";

import { SubTitle } from "@/components/typography";
import Image from "next/image";
import { FC } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const data = [
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

/**
 * A full-width slider component using `react-slick`. It displays multiple images
 * in a carousel with various configurations, such as dots, autoplay, and responsiveness.
 *
 * @returns {JSX.Element} - The rendered `DiscoverSlider` component.
 */
export const DiscoverSlider: FC = () => {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <Slider
      {...settings}
      nextArrow={
        <Image
          src="/icon/right-arrow.svg"
          width={20}
          height={35}
          className="rotate-180 w-[35px]"
          style={{
            color: "transparent",
            display: "block",
            width: "20px !important",
            height: "35px !important",
          }}
          alt=""
        />
      }
    >
      {data.map(({ icon, label }, i) => (
        <div
          key={i}
          className="flex justify-center items-center gap-[27px] flex-col w-[260px] h-[242px] bg-white rounded-[20px] text-dark"
        >
          <Image src={icon} width={80} height={80} alt={label} />
          <SubTitle variant="H4">{label}</SubTitle>
        </div>
      ))}
    </Slider>
  );
};

/* 

dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],

    
    {data.map(({ icon, label, option }, i) => (
        <div
          key={i}
          className="flex justify-center items-center gap-[27px] flex-col w-[260px] h-[242px] bg-white rounded-[20px] text-dark"
        >
          <Image src={icon} width={80} height={80} alt={label} />
          <SubTitle variant="H4">{label}</SubTitle>
        </div>
      ))}
*/

import { useState } from "react";

export const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data.map((src, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <Image
                src={src.icon}
                alt={`Slide ${index}`}
                width={80}
                height={80}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};
