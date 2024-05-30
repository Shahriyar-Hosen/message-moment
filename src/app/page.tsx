import { Discover, LastsMoment } from "@/components/page/home";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="">
      <LastsMoment />
      <Discover />
    </main>
  );
};

export default Home;
