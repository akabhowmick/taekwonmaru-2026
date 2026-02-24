import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import grandMasterChoiImg from "@/assets/masters/grand-master-choi.jpg";
import headMasterRinImg from "@/assets/masters/head-master-rin.jpg";
import masterAkashImg from "@/assets/masters/master-akash.jpg";
import masterOwenImg from "@/assets/masters/master-owen.jpg";
import masterAmeenImg from "@/assets/masters/master-ameen.png";
import masterAndrewImg from "@/assets/masters/master-andrew.jpg";

export const masters = [
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
