import { Award, BookOpen, Users } from "lucide-react";
import { useEffect, useRef } from "react";

import grandMasterChoiImg from "../assets/masters/grand-master-choi.jpg";
import headMasterRinImg from "@/assets/masters/head-master-rin.jpg";
import masterAkashImg from "@/assets/masters/master-akash.jpg";
import masterOwenImg from "@/assets/masters/master-owen.jpg";
import masterAmeenImg from "@/assets/masters/master-ameen.png";
import masterAndrewImg from "@/assets/masters/master-andrew.jpg";

const masters = [
  {
    name: "Grand Master Choi",
    rank: "7th Degree Black Belt",
    image: grandMasterChoiImg,
    credentials: [
      "Masters Degree: Martial Arts Science",
      "Completed Kukkiwon Masters Education Course",
      "W.T.F. Masters Certificate of Qualification",
      "Trained NYPD, FDNY, and Special Military Coast Guard",
      "Graduated from Yong-In University",
    ],
  },
  {
    name: "Head Master Rin",
    rank: "5th Dan Degree Black Belt",
    image: headMasterRinImg,
    credentials: [
      "KPOP Dance Instructor",
      "Black Hawk Demo Team Coach",
      "Poomsae Championship Gold Medalist in Korea",
      "Guest performer at K-CON NY",
      "Majored in Early Childhood Education",
    ],
  },
  {
    name: "Master Akash",
    rank: "4th Degree Black Belt",
    image: masterAkashImg,
    credentials: [
      "Black Hawk Demo Team Leader 2018-2019",
      "TaekwonMaru Junior Leader Program Head",
      "2018/2019 NYS 1st Place Governors Cup Demo Team",
      "M.S. in Computer Engineering – NYU",
      "Proficient in 5 languages",
    ],
  },
  {
    name: "Master Owen",
    rank: "4th Degree Black Belt",
    image: masterOwenImg,
    credentials: [
      "Black Hawk Demo Team Leader 2021, 2023, 2024",
      "St Johns University major in Radiology",
      "2018-2021, 2024 NYS 1st Place Governors Cup",
      "President Award Scholarship Recipient",
    ],
  },
  {
    name: "Master Ameen",
    rank: "4th Degree Black Belt",
    image: masterAmeenImg,
    credentials: [
      "Black Hawk Demo Team Leader 2022",
      "2018-2021, 2024 NYS 1st Place Governors Cup",
      "NYS Gold Medal: Sparring, Form, Board Breaking",
      "Certified Lifeguard",
    ],
  },
  {
    name: "Master Andrew",
    rank: "4th Degree Black Belt",
    image: masterAndrewImg,
    credentials: [
      "2021, 2024 NYS 1st Place Governor's Cup Demo Team",
      "NYS Gold Medal: Sparring, Form, Board Breaking",
      "2019-2022 President Award Scholarship Recipient",
    ],
  },
];

export function AboutPage() {
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,168,76,0.08)_0%,transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3.5 mb-6">
            <span className="w-10 h-[1.5px] bg-gold" />
            <span className="text-[11px] uppercase tracking-[0.35em] text-gold">Since 2000</span>
            <span className="w-10 h-[1.5px] bg-gold" />
          </div>
          <h1 className="font-bebas text-[clamp(56px,8vw,110px)] leading-[0.9] text-white mb-6">
            About <span className="text-gold">TaekwonMaru</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted max-w-2xl mx-auto">
            For over 15 years, TaekwonMaru has been Bethpage's premier martial arts school —
            building champions in sport and in life through world-class Taekwondo instruction.
          </p>
        </div>
      </section>
      {/* Masters */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-navy-mid border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal opacity-0 translate-y-9 transition-all duration-700">
            <div className="flex items-center justify-center gap-3.5 mb-5">
              <span className="w-8 h-px bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold">
                Expert Instruction
              </span>
              <span className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-bebas text-[clamp(44px,6vw,80px)] leading-[0.95] text-white mb-6">
              Meet Our <span className="text-gold">Masters</span>
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              World-class instructors with championship credentials, Kukkiwon certification, and a
              genuine passion for student development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {masters.map((master, i) => (
              <article
                key={master.name}
                className="reveal opacity-0 translate-y-9 transition-all duration-700 bg-navy-light border border-border overflow-hidden hover:border-gold/40 hover:-translate-y-1"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[3/4] bg-gradient-to-br from-navy-light to-navy flex items-center justify-center border-b border-border">
                  <img
                    src={master.image}
                    alt={master.name}
                    className="w-full h-full object-cover object-top transition-all duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-gold mb-2">
                    {master.rank}
                  </p>
                  <h3 className="font-bebas text-2xl text-white mb-4">{master.name}</h3>
                  <ul className="space-y-2">
                    {master.credentials.slice(0, 3).map((cred, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-muted leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-gold mt-1">·</span>
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32 px-6 lg:px-16 bg-navy">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal opacity-0 translate-y-9 transition-all duration-700">
            <div className="flex items-center gap-3.5 mb-5">
              <span className="w-8 h-px bg-gold" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-gold">
                Our Philosophy
              </span>
            </div>
            <h2 className="font-bebas text-[clamp(44px,5vw,64px)] leading-[0.95] text-white mb-6">
              Excellence in
              <br />
              <span className="text-gold">Every Detail</span>
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                TaekwonMaru was founded on the belief that martial arts training transforms lives —
                not just through physical technique, but through character development, discipline,
                and community.
              </p>
              <p>
                Led by Grand Master Seungcheol Choi, a 7th Degree Black Belt with a Master's Degree
                in Martial Arts Science, our team brings championship-level expertise to students of
                all ages and abilities.
              </p>
              <p>
                From our Little Tigers program for ages 2-5 to our competitive Black Hawk Demo Team,
                every class at TaekwonMaru is designed to help students discover their full
                potential.
              </p>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-9 transition-all duration-700 delay-200 grid grid-cols-1 gap-6">
            <div className="bg-navy-light border border-border p-8 hover:border-gold/30 transition-colors">
              <Award className="text-gold mb-4" size={32} />
              <h3 className="font-bebas text-2xl text-white mb-3">Award-Winning Team</h3>
              <p className="text-sm text-muted leading-relaxed">
                5x NYS Governor's Cup champions. Featured on FOX5 News. Our Black Hawk Demo Team
                represents the highest level of taekwondo performance.
              </p>
            </div>
            <div className="bg-navy-light border border-border p-8 hover:border-gold/30 transition-colors">
              <Users className="text-gold mb-4" size={32} />
              <h3 className="font-bebas text-2xl text-white mb-3">Community Focused</h3>
              <p className="text-sm text-muted leading-relaxed">
                More than just a school — we're a family. Students train together, support each
                other, and grow together through every belt level.
              </p>
            </div>
            <div className="bg-navy-light border border-border p-8 hover:border-gold/30 transition-colors">
              <BookOpen className="text-gold mb-4" size={32} />
              <h3 className="font-bebas text-2xl text-white mb-3">Proven Curriculum</h3>
              <p className="text-sm text-muted leading-relaxed">
                Kukkiwon-certified instruction following World Taekwondo Federation standards with
                15+ years of refinement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
