import { CompactTrialForm } from "../Contact/CompactForm";
import buddyWeekImage from "@/assets/programs/Buddy Week.png";

/**
 * TrialCtaBand
 * Full-width band highlighting the $69 trial offer.
 */
export function TrialCtaBand() {
  return (
    <section className="bg-gradient-to-r from-navy-light to-[#0d1f40] border-t border-b border-border py-20 lg:py-24 px-6 lg:px-16 3xl:px-32">
      <div className="max-w-5xl 3xl:max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-16 reveal opacity-0 translate-y-9 transition-all duration-700">
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
            <div className="mt-8 max-w-[460px] rounded-xl bg-white p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <img
                src={buddyWeekImage}
                alt="Buddy Week promotion"
                className="w-full block rounded-lg"
              />
            </div>
          </div>
          <div className="w-full max-w-[560px] mx-auto lg:mx-0 flex-shrink-0">
            <CompactTrialForm />
          </div>
        </div>
      </div>
    </section>
  );
}
