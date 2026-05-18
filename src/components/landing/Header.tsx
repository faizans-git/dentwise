"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 px-8 h-20 flex items-center transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="DentWise Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-bold text-xl tracking-tight text-foreground">
            DentWise
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { label: "How it Works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
            { label: "About", href: "#about" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[15px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Auth */}
        <div className="flex items-center gap-8">
          <SignInButton mode="modal">
            <button className="text-[15px] font-medium text-foreground hover:opacity-70 transition-opacity cursor-pointer">
              Log in
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button
              size="lg"
              className="text-[15px] font-medium bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl px-6 h-10 shadow-none transition-colors duration-150"
            >
              Sign up
            </Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
}

export default Header;
