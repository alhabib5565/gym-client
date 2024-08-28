import { Book, ContactIcon, HomeIcon, ProjectorIcon, User } from "lucide-react";

export const navItems = [
  {
    path: "/",
    pathName: "Home",
    Icon: HomeIcon,
  },
  // {
  //   path: "/projects",
  //   pathName: "Projects",
  //   Icon: ProjectorIcon,
  // },
  {
    path: "/blogs",
    pathName: "Blogs",
    Icon: Book,
  },
  {
    path: "/about",
    pathName: "About",
    Icon: User,
  },
  {
    path: "/contact",
    pathName: "Contact",
    Icon: ContactIcon,
  },
];
