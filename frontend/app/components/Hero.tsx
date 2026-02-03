export default function Hero() {
  return (
    <section className="flex flex-col items-center px-8 pt-20 pb-24 text-center md:pt-32 md:pb-36">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          UT Austin's Premier AI Club
        </h1>
      </div>

      <p className="mt-10 max-w-2xl text-lg leading-relaxed text-foreground/70 md:text-xl">
        Join the University of Texas  community of builders exploring, creating,
        and shipping with Claude. Workshops, hackathons, and demos every month.
      </p>

      <div className="mt-12 flex flex-col gap-5 sm:flex-row">
        <a
          href="/events"
          className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-dark md:text-lg"
        >
          View Events
        </a>
        <a
          href="/about"
          className="inline-flex items-center justify-center rounded-md border-2 border-primary px-10 py-3.5 text-base font-semibold text-primary transition-colors hover:bg-primary hover:text-white md:text-lg"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
