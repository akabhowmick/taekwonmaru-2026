/**
 * ProgramsMarquee
 * Gold scrolling ticker listing all class types.
 */
export function ProgramsMarquee() {
  const items = [
    "Little Tigers",
    "Children's Classes",
    "Teen Programs",
    "Adult Classes",
    "KPOP Dance",
    "Demo Team",
  ];

  return (
    <div className="bg-gold py-3.5 overflow-hidden" aria-hidden="true">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex">
            {items.map((item) => (
              <span
                key={item}
                className="font-bebas text-base 2xl:text-xl tracking-[0.15em] text-navy px-10"
              >
                {item} <span className="text-navy/40">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
