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
      <h2 className="font-bebas text-2xl text-white mb-1">Book Your Trial</h2>
      <p className="text-sm text-white mb-6">$10 trial · Any program · All ages</p>

      {submitStatus === "success" && (
        <div
          role="alert"
          className="bg-green-500/10 border border-green-500/30 text-green-400 p-3 rounded mb-4 text-sm"
        >
          Sent! We'll contact you within 24 hours.
        </div>
      )}
      {submitStatus === "error" && (
        <div
          role="alert"
          className="bg-red-500/10 border border-red-500/30 text-red-400 p-3 rounded mb-4 text-sm"
        >
          Something went wrong. Please try again or call us.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* FormSubmit hidden fields */}
        <input type="hidden" name="_subject" value="New Trial Class Booking" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        {/* Row 1: Student Name + Parent Name */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="compact_student_name"
              className="block text-xs uppercase tracking-wider text-gold mb-1.5"
            >
              Student Name *
            </label>
            <input
              type="text"
              id="compact_student_name"
              name="student_name"
              required
              className="w-full bg-navy border border-border text-white px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="compact_parent_name"
              className="block text-xs uppercase tracking-wider text-gold mb-1.5"
            >
              Parent Name
              <span className="text-white/60 ml-1">(if under 18)</span>
            </label>
            <input
              type="text"
              id="compact_parent_name"
              name="parent_name"
              className="w-full bg-navy border border-border text-white px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="compact_email"
              className="block text-xs uppercase tracking-wider text-gold mb-1.5"
            >
              Email *
            </label>
            <input
              type="email"
              id="compact_email"
              name="email"
              required
              className="w-full bg-navy border border-border text-white px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <div>
            <label
              htmlFor="compact_phone"
              className="block text-xs uppercase tracking-wider text-gold mb-1.5"
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
              className="w-full bg-navy border border-border text-white px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Row 3: Class + Age */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="compact_class_interest"
              className="block text-xs uppercase tracking-wider text-gold mb-1.5"
            >
              Class *
            </label>
            <select
              id="compact_class_interest"
              name="class_interest"
              required
              className="w-full bg-navy border border-border text-white px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
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
              className="block text-xs uppercase tracking-wider text-gold mb-1.5"
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
              className="w-full bg-navy border border-border text-white px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors"
            />
          </div>
        </div>

        {/* Row 4: Message */}
        <div>
          <label
            htmlFor="compact_message"
            className="block text-xs uppercase tracking-wider text-gold mb-1.5"
          >
            Message
          </label>
          <textarea
            id="compact_message"
            name="message"
            rows={3}
            className="w-full bg-navy border border-border text-white px-3 py-2.5 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
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
          {isSubmitting ? "Sending..." : "Book My $10 Trial →"}
        </Button>
      </form>
    </div>
  );
}
