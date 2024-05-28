import { Note } from "@/components/typography/note";
import { P } from "@/components/typography/paragraph";
import { FC } from "react";

const Home = () => {
  const Typography: FC<IChildren & { title: string }> = ({
    title,
    children,
  }) => (
    <div className="space-y-2.5 w-fit">
      <h1 className="text-primary text-5xl font-extrabold">{title} </h1>
      {children}
    </div>
  );
  return (
    <div className="flex justify-center items-center gap-5 h-screen flex-col">
      <Typography title="Note">
        <Note>N1 N1 N1 n1 n1 </Note>
        <Note variant="N2">N2 N2 N2 n2 n2 </Note>
      </Typography>
      <Typography title="Paragraph">
        <P>P1 P1 P1 p1 p1 </P>
        <P variant="P2">P2 P2 P2 p2 p2 </P>
        <P variant="P3">P3 P3 P3 p3 p3 </P>
      </Typography>
    </div>
  );
};

export default Home;
