import { Button } from "@/components/ui/button";
import { useTrialForm } from "@/hooks/useTrialForm";
import { CLASS_OPTIONS } from "@/lib/utils";

/**
 * CompactTrialForm
 * Condensed 2-column grid form for hero sections (e.g. home page).
 * All fields from the full form are present; layout is tighter.
 */
export function CompactTrialForm() {
  const { isSubmitting, submitStatus, handleSubmit } = useTrialForm();

  return (
    <div className="bg-navy/80 backdrop-blur-sm border border-border p-8">
      <h2 className="font-bebas text-[clamp(2.5rem,4vw,4rem)] leading-[0.9] text-white mb-1">
        Begin Your<br /><span className="text-gold">Journey.</span>
      </h2>
      <p className="text-base 2xl:text-xl text-white mb-5">$69 trial · Any program · All ages</p>

      {submitStatus === "success" && (
        <div
          role="alert"
          className="bg-green-500/10 border border-green-500/30 text-green-400 p-3 rounded mb-4 text-base 2xl:text-xl"
        >
          Sent! We'll contact you within 24 hours.
        </div>
      )}
      {submitStatus === "error" && (
        <div
          role="alert"
          className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded mb-4 text-base 2xl:text-xl"
        >
          Something went wrong. Please try again or call us.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        {/* FormSubmit hidden fields */}
        <input type="hidden" name="_subject" value="New Trial Class Booking" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Section 01 */}
        <div className="flex items-baseline gap-3 pb-1">
          <span className="font-bebas text-3xl text-gold/50 leading-none">01</span>
          <span className="font-bebas text-sm tracking-[0.2em] text-gold/70 uppercase">About You</span>
        </div>

        {/* Row 1: Student Name + Parent Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="compact_student_name"
              className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-1.5"
            >
              Student Name *
            </label>
            <input
              type="text"
              id="compact_student_name"
              name="student_name"
              required
              className="w-full bg-navy border border-border text-white px-3 py-2.5 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="compact_parent_name"
              className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-1.5"
            >
              Parent Name
              <span className="text-white/60 ml-1">(if under 18)</span>
            </label>
            <input
              type="text"
              id="compact_parent_name"
              name="parent_name"
              className="w-full bg-navy border border-border text-white px-3 py-2.5 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Section 02 */}
        <div className="flex items-baseline gap-3 pt-2 pb-1">
          <span className="font-bebas text-3xl text-gold/50 leading-none">02</span>
          <span className="font-bebas text-sm tracking-[0.2em] text-gold/70 uppercase">How to Reach You</span>
        </div>

        {/* Row 2: Email + Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="compact_email"
              className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-1.5"
            >
              Email *
            </label>
            <input
              type="email"
              id="compact_email"
              name="email"
              required
              className="w-full bg-navy border border-border text-white px-3 py-2.5 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="compact_phone"
              className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-1.5"
            >
              Phone *
            </label>
            <input
              type="tel"
              id="compact_phone"
              name="phone"
              required
              pattern="[0-9]{10}"
              placeholder="1234567890"
              className="w-full bg-navy border border-border text-white px-3 py-2.5 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Section 03 */}
        <div className="flex items-baseline gap-3 pt-2 pb-1">
          <span className="font-bebas text-3xl text-gold/50 leading-none">03</span>
          <span className="font-bebas text-sm tracking-[0.2em] text-gold/70 uppercase">Your Class</span>
        </div>

        {/* Row 3: Class + Age */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="compact_class_interest"
              className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-1.5"
            >
              Class *
            </label>
            <select
              id="compact_class_interest"
              name="class_interest"
              required
              className="w-full bg-navy border border-border text-white px-3 py-2.5 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors"
            >
              {CLASS_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="compact_age"
              className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-1.5"
            >
              Student Age *
            </label>
            <input
              type="number"
              id="compact_age"
              name="student_age"
              required
              min={2}
              max={99}
              placeholder="e.g. 8"
              className="w-full bg-navy border border-border text-white px-3 py-2.5 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        <div className="pt-1">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full"
          >
            {isSubmitting ? "Sending..." : "Book My $69 Trial →"}
          </Button>
        </div>
      </form>
    </div>
  );
}
