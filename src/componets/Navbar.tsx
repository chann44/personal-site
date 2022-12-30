import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { GiShipWheel } from "react-icons/gi";
import { MdOutlineDarkMode } from "react-icons/md";
import {
  SlSocialGithub,
  SlSocialTwitter,
  SlSocialLinkedin,
} from "react-icons/sl";

interface ILink {
  name: string;
  link: string;
}

interface OutLinkProps {
  Icon: React.ElementType;
  link: string;
}

const links: ILink[] = [
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Projects",
    link: "/projects",
  },
  {
    name: "Demos",
    link: "/blog",
  },
];

const OutLink = ({ Icon, link }: OutLinkProps) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon className="ease-in cursor-pointer transition transform duration-200  text-xl dark:text-white/60 dark:hover:text-white " />
    </a>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  console.log(theme);
  return (
    <>
      <header className="sticky top-0 z-10 px-6 sm:px-16 p-5 flex justify-between items-center">
        <Link href={"/"}>
          {theme == "dark" ? (
            <div className="relative h-10 w-20 cursor-pointer">
              <Image
                src={"/signwhite.svg"}
                width={100}
                height={40}
                alt="logo"
                className=""
              />
            </div>
          ) : (
            <div className="relative h-10 w-20 cursor-pointer">
              <Image
                src={"signblack.svg"}
                width={100}
                height={40}
                alt="logo"
                className=""
              />
            </div>
          )}
        </Link>
        <nav className="flex space-x-6 items-center">
          <div className=" hidden sm:flex space-x-6 ">
            {links.map(({ link, name }) => {
              return (
                <Link
                  href={link}
                  key={name}
                  className="ease-in cursor-pointer transition transform duration-200   dark:text-white/60 dark:hover:text-white"
                >
                  {name}
                </Link>
              );
            })}
          </div>
          <div className="flex items-center space-x-6">
            <OutLink
              Icon={SlSocialGithub}
              link={"https://github.com/chann44"}
            />
            <OutLink
              Icon={SlSocialTwitter}
              link={"https://twitter.com/44_chann"}
            />
            <div className="">
              <OutLink
                Icon={SlSocialLinkedin}
                link={"https://www.linkedin.com/in/vikash-manda-69a231200/"}
              />
            </div>
          </div>

          {theme == "light" ? (
            <MdOutlineDarkMode
              onClick={() => {
                setTheme("dark");
              }}
              className="active:scale-50 ease-in cursor-pointer transition transform duration-200  text-xl dark:text-white/60 dark:hover:text-white"
            />
          ) : (
            <GiShipWheel
              onClick={() => {
                setTheme("light");
              }}
              className="active:scale-50 ease-in cursor-pointer transition transform duration-200  text-xl dark:text-white/60 dark:hover:text-white"
            />
          )}
          <div
            className="cursor-pointer sm:hidden  block transition transform duration-75 "
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <AiOutlineClose className="text-xl " />
            ) : (
              <AiOutlineMenu className="text-xl " />
            )}
          </div>
        </nav>
      </header>
      <div
        className={
          "absolute w-[70%] top-0 z-40 flex flex-col dark:bg-primaryDark h-screen  duration-500 ease-in-out bg-white  " +
          (open ? "translate-x-0" : "-translate-x-full")
        }
      >
        {links.map(({ link, name }) => {
          return (
            <Link
              onClick={() => {
                setOpen(false);
              }}
              href={link}
              key={name}
              className="ease-in cursor-pointer px-10 py-5 text-2xl transition transform duration-200  "
            >
              {name}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
