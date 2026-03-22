import { masters } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function MasterCard({ master, delay }: { master: (typeof masters)[number]; delay: number }) {
  const [expanded, setExpanded] = useState(false);
  const PREVIEW = 3;
  const hasMore = master.credentials.length > PREVIEW;

  return (
    <article
      className="reveal opacity-0 translate-y-9 transition-all duration-700 bg-navy-light border border-border overflow-hidden hover:border-gold/40 hover:-translate-y-1"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Photo */}
      <div className="aspect-[3/4] bg-gradient-to-br from-navy-light to-navy flex items-center justify-center border-b border-border">
        <img
          src={master.image}
          alt={`${master.name}, ${master.rank}`}
          className="w-full h-full object-cover object-top transition-all duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-base 2xl:text-xl uppercase tracking-[0.25em] text-gold mb-1">
          {master.rank}
        </p>
        <h3 className="font-bebas text-2xl text-white mb-1">{master.name}</h3>
        {master.rank && master.rank !== master.name && (
          <p className="text-sm text-white/50 mb-4">{master.rank}</p>
        )}

        {/* Always-visible first 3 credentials */}
        <ul className="space-y-2">
          {master.credentials.slice(0, PREVIEW).map((cred, idx) => (
            <li
              key={idx}
              className="text-base 2xl:text-xl text-white leading-relaxed flex items-start gap-2"
            >
              <span className="text-gold mt-1">·</span>
              <span>{cred}</span>
            </li>
          ))}
        </ul>

        {/* Expandable remaining credentials */}
        {hasMore && (
          <>
            <div
              className={[
                "overflow-hidden transition-all duration-500 ease-in-out",
                expanded ? "max-h-[600px] opacity-100 mt-2" : "max-h-0 opacity-0",
              ].join(" ")}
            >
              <ul className="space-y-2">
                {master.credentials.slice(PREVIEW).map((cred, idx) => (
                  <li
                    key={idx}
                    className="text-base 2xl:text-xl text-white leading-relaxed flex items-start gap-2"
                  >
                    <span className="text-gold mt-1">·</span>
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="mt-4 flex items-center gap-1.5 text-sm uppercase tracking-[0.2em] text-gold hover:text-gold/70 transition-colors"
            >
              <span>{expanded ? "Show less" : "Learn more"}</span>
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              />
            </button>
          </>
        )}
      </div>
    </article>
  );
}
