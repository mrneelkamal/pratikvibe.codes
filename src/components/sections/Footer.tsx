import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      icon: Github,
      href: "https://github.com/pratik",
      label: "GitHub",
    },
    {
      icon: Twitter,
      href: "https://x.com/pratik",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/pratik",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:pratik@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6">
          {/* Social links */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-lg border border-border p-2.5 text-text-muted transition-all duration-300 hover:border-accent-purple/40 hover:text-text-primary"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Closing line */}
          <p className="font-mono text-sm text-text-dim">
            Built with vibes, chai, and Claude.
          </p>

          {/* Copyright */}
          <p className="text-xs text-text-dim">
            &copy; {new Date().getFullYear()} Pratik. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
