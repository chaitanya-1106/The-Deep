import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import shallowsImg from "@/assets/ocean-shallows.jpg";

const facts = [
  { depth: "0–200m", title: "The Sunlit Zone", desc: "Where 90% of all marine life thrives. Sunlight powers the entire food web." },
  { depth: "Coral Reefs", title: "Cities of the Sea", desc: "Home to 25% of all ocean species while covering less than 1% of the ocean floor." },
  { depth: "Biodiversity", title: "Undiscovered Life", desc: "Scientists estimate over 2 million species remain undiscovered in the ocean." },
];

const ShallowsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background parallax image */}
      <motion.div className="absolute inset-0 opacity-20" style={{ y: imgY }}>
        <img src={shallowsImg} alt="Coral reef" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      </motion.div>
      <div className="absolute inset-0 gradient-ocean" />

      <div className="relative z-10 container max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Section 02 — Depth: 0–200m</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            The Shallows
          </h2>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl leading-relaxed mb-16">
            Where sunlight kisses the water and life erupts in brilliant color. The shallow waters are the ocean's most populated — and most vulnerable — realm.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {facts.map((fact, i) => (
            <ScrollReveal key={fact.title} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-lg p-8 box-glow cursor-pointer group"
              >
                <span className="text-primary font-body text-xs tracking-widest uppercase">{fact.depth}</span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-3 mb-3 group-hover:text-glow transition-all">
                  {fact.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed">{fact.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShallowsSection;
