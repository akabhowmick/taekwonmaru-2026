import { Link } from "react-router-dom";
import { useEffect } from "react";

export function PrivacyPage() {
  useEffect(() => {
    document.title = "Privacy Policy | TaekwonMaru";
  }, []);

  return (
    <div className="min-h-screen">
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-16 3xl:px-32 bg-gradient-to-br from-navy via-navy-mid to-navy-light overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,168,76,0.08)_0%,transparent_50%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="font-bebas text-[clamp(3rem,7vw,5.5rem)] leading-[0.9] text-white mb-3">
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className="text-sm text-muted mb-12">Last updated: August 3, 2026</p>

          <div className="space-y-10">
            <div>
              <h2 className="font-bebas text-2xl lg:text-3xl text-gold mb-3">
                Information We Collect
              </h2>
              <p className="text-base 2xl:text-xl leading-relaxed text-white">
                When you submit our contact or booking form, we collect the information you
                provide directly: your name, email address, phone number, and any message content
                you include.
              </p>
            </div>

            <div>
              <h2 className="font-bebas text-2xl lg:text-3xl text-gold mb-3">
                How We Use Your Information
              </h2>
              <p className="text-base 2xl:text-xl leading-relaxed text-white">
                We use this information to respond to inquiries, schedule trial classes, and
                communicate about programs. We never sell your information to third parties.
              </p>
            </div>

            <div>
              <h2 className="font-bebas text-2xl lg:text-3xl text-gold mb-3">
                Form Submissions
              </h2>
              <p className="text-base 2xl:text-xl leading-relaxed text-white">
                Our contact form is processed through{" "}
                <a
                  href="https://formsubmit.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  FormSubmit.co
                </a>
                , a third-party form relay. Please don't include sensitive personal information
                beyond what's needed to schedule a visit.
              </p>
            </div>

            <div>
              <h2 className="font-bebas text-2xl lg:text-3xl text-gold mb-3">
                Cookies and Analytics
              </h2>
              <p className="text-base 2xl:text-xl leading-relaxed text-white">
                This site does not use cookies, analytics, or tracking scripts of any kind.
              </p>
            </div>

            <div>
              <h2 className="font-bebas text-2xl lg:text-3xl text-gold mb-3">Contact Us</h2>
              <p className="text-base 2xl:text-xl leading-relaxed text-white">
                If you have any questions about this privacy policy, please{" "}
                <Link to="/contact" className="text-gold hover:text-gold-light transition-colors">
                  contact us
                </Link>
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
