import {
  Converse,
  Discover,
  ExpressYourself,
  Hero,
  LastsMoment,
} from "@/components/page/home";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <Converse />
      <ExpressYourself />
      <LastsMoment />
      <Discover />
    </main>
  );
};

export default Home;
