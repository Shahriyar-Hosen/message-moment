import { Container } from "@/components/common";
import { Note, P, SubTitle, Title } from "@/components/typography";
import Image from "next/image";
import { DiscoverSlider } from "./slider";

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
    option: true,
  },
];

const date2 = [
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
        <Title variant="H2" className="text-center max-w-[934px] mx-auto">
          Discover more from MessageMoment
        </Title>
        <div className="flex justify-center items-center gap-[54px] pt-10">
          {/* <Image
            src="/icon/right-arrow.svg"
            width={35}
            height={20}
            className="rotate-180"
            alt=""
          /> */}
          <div className="w-full h-fit ">
            <DiscoverSlider />
          </div>
          {/* <Image src="/icon/right-arrow.svg" width={35} height={20} alt="" /> */}
        </div>
        <div className="pt-[60px] flex flex-col justify-center items-center gap-10">
          <SubTitle variant="H4" className="text-center">
            Use MessageMoment on any device via Browser1
          </SubTitle>
          <div className="flex justify-center items-center gap-[50px]">
            {date2.map((item, i) => (
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

          <div className="mt-5 w-full max-w-[1096px] mx-auto border-t border-white">
            <Note className="text-center pt-5 pb-10">
              1Disclaimer: Compatibility may vary across different devices and
              operating systems.
            </Note>
          </div>
        </div>
      </Container>
    </section>
  );
};
