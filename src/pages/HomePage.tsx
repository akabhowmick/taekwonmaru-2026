import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const programs = [
  {
    name: "Little Tiger",
    age: "Ages 2–5",
    desc: "Our Early Childhood Program — fun, respect-based classes built for tiny attention spans and big confidence gains. 30-minute sessions with a dedicated belt track.",
  },
  {
    name: "Children's Class",
    age: "Ages 6–9",
    desc: "Longer classes with greater curriculum focus. Discipline, respect, and taekwondo fundamentals mastered early.",
    featured: true,
  },
  {
    name: "Pre-Teen",
    age: "Ages 10–13",
    desc: "Physical and mental development intensifies. Students can join the Junior Leader program and Black Hawk Demo Team.",
  },
  {
    name: "Advanced Teen",
    age: "Ages 14–17",
    desc: "High school program focused on stamina, strength, and mental toughness. An outstanding extracurricular for college applications.",
  },
  {
    name: "Adult",
    age: "Ages 18+",
    desc: "Stay fit, relieve stress, and train alongside our schools community. Perfect for parents who want to train while their kids do.",
  },
  {
    name: "Sparring & Demo",
    age: "Competition",
    desc: "For students who want to compete and perform. Our Black Hawk Demo Team is a NYS Governors Cup champion.",
  },
];

const whyChooseUs = [
  {
    icon: <Award size={28} />,
    title: "Award-Winning",
    desc: "5x NYS Governors Cup champions. Featured on FOX5 News.",
  },
  {
    icon: <Users size={28} />,
    title: "Expert Masters",
    desc: "7th degree Grand Master with 25+ years training NYPD & FDNY.",
  },
  {
    icon: <Trophy size={28} />,
    title: "Proven Results",
    desc: "Black belt character development alongside championship-level training.",
  },
  {
    icon: <Calendar size={28} />,
    title: "Family Focused",
    desc: "Programs for ages 2–adult. Train together, grow together.",
  },
];

