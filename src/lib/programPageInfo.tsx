import littleTigerImg from "@/assets/programs/little-tiger.jpg";
import childrenImg from "@/assets/programs/children.jpg";
import preTeenImg from "@/assets/programs/pre-teen.png";
import advancedTeenImg from "@/assets/programs/advanced-teen.png";
import adultImg from "@/assets/programs/adult.png";
import kpopImg from "@/assets/programs/kpop.png";
import sparringImg from "@/assets/programs/sparring.jpg";
import juniorLeaderImg from "@/assets/programs/junior-leader.jpg";
import demoTeamImg from "@/assets/programs/demo-team.jpg";

export const allPrograms = [
  {
    name: "Little Tiger",
    age: "Ages 3–5",
    subtitle: "Early Childhood Program",
    image: littleTigerImg,
    details: [
      "Fun, respect-based classes designed for young children",
      "30-minute sessions to maintain focus",
      "Dedicated belt system for clarity and progress",
      "Builds confidence through board breaking and loud, respectful answers",
    ],
    schedule: "Mon/Wed/Thu/Fri: 3:40-4:10 PM | Sat: 10:30-11:00 AM",
  },
  {
    name: "Children's Class",
    age: "Ages 6–9 (Grades 1-4)",
    subtitle: "Foundation Building",
    image: childrenImg,
    details: [
      "Greater curriculum focus with longer class times",
      "Emphasis on discipline, respect, and fundamentals",
      "Early exposure accelerates progression",
      "Maintains fun learning environment",
    ],
    schedule: "Mon-Fri: 4:15-4:55 PM & 5:00-5:40 PM | Sat: 11:05-11:45 AM",
  },
  {
    name: "Pre-Teen",
    age: "Ages 10–13 (Grades 5-8)",
    subtitle: "Character Development",
    image: preTeenImg,
    details: [
      "Enhanced physical and mental training",
      "Eligible for Junior Leader Program",
      "Can join Black Hawk Demo Team",
      "Leadership roles and mentorship opportunities",
    ],
    schedule:
      "PreTeen: Mon/Tue: 5:45-6:30 PM| Teenager: Wed: 6:35-7:20 PM | Thu/Fri: 5:45-6:30 PM | Sat: 11:50 AM-12:40 PM",
  },
  {
    name: "Advanced Teen",
    age: "Ages 14–17 (Grades 8-12)",
    subtitle: "High Performance",
    image: advancedTeenImg,
    details: [
      "Focus on stamina, strength, and mental toughness",
      "Excellent extracurricular for college applications",
      "Stress relief and personal development",
      "Leadership opportunities through Junior Leader Program",
    ],
    schedule: "Mon: 7:30-8:10 PM | Thu: 8:10-9:00 PM | Wed: 8:10-9:00 PM (w/ Adult)",
  },
  {
    name: "Adult",
    age: "Ages 18+",
    subtitle: "Fitness & Wellness",
    image: adultImg,
    details: [
      "Stay fit and healthy through martial arts",
      "Stress relief and mental clarity",
      "Train alongside your children",
      "Welcoming community environment",
    ],
    schedule:
      "Mon: 8:10-9:00 PM (Cardio) | Wed: 8:10-9:00 PM (w/ Advanced Teen) | Sat: 11:50 AM-12:40 PM",
  },
  {
    name: "KPOP Dance",
    age: "Ages 7+",
    subtitle: "K-Pop Choreography",
    image: kpopImg,
    details: [
      "Learn original choreography from BTS, NCT, SEVENTEEN, and more",
      "Taught by Head Master Rin — Poomsae Gold Medalist",
      "4-week sessions for each song",
      "Auditions available for ONE BEAT DANCE CREW",
    ],
    schedule: "Friday: 6:45-7:45 PM | Saturday: 1:30-2:20 PM",
    price: "$25 trial, $80/month",
  },
  {
    name: "Sparring Class",
    age: "Children & Teens",
    subtitle: "Competition Training",
    image: sparringImg,
    details: [
      "Controlled combat training with experienced instructors",
      "Strategic kicks, punches, and defensive maneuvers",
      "Develops precision, agility, and discipline",
      "One class per week — consult Master Choi for details",
    ],
    schedule: "Wed: 5:45-6:30 PM (Children) | Wed: 7:30-8:10 PM (Teen)",
  },
  {
    name: "Demo Team",
    age: "Competitive Level",
    subtitle: "Performance & Competition",
    image: demoTeamImg,
    details: [
      "5x NYS Governor's Cup Champion",
      "High-energy performances with choreography",
      "Compete in taekwondo competitions",
      "Community performances at hospitals, schools, and events",
    ],
    schedule: "Thursday: 7:30-8:10 PM | Audition-based",
  },
  {
    name: "Junior Leader",
    age: "Selected Students",
    subtitle: "Leadership Development",
    image: juniorLeaderImg,
    details: [
      "Support and guide fellow students",
      "Develop leadership and mentorship skills",
      "Exemplify discipline and commitment",
      "Foster positive learning environment",
    ],
    schedule: "By invitation — Monthly meetings",
  },
];
