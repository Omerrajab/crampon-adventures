"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mountain, Mail, Phone, MapPin, Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react"

const footerLinks = {
  explore: [
    { href: "/adventures", label: "Adventures" },
    { href: "/events", label: "Upcoming Events" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ],
  popular: [
    { href: "/adventures/kashmir-great-lakes-trek", label: "Kashmir Great Lakes" },
    { href: "/adventures/tarsar-marsar-trek", label: "Tarsar Marsar" },
    { href: "/adventures/gangbal-lake-trek", label: "Gangbal Lake" },
    { href: "/adventures/kousarnag-lake-trek", label: "Kousarnag Lake" },
  ],
  legal: [
    { href: "/terms", label: "Terms of Service" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/refund", label: "Refund Policy" },
  ]
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

export function Footer() {
  return (
    <footer className="relative w-full bg-muted/30 border-t border-border mb-20 md:mb-0">
      {/* Top Section */}
      <div className="container px-4 md:px-6 py-16 md:py-20">
        <div className="grid gap-12 md:gap-8 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <Mountain className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Crampon</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Based in Srinagar, we guide you through the majestic landscapes 
              of Kashmir and Ladakh with a commitment to adventure and conservation.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Treks */}
          <div>
            <h4 className="font-semibold mb-4">Popular Treks</h4>
            <ul className="space-y-3">
              {footerLinks.popular.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:info@cramponadventures.com"
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-5 w-5 mt-0.5 text-primary" />
                  <span>info@cramponadventures.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+911234567890"
                  className="flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-5 w-5 mt-0.5 text-primary" />
                  <span>+91 123 456 7890</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                  <span>Srinagar, Kashmir<br />Jammu & Kashmir, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border">
        <div className="container px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {new Date().getFullYear()} Crampon Adventures. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
