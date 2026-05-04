export default function Footer() {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted">
          <span className="text-cyan">{">"}</span>{" "}
          <span>Built with Next.js + Tailwind</span>
          <span className="mx-2 text-border">·</span>
          <span>Soundarya Poovaiah Kookanda</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/soundaryapoovaiah/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-cyan transition-colors font-mono text-xs"
          >
            LinkedIn
          </a>
          <span className="text-border">·</span>
          <a
            href="https://github.com/soundaryapoovaiah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-cyan transition-colors font-mono text-xs"
          >
            GitHub
          </a>
          <span className="text-border">·</span>
          <a
            href="mailto:soundaryakookanda@gmail.com"
            className="text-muted hover:text-cyan transition-colors font-mono text-xs"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
