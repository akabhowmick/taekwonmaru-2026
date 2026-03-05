import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

import grandMasterChoiImg from "@/assets/masters/grand-master-choi.jpg";
import headMasterRinImg from "@/assets/masters/head-master-rin.jpg";
import masterAkashImg from "@/assets/masters/master-akash.jpg";
import masterAndrewImg from "@/assets/masters/master-andrew.jpg";
import masterGreg from "@/assets/masters/greg.png";

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
    name: "Master Greg",
    rank: "5th Degree Black Belt",
    image: masterGreg,
    credentials: [
      "Advanced Self Defense Tactics Instructor Police and Correctional Officers - 1996",
      "3rd Dan Degree Hap Ki-Do 3rd Degree; World Ki-Do Federation. 1994",
      "Pan-Am Junior and Masters TKD Championship; Silver Medal. 1993",
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