export function HomePage() {
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
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(12,26,60,0.9)_0%,transparent_70%),radial-gradient(ellipse_50%_80%_at_30%_60%,rgba(192,57,43,0.12)_0%,transparent_60%),linear-gradient(160deg,#060c1a_0%,#0a1428_40%,#0d1a35_100%)]" />

        {/* Geometric lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-20%] right-[5%] w-px h-[140%] bg-gradient-to-b from-transparent via-gold/30 to-transparent rotate-[-12deg]" />
          <div className="absolute top-[-20%] right-[12%] w-px h-[140%] bg-gradient-to-b from-transparent via-gold/10 to-transparent rotate-[-12deg]" />
        </div>

        {/* Large background text */}
        <div
          className="absolute right-[-60px] top-1/2 -translate-y-1/2 font-bebas text-[clamp(200px,28vw,420px)] text-gold/[0.04] leading-none pointer-events-none tracking-tight whitespace-nowrap"
          aria-hidden="true"
        >
          MARU
        </div>

        <div className="relative z-10 px-6 lg:px-16 pt-36 pb-24 lg:pt-40 lg:pb-32 max-w-[760px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8 opacity-0 translate-y-7 animate-[fadeUp_0.8s_0.2s_forwards]">
            <span className="w-10 h-[1.5px] bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold">
              Bethpage, NY · Est. 2009
            </span>
          </div>

          {/* Title */}
          <h1 className="font-bebas text-[clamp(64px,9vw,130px)] leading-[0.92] tracking-[0.02em] text-white mb-7 opacity-0 translate-y-7 animate-[fadeUp_0.8s_0.4s_forwards]">
            Train Hard.
            <br />
            <span className="text-gold">Rise Far.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base leading-[1.8] text-muted max-w-[500px] mb-14 opacity-0 translate-y-7 animate-[fadeUp_0.8s_0.6s_forwards]">
            World-class Taekwondo instruction for ages 2 to adults. Discipline, confidence, and
            black belt character — forged one class at a time at TaekwonMaru.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-6 opacity-0 translate-y-7 animate-[fadeUp_0.8s_0.8s_forwards]">
            <Link to="/contact">
              <Button variant="primary" size="lg">
                Book a $10 Trial Class →
              </Button>
            </Link>
            <Link to="/programs">
              <Button variant="ghost">See All Programs</Button>
            </Link>
          </div>
        </div>

        {/* Trust bar */}
        <div className="absolute bottom-12 left-6 right-6 lg:left-16 lg:right-16 flex flex-wrap items-center gap-6 lg:gap-12 border-t border-border pt-7 opacity-0 animate-[fadeUp_0.8s_1.1s_forwards]">
          <div className="flex flex-col gap-1">
            <span className="font-bebas text-4xl text-gold leading-none">25+</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
              Years of Excellence
            </span>
          </div>
          <div className="hidden md:block w-px h-10 bg-border" />
          <div className="flex flex-col gap-1">
            <span className="font-bebas text-4xl text-gold leading-none">7th</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
              Degree Grand Master
            </span>
          </div>
          <div className="hidden md:block w-px h-10 bg-border" />
          <div className="flex flex-col gap-1">
            <span className="font-bebas text-4xl text-gold leading-none">1st</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
              Place NYS Gov. Cup '24
            </span>
          </div>
          <div className="hidden md:block w-px h-10 bg-border" />
          <div className="flex flex-col gap-1">
            <span className="font-bebas text-4xl text-gold leading-none">9</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
              Programs & Classes
            </span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-gold py-3.5 overflow-hidden" aria-hidden="true">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex">
              <span className="font-bebas text-[15px] tracking-[0.15em] text-navy px-10">
                Little Tigers <span className="text-navy/40">·</span>
              </span>
              <span className="font-bebas text-[15px] tracking-[0.15em] text-navy px-10">
                Children's Classes <span className="text-navy/40">·</span>
              </span>
              <span className="font-bebas text-[15px] tracking-[0.15em] text-navy px-10">
                Teen Programs <span className="text-navy/40">·</span>
              </span>
              <span className="font-bebas text-[15px] tracking-[0.15em] text-navy px-10">
                Adult Classes <span className="text-navy/40">·</span>
              </span>
              <span className="font-bebas text-[15px] tracking-[0.15em] text-navy px-10">
                KPOP Dance <span className="text-navy/40">·</span>
              </span>
              <span className="font-bebas text-[15px] tracking-[0.15em] text-navy px-10">
                Demo Team <span className="text-navy/40">·</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Trial CTA Band */}
      <section className="bg-gradient-to-r from-navy-light to-[#0d1f40] border-t border-b border-border py-20 lg:py-24 px-6 lg:px-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center reveal opacity-0 translate-y-9 transition-all duration-700">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-4">Start Here</p>
            <h2 className="font-bebas text-[clamp(42px,5vw,72px)] leading-[0.95] text-white mb-5">
              Your child's
              <br />
              <strong className="text-gold font-normal">first class</strong>
              <br />
              is only $10.
            </h2>
            <p className="text-[15px] leading-[1.8] text-muted max-w-[520px]">
              Come meet our masters, train with our students, and experience TaekwonMaru firsthand.
              One class is all it takes to see the difference a great school makes.
            </p>
          </div>
          <div className="text-center flex-shrink-0">
            <div className="font-bebas text-[100px] text-gold leading-none mb-2">
              <sup className="text-4xl align-super">$</sup>10
            </div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted mb-6">
              Trial Class · Any Age Group
            </p>
            <Link to="/contact">
              <Button variant="red" size="lg" className="w-full lg:w-auto">
                Claim Your Trial Spot →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-navy">
        <div className="mb-16 reveal opacity-0 translate-y-9 transition-all duration-700">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="w-8 h-px bg-gold" />
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold">For Every Age</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <h2 className="font-bebas text-[clamp(44px,6vw,80px)] leading-[0.95] tracking-[0.03em] text-white">
              Find Your
              <br />
              <span className="text-gold">Program</span>
            </h2>
            <Link to="/programs">
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
                <div className="inline-block bg-gold text-navy text-[9px] uppercase tracking-[0.25em] px-3 py-1 mb-5">
                  Most Popular
                </div>
              )}
              <div className="font-bebas text-[13px] tracking-[0.2em] text-gold mb-4">
                {program.age}
              </div>
              <h3 className="font-bebas text-[32px] text-white leading-none mb-4">
                {program.name}
              </h3>
              <p className="text-[13px] leading-[1.8] text-muted mb-7">{program.desc}</p>
              <ArrowRight className="text-gold-dim group-hover:text-gold group-hover:translate-x-1.5 transition-all" />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-navy-mid border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 reveal opacity-0 translate-y-9 transition-all duration-700">
            <div className="flex items-center justify-center gap-3.5 mb-5">
              <span className="w-8 h-px bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold">
                Why TaekwonMaru
              </span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-bebas text-[clamp(44px,6vw,80px)] leading-[0.95] tracking-[0.03em] text-white">
              Champion-Level
              <br />
              <span className="text-gold">Training</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <div
                key={item.title}
                className="reveal opacity-0 translate-y-9 transition-all duration-700 text-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold">
                  {item.icon}
                </div>
                <h3 className="font-bebas text-2xl text-white mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 lg:py-40 px-6 lg:px-16 bg-gradient-to-br from-[#060e20] via-[#0a1428] to-[#0d1835] border-t border-border text-center overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bebas text-[clamp(120px,18vw,280px)] text-gold/[0.03] whitespace-nowrap pointer-events-none tracking-[0.05em]"
          aria-hidden="true"
        >
          TKD
        </div>
        <div className="relative z-10 max-w-2xl mx-auto reveal opacity-0 translate-y-9 transition-all duration-700">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold mb-6">
            Your journey starts now
          </p>
          <h2 className="font-bebas text-[clamp(56px,8vw,120px)] leading-[0.9] text-white mb-7">
            First Class.
            <br />
            <span className="text-gold">$10.</span>
          </h2>
          <p className="text-base leading-[1.8] text-muted max-w-[500px] mx-auto mb-14">
            Meet the masters, train with the team, and see exactly why TaekwonMaru has been
            Bethpage's top martial arts school for over 15 years.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/contact">
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
    </div>
  );
}
