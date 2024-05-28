import { Note } from "@/components/typography/note";
import { FC } from "react";

const Home = () => {
  const Typography: FC<IChildren & { title: string }> = ({
    title,
    children,
  }) => (
    <div className="space-y-2.5">
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
    </div>
  );
};

export default Home;
