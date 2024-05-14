import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { NavItemTypes } from "./Navbar";
import Link from "next/link";

export const NavDropDownMenu = ({ item }: { item: NavItemTypes }) => {
  const navitems = item.children;
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="text-xl p-0 bg-transparent hover:bg-transparent data-[active]:bg-transparent focus:text-white md:focus:text-gray-400 data-[state=open]:bg-transparent text-white md:text-gray-400 md:hover:text-white h-0">
            {item.title}
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[400px] gap-3 p-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:w-[900px]">
              {navitems.map((link, index) => (
                <Link
                  href={link.href}
                  key={index}
                  className="text-lg hover:text-custom-purple-400 transition-all duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuViewport />
        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  );
};
