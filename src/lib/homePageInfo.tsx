import { Award, Users, Trophy, Calendar } from "lucide-react";

export const programs = [
  {
    name: "Little Tiger",
    age: "Ages 3–5",
    desc: "Our Early Childhood Program — fun, respect-based classes built for tiny attention spans and big confidence gains. 30-minute sessions with a dedicated belt track.",
    featured: true,
  },
  {
    name: "Children's Class",
    age: "Ages 6–9",
    desc: "Longer classes with greater curriculum focus. Discipline, respect, and taekwondo fundamentals mastered early.",
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
    desc: "Stay fit, relieve stress, and train alongside our school's community. Perfect for parents who want to train while their kids do.",
  },
  {
    name: "Sparring & Demo",
    age: "Competition",
    desc: "For students who want to compete and perform. Our Black Hawk Demo Team is a NYS Governors Cup champion.",
  },
];

export const whyChooseUs = [
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
    desc: "Programs for ages 3–adult. Train together, grow together.",
  },
];
