import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const events = [
  {
    title: "KPOP Dance Class",
    details: [
      "Friday 6:45–7:45 PM",
      "Jennie/With the IE & Seventeen/Worth It",
      "Saturday 1:30–2:20 PM",
      "Boynextdoor/Hollywood Action",
    ],
  },
  {
    title: "February Events",
    details: [
      "Feb 16–17: No Class (School Holiday)",
      "Feb 9–21: Buddy Week — Bring a Friend!",
      "Feb 23: School closed (Snow day)",
    ],
  },
  {
    title: "Winter Promotion",
    details: ["$199 for 6 weeks · 2 classes/week", "Includes free TaekwonMaru t-shirt"],
  },
];

const weeklySchedule = [
  {
    day: "Monday",
    classes: [
      { time: "3:40 PM", name: "Little Tiger", age: "2-5" },
      { time: "4:15 PM", name: "Children", age: "6-9" },
      { time: "5:00 PM", name: "Children", age: "6-9" },
      { time: "5:45 PM", name: "Pre-Teen", age: "10-13" },
      { time: "6:35 PM", name: "LT & Children", age: "2-9" },
      { time: "7:30 PM", name: "Advanced Teen", age: "14-17" },
      { time: "8:10 PM", name: "Adult Cardio", age: "18+" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "3:40 PM", name: "Clean Up", age: "School" },
      { time: "4:15 PM", name: "Children", age: "6-9" },
      { time: "5:00 PM", name: "Children", age: "6-9" },
      { time: "5:45 PM", name: "Pre-Teen", age: "10-13" },
      { time: "6:35 PM", name: "LT & Children", age: "2-9" },
      { time: "7:30 PM", name: "Private Lesson", age: "By Appt" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "3:40 PM", name: "Little Tiger", age: "2-5" },
      { time: "4:15 PM", name: "Children", age: "6-9" },
      { time: "5:00 PM", name: "Children", age: "6-9" },
      { time: "5:45 PM", name: "Sparring Children", age: "6-9" },
      { time: "6:35 PM", name: "Teenager", age: "10-13" },
      { time: "7:30 PM", name: "Sparring Teen", age: "14-17" },
      { time: "8:10 PM", name: "Adult & Advanced Teen", age: "14+" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "3:40 PM", name: "Little Tiger", age: "2-5" },
      { time: "4:15 PM", name: "Children", age: "6-9" },
      { time: "5:00 PM", name: "Children", age: "6-9" },
      { time: "5:45 PM", name: "Teenager", age: "10-13" },
      { time: "6:35 PM", name: "LT & Children", age: "2-9" },
      { time: "7:30 PM", name: "Demo Team", age: "Competition" },
      { time: "8:10 PM", name: "Advanced Teenager", age: "14-17" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "3:40 PM", name: "Little Tiger", age: "2-5" },
      { time: "4:15 PM", name: "Children", age: "6-9" },
      { time: "5:00 PM", name: "Children", age: "6-9" },
      { time: "5:45 PM", name: "Teenager", age: "10-13" },
      { time: "6:45 PM", name: "KPOP Dance", age: "7+" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "10:30 AM", name: "Little Tiger", age: "2-5" },
      { time: "11:05 AM", name: "Children", age: "6-9" },
      { time: "11:50 AM", name: "Teenager & Adult", age: "10+" },
      { time: "1:30 PM", name: "KPOP Dance", age: "7+" },
    ],
  },
];

export function SchedulePage() {
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
      <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-16 bg-gradient-to-br from-navy via-navy-mid to-navy-light overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,168,76,0.08)_0%,transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3.5 mb-6">
            <span className="w-10 h-[1.5px] bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold">Plan Ahead</span>
            <span className="w-10 h-[1.5px] bg-gold" />
          </div>
          <h1 className="font-bebas text-[clamp(56px,8vw,110px)] leading-[0.9] text-white mb-6">
            Class <span className="text-gold">Schedule</span>
          </h1>
          <p className="text-lg leading-relaxed text-white max-w-2xl mx-auto mb-10">
            Find the perfect class time for your family. Classes run Monday through Saturday with
            programs for all ages and skill levels.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-white">
            <MapPin size={16} className="text-gold" />
            <span>611 Hicksville Rd. Bethpage, NY 11714</span>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 reveal opacity-0 translate-y-9 transition-all duration-700">
            <div className="flex items-center gap-3.5 mb-5">
              <span className="w-8 h-px bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold">This Month</span>
            </div>
            <h2 className="font-bebas text-[clamp(44px,5vw,64px)] leading-[0.95] text-white">
              Upcoming <span className="text-gold">Events</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event, i) => (
              <article
                key={event.title}
                className="reveal opacity-0 translate-y-9 transition-all duration-700 bg-navy-light border border-border p-8 hover:border-gold/40 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="font-bebas text-4xl text-gold leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-bebas text-2xl text-white mb-1">{event.title}</h3>
                  </div>
                </div>
                <div className="space-y-2">
                  {event.details.map((detail, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-white leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-gold mt-1">·</span>
                      <span>{detail}</span>
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-navy-mid border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 reveal opacity-0 translate-y-9 transition-all duration-700">
            <div className="flex items-center gap-3.5 mb-5">
              <span className="w-8 h-px bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold">
                Full Schedule
              </span>
            </div>
            <h2 className="font-bebas text-[clamp(44px,5vw,64px)] leading-[0.95] text-white">
              Weekly <span className="text-gold">Classes</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weeklySchedule.map((day, i) => (
              <article
                key={day.day}
                className="reveal opacity-0 translate-y-9 transition-all duration-700 bg-navy-light border border-border overflow-hidden"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="bg-gold/10 border-b border-gold/20 p-5">
                  <h3 className="font-bebas text-2xl text-gold flex items-center gap-2">
                    <Calendar size={20} />
                    {day.day}
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {day.classes.map((cls, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0"
                    >
                      <Clock size={14} className="text-gold flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white mb-0.5">{cls.time}</p>
                        <p className="text-xs text-white">
                          {cls.name} · {cls.age}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-navy border-t border-border">
        <div className="max-w-3xl mx-auto text-center reveal opacity-0 translate-y-9 transition-all duration-700">
          <h2 className="font-bebas text-[clamp(48px,6vw,72px)] leading-[0.95] text-white mb-6">
            Ready to <span className="text-gold">Join?</span>
          </h2>
          <p className="text-lg text-white mb-10">
            Book your $10 trial class and experience TaekwonMaru firsthand.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Book Your Trial Class →
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
