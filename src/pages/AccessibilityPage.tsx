import { Link } from "react-router-dom";
import { useEffect } from "react";

export function AccessibilityPage() {
  useEffect(() => {
    document.title = "Accessibility | TaekwonMaru";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-16 3xl:px-32 bg-gradient-to-br from-navy via-navy-mid to-navy-light overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,168,76,0.08)_0%,transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-bebas text-[clamp(3rem,7vw,5.5rem)] leading-[0.9] text-white mb-3">
            Accessibility <span className="text-gold">Statement</span>
          </h1>
          <p className="text-sm text-muted mb-8">Last updated: August 3, 2026</p>

          <p className="text-lg leading-relaxed text-white mb-12">
            TaekwonMaru is committed to ensuring digital accessibility for people of all abilities.
            We continually improve the user experience for everyone and apply relevant
            accessibility standards.
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="font-bebas text-2xl lg:text-3xl text-gold mb-3">
                Conformance Status
              </h2>
              <p className="text-base 2xl:text-xl leading-relaxed text-white">
                This site is designed to meet WCAG 2.1 Level AA guidelines, covering semantic
                HTML, keyboard navigation, ARIA labeling, and color contrast.
              </p>
            </div>

            <div>
              <h2 className="font-bebas text-2xl lg:text-3xl text-gold mb-3">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-base 2xl:text-xl leading-relaxed text-white">
                <li>Skip-to-content support</li>
                <li>Keyboard-navigable menus</li>
                <li>Visible focus indicators</li>
                <li>Alt text on images</li>
                <li>
                  Sufficient color contrast between the navy background and gold/white text
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-bebas text-2xl lg:text-3xl text-gold mb-3">
                Known Limitations
              </h2>
              <p className="text-base 2xl:text-xl leading-relaxed text-white">
                Some third-party embeds, such as YouTube videos, follow their own accessibility
                standards, which TaekwonMaru doesn't control directly.
              </p>
            </div>

            <div>
              <h2 className="font-bebas text-2xl lg:text-3xl text-gold mb-3">Feedback</h2>
              <p className="text-base 2xl:text-xl leading-relaxed text-white">
                We welcome your feedback on the accessibility of the TaekwonMaru website. If you
                encounter an accessibility barrier, please{" "}
                <Link to="/contact" className="text-gold hover:text-gold-light transition-colors">
                  contact us
                </Link>{" "}
                or email{" "}
                <a
                  href="mailto:usataekwonmaru@gmail.com"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  usataekwonmaru@gmail.com
                </a>
                .
              </p>
            </div>
          </div>

          <Link
            to="/"
            className="inline-block mt-16 text-gold hover:text-gold-light transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
