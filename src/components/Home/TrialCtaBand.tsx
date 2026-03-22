import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

/**
 * TrialCtaBand
 * Full-width band highlighting the $10 trial offer.
 */
export function TrialCtaBand() {
  return (
    <section className="bg-gradient-to-r from-navy-light to-[#0d1f40] border-t border-b border-border py-20 lg:py-24 px-6 lg:px-16 3xl:px-32">
      <div className="max-w-7xl 3xl:max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center reveal opacity-0 translate-y-9 transition-all duration-700">
          <div>
            <p className="text-base uppercase tracking-[0.35em] text-gold mb-4">Start Here</p>
            <h2 className="font-bebas text-[clamp(2.625rem,5vw,4.5rem)] leading-[0.95] text-white mb-5">
              Your child's
              <br />
              <strong className="text-gold font-normal">first class</strong>
              <br />
              is only $10.
            </h2>
            <p className="text-base leading-[1.8] text-white max-w-[520px]">
              Come meet our masters, train with our students, and experience TaekwonMaru firsthand.
              One class is all it takes to see the difference a great school makes.
            </p>
          </div>
          <div className="text-center flex-shrink-0">
            <div className="font-bebas text-[6.25rem] text-gold leading-none mb-2">
              <sup className="text-4xl align-super">$</sup>10
            </div>
            <p className="text-base uppercase tracking-[0.2em] text-white mb-6">
              Trial Class · Any Age Group
            </p>
            <Link aria-label="Go to the contact page to schedule a trial class!" to="/contact">
              <Button variant="red" size="lg" className="w-full lg:w-auto">
                Claim Your Trial Spot →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
