"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Compass, Calendar, Info, MessageCircle, UserPlus } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"

const routes = [
  { href: "/", label: "Home", icon: Home },
  { href: "/adventures", label: "Adventures", icon: Compass },
  { href: "/events", label: "Events", icon: Calendar },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: MessageCircle },
]

export function Navbar() {
  const pathname = usePathname()
  const [hasScrolled, setHasScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isHomePage = pathname === "/"

  return (
    <>
      {/* Desktop & Mobile Top Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 z-[100] w-full transition-all duration-500",
          hasScrolled 
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" 
            : isHomePage 
              ? "bg-transparent" 
              : "bg-background/80 backdrop-blur-xl border-b border-border/50"
        )}
      >
        <div className="container flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/images/logo.png" 
                alt="Crampon Adventures" 
                className="h-10 md:h-12 w-auto transition-opacity group-hover:opacity-80" 
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {routes.map((route) => {
              const isActive = route.href === "/" 
                ? pathname === "/" 
                : pathname?.startsWith(route.href)

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors",
                    hasScrolled || !isHomePage
                      ? isActive 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                      : isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                  )}
                >
                  {route.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className={cn(
                        "absolute bottom-0 left-4 right-4 h-0.5 rounded-full",
                        hasScrolled || !isHomePage ? "bg-primary" : "bg-white"
                      )}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <ModeToggle />
            
            {/* Desktop CTA */}
            <Button 
              asChild 
              className={cn(
                "hidden md:inline-flex rounded-full px-6 transition-all",
                hasScrolled || !isHomePage
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white text-gray-900 hover:bg-white/90"
              )}
            >
              <Link href="/register">
                Join Us
              </Link>
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Bottom Navigation Bar - Facebook Style */}
      <nav className="fixed bottom-0 left-0 right-0 z-[100] md:hidden">
        {/* Background with blur */}
        <div className="absolute inset-0 bg-background/90 backdrop-blur-xl border-t border-border/50" />
        
        {/* Safe area padding for iOS */}
        <div className="relative px-2 pb-safe">
          <div className="flex items-center justify-around h-16">
            {routes.map((route) => {
              const isActive = route.href === "/" 
                ? pathname === "/" 
                : pathname?.startsWith(route.href)
              const Icon = route.icon

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className="relative flex flex-col items-center justify-center flex-1 h-full group"
                >
                  {/* Active Indicator - Top bar like Facebook */}
                  {isActive && (
                    <motion.div
                      layoutId="mobile-nav-indicator"
                      className="absolute top-0 left-2 right-2 h-[3px] bg-primary rounded-b-full"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Icon Container */}
                  <motion.div
                    whileTap={{ scale: 0.9 }}
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-xl transition-colors",
                      isActive 
                        ? "text-primary" 
                        : "text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    <Icon 
                      className={cn(
                        "w-6 h-6 transition-all",
                        isActive && "scale-110"
                      )} 
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  </motion.div>
                  
                  {/* Label */}
                  <span 
                    className={cn(
                      "text-[10px] font-medium mt-0.5 transition-colors",
                      isActive 
                        ? "text-primary" 
                        : "text-muted-foreground group-hover:text-foreground"
                    )}
                  >
                    {route.label}
                  </span>
                </Link>
              )
            })}
            
            {/* Join/Register Button */}
            <Link
              href="/register"
              className="relative flex flex-col items-center justify-center flex-1 h-full group"
            >
              {pathname === "/register" && (
                <motion.div
                  layoutId="mobile-nav-indicator"
                  className="absolute top-0 left-2 right-2 h-[3px] bg-primary rounded-b-full"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              <motion.div
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "flex items-center justify-center w-10 h-10 rounded-xl transition-colors",
                  pathname === "/register"
                    ? "bg-primary text-primary-foreground" 
                    : "bg-primary/10 text-primary group-hover:bg-primary/20"
                )}
              >
                <UserPlus className="w-5 h-5" strokeWidth={2} />
              </motion.div>
              
              <span 
                className={cn(
                  "text-[10px] font-medium mt-0.5 transition-colors",
                  pathname === "/register"
                    ? "text-primary" 
                    : "text-primary"
                )}
              >
                Join
              </span>
            </Link>
          </div>
        </div>
      </nav>
      
    </>
  )
}
