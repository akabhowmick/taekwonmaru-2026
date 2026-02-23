import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import logo from "../assets/tkd-logo.png";

const navLinks = [
  { name: "About Us", path: "/about" },
  { name: "Programs", path: "/programs" },
  { name: "Schedule", path: "/schedule" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 py-5 transition-all duration-400 lg:px-16",
        isScrolled && "bg-navy/95 backdrop-blur-2xl py-3.5 border-b border-border",
      )}
    >
      <Link to="/" className="flex items-center gap-3.5 group" aria-label="TaekwonMaru Home">
        <div className="w-11 h-11 border-[1.5px] border-gold rounded-full flex items-center justify-center font-serif text-base text-gold flex-shrink-0 transition-colors group-hover:bg-gold/10">
          <img src={logo} alt="TM" />
        </div>
        <span className="font-serif text-[17px] font-semibold text-white tracking-[0.08em] hidden sm:block">
          Taekwon<span className="text-gold">Maru</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center gap-9 list-none" role="navigation">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={cn(
                "text-xs uppercase tracking-[0.18em] transition-colors hover:text-gold",
                location.pathname === link.path ? "text-gold" : "text-muted",
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <Link to="/contact" className="hidden lg:block">
          <Button variant="outline" size="sm">
            Book a Class
          </Button>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2 focus:outline-none focus:ring-2 focus:ring-gold rounded"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-navy-mid/98 backdrop-blur-xl z-[190] animate-in fade-in duration-300">
          <ul className="flex flex-col gap-2 p-6" role="navigation">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "block text-lg uppercase tracking-[0.15em] py-4 px-4 rounded transition-colors",
                    location.pathname === link.path
                      ? "text-gold bg-gold/10"
                      : "text-muted hover:text-white hover:bg-white/5",
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link to="/contact" className="block">
                <Button variant="primary" className="w-full">
                  Book a Class →
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
