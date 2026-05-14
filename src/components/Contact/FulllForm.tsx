import { Button } from "@/components/ui/button";
import { useTrialForm } from "@/hooks/useTrialForm";
import { CLASS_OPTIONS } from "@/lib/utils";

/**
 * FullTrialForm
 * Spacious full-layout form for the /contact page.
 * Includes all fields with generous padding and larger inputs.
 */
export function FullTrialForm() {
  const { isSubmitting, submitStatus, handleSubmit } = useTrialForm();

  return (
    <div className="bg-navy-light border border-border p-8 lg:p-10">
      <h2 className="font-bebas text-3xl text-white mb-2">Book Your Trial</h2>
      <p className="text-base 2xl:text-xl text-white mb-8">
        Fill out the form and we'll contact you to schedule your $69 Trial Program.
      </p>

      {submitStatus === "success" && (
        <div
          role="alert"
          className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded mb-6 text-base 2xl:text-xl"
        >
          Thank you! We've received your request and will contact you shortly.
        </div>
      )}
      {submitStatus === "error" && (
        <div
          role="alert"
          className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded mb-6 text-base 2xl:text-xl"
        >
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* FormSubmit hidden fields */}
        <input type="hidden" name="_subject" value="New Trial Class Booking" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Row 1: Student Name + Parent Name */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="full_student_name"
              className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-2"
            >
              Student Name *
            </label>
            <input
              type="text"
              id="full_student_name"
              name="student_name"
              required
              className="w-full bg-navy border border-border text-white px-4 py-3 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="full_parent_name"
              className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-2"
            >
              Parent Name
              <span className="text-white/60 text-base 2xl:text-xl ml-1">(if under 18)</span>
            </label>
            <input
              type="text"
              id="full_parent_name"
              name="parent_name"
              className="w-full bg-navy border border-border text-white px-4 py-3 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="full_email"
              className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-2"
            >
              Email *
            </label>
            <input
              type="email"
              id="full_email"
              name="email"
              required
              className="w-full bg-navy border border-border text-white px-4 py-3 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="full_phone"
              className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-2"
            >
              Phone *
            </label>
            <input
              type="tel"
              id="full_phone"
              name="phone"
              required
              pattern="[0-9]{10}"
              placeholder="1234567890"
              className="w-full bg-navy border border-border text-white px-4 py-3 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Class + Age */}
        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="full_class_interest"
              className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-2"
            >
              Class of Interest *
            </label>
            <select
              id="full_class_interest"
              name="class_interest"
              required
              className="w-full bg-navy border border-border text-white px-4 py-3 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors"
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
              htmlFor="full_age"
              className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-2"
            >
              Student Age *
            </label>
            <input
              type="number"
              id="full_age"
              name="student_age"
              required
              min={2}
              max={99}
              placeholder="e.g. 8"
              className="w-full bg-navy border border-border text-white px-4 py-3 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Row 4: Message */}
        <div>
          <label
            htmlFor="full_message"
            className="block text-base 2xl:text-xl uppercase tracking-wider text-gold mb-2"
          >
            Message
          </label>
          <textarea
            id="full_message"
            name="message"
            rows={4}
            className="w-full bg-navy border border-border text-white px-4 py-3 text-base 2xl:text-xl focus:outline-none focus:border-gold transition-colors resize-none"
            placeholder="Any questions or special requests?"
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? "Sending..." : "Submit Request →"}
        </Button>

        <p className="text-base 2xl:text-xl text-white text-center">
          We'll contact you within 24 hours to schedule your trial class.
        </p>
      </form>
    </div>
  );
}
