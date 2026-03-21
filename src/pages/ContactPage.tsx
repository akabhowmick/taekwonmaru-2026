import { CompactTrialForm } from "@/components/Contact/CompactForm";
import { ContactInfoPanel } from "@/components/Contact/ContactInfoPanel";
import { FullTrialForm } from "@/components/Contact/FulllForm";

const steps = [
  {
    title: "Fill Out the Form",
    desc: "Complete the booking form above with your information and class preference.",
  },
  {
    title: "Schedule Your Trial",
    desc: "We will contact you within 24 hours to schedule your $10 trial class at a convenient time.",
  },
  {
    title: "Take the Class",
    desc: "Meet our masters, train with our students, and experience TaekwonMaru firsthand.",
  },
  {
    title: "Choose Your Package",
    desc: "If you love it (and we think you will), sign up with one of our flexible membership packages.",
  },
];

export function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-16 3xl:px-32 bg-gradient-to-br from-navy via-navy-mid to-navy-light overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,168,76,0.08)_0%,transparent_50%)]" />
        <div className="relative z-10 container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3.5 mb-6">
              <span className="w-10 h-[1.5px] bg-gold" />
              <span className="text-sm uppercase tracking-[0.35em] text-gold">Get Started</span>
              <span className="w-10 h-[1.5px] bg-gold" />
            </div>
            <h1 className="font-bebas text-[clamp(3.5rem,8vw,6.875rem)] leading-[0.9] text-white mb-6">
              Book a <span className="text-gold">Class</span>
            </h1>
            <p className="text-lg leading-relaxed text-white max-w-2xl mx-auto lg:mx-0">
              Ready to start your martial arts journey? Fill out the form to schedule your $10 trial
              class. We'll get back to you within 24 hours.
            </p>
          </div>

          {/* Right: compact form — tablet/desktop only */}
          <div className="hidden md:block">
            <CompactTrialForm />
          </div>
        </div>
      </section>

      {/* ── Contact Info + Full Form ───────────────────────────── */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 3xl:px-32 bg-navy">
        <div className="container-wide grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          <ContactInfoPanel />
          <FullTrialForm />
        </div>
      </section>

      {/* ── How to Get Started Steps ───────────────────────────── */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 3xl:px-32 bg-navy-mid border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-[clamp(2.75rem,5vw,4rem)] leading-[0.95] text-white mb-4">
              How to <span className="text-gold">Get Started</span>
            </h2>
          </div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-navy-light border border-border p-6 lg:p-8 flex items-start gap-6 hover:border-gold/30 transition-colors"
              >
                <div className="w-14 h-14 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bebas text-2xl text-gold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-bebas text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
