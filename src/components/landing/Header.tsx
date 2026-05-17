import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border bg-background/90 backdrop-blur-md h-16 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src={"/logo.png"}
            alt="DentWise Logo"
            width={32}
            height={32}
            className="w-9 h-9"
          />
          <span className="font-bold text-lg tracking-tight text-foreground">
            DentWise
          </span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "How it Works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
            { label: "About", href: "#about" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2">
          <SignInButton mode="modal">
            <Button
              variant="ghost"
              size="sm"
              className="text-sm font-medium text-foreground hover:bg-secondary hover:text-foreground"
            >
              Log in
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button
              size="sm"
              className="text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5"
            >
              Sign Up
            </Button>
          </SignUpButton>
        </div>
      </div>
    </nav>
  );
}

export default Header;
