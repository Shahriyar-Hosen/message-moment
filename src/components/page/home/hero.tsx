import { Container } from "@/components/common";
import { SubTitle, Title } from "@/components/typography";

export const Hero = () => {
  return (
    <section>
      <Container
        customClass="bg-gradient-lite text-white"
        className="py-[50px]"
      >
        <div className="h-[700px] bg-hero-image rounded-[20px] flex flex-col justify-center items-center gap-5 text-center pt-5">
          <Title className="max-w-[647px]">The real meaning to personal</Title>
          <SubTitle variant="H5" className="max-w-[562px]">
            A reliable and trustworthy platform for discreet conversations
            between known parties
          </SubTitle>
        </div>
      </Container>
    </section>
  );
};
