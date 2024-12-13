"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, ElementRef, FC, forwardRef } from "react";
import { Button } from "~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { INDUSTRIES, SERVICES } from "~/lib/constants";
import { generateUrl, toCamelCase } from "~/lib/helpers";
import { cn } from "~/lib/utils";
import { LanguageSwitcher } from "./language-switcher";
import Image from "next/image";

type Props = {
  locale: string;
};

export const Navbar: FC<Props> = ({ locale }) => {
  const navbarTexts = useTranslations("NavbarLinks");
  const servicesTexts = useTranslations("Services");
  const industryTexts = useTranslations("Industries");

  const pathname = usePathname();

  return (
    <div className="hidden w-full xl:flex items-center justify-between px-10 py-6 border-b">
      <Image src="/logo.png" alt="logo" width={100} height={100} />
      <NavigationMenu>
        <NavigationMenuList className="gap-10">
          <NavigationMenuItem>
            <Link href={`/${locale}/`} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "text-lg font-semibold uppercase h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 transition-colors",
                  pathname === "/"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {navbarTexts("home")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={`/${locale}/about`} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "text-lg font-semibold uppercase h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 transition-colors",
                  pathname === "/about"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {navbarTexts("about")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={`/${locale}/services`}>
              <NavigationMenuTrigger className="text-lg font-semibold uppercase">
                {navbarTexts("services")}
              </NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <div className="w-full flex items-center justify-center py-5 text-2xl font-bold border-b">
                {servicesTexts("header")}
              </div>
              <div>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                  {SERVICES.map((service) => {
                    toCamelCase(service.title);

                    return (
                      <ListItem
                        key={service.title}
                        title={servicesTexts(toCamelCase(service.title))}
                        href={`/${locale}/services/${generateUrl(service.title)}`}
                      >
                        {servicesTexts(toCamelCase(service.title) + "Desc")}
                      </ListItem>
                    );
                  })}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={`/${locale}/industries`}>
              <NavigationMenuTrigger className="text-lg font-semibold uppercase">
                {navbarTexts("industries")}
              </NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <div className="w-full flex items-center justify-center py-5 text-2xl font-bold border-b">
                {industryTexts("header")}
              </div>
              <div>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                  {INDUSTRIES.map((industry) => (
                    <ListItem
                      key={industry}
                      title={industryTexts(toCamelCase(industry))}
                      href={`/${locale}/industries/${generateUrl(industry)}`}
                    />
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={`/${locale}/blogs`} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "text-lg font-semibold uppercase h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 transition-colors",
                  pathname === "/blogs"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {navbarTexts("blogs")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href={`/${locale}/contact-us`} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  "text-lg font-semibold uppercase h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 transition-colors",
                  pathname === "/contact-us"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent hover:text-accent-foreground",
                )}
              >
                {navbarTexts("contactUs")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center space-x-5">
        <Button>Get a quote</Button>
        <LanguageSwitcher />
      </div>
    </div>
  );
};

const ListItem = forwardRef<ElementRef<"a">, ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
