import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-muted/30 bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-8 py-6 md:flex-row md:px-12">
        <p className="text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} Texas Claude Builder Club. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://www.instagram.com/texasclaude"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-foreground/60 transition-colors hover:text-primary"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="mailto:claudeattexas@gmail.com"
            aria-label="Email"
            className="text-foreground/60 transition-colors hover:text-primary"
          >
            <MdEmail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
