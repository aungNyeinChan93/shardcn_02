import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const TestNavbar = () => {
  return (
    <React.Fragment>
      <nav className="w-11/12 mx-auto p-4 bg-slate-400 mt-4">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>My App</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink href="/">Home</NavigationMenuLink>
                <NavigationMenuLink>About</NavigationMenuLink>
                <NavigationMenuLink>About</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href={"/products"}>
                Products
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/tests">Tests</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </React.Fragment>
  );
};

export default TestNavbar;
