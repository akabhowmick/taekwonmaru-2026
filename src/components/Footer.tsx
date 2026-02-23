import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const footerLinks = {
  navigate: [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Schedule", path: "/schedule" },
    { name: "Book a Class", path: "/contact" },
  ],
  programs: [
    { name: "Little Tiger (2–5)", path: "/programs" },
    { name: "Children (6–9)", path: "/programs" },
    { name: "Pre-Teen (10–13)", path: "/programs" },
    { name: "Adv. Teen (14–17)", path: "/programs" },
    { name: "Adults (18+)", path: "/programs" },
    { name: "KPOP Dance", path: "/programs" },
  ],
};

const hours = [
  { days: "Mon / Wed / Thu", time: "3:00–9:00 PM" },
  { days: "Tue / Fri", time: "3:00–8:00 PM" },
  { days: "Saturday", time: "10:00 AM–2:30 PM" },
  { days: "Sunday", time: "Closed" },
];

export function Footer() {
  return (
    <footer className="bg-[#050a14] border-t border-border">
      <div className="px-6 lg:px-16 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div>
            <div className="font-serif text-[22px] font-semibold text-white tracking-[0.08em] mb-4">
              Taekwon<span className="text-gold">Maru</span>
            </div>
            <p className="text-[13px] leading-[1.8] text-white max-w-[260px] mb-7">
              World-class Taekwondo instruction for the whole family. Building champions in sport
              and in life since 2000.
            </p>
            <address className="text-xs leading-[1.9] text-white not-italic">
              611 Hicksville Rd. Bethpage, NY 11714
              <br />
              <a
                href="tel:5164331887"
                className="text-gold hover:text-gold-light transition-colors"
              >
                (516) 433-1887
              </a>
              <br />
              <a
                href="mailto:usataekwonmaru@gmail.com"
                className="text-gold hover:text-gold-light transition-colors"
              >
                usataekwonmaru@gmail.com
              </a>
            </address>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">Navigate</h3>
            <ul className="flex flex-col gap-3 list-none">
              {footerLinks.navigate.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[13px] text-white hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">Programs</h3>
            <ul className="flex flex-col gap-3 list-none">
              {footerLinks.programs.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[13px] text-white hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-gold mb-6">Hours</h3>
            <ul className="flex flex-col gap-2.5 list-none">
              {hours.map((hour) => (
                <li key={hour.days} className="flex justify-between gap-4 text-xs text-white">
                  <span className="text-white">{hour.days}</span>
                  <span>{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-8">
          <p className="text-[11px] text-white/50">
            © 2026 TaekwonMaru. All rights reserved. Made by{" "}
            <a
              href="https://akashbhowmick.com/"
              className="text-gold hover:text-gold-light transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              AB Codes
            </a>
            .
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.facebook.com/profile.php?id=100057127915552"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 border border-border flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://www.instagram.com/marutkd1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 border border-border flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all"
            >
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
