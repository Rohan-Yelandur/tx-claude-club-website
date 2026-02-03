import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="border-t border-muted/30 bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 sm:px-8 sm:py-6 md:flex-row md:px-12">
        <p className="text-xs text-foreground/60 sm:text-sm">
          &copy; {new Date().getFullYear()} Texas Claude Builder Club
        </p>

        <div className="flex items-center gap-4 sm:gap-5">
          <a
            href="https://www.instagram.com/texasclaude"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-foreground/60 transition-colors hover:text-primary"
          >
            <FaInstagram className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
          </a>
          <a
            href="mailto:claudeattexas@gmail.com"
            aria-label="Email"
            className="text-foreground/60 transition-colors hover:text-primary"
          >
            <MdEmail className="h-5 w-5 sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
