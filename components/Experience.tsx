"use client";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    company: "University of Cincinnati",
    role: "Graduate Assistant — DevOps & Security",
    period: "Dec 2025 – Apr 2026",
    location: "Cincinnati, OH",
    tag: "Education",
    tagColor: "amber",
    bullets: [
      "Designed and automated CI/CD pipelines using GitHub Actions with Argo CD (GitOps), cutting manual release effort by 80% for Java Maven applications.",
      "Provisioned AWS infrastructure (VPC, EC2, IAM, ALB, EKS) using Terraform + Ansible with S3 remote state and DynamoDB locking — enabling reproducible, team-safe deployments.",
      "Containerized a full SQL injection lab environment in Docker, eliminating setup failures across 30+ student machines and creating reusable security documentation adopted for future semesters.",
      "Implemented parameterized query defenses against live injection attacks and authored the department's standard security lab guide.",
    ],
    stack: ["GitHub Actions", "Argo CD", "Terraform", "AWS", "Docker", "K8s", "Ansible"],
  },
  {
    company: "Tata Consultancy Services — Walgreens",
    role: "Java Developer",
    period: "May 2022 – Apr 2024",
    location: "Bengaluru, India",
    tag: "Healthcare · Enterprise",
    tagColor: "cyan",
    bullets: [
      "Architected event-driven refill microservices in Java & Spring Boot, implementing a persistent Refill Indicator that eliminated duplicate pharmacy orders by resolving race conditions and guaranteeing idempotency.",
      "Reduced Azure Cosmos DB response times by 50% (30s → 15s) by implementing API pagination and optimizing Request Unit (RU) consumption through targeted query refactoring.",
      "Led root-cause analysis using Azure App Insights and Kubernetes logs, resolving production defects 40% faster and maintaining a zero-rollback record across 24 consecutive sprints.",
      "Improved Cosmos DB performance by 30% through automated batch processes managing data lifecycle and proactive cleanup of stale records.",
    ],
    stack: ["Java", "Spring Boot", "Azure AKS", "Cosmos DB", "Kubernetes", "App Insights"],
  },
  {
    company: "Tata Consultancy Services — Walgreens",
    role: "Jr. Java Developer",
    period: "Nov 2021 – May 2022",
    location: "Bengaluru, India",
    tag: "Healthcare · Enterprise",
    tagColor: "cyan",
    bullets: [
      "Built a secure patient data REST API with OAuth 2.0 authentication, validated with Postman and Swagger for full endpoint integrity.",
      "Achieved 90%+ unit test coverage using JUnit + Mockito and resolved all critical SonarQube defects, eliminating duplicate code patterns across the microservices codebase.",
      "Managed sprint-end versioning and code promotion across SIT, UAT, and Production environments following strict release protocols.",
    ],
    stack: ["Java", "Spring Boot", "OAuth 2.0", "JUnit", "Mockito", "SonarQube", "REST"],
  },
  {
    company: "Gustovalley Technovations",
    role: "Backend Technical Intern",
    period: "Sep 2020 – Nov 2020",
    location: "Bengaluru, India",
    tag: "IoT · Data",
    tagColor: "green",
    bullets: [
      "Built SQL-backed REST APIs using PHP and HTML/CSS for real-time IoT device monitoring dashboards.",
      "Implemented Python (NumPy, Pandas) EDA on water consumption IoT data, reducing manual data labeling effort by 30%.",
    ],
    stack: ["Python", "PHP", "SQL", "HTML/CSS", "TCP/IP", "IoT"],
  },
];

const tagColors: Record<string, string> = {
  cyan: "text-cyan border-cyan/30 bg-cyan/8",
  green: "text-green border-green/30 bg-green/8",
  amber: "text-amber border-amber/30 bg-amber/8",
};

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 sm:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-cyan tracking-widest">02 /</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-bright">
            Experience
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tab list */}
          <div className="reveal lg:w-48 flex-shrink-0">
            <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 text-left px-3 py-2.5 font-mono text-xs rounded transition-all duration-200 border ${
                    active === i
                      ? "border-cyan/40 bg-cyan/8 text-cyan"
                      : "border-transparent text-muted hover:text-text hover:bg-surface"
                  }`}
                >
                  <span className="block truncate max-w-36 lg:max-w-none">
                    {exp.company.split("—")[0].split("Consultancy")[0].trim()}
                  </span>
                  {i < 2 && (
                    <span className="block text-[10px] text-muted mt-0.5 truncate">
                      {i === 0 ? "UC" : i === 1 ? "Java Dev" : "Jr Dev"}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active experience panel */}
          <div className="reveal flex-1 min-w-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className={`transition-all duration-300 ${
                  active === i ? "block" : "hidden"
                }`}
              >
                <div className="mb-6">
                  <div className="flex flex-wrap items-start gap-3 mb-2">
                    <h3 className="font-display font-bold text-xl text-bright">
                      {exp.role}
                    </h3>
                    <span
                      className={`px-2 py-0.5 rounded border font-mono text-xs flex-shrink-0 ${tagColors[exp.tagColor]}`}
                    >
                      {exp.tag}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 font-mono text-xs text-muted">
                    <span className="text-cyan">{exp.company}</span>
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-text text-sm leading-relaxed">
                      <span className="text-cyan mt-1.5 flex-shrink-0">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
                          <polygon points="0,0 8,4 0,8" />
                        </svg>
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded font-mono text-xs text-muted border border-border/60 bg-bg skill-tag"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
