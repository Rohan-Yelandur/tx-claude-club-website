export default function Form() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-12 md:py-16">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
        <div className="flex-1">
          <h2 className="text-xl font-bold text-foreground sm:text-2xl md:text-3xl">
            Why join the Claude Builder Club?
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-foreground/80 sm:mt-6 sm:space-y-4 sm:text-base">
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="mt-0.5 text-primary sm:mt-1">•</span>
              <span>
                <strong>Hands-on workshops</strong> — Learn to build with Claude
                through practical, project-based sessions.
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="mt-0.5 text-primary sm:mt-1">•</span>
              <span>
                <strong>Hackathons & demos</strong> — Showcase your projects,
                get feedback, and compete for prizes.
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="mt-0.5 text-primary sm:mt-1">•</span>
              <span>
                <strong>Community & networking</strong> — Connect with fellow UT
                students passionate about AI.
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="mt-0.5 text-primary sm:mt-1">•</span>
              <span>
                <strong>Early access & resources</strong> — Get Claude API
                credits, tutorials, and the latest AI tools.
              </span>
            </li>
            <li className="flex items-start gap-2 sm:gap-3">
              <span className="mt-0.5 text-primary sm:mt-1">•</span>
              <span>
                <strong>Career opportunities</strong> — Build real AI project
                experience and a strong portfolio.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="mb-3 text-lg font-semibold text-foreground sm:mb-4 sm:text-xl md:text-2xl">
            Fill out this form to join!
          </h3>
          <div className="overflow-hidden rounded-lg border border-muted/20">
            <iframe
              id="JotFormIFrame-253555944387168"
              title="Registration Form"
              src="https://www.jotform.com/253555944387168"
              style={{
                minWidth: "100%",
                maxWidth: "100%",
                height: 450,
                border: "none",
              }}
              scrolling="yes"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
