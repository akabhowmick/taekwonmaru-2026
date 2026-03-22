import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { PageHero } from "@/components/PageHero";
import { allPrograms } from "@/lib/programPageInfo";

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
      <PageHero
        eyebrow="For Every Age"
        title={
          <>
            Our <span className="text-gold">Programs</span>
          </>
        }
        subtitle="From Little Tigers to adult black belts — there's a class for every age and skill level at TaekwonMaru."
        centered
        glow="left"
      />

      {/* Programs Grid */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 3xl:px-32 bg-navy">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5">
            {allPrograms.map((program, i) => (
              <article
                key={program.name}
                className="reveal opacity-0 translate-y-9 transition-all duration-700 bg-navy-light border border-border p-10 hover:border-gold/40 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="aspect-video overflow-hidden border-b border-border">
                  <img
                    src={program.image}
                    alt={`${program.name} — ${program.subtitle}`}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="font-bebas text-base 2xl:text-xl tracking-[0.2em] text-gold mb-3">
                  {program.age}
                </div>
                <h2 className="font-bebas text-3xl text-white leading-tight mb-2">
                  {program.name}
                </h2>
                <p className="text-base 2xl:text-xl uppercase tracking-wider text-white mb-6">
                  {program.subtitle}
                </p>

                <ul className="space-y-3 mb-8">
                  {program.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-base 2xl:text-xl text-white"
                    >
                      <Check size={16} className="text-gold flex-shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-border space-y-2">
                  <p className="text-base 2xl:text-xl uppercase tracking-wider text-gold">
                    Schedule
                  </p>
                  {program.schedule.split("|").map((time, idx) => {
                    return (
                      <p key={idx} className="text-base 2xl:text-xl text-white">
                        {time.trim()}
                      </p>
                    );
                  })}
                  {program.price && (
                    <p className="text-base 2xl:text-xl text-white">{program.price}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 3xl:px-32 bg-navy-mid border-t border-border">
        <div className="max-w-5xl 3xl:max-w-3xl mx-auto text-center reveal opacity-0 translate-y-9 transition-all duration-700">
          <h2 className="font-bebas text-[clamp(3rem,6vw,5rem)] leading-[0.95] text-white mb-6">
            Ready to <span className="text-gold">Start?</span>
          </h2>
          <p className="text-lg leading-relaxed text-white max-w-2xl mx-auto mb-12">
            All programs start with a $10 trial class. No commitments, no pressure — just come
            experience the TaekwonMaru difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/contact" aria-label="Go to the contact page to book your trial class">
              <Button variant="primary" size="lg">
                Book Your Trial →
              </Button>
            </Link>
            <Link to="/schedule" aria-label="View the full class schedule">
              <Button variant="ghost">View Full Schedule</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Summer Promo */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 3xl:px-32 bg-gradient-to-br from-martial-red/20 via-navy to-navy-light border-t border-martial-red/20">
        <div className="max-w-4xl mx-auto text-center reveal opacity-0 translate-y-9 transition-all duration-700">
          <div className="inline-block bg-martial-red text-white text-base 2xl:text-xl uppercase tracking-wider px-4 py-2 mb-6">
            Limited Time Offer
          </div>
          <h2 className="font-bebas text-[clamp(3.25rem,7vw,5.5rem)] leading-[0.9] text-white mb-6">
            Winter <span className="text-martial-red-bright">Promotion</span>
          </h2>
          <div className="font-bebas text-7xl text-martial-red-bright mb-4">
            <sup className="text-3xl align-super">$</sup>199
          </div>
          <p className="text-xl text-white mb-3">6 weeks · 2 classes per week</p>
          <p className="text-xl text-white mb-10">Includes TaekwonMaru t-shirt</p>
          <Link to="/contact" aria-label="Go to the contact page to claim the winter promotion">
            <Button variant="red" size="lg">
              Claim This Offer →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
