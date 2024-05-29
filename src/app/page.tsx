import { Discover } from "@/components/page/home";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="min-h-screen">
      <div className="h-screen"></div>
      <Discover />
    </main>
  );
};

export default Home;
