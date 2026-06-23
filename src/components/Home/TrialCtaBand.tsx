import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import adImage from "@/assets/programs/AD for Website.png";

/**
 * TrialCtaBand
 * Full-width band highlighting the $69 trial offer.
 */
export function TrialCtaBand() {
  return (
    <section className="bg-gradient-to-r from-navy-light to-[#0d1f40] border-t border-b border-border py-20 lg:py-24 px-6 lg:px-16 3xl:px-32">
      <div className="max-w-5xl 3xl:max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16 reveal opacity-0 translate-y-9 transition-all duration-700">
          <div className="lg:max-w-[480px]">
            <p className="text-base 2xl:text-xl uppercase tracking-[0.35em] text-gold mb-4">
              Start Here
            </p>
            <h2 className="font-bebas text-[clamp(2.625rem,5vw,4.5rem)] leading-[0.95] text-white mb-5">
              Your child's
              <br />
              <strong className="text-gold font-normal">first program</strong>
              <br />
              is only $69.
            </h2>
            <p className="text-base 2xl:text-xl leading-[1.8] text-white max-w-[460px]">
              Come meet our masters, train with our students, and experience TaekwonMaru firsthand.
              One class is all it takes to see the difference a great school makes.
            </p>
          </div>
          <div className="flex flex-col gap-5 flex-shrink-0 w-[14rem] sm:w-[16rem] lg:w-[18rem] xl:w-[20rem]">
            <div className="relative w-full rounded-xl overflow-hidden">
              <img
                src={adImage}
                alt="$69 for 3 weeks with free T-shirts — TaekwonMaru trial offer"
                className="w-full block"
              />
              {/* bottom fade into section background */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0d1f40] to-transparent pointer-events-none" />
              {/* edge vignette */}
              <div className="absolute inset-0 shadow-[inset_0_0_28px_rgba(7,15,35,0.55)] pointer-events-none" />
            </div>
            <Link
              aria-label="Go to the contact page to schedule a trial class!"
              to="/contact"
              className="block w-full"
            >
              <Button variant="red" size="default" className="w-full whitespace-nowrap">
                Claim Your Trial Spot →
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
