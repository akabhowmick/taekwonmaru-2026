import { ContactInfoPanel } from "@/components/Contact/ContactInfoPanel";
import { FullTrialForm } from "@/components/Contact/FulllForm";
import { PageHero } from "@/components/PageHero";

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
      <PageHero
        eyebrow="Get Started"
        title={
          <>
            Book a <span className="text-gold">Class</span>
          </>
        }
        subtitle="Ready to start your martial arts journey? Fill out the form to schedule your $10 trial class. We'll get back to you within 24 hours."
        glow="right"
      />

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
                  <p className="text-base 2xl:text-xl text-white leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
