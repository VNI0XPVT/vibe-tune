import { Heart, Home, Library, Search } from "lucide-react";
import React from "react";

const links = [
  {
    name: "Home",
    href: "/",
    icons: Home,
  },
  {
    name: "Search",
    href: "/search",
    icons: Search,
  },
  {
    name: "Albums",
    href: "/album",
    icons: Library,
  },
  {
    name: "Favorites",
    href: "/favorites",
    icons: Heart,
  },
];

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="max-md:hidden w-full h-screen bg-card p-6">
      <h2 className="font-bold text-center">
        <span className="text-gradient text-2xl">Music Player</span>
      </h2>

      <div className="flex flex-col gap-5 mt-10">
        {links.map((link) => (
          <a
            href={link.href}
            key={link.name}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <link.icons className="size-5" />
            <span>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
