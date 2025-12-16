"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Mountain } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/adventures",
    label: "Adventures",
  },
  {
    href: "/events",
    label: "Events",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-[100] w-full border-b bg-white dark:bg-zinc-950">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Crampon Adventures" className="h-12 w-auto" />
        </Link>
        <div className="hidden md:flex md:flex-1">
          <NavigationMenu>
            <NavigationMenuList>
              {routes.map((route) => {
                const isActive = route.href === "/" 
                  ? pathname === "/" 
                  : pathname?.startsWith(route.href)

                return (
                  <NavigationMenuItem key={route.href}>
                    <Link href={route.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          isActive && "bg-transparent text-primary underline decoration-2 underline-offset-4 decoration-primary hover:bg-transparent hover:text-primary focus:bg-transparent focus:text-primary"
                        )}
                      >
                        {route.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                )
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ModeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="pr-0">
                <div className="flex flex-col space-y-4 py-4">
                  <Link
                    href="/"
                    className="flex items-center space-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <Mountain className="h-6 w-6" />
                    <span className="font-bold">Crampon Adventures</span>
                  </Link>
                  <div className="flex flex-col space-y-3">
                    {routes.map((route) => {
                      const isActive = route.href === "/" 
                        ? pathname === "/" 
                        : pathname?.startsWith(route.href)

                      return (
                        <Link
                          key={route.href}
                          href={route.href}
                          className={cn(
                            "text-foreground/70 transition-colors hover:text-foreground",
                            isActive && "text-primary font-semibold"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {route.label}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  )
}
