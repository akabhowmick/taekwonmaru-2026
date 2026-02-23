import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

const classOptions = [
  "Little Tiger (2-5)",
  "Children (6-9)",
  "Pre-Teen (10-13)",
  "Advanced Teen (14-17)",
  "Adults (18+)",
  "Kpop Dance Class (7+)",
];

export function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/usataekwonmaru@gmail.com", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-16 bg-gradient-to-br from-navy via-navy-mid to-navy-light overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,168,76,0.08)_0%,transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3.5 mb-6">
            <span className="w-10 h-[1.5px] bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold">Get Started</span>
            <span className="w-10 h-[1.5px] bg-gold" />
          </div>
          <h1 className="font-bebas text-[clamp(56px,8vw,110px)] leading-[0.9] text-white mb-6">
            Book a <span className="text-gold">Class</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted max-w-2xl mx-auto">
            Ready to start your martial arts journey? Fill out the form below to schedule your $10
            trial class. We'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-navy">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-bebas text-3xl text-white mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <a
                  href="tel:5164331887"
                  className="flex items-start gap-4 text-muted hover:text-gold transition-colors group"
                >
                  <div className="w-12 h-12 bg-navy-light border border-border rounded flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-colors">
                    <Phone size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold mb-1">Phone</p>
                    <p className="text-base text-white">(516) 433-1887</p>
                  </div>
                </a>

                <a
                  href="mailto:usataekwonmaru@gmail.com"
                  className="flex items-start gap-4 text-muted hover:text-gold transition-colors group"
                >
                  <div className="w-12 h-12 bg-navy-light border border-border rounded flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-colors">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold mb-1">Email</p>
                    <p className="text-base text-white break-all">usataekwonmaru@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/place/Maru+TaeKwonDo/@40.7412438,-73.4996425,17z/data=!3m1!4b1!4m6!3m5!1s0x89c280690b8faf85:0x1445eec347bb2097!8m2!3d40.7412398!4d-73.4970622!16s%2Fg%2F1ptx7d04z?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 text-muted hover:text-gold transition-colors group"
                >
                  <div className="w-12 h-12 bg-navy-light border border-border rounded flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-colors">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-gold mb-1">Location</p>
                    <p className="text-base text-white">
                      611 Hicksville Rd.
                      <br />
                      Bethpage, NY 11714
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <h3 className="text-xs uppercase tracking-wider text-gold mb-4">Hours</h3>
              <div className="space-y-2 text-sm text-muted">
                <div className="flex justify-between">
                  <span className="text-white">Mon / Wed / Thu</span>
                  <span>3:00–9:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Tue / Fri</span>
                  <span>3:00–8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Saturday</span>
                  <span>10:00 AM–2:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-navy-light border border-border p-8 lg:p-10">
            <h2 className="font-bebas text-3xl text-white mb-2">Book Your Trial</h2>
            <p className="text-sm text-muted mb-8">
              Fill out the form and we'll contact you to schedule your $10 trial class.
            </p>

            {submitStatus === "success" && (
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-4 rounded mb-6 text-sm">
                Thank you! We've received your request and will contact you shortly.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 p-4 rounded mb-6 text-sm">
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Hidden FormSubmit fields */}
              <input type="hidden" name="_subject" value="New Trial Class Booking" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="student_name"
                    className="block text-xs uppercase tracking-wider text-gold mb-2"
                  >
                    Student Name *
                  </label>
                  <input
                    type="text"
                    id="student_name"
                    name="student_name"
                    required
                    className="w-full bg-navy border border-border text-white px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="parent_name"
                    className="block text-xs uppercase tracking-wider text-gold mb-2"
                  >
                    Parent Name
                    <span className="text-muted text-[10px] ml-1">(if under 18)</span>
                  </label>
                  <input
                    type="text"
                    id="parent_name"
                    name="parent_name"
                    className="w-full bg-navy border border-border text-white px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-wider text-gold mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-navy border border-border text-white px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs uppercase tracking-wider text-gold mb-2"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    placeholder="1234567890"
                    className="w-full bg-navy border border-border text-white px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="class_interest"
                  className="block text-xs uppercase tracking-wider text-gold mb-2"
                >
                  Class of Interest *
                </label>
                <select
                  id="class_interest"
                  name="class_interest"
                  required
                  className="w-full bg-navy border border-border text-white px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
                >
                  {classOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs uppercase tracking-wider text-gold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-navy border border-border text-white px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors resize-none"
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

              <p className="text-xs text-muted text-center">
                We'll contact you within 24 hours to schedule your trial class.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-navy-mid border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-[clamp(44px,5vw,64px)] leading-[0.95] text-white mb-4">
              How to <span className="text-gold">Get Started</span>
            </h2>
          </div>

          <div className="space-y-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-navy-light border border-border p-6 lg:p-8 flex items-start gap-6 hover:border-gold/30 transition-colors"
              >
                <div className="w-14 h-14 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-bebas text-2xl text-gold">{i + 1}</span>
                </div>
                <div>
                  <h3 className="font-bebas text-xl text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const steps = [
  {
    title: "Fill Out the Form",
    desc: "Complete the booking form above with your information and class preference.",
  },
  {
    title: "Schedule Your Trial",
    desc: "We will contact you within 24 hours to schedule your $10 trial class at a convenient time.",
  },
  {
    title: "Take the Class",
    desc: "Meet our masters, train with our students, and experience TaekwonMaru firsthand.",
  },
  {
    title: "Choose Your Package",
    desc: "If you love it (and we think you will), sign up with one of our flexible membership packages.",
  },
];
