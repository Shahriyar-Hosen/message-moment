import { Discover, ExpressYourself, LastsMoment } from "@/components/page/home";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="">
      <ExpressYourself />
      <LastsMoment />
      <Discover />
    </main>
  );
};

export default Home;
