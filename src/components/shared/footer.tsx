import { Container, Logo } from "@/components/common";
import { Note } from "@/components/typography";
import Image from "next/image";
import { NavigationLinks, ScrollToTop, SocialIcon } from ".";

export const Footer = () => {
  return (
    <footer className="pt-10">
      <Container className="flex flex-col justify-center items-center gap-[50px] pb-[50px]">
        <ScrollToTop />
        <Logo />
        <NavigationLinks />
      </Container>
      <div className="border-t">
        <Container className="py-8 flex justify-between items-center">
          <Note className="text-dark-gray">
            Copyright &copy; {new Date().getFullYear()} MessageMoment. All
            rights reserved.
          </Note>
          <SocialIcon />
          <Note className="flex justify-center items-center gap-2.5">
            Designed By
            <Image
              src="/icon/designed-by.svg"
              width={17}
              height={17}
              alt="Designed By"
            />
          </Note>
        </Container>
      </div>
    </footer>
  );
};
