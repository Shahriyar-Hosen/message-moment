import { Container } from "@/components/common";
import { Note, P, SubTitle, Title } from "@/components/typography";
import { NextPage } from "next";
import { FC } from "react";

const Test: NextPage = () => {
  const Typography: FC<IChildrenClassName & { title: string }> = ({
    title,
    children,
  }) => (
    <div className="space-y-2.5 w-fit">
      <h1 className="text-primary text-5xl font-extrabold">{title} </h1>
      {children}
    </div>
  );

  return (
    <Container>
      <div className="flex justify-center items-start gap-5 h-screen flex-col">
        <Typography title="Title">
          <Title>Title h1 Title h1 Title h1 Title h1 Title h1 </Title>
          <Title variant="H2">
            Title h2 Title h2 Title h2 Title h2 Title h2
          </Title>
        </Typography>
        <hr className="h-1 w-full bg-gray-600" />
        <Typography title="SubTitle">
          <SubTitle>
            SubTitle 3 SubTitle 3 SubTitle 3 SubTitle 3 SubTitle 3
          </SubTitle>
          <SubTitle variant="H4">
            SubTitle 4 SubTitle 4 SubTitle 4 SubTitle 4 SubTitle 4
          </SubTitle>
          <SubTitle variant="H5">
            SubTitle 5 SubTitle 5 SubTitle 5 SubTitle 5 SubTitle 5
          </SubTitle>
          <SubTitle variant="H6">
            SubTitle 6 SubTitle 6 SubTitle 6 SubTitle 6 SubTitle 6
          </SubTitle>
          <SubTitle variant="H7">
            SubTitle 7 SubTitle 7 SubTitle 7 SubTitle 7 SubTitle 7
          </SubTitle>
        </Typography>
        <hr className="h-1 w-full bg-gray-600" />
        <Typography title="Paragraph">
          <P>P1 P1 P1 p1 p1 </P>
          <P variant="P2">P2 P2 P2 p2 p2 </P>
          <P variant="P3">P3 P3 P3 p3 p3 </P>
        </Typography>
        <hr className="h-1 w-full bg-gray-600" />
        <Typography title="Note">
          <Note>N1 N1 N1 n1 n1 </Note>
          <Note variant="N2">N2 N2 N2 n2 n2 </Note>
        </Typography>
        <hr className="h-1 w-full bg-gray-600" />
      </div>
    </Container>
  );
};

export default Test;
