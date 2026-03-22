import { type ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  glow?: "left" | "center" | "right";
  centered?: boolean;
}

const glowMap = {
  left: "bg-[radial-gradient(circle_at_30%_50%,rgba(201,168,76,0.08)_0%,transparent_50%)]",
  center: "bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.08)_0%,transparent_50%)]",
  right: "bg-[radial-gradient(circle_at_70%_50%,rgba(201,168,76,0.08)_0%,transparent_50%)]",
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  glow = "right",
  centered = false,
}: PageHeroProps) {
  const hasSideContent = !!children && !centered;

  return (
    <section className="relative pt-36 pb-24 lg:pt-48 lg:pb-32 px-6 lg:px-16 3xl:px-32 bg-gradient-to-br from-navy via-navy-mid to-navy-light overflow-hidden">
      {/* Glow overlay */}
      <div className={`absolute inset-0 ${glowMap[glow]}`} />

      <div
        className={`relative z-10 ${
          hasSideContent
            ? "container-wide grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            : "max-w-4xl mx-auto"
        }`}
      >
        {/* ── Text block ──────────────────────────────────────── */}
        <div className={centered ? "text-center" : "text-center lg:text-left"}>
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3.5 mb-6 ${
              centered ? "justify-center" : "justify-center lg:justify-start"
            }`}
          >
            <span className="w-10 h-[1.5px] bg-gold" />
            <span className="text-base 2xl:text-xl uppercase tracking-[0.35em] text-gold">
              {eyebrow}
            </span>
            <span className="w-10 h-[1.5px] bg-gold" />
          </div>

          {/* Title */}
          <h1 className="font-bebas text-[clamp(3.5rem,8vw,6.875rem)] leading-[0.9] text-white mb-6">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p
              className={`text-lg leading-relaxed text-white mb-8 ${
                centered ? "max-w-2xl mx-auto" : "max-w-2xl mx-auto lg:mx-0"
              }`}
            >
              {subtitle}
            </p>
          )}

          {/* Children rendered inline when centered (e.g. address badge, inline CTAs) */}
          {centered && children && <div>{children}</div>}
        </div>

        {/* ── Side content (right column, desktop only) ────────── */}
        {hasSideContent && <div className="hidden md:block">{children}</div>}
      </div>
    </section>
  );
}
