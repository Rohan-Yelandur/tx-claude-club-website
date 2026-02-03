import Link from "next/link";
import Image from "next/image";
import logo from "../logo.svg";

const navLinks = [{ label: "Events", href: "/events" }];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 md:px-12">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src={logo}
            alt="Claude logo"
            width={40}
            height={40}
            className="h-8 w-8 transition-transform duration-300 ease-out group-hover:rotate-12 md:h-10 md:w-10"
          />
          <div className="flex flex-col gap-0.5 leading-tight">
            <span className="text-lg font-bold tracking-tight text-foreground md:text-xl">
              University of Texas at Austin
            </span>
            <span className="text-sm font-semibold tracking-wide text-primary md:text-base">
              Claude Builder Club
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-foreground/70 md:flex lg:gap-10 lg:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>

      <div className="h-[3px] w-full bg-primary" />
    </header>
  );
}
