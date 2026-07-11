import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import adImage from "@/assets/programs/ChatGPT Image Jun 29, 2026 at 10_12_41 PM.png";

const trustStats = [
  { value: "25+", label: "Years of Excellence" },
  { value: "7th", label: "Degree Grand Master" },
  { value: "1st", label: "Place NYS Gov. Cup '24" },
  { value: "9", label: "Programs & Classes" },
];

export function HomeHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(12,26,60,0.9)_0%,transparent_70%),radial-gradient(ellipse_50%_80%_at_30%_60%,rgba(192,57,43,0.12)_0%,transparent_60%),linear-gradient(160deg,#060c1a_0%,#0a1428_40%,#0d1a35_100%)]" />

      {/* Geometric lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[5%] w-px h-[140%] bg-gradient-to-b from-transparent via-gold/30 to-transparent rotate-[-12deg]" />
        <div className="absolute top-[-20%] right-[12%] w-px h-[140%] bg-gradient-to-b from-transparent via-gold/10 to-transparent rotate-[-12deg]" />
      </div>

      {/* Large background text */}
      <div
        className="absolute right-[-60px] top-1/2 -translate-y-1/2 font-bebas text-[clamp(12.5rem,28vw,26.25rem)] text-gold/[0.04] leading-none pointer-events-none tracking-tight whitespace-nowrap"
        aria-hidden="true"
      >
        MARU
      </div>

      {/* ── Row 1: main content ────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex items-center px-6 lg:px-16 3xl:px-32 pt-36 pb-12 lg:pt-40 lg:pb-16">
        <div className="w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text + CTAs */}
          <div>
            <div className="flex items-center gap-4 mb-8 animate-[fadeUp_0.6s_ease-out_forwards]">
              <span className="w-10 h-[1.5px] bg-gold" />
              <span className="text-base 2xl:text-xl uppercase tracking-[0.35em] text-gold">
                Bethpage, NY · Est. 2010
              </span>
            </div>

            <h1 className="font-bebas text-[clamp(4rem,9vw,8.125rem)] leading-[0.92] tracking-[0.02em] text-white mb-7">
              Train Hard.
              <br />
              <span className="text-gold">Rise Far.</span>
            </h1>

            <p className="text-xl leading-[1.8] text-white max-w-[500px] mb-12">
              World-class Taekwondo instruction for ages 3 to adults. Discipline, confidence, and
              black belt character — forged one class at a time at TaekwonMaru.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link aria-label="Go to the contact page to schedule a trial class!" to="/contact">
                <Button variant="primary" size="lg">
                  Book a $69 Trial Program →
                </Button>
              </Link>
              <Link aria-label="Read over our programs" to="/programs">
                <Button variant="red">See All Programs →</Button>
              </Link>
            </div>
          </div>

          {/* Right: ad image */}
          <div className="w-full mx-auto lg:mx-0 rounded-xl bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <img
              src={adImage}
              alt="Summer promotion — $69 for a 3-week program with a free t-shirt, and a free parent class"
              className="w-full block rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* ── Row 2: trust bar — in normal flow, no overlap ─────── */}
      <div className="relative z-10 hidden md:flex flex-wrap items-center gap-6 lg:gap-12 border-t border-border px-6 lg:px-16 3xl:px-32 py-7">
        {trustStats.map((stat, i) => (
          <>
            {i > 0 && <div key={`divider-${i}`} className="hidden md:block w-px h-10 bg-border" />}
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-bebas text-4xl text-gold leading-none">{stat.value}</span>
              <span className="text-base 2xl:text-xl uppercase tracking-[0.2em] text-white">
                {stat.label}
              </span>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
