"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";
import { Menu, Package2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", title: "Home" },
    { href: "/projects", title: "Projects" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center h-20 px-4 md:px-8 transition-all duration-300 ease-in-out nav-anim",
        scrolled
          ? "border-b border-border/40 bg-background/80 backdrop-blur-lg"
          : "border-b border-transparent"
      )}
    >
      <div className="relative flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold z-10"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">Logo</span>
        </Link>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4 z-10">
          <ModeToggle />
          <Button asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>

        <div className="flex md:hidden items-center gap-2 z-10">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.title}
                  </Link>
                ))}
                <Button asChild className="mt-4">
                  <Link href="#contact">Contact Me</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}