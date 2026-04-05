import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import grandMasterChoiImg from "@/assets/masters/grand-master-choi-1.png";
import headMasterRinImg from "@/assets/masters/head-master-rin.png";
import masterAkashImg from "@/assets/masters/master-akash.png";
import masterAndrewImg from "@/assets/masters/master-andrew.jpg";
import masterGreg from "@/assets/masters/greg.png";

export const masters = [
  {
    name: "Grand Master Choi",
    subtitle: "Grand Master Seungcheol Choi",
    rank: "7th Degree Black Belt",
    image: grandMasterChoiImg,
    credentials: [
      "Master's Degree: Martial Arts Science",
      "Completed Kukkiwon – Masters Education Course",
      "W.T.F. Master's Certificate of Qualification",
      "Certified Handicapped People Physical Fitness and Safe Sports",
      "Certified Physical Fitness Training",
      "Yongmudo 3rd Degree Black Belt",
      "Taught NYPD, FDNY, and Special Military Coast Guard",
      "USA Taekwondo Member",
      "Graduated from Yong-In University – Majored in Taekwondo and Special Physical Education",
    ],
  },
  {
    name: "Head Master Rin",
    subtitle: "Head Master Yerin Choi",
    rank: "5th Dan Degree Black Belt",
    image: headMasterRinImg,
    credentials: [
      "Completed Kukkiwon – Masters Education Course",
      "KPOP Dance Instructor at Maru Taekwondo",
      "Black Hawk Demo Team Coach",
      "Majored in Early Childhood Education – BMCC, 2015",
      "Certified in Child Abuse Identification",
      "ATU 2021 Form Gold Medal",
      "Poomsae Championship Gold Medalist in Korea",
      "Taekwondo Dance Championship Gold Medalist in Korea",
      "National Sparring 2nd Place in Korea",
      "Guest Performer for Dance at Kollaboration NY and K-CON NY",
      "Guest Performer at Yong-In, Incheon, and Kyunghee Universities",
    ],
  },
  {
    name: "Master Akash",
    subtitle: "Akash Bhowmick",
    rank: "4th Degree Black Belt",
    image: masterAkashImg,
    credentials: [
      "Black Hawk Demo Team Leader 2018 and 2019",
      "TaekwonMaru Junior Leader Program Head",
      "2018/2019 NYS 1st Place Governor's Cup Demo Team",
      "2015 NYS Sparring: Gold & Bronze Medal",
      "ATU 2021 Form Gold Medal",
      "Completed Kukkiwon – Masters Education Course",
      "M.S. in Computer Engineering – NYU, 2020",
      "Proficient in Spanish, Italian, Bengali, and Hindi",
    ],
  },
  {
    name: "Master Greg",
    subtitle: "Master Greg",
    rank: "5th Degree Black Belt",
    image: masterGreg,
    credentials: [
      "Advanced Self Defense Tactics Instructor – Police and Correctional Officers, 1996",
      "3rd Dan Degree Hap Ki-Do; World Ki-Do Federation, 1994",
      "Pan-Am Junior and Masters TKD Championship – Silver Medal, 1993",
    ],
  },
  {
    name: "Master Andrew",
    subtitle: "Master Andrew Jung",
    rank: "4th Degree Black Belt",
    image: masterAndrewImg,
    credentials: [
      "2021, 2024 NYS 1st Place Governor's Cup Demo Team",
      "NYS Sparring, Form and Board-Breaking Gold Medal",
      "2019–2022 President Award Scholarship Recipient",
      "2021 APC Church TA",
    ],
  },
];

export const CLASS_OPTIONS = [
  "Little Tiger (2-5)",
  "Children (6-9)",
  "Pre-Teen (10-13)",
  "Advanced Teen (14-17)",
  "Adults (18+)",
  "Kpop Dance Class (7+)",
];
