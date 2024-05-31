import { Container, Logo } from "@/components/common";
import { Button } from "@/components/ui/button";
import { NavigationLinks, SocialIcon } from ".";

export const Navbar = () => {
  return (
    <nav className="w-full border-t-[5px] border-primary">
      <Container className="flex justify-between items-center gap-2.5 h-[80px]">
        <div className="flex justify-start items-center gap-[50px]">
          <Logo />
          <NavigationLinks nav />
        </div>
        <div className="flex justify-start items-center gap-[30px]">
          <SocialIcon nav />
          <Button className="px-[50px] py-3 h-auto tracking-[2px]">
            Start
          </Button>
        </div>
      </Container>
    </nav>
  );
};
