import { Container, Logo } from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import { P } from "../typography";
import { Button } from "../ui/button";

export const Navbar = () => {
  // TODO: Add links to pages
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Help & Support",
      href: "/help-&-support",
    },
  ];

  const socialItems = [
    {
      title: "X",
      image: { url: "/icon/x.svg", height: 22, width: 22 },
      href: "https://x.com",
    },
    {
      title: "Instagram",
      image: { url: "/icon/instagram.svg", height: 22, width: 22 },
      href: "https://instagram.com",
    },
    {
      title: "Facebook",
      image: { url: "/icon/facebook.svg", height: 24, width: 24 },
      href: "https://facebook.com",
    },
    {
      title: "Youtube",
      image: { url: "/icon/youtube.svg", height: 27.5, width: 22 },
      href: "https://youtube.com",
    },
  ];

  return (
    <nav className="w-full border-t-[5px] border-primary">
      <Container className="flex justify-between items-center gap-2.5 h-[80px]">
        <div className="flex justify-start items-center gap-[50px]">
          <Logo />
          <div className="flex justify-start items-center gap-[30px]">
            {navItems.map(({ title, href }) => (
              <Link key={title} href={href} className="hover:text-primary">
                <P variant="P3" className="text-[16px]">
                  {title}
                </P>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-start items-center gap-[30px]">
          <div className="flex justify-start items-center gap-[20px]">
            {socialItems.map(({ title, href, image }) => (
              <Link key={title} href={href} className="hover:text-primary">
                <Image
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={title}
                />
              </Link>
            ))}
          </div>
          <Button className="px-[50px] py-3 h-auto tracking-[2px]">
            Start
          </Button>
        </div>
      </Container>
    </nav>
  );
};
