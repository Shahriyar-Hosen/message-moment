import { Container } from "@/components/common";
import { P, Title } from "@/components/typography";
import Image from "next/image";

export const Converse = () => {
  return (
    <section>
      <Container
        customClass="bg-gradient-to-b from-[#4949f8]/10 to-[#4949f800]"
        className="flex justify-center gap-12 items-center py-[100px] pt-[162px]"
      >
        <div className="max-w-[574px] space-y-5">
          <Title variant="H2">Converse with ease and assurance</Title>
          <P variant="P2" className="text-[17px] leading-normal pr-3">
            It is said that words cannot be unspoken, but they can be unwritten
            with MessageMoment’s in-the-moment chat service that guarantees your
            conversation is history. Start chatting now and experience the
            privacy and security of MessageMoment.
          </P>
        </div>
        <Image src="/images/converse.png" alt="" width={474} height={475} />
      </Container>
    </section>
  );
};
