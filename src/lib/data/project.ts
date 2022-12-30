export interface Project {
  name: string;
  link: string;
  Icon: any;
  desc: string;
}

import { FaPollH } from "react-icons/fa";
import { GiAndromedaChain } from "react-icons/gi";
import { TbHandRock } from "react-icons/tb";
import { DiGit } from "react-icons/di";
import { GiNewShoot } from "react-icons/gi";

export const Projects: Project[] = [
  {
    name: "Pollor",
    link: "https://github.com/chann44/pollor",
    Icon: FaPollH,
    desc: " New Generation of polls ",
  },
  {
    name: "4-4chan",
    link: "https://github.com/chann44/4-4chan",
    Icon: GiAndromedaChain,
    desc: " Modren 4 chan with best ui ",
  },

  {
    name: "Drox",
    link: "https://www.npmjs.com/package/drox",
    Icon: TbHandRock,
    desc: "Deal with all public assets in a react project as javascript objects no need of typing long paths ",
  },
  {
    name: ".gitignore",
    link: "https://www.npmjs.com/package/@chan44/gitignore",
    Icon: DiGit,
    desc: "a package to genrate git ignore files for your project",
  },
  {
    name: "The Info",
    link: "https://github.com/chann44/TheInfo",
    Icon: GiNewShoot,
    desc: " a website to get latest news ",
  },
];
