export default function Form() {
  return (
    <section className="mx-auto max-w-6xl px-8 py-12 md:py-16">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-16">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Why join the Claude Builder Club?
          </h2>
          <ul className="mt-6 space-y-4 text-foreground/80">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>
                <strong>Hands-on workshops</strong> — Learn to build with Claude
                through practical, project-based sessions led by experienced
                developers.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>
                <strong>Hackathons & demos</strong> — Showcase your projects,
                get feedback, and compete for prizes at our monthly events.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>
                <strong>Community & networking</strong> — Connect with fellow UT
                students passionate about AI, and build lasting relationships.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>
                <strong>Early access & resources</strong> — Get access to Claude
                API credits, exclusive tutorials, and the latest AI tools.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-primary">•</span>
              <span>
                <strong>Career opportunities</strong> — Stand out to employers
                with real AI project experience and a strong portfolio.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="mb-4 text-xl font-semibold text-foreground md:text-2xl">
            Fill out this form to join!
          </h3>
          <iframe
            id="JotFormIFrame-253555944387168"
            title="Registration Form"
            src="https://www.jotform.com/253555944387168"
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              height: 500,
              border: "none",
            }}
            scrolling="yes"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
