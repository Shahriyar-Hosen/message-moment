import { Container } from "@/components/common";
import { Note, P, SubTitle, Title } from "@/components/typography";
import Image from "next/image";
import { DiscoverSlider } from "./slider";

const deviceDate = [
  {
    label: "Phone",
    image: "/images/cellphone.svg",
  },
  {
    label: "Desktop",
    image: "/images/laptop.svg",
  },
  {
    label: "Tablet",
    image: "/images/tablet.svg",
  },
  {
    label: "Smart Tv",
    image: "/images/television.svg",
  },
  {
    label: "Consoles",
    image: "/images/controller.svg",
  },
];

export const Discover = () => {
  return (
    <section>
      <Container customClass="bg-dark" className="text-white pt-[70px]">
        <Title
          variant="H2"
          className="text-center max-w-[934px] mx-auto pb-10 pl-1"
        >
          Discover more from MessageMoment
        </Title>
        <DiscoverSlider />
        <div className="pt-[60px] flex flex-col justify-center items-center gap-10">
          <SubTitle variant="H4" className="text-center -mt-0.5 pl-2">
            Use MessageMoment on any device via Browser1
          </SubTitle>
          <div className="flex justify-center items-center gap-[48px] -mt-1">
            {deviceDate.map((item, i) => (
              <div
                key={i}
                className="flex justify-center items-center gap-5 flex-col"
              >
                <Image
                  src={item.image}
                  width={48}
                  height={48}
                  alt={item.label}
                />
                <P variant="P2" className="text-white leading-[23px]">
                  {item.label}
                </P>
              </div>
            ))}
          </div>

          <div className="mt-5 w-full max-w-[1096px] mx-auto border-t border-white/20">
            <Note className="text-center pt-5 pb-[33PX]">
              1Disclaimer: Compatibility may vary across different devices and
              operating systems.
            </Note>
          </div>
        </div>
      </Container>
    </section>
  );
};
