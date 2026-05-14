import { FinalCta } from "@/components/Home/FinalCta";
import { HomeHero } from "@/components/Home/HomeHero";
import { ProgramsMarquee } from "@/components/Home/ProgramsMarquee";
import { ProgramsPreview } from "@/components/Home/ProgramsPreview";
import { TrialCtaBand } from "@/components/Home/TrialCtaBand";
import { VideoHighlights } from "@/components/Home/VideoHighlights";
import { WhyChooseUs } from "@/components/Home/WhyChooseUs";
import { useEffect, useRef } from "react";
export function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-9");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <HomeHero />
      <ProgramsMarquee />
      <TrialCtaBand />
      <VideoHighlights />
      <ProgramsPreview />
      <WhyChooseUs />
      <FinalCta />
    </div>
  );
}
