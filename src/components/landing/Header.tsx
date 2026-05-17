import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-8 bg-transparent h-20 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="DentWise Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="font-bold text-xl tracking-tight text-[#2D3139]">
            DentCare
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
              className="text-[15px] font-medium text-[#4A4E57] hover:text-[#2D3139] transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-8">
          <SignInButton mode="modal">
            <button className="text-[15px] font-medium text-[#2D3139] hover:opacity-80 transition-opacity cursor-pointer">
              Log in
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button
              size="lg"
              className="text-[15px] font-medium bg-[#C87A53] hover:bg-[#B36942] text-white rounded-2xl px-6 py-2.5 h-auto shadow-none normal-case transition-colors duration-150"
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
