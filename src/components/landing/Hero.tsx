import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { CalendarIcon, MicIcon, PhoneIcon, StarIcon } from "lucide-react";
import Image from "next/image";

const waveHeights = [
  2, 4, 7, 5, 9, 6, 8, 3, 10, 7, 5, 9, 4, 8, 3, 6, 4, 7, 5, 3,
];

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-primary/8 via-accent/6 to-secondary/30 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* ── LEFT ── */}
            <div className="space-y-8">
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

              <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-bold tracking-tight leading-[1.1]">
                <span className="text-foreground">Trusted dental</span>
                <br />
                <span className="text-primary">guidance</span>
                <span className="text-foreground">,</span>
                <br />
                <span className="text-foreground">available anytime.</span>
              </h1>

              <p className="text-base text-muted-foreground leading-relaxed max-w-md">
                Get instant answers to your dental questions, book appointments,
                and receive personalized oral care recommendations.
              </p>

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

              <div className="flex items-center gap-5 pt-2">
                <div className="flex -space-x-3">
                  {[
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
                    "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face",
                  ].map((src, i) => (
                    <Image
                      key={src}
                      src={src}
                      alt={`Patient ${i + 1}`}
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

            {/* ── RIGHT — Animated voice card ── */}
            <div className="relative hidden lg:flex justify-center items-center pointer-events-none select-none">
              {/* Soft glow blob */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-secondary/50 to-primary/4 rounded-[4rem] blur-3xl scale-105" />

              {/* Floating card */}
              <div className="animate-float relative w-full max-w-[360px]">
                {/* ── Main card ── */}
                <div className="bg-card/95 backdrop-blur-sm rounded-3xl shadow-lg border border-border/50 overflow-hidden">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-border/50">
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
                    {/* Pulsing live badge */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-50 rounded-full border border-green-200">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                      </span>
                      <span className="text-[11px] font-medium text-green-700">
                        Live
                      </span>
                    </div>
                  </div>

                  {/* Waveform */}
                  <div className="px-6 py-5 bg-muted/10 flex flex-col items-center gap-2.5">
                    <div className="flex items-center justify-center gap-[3px] h-14">
                      {waveHeights.map((h, i) => (
                        <div
                          key={i}
                          className="w-[3px] rounded-full bg-primary/55 animate-sound-wave"
                          style={{
                            height: `${h * 4}px`,
                            animationDelay: `${i * 0.06}s`,
                            animationDuration: `${0.9 + (i % 3) * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground tracking-wide">
                      AI is speaking…
                    </p>
                  </div>

                  {/* Conversation */}
                  <div className="px-4 py-4 space-y-3 border-t border-border/40">
                    {/* User bubble — slightly right-offset */}
                    <div className="flex justify-end pr-1">
                      <div className="bg-primary/10 border border-primary/20 rounded-2xl rounded-tr-sm px-3.5 py-2.5 max-w-[78%]">
                        <p className="text-xs leading-relaxed text-primary font-medium">
                          I have a tooth sensitivity. What should I do?
                        </p>
                      </div>
                    </div>

                    {/* AI bubble — slightly left-offset */}
                    <div className="flex gap-2 pl-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                        <MicIcon className="w-3 h-3 text-primary" />
                      </div>
                      <div className="bg-secondary/60 rounded-2xl rounded-tl-sm px-3.5 py-2.5 max-w-[82%]">
                        <p className="text-xs text-foreground leading-relaxed">
                          That's often caused by enamel wear. Try a sensitive
                          toothpaste and avoid very hot or cold foods.
                        </p>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="flex gap-2 pl-1">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center">
                        <MicIcon className="w-3 h-3 text-primary" />
                      </div>
                      <div className="bg-secondary/60 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                        {[0, 0.2, 0.4].map((delay, i) => (
                          <div
                            key={i}
                            className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50 animate-typing-dot"
                            style={{ animationDelay: `${delay}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between px-5 py-3.5 border-t border-border/40 bg-muted/10">
                    <span className="text-xs text-muted-foreground tabular-nums">
                      00:32
                    </span>
                    <div className="w-9 h-9 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                      <PhoneIcon className="w-3.5 h-3.5 text-red-400 rotate-[135deg]" />
                    </div>
                    <span className="text-xs text-muted-foreground">Muted</span>
                  </div>
                </div>

                {/* Floating chip — top right */}
                <div className="absolute -top-3 -right-4 bg-card border border-border shadow-md rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-[11px] font-medium text-foreground">
                    AI responding
                  </span>
                </div>

                {/* Floating chip — bottom left */}
                <div className="absolute -bottom-3 -left-4 bg-card border border-border shadow-md rounded-full px-3 py-1.5 flex items-center gap-1.5">
                  <span className="text-[11px] font-medium text-muted-foreground">
                    🔒 Private & secure
                  </span>
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
