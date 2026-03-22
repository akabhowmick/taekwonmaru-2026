import { useEffect, useRef, useState } from "react";

const videos = [
  {
    src: "https://www.youtube-nocookie.com/embed/kXjyzx4wJi8",
    title: "TaekwonMaru Featured on FOX5 News",
    label: "Media Feature",
    heading: "Featured on FOX5 News",
    span: "lg:col-span-2 lg:row-span-2",
    age: null,
  },
  {
    src: "https://www.youtube-nocookie.com/embed/SSplA3C-nUE",
    title: "Children's Classes at TaekwonMaru",
    label: "Ages 6-9",
    heading: "Children's Classes",
    span: "",
    age: null,
  },
  {
    src: "https://www.youtube-nocookie.com/embed/uhGYAW_hvm4",
    title: "Teen and Adult Classes at TaekwonMaru",
    label: "Ages 14+",
    heading: "Teen & Adult Classes",
    span: "",
    age: null,
  },
  {
    src: "https://www.youtube-nocookie.com/embed/yvk6skuwp-E",
    title: "TaekwonMaru Summer Camp",
    label: "Summer Program",
    heading: "Summer Camp",
    span: "",
    age: null,
  },
  {
    src: "https://www.youtube-nocookie.com/embed/E1LwJ5kS08I",
    title: "Birthday Parties at TaekwonMaru",
    label: "Special Events",
    heading: "Birthday Parties",
    span: "",
    age: null,
  },
  {
    src: "https://www.youtube-nocookie.com/embed/wgeDuo1tvYU",
    title: "KPOP Dance Classes at TaekwonMaru",
    label: "Ages 7+",
    heading: "KPOP Dance",
    span: "",
    age: null,
  },
];

/**
 * VideoHighlights
 * Lazy-loaded YouTube grid. Videos are only rendered once the section
 * enters the viewport (via IntersectionObserver).
 */
export function VideoHighlights() {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="video-section"
      className="py-24 lg:py-32 px-6 lg:px-16 3xl:px-32 bg-navy-mid border-t border-border"
    >
      <div className="container-wide">
        <div className="mb-16 reveal opacity-0 translate-y-9 transition-all duration-700">
          <div className="flex items-center gap-3.5 mb-5">
            <span className="w-8 h-px bg-gold" />
            <span className="text-base 2xl:text-xl uppercase tracking-[0.35em] text-gold">
              Watch Us Train
            </span>
          </div>
          <h2 className="font-bebas text-[clamp(2.75rem,6vw,5rem)] leading-[0.95] tracking-[0.03em] text-white">
            See Us In
            <br />
            <span className="text-gold">Action</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5">
          {videos.map((video, i) => (
            <div
              key={video.src}
              className={`reveal opacity-0 translate-y-9 transition-all duration-700 bg-navy-light border border-border overflow-hidden group hover:border-gold/40 ${video.span}`}
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
            >
              <div
                className={`bg-navy-light ${video.span ? "aspect-video lg:h-full" : "aspect-video"}`}
              >
                {loaded ? (
                  <iframe
                    src={video.src}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full border-0"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gold">Loading video...</span>
                  </div>
                )}
              </div>
              <div className="p-6 border-t border-border">
                <span className="text-base 2xl:text-xl uppercase tracking-[0.25em] text-gold">
                  {video.label}
                </span>
                <h3 className={`font-bebas text-white mt-2 ${video.span ? "text-2xl" : "text-xl"}`}>
                  {video.heading}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
