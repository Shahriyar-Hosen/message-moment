import { Container } from "@/components/common";
import { P, Title } from "@/components/typography";
import Image from "next/image";

export const Converse = () => {
  return (
    <section>
      <Container
        customClass="bg-gradient-lite"
        className="flex justify-center gap-10 items-center py-[100px] pt-[145px]"
      >
        <div className="space-y-5 ">
          <Title variant="H2" className="max-w-[577px] pt-8">
            Converse with ease and assurance
          </Title>
          <P variant="P2" className="text-[17px] leading-normal max-w-[538px]">
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
