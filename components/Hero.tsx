"use client";
import { useEffect, useState } from "react";

const roles = [
  "Java Backend Engineer",
  "Cloud-Native Architect",
  "Microservices Builder",
  "DevOps Practitioner",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let i = typing ? 0 : current.length;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(current.slice(0, i + 1));
        i++;
        if (i >= current.length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 2000);
        }
      } else {
        setDisplayed(current.slice(0, i - 1));
        i--;
        if (i <= 0) {
          clearInterval(interval);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTyping(true);
        }
      }
    }, typing ? 60 : 35);
    return () => clearInterval(interval);
  }, [roleIndex, typing]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg spotlight">
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan/5 blur-3xl animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-green/4 blur-3xl animate-pulse-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Status badge */}
          <div className="animate-on-load stagger-1 inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-green/25 bg-green/5">
            <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <span className="font-mono text-xs text-green tracking-wider">
              Open to full-time opportunities — May 2026
            </span>
          </div>

          {/* Main heading */}
          <h1 className="animate-on-load stagger-2 font-display font-bold leading-tight mb-4">
            <span className="block text-muted font-mono text-base font-normal mb-3 tracking-wider">
              <span className="text-cyan">{">"}</span> Hello, I&apos;m
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl text-bright">
              Soundarya
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl text-bright">
              Kookanda
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="animate-on-load stagger-3 h-10 mb-6 flex items-center">
            <span className="font-mono text-lg sm:text-xl text-cyan">
              {displayed}
              <span className="cursor-blink">_</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="animate-on-load stagger-4 text-text text-base sm:text-lg leading-relaxed max-w-2xl mb-4">
            I build backend systems that{" "}
            <span className="text-bright font-medium">don&apos;t break under pressure</span>.
            2.5+ years shipping production microservices for Walgreens — healthcare
            APIs serving millions, deployed across Azure/AKS with zero-rollback
            sprint records.
          </p>

          {/* Metrics strip */}
          <div className="animate-on-load stagger-5 flex flex-wrap gap-6 mb-10">
            {[
              { value: "30%", label: "Reliability Boost" },
              { value: "50%", label: "Latency Cut" },
              { value: "90%+", label: "Test Coverage" },
              { value: "4.0", label: "GPA (M.Eng)" },
            ].map((m) => (
              <div key={m.label} className="flex items-baseline gap-1.5">
                <span className="metric-value font-display font-bold text-2xl">
                  {m.value}
                </span>
                <span className="text-muted font-mono text-xs">{m.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="animate-on-load stagger-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-cyan text-bg font-display font-semibold text-sm rounded overflow-hidden transition-all duration-200 hover:shadow-lg hover:shadow-cyan/20"
            >
              <span className="relative z-10">View My Work</span>
              <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-text font-display text-sm rounded hover:border-cyan/40 hover:text-cyan transition-all duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
        <span className="font-mono text-xs text-muted tracking-widest">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>

      {/* Decorative code block */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none select-none">
        <pre className="font-mono text-xs text-cyan leading-7">
{`@RestController
class HealthcareAPI {

  @Autowired
  RefillService svc;

  @GetMapping("/refill")
  ResponseEntity<Refill>
  getRefill(@Valid Req r) {
    return svc
      .process(r)
      .map(ResponseEntity::ok)
      .orElse(notFound());
  }
}`}
        </pre>
      </div>
    </section>
  );
}
