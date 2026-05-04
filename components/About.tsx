"use client";
import { useEffect, useRef } from "react";

const highlights = [
  {
    icon: "⚙️",
    title: "Backend-First Thinking",
    desc: "I design APIs for correctness first — idempotency, pagination, and observable behavior are defaults, not afterthoughts.",
  },
  {
    icon: "☁️",
    title: "Cloud-Native by Default",
    desc: "Every service I write assumes horizontal scale, container orchestration, and automated pipelines from day one.",
  },
  {
    icon: "🔬",
    title: "Test-Driven & Measurable",
    desc: "90%+ JUnit/Mockito coverage and SonarQube quality gates are non-negotiable — bugs that reach production are regressions of process.",
  },
  {
    icon: "📈",
    title: "Outcome-Oriented",
    desc: "I track latency, defect rates, and deployment frequency. Engineering decisions without metrics are opinions without data.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="reveal flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-cyan tracking-widest">01 /</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-bright">
            About
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: prose */}
          <div className="space-y-5">
            <p className="reveal text-text leading-relaxed">
              I&apos;m a Java Backend & Cloud Engineer completing my{" "}
              <span className="text-bright font-medium">
                M.Eng in Computer Science (4.0 GPA)
              </span>{" "}
              at the University of Cincinnati in April 2026. Before grad school, I
              spent 2.5 years at Tata Consultancy Services building production
              backend systems for Walgreens — one of the largest pharmacy chains
              in the US.
            </p>
            <p className="reveal text-text leading-relaxed">
              My work centered on Java & Spring Boot microservices running on Azure
              AKS, processing millions of pharmacy transactions per day. I owned API
              reliability improvements, led root-cause analysis on production incidents,
              and drove a zero-rollback record across 12 consecutive sprint cycles.
            </p>
            <p className="reveal text-text leading-relaxed">
              Graduate school has let me go deeper into the infrastructure layer —
              building CI/CD pipelines with{" "}
              <span className="text-cyan">GitHub Actions + Argo CD</span>,
              provisioning cloud environments with{" "}
              <span className="text-cyan">Terraform + Ansible</span>, and working
              across AWS and Azure in containerized Kubernetes environments.
            </p>

            {/* Education */}
            <div className="reveal mt-8 space-y-3">
              {[
                {
                  school: "University of Cincinnati",
                  degree: "M.Eng — Computer Science",
                  period: "2024 – 2026",
                  note: "GPA 4.0",
                  color: "cyan",
                },
                {
                  school: "VTU — RRCE",
                  degree: "B.Eng — Electrical & Electronics",
                  period: "2017 – 2021",
                  note: "Best Paper Award",
                  color: "green",
                },
              ].map((edu) => (
                <div
                  key={edu.school}
                  className="flex items-start gap-4 p-4 rounded-lg bg-surface border border-border/60 card-hover"
                >
                  <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${edu.color === "cyan" ? "bg-cyan" : "bg-green"}`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-display font-semibold text-bright text-sm">
                      {edu.school}
                    </p>
                    <p className="text-text text-xs mt-0.5">{edu.degree}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-mono text-xs text-muted">{edu.period}</p>
                    <p className={`font-mono text-xs mt-0.5 ${edu.color === "cyan" ? "text-cyan" : "text-green"}`}>
                      {edu.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: highlight cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className={`reveal p-5 rounded-xl bg-surface border border-border/60 card-hover`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className="text-2xl mb-3 block">{h.icon}</span>
                <h3 className="font-display font-semibold text-bright text-sm mb-2">
                  {h.title}
                </h3>
                <p className="text-muted text-xs leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
