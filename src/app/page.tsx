import { Button } from "@/components/ui/button";
import { SignUpButton,SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <SignedOut>
        <SignUpButton mode="modal">Sign up</SignUpButton>
      </SignedOut>
      <SignedIn>
          <SignOutButton mode="modal">Log Out</SignOutButton>
      </SignedIn>
      
    </div>
  );
}
