import {
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react";

const stats = [
  { value: "650+", label: "Patients helped" },
  { value: "24/7", label: "Always available" },
  { value: "5/5", label: "Average rating" },
  { value: "99%", label: "Satisfaction rate" },
];

const values = [
  {
    icon: HeartIcon,
    title: "Patient-first",
    description:
      "Every decision we make starts with one question: does this make dental care easier for the patient?",
  },
  {
    icon: ShieldCheckIcon,
    title: "Trustworthy guidance",
    description:
      "All advice is grounded in verified dental knowledge. We never guess — we refer when needed.",
  },
  {
    icon: SparklesIcon,
    title: "AI done right",
    description:
      "Our assistant is a tool, not a replacement. It works alongside dentists, not instead of them.",
  },
  {
    icon: UsersIcon,
    title: "Accessible to all",
    description:
      "Quality dental information shouldn't depend on your location or your schedule. We're here for everyone.",
  },
];

function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* ── Top: mission ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <HeartIcon className="w-3.5 h-3.5 text-primary" />
              <span className="text-sm font-medium text-primary">
                Our mission
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              Dental care that fits{" "}
              <span className="text-primary">your life</span>,<br />
              not the other way around.
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed">
              DentCare was built on a simple frustration: too many people skip
              dental care because getting answers is slow, expensive, or
              inconvenient. We set out to fix that with an AI assistant that
              gives instant, trustworthy guidance — and connects you to a
              verified dentist whenever you need one.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed">
              We're not replacing dentists. We're removing every barrier that
              stops people from reaching them.
            </p>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-card border border-border rounded-2xl p-6 space-y-1 hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <p className="text-3xl font-bold text-primary">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom: values ── */}
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              What we stand for
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed">
              Four principles that shape every feature we build.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-card border border-border rounded-2xl p-6 space-y-4 hover:border-primary/30 hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
