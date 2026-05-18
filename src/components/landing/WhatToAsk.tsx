import {
  MessageCircleIcon,
  MessageSquareIcon,
  MicIcon,
  PhoneIcon,
} from "lucide-react";

const questions = [
  {
    question: "My tooth hurts when I bite down",
    answer:
      "Get immediate advice on pain management, possible causes, and when to see a dentist urgently",
    tags: ["Instant Response", "Pain Relief"],
  },
  {
    question: "How much does teeth whitening cost?",
    answer:
      "Compare treatment options, pricing ranges, and find the best whitening solution for your budget",
    tags: ["Cost Analysis", "Treatment Options"],
  },
  {
    question: "When should I replace my filling?",
    answer:
      "Learn about filling lifespan, warning signs of wear, and replacement timing guidance",
    tags: ["Preventive Care", "Maintenance"],
  },
];

const transcript = [
  {
    from: "ai",
    text: "Hi! I'm your DentWise assistant. What dental concern can I help you with today?",
  },
  {
    from: "user",
    text: "I've been having sensitivity when I drink cold water.",
  },
  {
    from: "ai",
    text: "That's a common sign of enamel wear or gum recession. How long have you been experiencing this?",
  },
  { from: "user", text: "About two weeks now." },
  {
    from: "ai",
    text: "Got it. I'd recommend a sensitivity toothpaste for now and booking a check-up within the next month.",
  },
];

function WhatToAsk() {
  return (
    <section className="relative py-28 px-6 overflow-hidden" id="faq">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <MessageCircleIcon className="w-3.5 h-3.5 text-primary" />
            <span className="text-sm font-medium text-primary">
              AI Voice Conversations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight text-foreground">
            Ask about <span className="text-primary">anything dental</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Just speak naturally. Our AI voice assistant handles everything from
            quick questions to in-depth dental guidance — available 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — question cards */}
          <div className="space-y-5">
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Common questions our AI answers:
            </h3>

            {questions.map(({ question, answer, tags }) => (
              <div
                key={question}
                className="bg-card border border-border rounded-2xl p-5 hover:border-primary/30 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquareIcon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="space-y-2.5 flex-1">
                    <div className="bg-primary/8 rounded-xl px-4 py-2.5 border border-primary/15">
                      <p className="text-sm font-semibold text-primary">
                        "{question}"
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed px-1">
                      {answer}
                    </p>
                    <div className="flex gap-2 flex-wrap px-1">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-primary/8 text-primary text-xs rounded-full border border-primary/15"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — voice call preview */}
          <div className="sticky top-24">
            <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-lg">
              {/* Call header */}
              <div className="px-6 py-5 border-b border-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-primary"
                      fill="currentColor"
                    >
                      <path d="M12 2C9.5 2 7 4 7 7c0 1.5.5 2.8 1.4 3.8C6.5 12 5 14.2 5 17h14c0-2.8-1.5-5-3.4-6.2C16.5 9.8 17 8.5 17 7c0-3-2.5-5-5-5z" />
                    </svg>
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
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-muted-foreground">
                    Live call
                  </span>
                </div>
              </div>

              {/* Waveform / speaking indicator */}
              <div className="px-6 py-5 bg-muted/20 border-b border-border">
                <div className="flex items-center justify-center gap-1.5 h-10">
                  {[3, 6, 9, 5, 8, 4, 7, 3, 6, 9, 5, 7, 4, 8, 3, 6, 5].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="w-1 rounded-full bg-primary/60 animate-sound-wave"
                        style={{
                          height: `${h * 4}px`,
                          animationDelay: `${i * 0.07}s`,
                        }}
                      />
                    ),
                  )}
                </div>
                <p className="text-center text-xs text-muted-foreground mt-2">
                  AI is speaking…
                </p>
              </div>

              {/* Transcript */}
              <div className="px-5 py-5 space-y-3 max-h-64 overflow-y-auto">
                {transcript.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex gap-2.5 ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.from === "ai" && (
                      <div className="w-6 h-6 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                        <MicIcon className="w-3 h-3 text-primary" />
                      </div>
                    )}
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 max-w-[80%] text-xs leading-relaxed ${
                        msg.from === "ai"
                          ? "bg-muted/50 text-foreground rounded-tl-sm"
                          : "bg-primary text-primary-foreground rounded-tr-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Call controls */}
              <div className="px-6 py-4 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                    <MicIcon className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                  <span className="text-xs text-muted-foreground">Muted</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <PhoneIcon className="w-4 h-4 text-red-500 rotate-[135deg]" />
                </div>
                <span className="text-xs text-muted-foreground">00:42</span>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-xs text-muted-foreground mt-4">
              Powered by VAPI · Responses are AI-generated and not a substitute
              for professional dental advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatToAsk;
