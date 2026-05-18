import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, PhoneIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const waveHeights = [3, 6, 9, 5, 8, 4, 7, 3, 6, 9, 5, 7, 4, 8, 3, 6, 5];

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Warm background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-primary/8 via-accent/8 to-secondary/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/6 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ── LEFT ── */}
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

              {/* CTAs */}
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
                      4.9/5
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Trusted by{" "}
                    <span className="font-semibold text-foreground">
                      1,200+ patients
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT — Voice call card (decorative, pointer-events-none) ── */}
            <div className="relative hidden lg:flex justify-center items-center pointer-events-none select-none">
              {/* blob behind card */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-secondary/40 to-accent/8 rounded-[3rem] blur-2xl scale-110" />

              <div className="relative w-full max-w-sm bg-card rounded-3xl shadow-xl border border-border/60 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Image
                        src="/logo.png"
                        alt="DentWise"
                        width={28}
                        height={28}
                        className="w-7 h-7"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        DentWise AI
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Dental Assistant
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-muted-foreground">Live</span>
                  </div>
                </div>

                {/* Waveform */}
                <div className="px-6 py-6 bg-muted/20 flex flex-col items-center gap-3">
                  <div className="flex items-center justify-center gap-1 h-12">
                    {waveHeights.map((h, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-primary/50 animate-sound-wave"
                        style={{
                          height: `${h * 4}px`,
                          animationDelay: `${i * 0.07}s`,
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    AI is speaking…
                  </p>
                </div>

                {/* Transcript snippet */}
                <div className="px-5 py-4 space-y-3 border-t border-border/60">
                  <div className="flex justify-end">
                    <div className="bg-primary/12 border border-primary/20 rounded-2xl rounded-tr-sm px-3.5 py-2 max-w-[80%]">
                      <p className="text-xs leading-relaxed text-primary">
                        I have a tooth sensitivity. What can I do?
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-0.5">
                      <MicIcon className="w-3 h-3 text-primary" />
                    </div>
                    <div className="bg-muted/50 rounded-2xl rounded-tl-sm px-3.5 py-2 max-w-[85%]">
                      <p className="text-xs text-foreground leading-relaxed">
                        That's often caused by enamel wear. Try a sensitive
                        toothpaste and avoid very hot or cold foods.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call footer */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-border/60">
                  <div className="text-xs text-muted-foreground">00:32</div>
                  <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                    <PhoneIcon className="w-4 h-4 text-red-400 rotate-[135deg]" />
                  </div>
                  <div className="text-xs text-muted-foreground">Muted</div>
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
