import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const allPrograms = [
  {
    name: "Little Tiger",
    age: "Ages 2–5",
    subtitle: "Early Childhood Program",
    details: [
      "Fun, respect-based classes designed for young children",
      "30-minute sessions to maintain focus",
      "Dedicated belt system for clarity and progress",
      "Builds confidence through board breaking and loud, respectful answers",
    ],
    schedule: "Mon/Wed/Thu: 3:30 PM | Sat: 10:00 AM",
  },
  {
    name: "Children's Class",
    age: "Ages 6–9",
    subtitle: "Foundation Building",
    details: [
      "Greater curriculum focus with longer class times",
      "Emphasis on discipline, respect, and fundamentals",
      "Early exposure accelerates progression",
      "Maintains fun learning environment",
    ],
    schedule: "Mon/Wed/Thu: 4:30 PM | Sat: 11:00 AM",
  },
  {
    name: "Pre-Teen",
    age: "Ages 10–13",
    subtitle: "Character Development",
    details: [
      "Enhanced physical and mental training",
      "Eligible for Junior Leader Program",
      "Can join Black Hawk Demo Team",
      "Leadership roles and mentorship opportunities",
    ],
    schedule: "Mon/Wed/Thu: 5:30 PM | Sat: 12:00 PM",
  },
  {
    name: "Advanced Teen",
    age: "Ages 14–17",
    subtitle: "High Performance",
    details: [
      "Focus on stamina, strength, and mental toughness",
      "Excellent extracurricular for college applications",
      "Stress relief and personal development",
      "Leadership opportunities through Junior Leader Program",
    ],
    schedule: "Mon/Wed/Thu: 6:30 PM | Sat: 1:00 PM",
  },
  {
    name: "Adult",
    age: "Ages 18+",
    subtitle: "Fitness & Wellness",
    details: [
      "Stay fit and healthy through martial arts",
      "Stress relief and mental clarity",
      "Train alongside your children",
      "Welcoming community environment",
    ],
    schedule: "Mon/Wed/Thu: 7:30 PM | Sat: 2:00 PM",
  },
  {
    name: "KPOP Dance",
    age: "Ages 7+",
    subtitle: "K-Pop Choreography",
    details: [
      "Learn original choreography from BTS, NCT, SEVENTEEN, and more",
      "Taught by Head Master Rin — Poomsae Gold Medalist",
      "4-week sessions for each song",
      "Auditions available for ONE BEAT DANCE CREW",
    ],
    schedule: "Friday: 6:45 PM | Saturday: 1:30 PM",
    price: "$25 trial, $80/month",
  },
  {
    name: "Sparring Class",
    age: "All Belt Levels",
    subtitle: "Competition Training",
    details: [
      "Controlled combat training with experienced instructors",
      "Strategic kicks, punches, and defensive maneuvers",
      "Develops precision, agility, and discipline",
      "Friendly competitive environment",
    ],
    schedule: "Tuesday/Friday: 6:00 PM",
  },
  {
    name: "Junior Leader",
    age: "Selected Students",
    subtitle: "Leadership Development",
    details: [
      "Support and guide fellow students",
      "Develop leadership and mentorship skills",
      "Exemplify discipline and commitment",
      "Foster positive learning environment",
    ],
    schedule: "By invitation — Monthly meetings",
  },
  {
    name: "Black Hawk Demo Team",
    age: "Competitive Level",
    subtitle: "Performance & Competition",
    details: [
      "5x NYS Governors Cup Champion",
      "High-energy performances with choreography",
      "Compete in taekwondo competitions",
      "Community performances at hospitals, schools, and events",
    ],
    schedule: "Audition-based — Practice 2x/week",
  },
];

export function ProgramsPage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-9");
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-16 bg-gradient-to-br from-navy via-navy-mid to-navy-light overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,168,76,0.08)_0%,transparent_50%)]" />
        <div
          className="absolute right-[-40px] top-1/2 -translate-y-1/2 font-bebas text-[clamp(180px,20vw,320px)] text-gold/[0.03] leading-none pointer-events-none"
          aria-hidden="true"
        >
          TRAIN
        </div>

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3.5 mb-6">
            <span className="w-10 h-[1.5px] bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
              Find Your Path
            </span>
          </div>
          <h1 className="font-bebas text-[clamp(56px,8vw,110px)] leading-[0.9] text-white mb-6">
            Our <span className="text-gold">Programs</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted max-w-2xl mb-10">
            From Little Tigers at age 2 to competitive Demo Team and adult classes — TaekwonMaru
            offers world-class instruction for every stage of life. Each program is designed to
            build discipline, confidence, and black belt character.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Book a $10 Trial Class →
            </Button>
          </Link>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {allPrograms.map((program, i) => (
              <article
                key={program.name}
                className="reveal opacity-0 translate-y-9 transition-all duration-700 bg-navy-light border border-border p-10 hover:border-gold/40 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="font-bebas text-sm tracking-[0.2em] text-gold mb-3">
                  {program.age}
                </div>
                <h2 className="font-bebas text-3xl text-white leading-tight mb-2">
                  {program.name}
                </h2>
                <p className="text-xs uppercase tracking-wider text-muted mb-6">
                  {program.subtitle}
                </p>

                <ul className="space-y-3 mb-8">
                  {program.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-muted">
                      <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-border space-y-2">
                  <p className="text-xs uppercase tracking-wider text-gold">Schedule</p>
                  <p className="text-sm text-muted">{program.schedule}</p>
                  {program.price && <p className="text-sm text-muted">{program.price}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-navy-mid border-t border-border">
        <div className="max-w-5xl mx-auto text-center reveal opacity-0 translate-y-9 transition-all duration-700">
          <h2 className="font-bebas text-[clamp(48px,6vw,80px)] leading-[0.95] text-white mb-6">
            Ready to <span className="text-gold">Start?</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted max-w-2xl mx-auto mb-12">
            All programs start with a $10 trial class. No commitments, no pressure — just come
            experience the TaekwonMaru difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Book Your Trial →
              </Button>
            </Link>
            <Link to="/schedule">
              <Button variant="ghost">View Full Schedule</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Summer Promo */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-gradient-to-br from-martial-red/20 via-navy to-navy-light border-t border-martial-red/20">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-9 transition-all duration-700">
          <div className="inline-block bg-martial-red text-white text-xs uppercase tracking-wider px-4 py-2 mb-6">
            Limited Time Offer
          </div>
          <h2 className="font-bebas text-[clamp(52px,7vw,88px)] leading-[0.9] text-white mb-6">
            Summer <span className="text-martial-red-bright">Promotion</span>
          </h2>
          <div className="font-bebas text-7xl text-martial-red-bright mb-4">
            <sup className="text-3xl align-super">$</sup>199
          </div>
          <p className="text-xl text-muted mb-3">6 weeks · 2 classes per week</p>
          <p className="text-base text-muted mb-10">
            Includes TaekwonMaru t-shirt and training shorts
          </p>
          <Link to="/contact">
            <Button variant="red" size="lg">
              Claim This Offer →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
