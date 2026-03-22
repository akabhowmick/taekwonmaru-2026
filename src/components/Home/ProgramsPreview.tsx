import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { programs } from "@/lib/homePageInfo";

/**
 * ProgramsPreview
 * Grid of program cards linking to /contact for trial booking.
 */
export function ProgramsPreview() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-16 3xl:px-32 bg-navy">
      <div className="container-wide">
        <div className="mb-16 reveal opacity-0 translate-y-9 transition-all duration-700">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="w-8 h-px bg-gold" />
            <span className="text-base uppercase tracking-[0.35em] text-gold">For Every Age</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <h2 className="font-bebas text-[clamp(2.75rem,6vw,5rem)] leading-[0.95] tracking-[0.03em] text-white">
              Find Your
              <br />
              <span className="text-gold">Program</span>
            </h2>
            <Link aria-label="Read over our programs" to="/programs">
              <Button variant="ghost">View All Programs →</Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {programs.map((program, i) => (
            <div
              key={program.name}
              className={`reveal opacity-0 translate-y-9 transition-all duration-700 bg-navy-light border border-border p-11 relative overflow-hidden group hover:border-gold/40 hover:-translate-y-1 ${
                program.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold to-transparent scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
              {program.featured && (
                <div className="inline-block bg-gold text-navy text-base uppercase tracking-[0.25em] px-3 py-1 mb-5">
                  Most Popular
                </div>
              )}
              <div className="font-bebas text-base tracking-[0.2em] text-gold mb-4">
                {program.age}
              </div>
              <h3 className="font-bebas text-3xl text-white leading-none mb-4">{program.name}</h3>
              <p className="text-base leading-[1.8] text-white mb-7">{program.desc}</p>
              <Link
                aria-label="Go to the contact page to schedule a trial class!"
                to="/contact"
                className="inline-block"
              >
                <ArrowRight className="text-gold-dim group-hover:text-gold group-hover:translate-x-1.5 transition-all" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
