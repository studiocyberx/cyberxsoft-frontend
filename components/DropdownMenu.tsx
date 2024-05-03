"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

interface SubItemProps {
  href: string;
  title: string;
}

const DropdownMenu = ({
  subItems,
  title,
}: {
  subItems: SubItemProps[];
  title: string;
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="rounded-none">
          <NavigationMenuTrigger className="text-xl p-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent focus:text-white md:focus:text-gray-400 data-[state=open]:bg-transparent text-white md:text-gray-400 hover:text-white h-0">
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <ul className="space-y-2 w-full min-w-[175px]">
              {subItems.map((item, index) => (
                <li key={index}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className="hover:text-custom-purple-400 transition-all duration-300"
                    >
                      {item.title}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default DropdownMenu;
