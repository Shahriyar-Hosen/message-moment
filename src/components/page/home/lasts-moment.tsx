import { Container } from "@/components/common";
import { P, Title } from "@/components/typography";
import Image from "next/image";

export const LastsMoment = () => {
  return (
    <section>
      <Container
        customClass="bg-gradient-lite"
        className="flex justify-evenly gap-5 items-center py-[100px] pb-[91px]"
      >
        <Image
          src="/images/lasts-moment.png"
          alt=""
          width={485}
          height={220}
          className="-mt-4"
        />
        <div className="max-w-[566px] space-y-5  pt-4 pr-4">
          <Title variant="H2">Your message only lasts a moment</Title>
          <P variant="P2" className="text-[17px] leading-normal pr-3">
            We believe that words can be a powerful tool for connection and
            communication, but it&apos;s also true that words cannot be
            unspoken. That&apos;s why we created a live chat service that lets
            you unwrite those words, with a unique chat link and a secure,
            in-the-moment chat experience.
          </P>
        </div>
      </Container>
    </section>
  );
};
