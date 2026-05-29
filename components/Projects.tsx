"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    number: "01",
    title: "Cloud-Native CI/CD Platform",
    subtitle: "GitOps Deployment Pipeline",
    description:
      "Designed and built a production-grade GitOps pipeline from scratch: GitHub Actions triggers Maven builds, Docker images are pushed to Docker Hub, and Argo CD handles declarative Kubernetes deployments — with full rollback capability and audit trail.",
    bullets: [
      "Provisioned AWS VPC, EC2, IAM, EKS, and S3 with Terraform, enforcing least-privilege access and remote state locking via DynamoDB",
      "Configured Application Load Balancers with Kubernetes Ingress for intelligent traffic routing across availability zones",
      "Ansible playbooks automated idempotent configuration of all EC2 instances, reducing setup time from hours to minutes",
    ],
    stack: ["GitHub Actions", "Argo CD", "Terraform", "Ansible", "AWS EKS", "Docker", "Kubernetes", "Maven"],
    color: "cyan",
    featured: true,
  },
  {
    number: "02",
    title: "AI Diagnostic Ticket Triage API",
    subtitle: "Java + AI Incident Triage Platform",
    description:
      "Built a production-grade Java Spring Boot backend that uses AI to classify IT support tickets, predict severity, route incidents, retrieve similar historical tickets using PostgreSQL pgvector, and audit every AI or human decision.",
    bullets: [
      "Integrated OpenAI-backed triage with deterministic fallback handling when the AI provider is unavailable, rate-limited, or misconfigured",
      "Implemented PostgreSQL pgvector similarity search to retrieve related historical incidents from ticket embeddings",
      "Added Flyway migrations, audit logs, manual override, Swagger docs, Docker Compose, JUnit/Mockito tests, and GitHub Actions CI",
    ],
    stack: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "pgvector",
      "OpenAI API",
      "Flyway",
      "Docker",
      "JUnit",
      "Mockito",
      "GitHub Actions",
    ],
    color: "green",
    featured: true,
    github: "https://github.com/soundaryapoovaiah/ai-diagnostic-ticket-triage",
  },
  {
  number: "03",
  title: "Inventory and Order Management API",
  subtitle: "Java Backend + PostgreSQL System",
  description:
    "Built a production-style Spring Boot REST API for products, customers, inventory, and multi-item customer orders using PostgreSQL, Spring Data JPA, Flyway migrations, and Docker Compose. The system demonstrates backend development with transactional stock updates, validation, pagination, sorting, error handling, and SQL verification.",
  bullets: [
    "Designed a normalized PostgreSQL schema with products, customers, orders, and order_items tables using foreign-key relationships and Flyway database migrations",
    "Implemented transactional order placement with customer validation, product validation, stock checks, inventory deduction, line-item totals, and total order calculation",
    "Built REST APIs for product, customer, and order workflows with pagination, sorting, low-stock reporting, validation, and clean API error responses",
  ],
  stack: [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Spring Data JPA",
    "Flyway",
    "Docker Compose",
    "Maven",
    "Postman",
  ],
  color: "amber",
  featured: true,
  github: "https://github.com/soundaryapoovaiah/inventory-order-management-api",
},
  {
    number: "04",
    title: "SQL Injection Defense Lab",
    subtitle: "Web Security Capstone",
    description:
      "Containerized a full SEED Labs security environment to demonstrate and defend against SQL injection vulnerabilities. Live attack simulation on vulnerable PHP apps followed by parameterized query countermeasures — adopted as the department's standard security curriculum.",
    bullets: [
      "Ran live injection attacks against login/query flows, proving unauthorized data access and manipulation via crafted payloads",
      "Implemented PHP prepared statements, completely neutralizing all tested injection vectors",
      "Extended the environment to Oracle Database for cross-RDBMS validation; lab guide adopted for future semesters",
    ],
    stack: ["Docker", "Docker Compose", "MySQL", "Oracle DB", "PHP", "Linux", "cURL", "SQL"],
    color: "purple",
    featured: true,
    github: "https://github.com/soundaryapoovaiah/SQL-Injection-in-Oracle-Database-23ai",
  },  
  {
    number: "05",
    title: "AI-Powered Chatbot Interface",
    subtitle: "Real-Time Web Application",
    description:
      "Developed a responsive web chatbot integrating the Gemini API for real-time AI responses. Built with dynamic JavaScript UI for fluid interaction flow, with clean state management and smooth user experience.",
    bullets: [
      "Integrated Gemini API with async request handling, streaming responses to minimize perceived latency",
      "Built custom UI components with CSS animations for message transitions and typing indicators",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Gemini API", "REST"],
    color: "rose",
    featured: false,
    github: "https://github.com/soundaryapoovaiah/My-ChatBot",
  },
];

