import { Container } from "@/components/common";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Container className="bg-light-gray">
      <nav>Navbar</nav>
      <main>Main</main>
      <footer>Footer</footer>
    </Container>
  );
};

export default Home;
