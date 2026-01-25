"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Logo } from "@/components/icons/logo";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);
 const openWhatsApp = () => {
    const whatsappNumber = "918688601826";
    const message = `Hello AppyWeb 👋\n\nI want to add a product to my cart.`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
       window.open(url, "_blank");
       closeMenu();
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {/* Desktop Add To Cart */}
         <Button
            className="hidden sm:inline-flex font-semibold gap-2"
            onClick={openWhatsApp}
          >
            <ShoppingCart className="w-4 h-4" />
            Add To Cart
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              {/* Accessibility fix */}
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>

              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                  <Link href="/" onClick={closeMenu}>
                    <Logo />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={closeMenu}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Close Menu</span>
                  </Button>
                </div>

                {/* Nav Links */}
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === link.href
                          ? "text-primary"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile Add To Cart */}
                <div className="mt-auto pt-6">
                     <Button
                    className="w-full font-semibold flex items-center justify-center gap-2"
                    onClick={openWhatsApp}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add To Cart
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
