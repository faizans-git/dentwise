import { Button } from "@/components/ui/button";
import { SignUpButton } from "@clerk/nextjs";
import {
  CalendarIcon,
  MicIcon,
  ShieldCheckIcon,
  StarIcon,
  ZapIcon,
} from "lucide-react";

const perks = [
  { icon: ZapIcon, label: "Instant answers" },
  { icon: ShieldCheckIcon, label: "Private & secure" },
  { icon: StarIcon, label: "4.9/5 rated" },
];

function CTA() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Warm background card */}
      <div className="absolute inset-x-6 inset-y-8 bg-secondary/60 rounded-3xl -z-10" />
      <div className="absolute inset-x-6 inset-y-8 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 rounded-3xl -z-10" />

      <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-background rounded-full border border-border shadow-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">
            Ready when you are · Available 24/7
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Your dental health
            <br />
            <span className="text-primary">journey starts here</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md mx-auto">
            Join 1,200+ patients who trust our AI voice assistant for instant
            guidance and personalized care.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <SignUpButton mode="modal">
            <Button
              size="lg"
              className="rounded-full px-8 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <MicIcon className="size-4" />
              Start free call
            </Button>
          </SignUpButton>

          <SignUpButton mode="modal">
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 gap-2 border-border text-foreground hover:bg-background"
            >
              <CalendarIcon className="size-4" />
              Book appointment
            </Button>
          </SignUpButton>
        </div>

        {/* Perks */}
        <div className="flex items-center justify-center gap-6 pt-2">
          {perks.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-1.5 text-xs text-muted-foreground"
            >
              <Icon className="w-3.5 h-3.5 text-primary" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CTA;
