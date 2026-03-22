import { whyChooseUs } from "@/lib/homePageInfo";

/**
 * WhyChooseUs
 * 4-column icon + text grid of differentiators.
 */
export function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-16 3xl:px-32 bg-navy border-t border-border">
      <div className="container-wide">
        <div className="text-center mb-16 reveal opacity-0 translate-y-9 transition-all duration-700">
          <div className="flex items-center justify-center gap-3.5 mb-5">
            <span className="w-8 h-px bg-gold" />
            <span className="text-base 2xl:text-xl uppercase tracking-[0.35em] text-gold">
              Why TaekwonMaru
            </span>
            <span className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-bebas text-[clamp(2.75rem,6vw,5rem)] leading-[0.95] tracking-[0.03em] text-white">
            Champion-Level
            <br />
            <span className="text-gold">Training</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item, i) => (
            <div
              key={item.title}
              className="reveal opacity-0 translate-y-9 transition-all duration-700 text-center"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gold/10 border border-gold/30 rounded-full flex items-center justify-center text-gold">
                {item.icon}
              </div>
              <h3 className="font-bebas text-2xl text-white mb-3">{item.title}</h3>
              <p className="text-base 2xl:text-xl leading-relaxed text-white">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
