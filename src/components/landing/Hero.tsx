import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import {
  CalendarIcon,
  MicIcon,
  StarIcon,
  BookOpenIcon,
  UserIcon,
  SendIcon,
} from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/30 blur-3xl" />

        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ── LEFT CONTENT ── */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/25">
                <svg
                  className="w-3.5 h-3.5 text-primary"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                >
                  <path d="M8 1l1.5 3 3.5.5-2.5 2.5.5 3.5L8 9l-3 1.5.5-3.5L3 4.5 6.5 4z" />
                </svg>
                <span className="text-sm font-medium text-primary">
                  AI-Powered Dental Assistant
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.1]">
                <span className="text-foreground">Trusted dental</span>
                <br />
                <span className="text-primary">guidance</span>
                <span className="text-foreground">,</span>
                <br />
                <span className="text-foreground">available anytime.</span>
              </h1>

              {/* Subtitle */}
              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                Get instant answers to your dental questions, book appointments,
                and receive personalized oral care recommendations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-7 gap-2"
                  >
                    <MicIcon className="size-4" />
                    Try voice agent
                  </Button>
                </SignUpButton>

                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-7 gap-2 border-border text-foreground hover:bg-secondary"
                  >
                    <CalendarIcon className="size-4" />
                    Book appointment
                  </Button>
                </SignUpButton>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-5 pt-2">
                <div className="flex -space-x-3">
                  {[
                    {
                      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
                      alt: "Patient 1",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
                      alt: "Patient 2",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
                      alt: "Patient 3",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
                      alt: "Patient 4",
                    },
                    {
                      src: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face",
                      alt: "Patient 5",
                    },
                  ].map((p) => (
                    <Image
                      key={p.src}
                      src={p.src}
                      alt={p.alt}
                      width={44}
                      height={44}
                      className="w-11 h-11 rounded-full object-cover ring-2 ring-background"
                    />
                  ))}
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <StarIcon
                        key={s}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="text-sm font-bold text-foreground ml-1">
                      5/5
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by{" "}
                    <span className="font-semibold text-foreground">
                      650+ patients
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT CONTENT — Chat Widget ── */}
            <div className="relative hidden lg:flex justify-center items-center ">
              {/* Warm decorative blob behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-secondary/40 to-accent/10 rounded-[3rem] blur-2xl scale-110" />

              {/* Chat Card */}
              <div className="relative w-full max-w-md bg-card rounded-3xl shadow-xl border border-border/60 overflow-hidden">
                {/* Card Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                      <Image
                        src="/logo.png"
                        alt="DentWise Logo"
                        width={8}
                        height={8}
                        className="w-8 h-8"
                      />
                    </div>
                    <span className="font-semibold text-sm text-foreground">
                      DentCare
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-muted-foreground">
                      Online
                    </span>
                  </div>
                </div>

                {/* Messages */}
                <div className="px-5 py-5 space-y-4 bg-muted/30">
                  {/* User message */}
                  <div className="flex items-end gap-2.5 justify-end">
                    <div className="bg-card rounded-2xl rounded-br-sm px-4 py-3 max-w-[75%] shadow-sm border border-border/40">
                      <p className="text-sm text-foreground">
                        I have a tooth sensitivity. What can I do?
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-1 text-right">
                        10:30 AM ✓✓
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary border border-border/60 flex-shrink-0 overflow-hidden">
                      <Image
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                        alt="User"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* AI message */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex-shrink-0 flex items-center justify-center mt-1">
                      <Image
                        src="/logo.png"
                        alt="DentWise Logo"
                        width={7}
                        height={7}
                        className="w-7 h-7"
                      />
                    </div>
                    <div className="bg-card rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-sm border border-border/40 space-y-2">
                      <p className="text-sm text-foreground leading-relaxed">
                        Tooth sensitivity can be caused by enamel wear, gum
                        recession, or cavities. Try using a sensitive toothpaste
                        and avoid very hot or cold foods.
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">
                        If it persists, consider visiting your dentist.
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        10:31 AM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center gap-2 px-5 py-3 border-t border-border/60 overflow-x-auto">
                  {[
                    { icon: CalendarIcon, label: "Book appointment" },
                    { icon: BookOpenIcon, label: "Learn more" },
                    { icon: UserIcon, label: "Talk to dentist" },
                  ].map(({ icon: Icon, label }) => (
                    <button
                      key={label}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border/70 text-xs text-muted-foreground hover:border-primary/50 hover:text-primary hover:bg-primary/5 transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      <Icon className="w-3 h-3" />
                      {label}
                    </button>
                  ))}
                </div>

                {/* Input */}
                <div className="flex items-center gap-3 px-5 py-4 border-t border-border/60">
                  <input
                    type="text"
                    placeholder="Ask anything..."
                    className="flex-1 text-sm bg-transparent outline-none text-foreground placeholder:text-muted-foreground/60"
                    readOnly
                  />
                  <button className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0 hover:bg-primary/90 transition-colors">
                    <SendIcon className="w-4 h-4 text-primary-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
