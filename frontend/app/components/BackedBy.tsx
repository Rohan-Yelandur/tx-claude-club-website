export default function BackedBy() {
  return (
    <section className="border-t border-muted/20 bg-surface px-4 py-6 sm:py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 sm:flex-row sm:gap-3">
        <span className="text-xs text-foreground/40 sm:text-sm">Backed by</span>
        {/* Anthropic Logo - Grayscale */}
        <a
          href="https://www.anthropic.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          aria-label="Anthropic"
        >
          {/*
            Upload your Anthropic logo to:
            /frontend/public/images/anthropic-logo.svg
          */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/Anthropic_Logo.svg"
            alt="Anthropic"
            className="h-3.5 w-auto sm:h-4"
          />
        </a>
      </div>
    </section>
  );
}