const colorMap: Record<string, { accent: string; border: string; tag: string; dot: string }> = {
  cyan: {
    accent: "text-cyan",
    border: "hover:border-cyan/40",
    tag: "bg-cyan/8 text-cyan border-cyan/25",
    dot: "bg-cyan",
  },
  green: {
    accent: "text-green",
    border: "hover:border-green/40",
    tag: "bg-green/8 text-green border-green/25",
    dot: "bg-green",
  },
  amber: {
    accent: "text-amber",
    border: "hover:border-amber/40",
    tag: "bg-amber/8 text-amber border-amber/25",
    dot: "bg-amber",
  },
  purple: {
    accent: "text-purple-400",
    border: "hover:border-purple-400/40",
    tag: "bg-purple-400/8 text-purple-400 border-purple-400/25",
    dot: "bg-purple-400",
  },
  rose: {
    accent: "text-rose-400",
    border: "hover:border-rose-400/40",
    tag: "bg-rose-400/8 text-rose-400 border-rose-400/25",
    dot: "bg-rose-400",
  },
};

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 130);
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
    <section id="projects" ref={sectionRef} className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-4 mb-4">
          <span className="font-mono text-xs text-cyan tracking-widest">03 /</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-bright">
            Featured Work
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <p className="reveal text-muted text-sm font-mono mb-12">
          Systems built for production — not demos.
        </p>

        {/* Featured projects — large cards */}
        <div className="space-y-6 mb-8">
          {projects
            .filter((p) => p.featured)
            .map((proj) => {
              const c = colorMap[proj.color];
              return (
                <div
                  key={proj.number}
                  className={`reveal group p-6 sm:p-8 rounded-2xl bg-surface border border-border/60 card-hover ${c.border} relative overflow-hidden`}
                >
                  {/* Number watermark */}
                  <span className="absolute -right-4 -top-6 font-display font-black text-[8rem] text-border/20 select-none pointer-events-none leading-none">
                    {proj.number}
                  </span>

                  <div className="relative">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <span className={`font-mono text-xs ${c.accent} tracking-wider`}>
                          {proj.subtitle}
                        </span>
                        <h3 className="font-display font-bold text-xl sm:text-2xl text-bright mt-1">
                          {proj.title}
                        </h3>
                      </div>
                      <a
                        href={proj.github || "https://github.com/soundaryapoovaiah"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded border ${c.tag} font-mono text-xs transition-all duration-200 hover:opacity-80 flex-shrink-0`}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        View Code
                      </a>
                    </div>

                    <p className="text-text text-sm leading-relaxed mb-5">
                      {proj.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {proj.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2.5 text-muted text-xs leading-relaxed">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.dot}`} />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {proj.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded font-mono text-xs text-muted border border-border/60 bg-bg skill-tag"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Smaller cards for non-featured */}
        <div className="grid sm:grid-cols-2 gap-5">
          {projects
            .filter((p) => !p.featured)
            .map((proj) => {
              const c = colorMap[proj.color];
              return (
                <div
                  key={proj.number}
                  className={`reveal p-5 rounded-xl bg-surface border border-border/60 card-hover ${c.border}`}
                >
                  <span className={`font-mono text-xs ${c.accent}`}>{proj.subtitle}</span>
                  <h3 className="font-display font-semibold text-bright mt-1 mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-muted text-xs leading-relaxed mb-4">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded font-mono text-xs text-muted border border-border/50"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}

          {/* CTA card */}
          <div className="reveal p-5 rounded-xl border border-dashed border-border/40 flex flex-col items-center justify-center text-center gap-3">
            <span className="font-mono text-2xl">🔧</span>
            <p className="text-muted text-xs">More projects on GitHub</p>
            <a
              href="https://github.com/soundaryapoovaiah"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-cyan hover:underline"
            >
              github.com/soundaryapoovaiah →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
