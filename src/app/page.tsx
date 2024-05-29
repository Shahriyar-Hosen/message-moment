import { Discover } from "@/components/page/home";
import { Carousel } from "@/components/page/home/slider";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="">
      <Carousel />
      <Discover />
    </main>
  );
};

export default Home;
