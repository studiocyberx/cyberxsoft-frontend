"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

interface SubItemProps {
  href: string;
  title: string;
}

const DropdownMenu = ({
  subItems,
  title,
  onClose,
}: {
  subItems: SubItemProps[];
  title: string;
  onClose?: () => void;
}) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="rounded-none">
          <NavigationMenuTrigger className="text-xl p-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent focus:text-white md:focus:text-gray-400 data-[state=open]:bg-transparent text-white md:text-gray-400 md:hover:text-white h-0">
            {title}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-4">
            <ul className="space-y-2 w-full min-w-[175px]">
              {subItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} onClick={onClose} className="p-0">
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} hover:text-custom-purple-400 transition-all duration-300 !p-0 text-xl hover:bg-transparent focus:bg-transparent`}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
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
