import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * FinalCta
 * Full-width closing call-to-action with large typography and two action buttons.
 */
export function FinalCta() {
  return (
    <section className="relative py-32 lg:py-40 px-6 lg:px-16 3xl:px-32 bg-gradient-to-br from-[#060e20] via-[#0a1428] to-[#0d1835] border-t border-border text-center overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[clamp(7.5rem,18vw,17.5rem)] text-gold/[0.03] whitespace-nowrap pointer-events-none tracking-[0.05em]"
        aria-hidden="true"
      >
        TKD
      </div>
      <div className="relative z-10 max-w-2xl mx-auto reveal opacity-0 translate-y-9 transition-all duration-700">
        <p className="text-base 2xl:text-xl uppercase tracking-[0.35em] text-gold mb-6">
          Your journey starts now
        </p>
        <h2 className="font-bebas text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] text-white mb-7">
          First Program.
          <br />
          <span className="text-gold">$69.</span>
        </h2>
        <p className="text-xl leading-[1.8] text-white max-w-[500px] mx-auto mb-14">
          Meet the masters, train with the team, and see exactly why TaekwonMaru has been Bethpage's
          top martial arts school for over 15 years.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link aria-label="Go to the contact page to schedule a trial class!" to="/contact">
            <Button variant="primary" size="lg">
              Book Your Trial Class →
            </Button>
          </Link>
          <a href="tel:5164331887">
            <Button variant="outline" size="lg">
              Call (516) 433-1887
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
