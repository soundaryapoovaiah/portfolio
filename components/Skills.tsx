"use client";
import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "Languages",
    icon: "< >",
    skills: [
      { name: "Java", level: 95 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 85 },
      { name: "Shell / Bash", level: 70 },
      { name: "JavaScript", level: 60 },
    ],
  },
  {
    category: "Backend & APIs",
    icon: "⚙",
    skills: [
      { name: "Spring Boot", level: 95 },
      { name: "Microservices", level: 92 },
      { name: "RESTful APIs", level: 95 },
      { name: "OAuth 2.0", level: 80 },
      { name: "JUnit / Mockito", level: 90 },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    icon: "☁",
    skills: [
      { name: "Azure (AKS, CosmosDB)", level: 90 },
      { name: "AWS (EKS, EC2, S3)", level: 80 },
      { name: "Kubernetes", level: 85 },
      { name: "Docker", level: 88 },
      { name: "Terraform", level: 75 },
    ],
  },
  {
    category: "DevOps & Tooling",
    icon: "→",
    skills: [
      { name: "GitHub Actions", level: 85 },
      { name: "Argo CD (GitOps)", level: 80 },
      { name: "Ansible", level: 72 },
      { name: "SonarQube", level: 82 },
      { name: "Maven / Git", level: 90 },
    ],
  },
];

const certBadges = [
  { name: "Google Professional Cloud Developer", year: "2022", icon: "🏆" },
  { name: "Java Full Stack", year: "2021", icon: "☕" },
  { name: "Python 101: First Program", year: "2023", icon: "🐍" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
            // Animate progress bars
            entry.target.querySelectorAll(".skill-bar").forEach((bar) => {
              const el = bar as HTMLElement;
              const target = el.dataset.level || "0";
              setTimeout(() => {
                el.style.width = target + "%";
              }, 400);
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
    <section id="skills" ref={sectionRef} className="py-24 sm:py-32 bg-surface/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-cyan tracking-widest">04 /</span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-bright">
            Skills
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="reveal p-6 rounded-xl bg-surface border border-border/60 card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-cyan text-sm">{group.icon}</span>
                <h3 className="font-display font-semibold text-bright text-sm">
                  {group.category}
                </h3>
              </div>
              <div className="space-y-3.5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-mono text-xs text-text">{skill.name}</span>
                      <span className="font-mono text-xs text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="skill-bar h-full rounded-full bg-gradient-to-r from-cyan to-green transition-all duration-1000 ease-out"
                        style={{ width: "0%" }}
                        data-level={skill.level}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick tag cloud */}
        <div className="reveal mb-10">
          <p className="font-mono text-xs text-muted tracking-wider mb-4">
            // All Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Java", "Spring Boot", "Microservices", "REST APIs",
              "Python", "JavaScript", "SQL", "Bash",
              "Azure", "AWS", "GCP", "Docker", "Kubernetes",
              "Terraform", "Ansible", "GitHub Actions", "Argo CD",
              "JUnit", "Mockito", "SonarQube", "Postman", "Swagger",
              "Maven", "Git", "IntelliJ", "Jira", "Confluence",
              "CosmosDB", "MySQL", "Oracle DB", "DynamoDB",
              "OAuth 2.0", "GitOps", "CI/CD", "Agile/Scrum",
            ].map((t) => (
              <span
                key={t}
                className="skill-tag px-3 py-1.5 rounded-full border border-border/60 bg-bg font-mono text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="reveal">
          <p className="font-mono text-xs text-muted tracking-wider mb-4">
            // Certifications
          </p>
          <div className="flex flex-wrap gap-3">
            {certBadges.map((cert) => (
              <div
                key={cert.name}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-surface border border-border/60 card-hover"
              >
                <span className="text-base">{cert.icon}</span>
                <div>
                  <p className="font-display text-xs text-bright font-medium">{cert.name}</p>
                  <p className="font-mono text-[10px] text-muted">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
