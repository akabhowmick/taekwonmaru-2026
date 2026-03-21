import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfoPanel() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-bebas text-3xl text-white mb-8">Get In Touch</h2>
        <div className="space-y-6">
          <a
            href="tel:5164331887"
            aria-label="Call TaekwonMaru at (516) 433-1887"
            className="flex items-start gap-4 text-white hover:text-gold transition-colors group"
          >
            <div className="w-12 h-12 bg-navy-light border border-border rounded flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-colors">
              <Phone size={20} className="text-gold" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-gold mb-1">Phone</p>
              <p className="text-base text-white">(516) 433-1887</p>
            </div>
          </a>

          <a
            href="mailto:usataekwonmaru@gmail.com"
            aria-label="Email TaekwonMaru"
            className="flex items-start gap-4 text-white hover:text-gold transition-colors group"
          >
            <div className="w-12 h-12 bg-navy-light border border-border rounded flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-colors">
              <Mail size={20} className="text-gold" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-gold mb-1">Email</p>
              <p className="text-base text-white break-all">usataekwonmaru@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.google.com/maps/place/Maru+TaeKwonDo/@40.7412438,-73.4996425,17z/data=!3m1!4b1!4m6!3m5!1s0x89c280690b8faf85:0x1445eec347bb2097!8m2!3d40.7412398!4d-73.4970622!16s%2Fg%2F1ptx7d04z?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get directions to TaekwonMaru on Google Maps"
            className="flex items-start gap-4 text-white hover:text-gold transition-colors group"
          >
            <div className="w-12 h-12 bg-navy-light border border-border rounded flex items-center justify-center flex-shrink-0 group-hover:border-gold/40 transition-colors">
              <MapPin size={20} className="text-gold" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-wider text-gold mb-1">Location</p>
              <p className="text-base text-white">
                611 Hicksville Rd.
                <br />
                Bethpage, NY 11714
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="pt-8 border-t border-border">
        <h3 className="text-sm uppercase tracking-wider text-gold mb-4">Hours</h3>
        <div className="space-y-2 text-sm text-white">
          <div className="flex justify-between">
            <span className="text-white">Mon / Wed / Thu</span>
            <span>3:00–9:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white">Tue / Fri</span>
            <span>3:00–8:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white">Saturday</span>
            <span>10:00 AM–2:30 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-white">Sunday</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
