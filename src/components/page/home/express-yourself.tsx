import { Container } from "@/components/common";
import { Note, SubTitle, Title } from "@/components/typography";
import Image from "next/image";

const data = [
  {
    label: "Step 1",
    title: "Generate Link",
    img: "/images/generate-link.png",
  },
  {
    label: "Step 2",
    title: "Share It",
    img: "/images/share.png",
  },
  {
    label: "Step 3",
    title: "Set Expiry",
    img: "/images/set-expiry.png",
  },
  {
    label: "Step 4",
    title: "End Session",
    img: "/images/end-session.png",
  },
];

export const ExpressYourself = () => {
  return (
    <section>
      <Container
        customClass="bg-primary"
        className="text-white pt-[70px] pb-[72px] flex flex-col justify-center items-center gap-[50px]"
      >
        <Title variant="H2" className="text-center pl-2">
          Express yourself freely, <br />
          anytime, with those you know
        </Title>
        <figure>
          <Image
            src="/images/express-yourself.png"
            width={720}
            height={393}
            alt=""
          />
        </figure>

        <div className="flex justify-center gap-5 pt-1.5">
          {data.map(({ label, title, img }, i) => (
            <div
              key={i}
              className="bg-white/20 rounded-[20px] px-[30px] pb-[30px] pt-[61px] min-w-[260px] relative cursor-pointer group hover:bg-white hover:w-[476px] ease-linear transition-all duration-700 express-card"
            >
              <Title
                variant="H2"
                className="text-white/20 group-hover:text-primary absolute top-4 left-[30px]"
              >
                {i + 1}
              </Title>
              <div className="flex justify-center group-hover:items-start items-center flex-col">
                <Image
                  alt=""
                  src={img}
                  width={80}
                  height={80}
                  className="group-hover:ml-[60px]"
                />
                <Note variant="N2" className="pt-5 group-hover:text-dark">
                  {label}
                </Note>
                <SubTitle variant="H4" className="group-hover:text-primary">
                  {title}
                </SubTitle>
              </div>
            </div>
          ))}
        </div>
        <SubTitle variant="H6" className="text-center max-w-[930px] pt-3 pl-1">
          Start a chat session by clicking the &quot;Open Chat&quot; button on
          our site and receive a link. Optionally, make the chat secure by
          generating a security code.
        </SubTitle>
      </Container>
    </section>
  );
};
