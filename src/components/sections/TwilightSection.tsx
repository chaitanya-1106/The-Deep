import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import twilightImg from "@/assets/ocean-twilight.jpg";

const creatures = [
  { name: "Giant Squid", size: "Up to 13m", fact: "Has the largest eyes in the animal kingdom — the size of dinner plates.", emoji: "🦑" },
  { name: "Hatchetfish", size: "Up to 12cm", fact: "Uses bioluminescence on its belly to match light from above, becoming invisible to predators below.", emoji: "🐟" },
  { name: "Swordfish", size: "Up to 4.5m", fact: "One of the few animals that can heat its brain and eyes to hunt more efficiently in cold, dark waters.", emoji: "⚔️" },
  { name: "Lanternfish", size: "Up to 15cm", fact: "The most abundant vertebrate on Earth. Their nightly migration is the largest animal movement on the planet.", emoji: "✨" },
];

const TwilightSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.3, 0.3, 0]);
  const [activeCreature, setActiveCreature] = useState<number | null>(null);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ opacity: bgOpacity }}>
        <img src={twilightImg} alt="Twilight zone" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      </motion.div>
      <div className="absolute inset-0 bg-background/70" />

      <div className="relative z-10 container max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Section 03 — Depth: 200–1,000m</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            The Twilight Zone
          </h2>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl leading-relaxed mb-16">
            Light fades. Colors vanish. Here, creatures have evolved extraordinary adaptations to survive in a world of perpetual dusk.
          </p>
        </ScrollReveal>

        {/* Interactive creature explorer */}
        <ScrollReveal delay={0.2}>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              {creatures.map((c, i) => (
                <motion.button
                  key={c.name}
                  onClick={() => setActiveCreature(activeCreature === i ? null : i)}
                  whileHover={{ x: 8 }}
                  className={`w-full text-left p-5 rounded-lg border transition-all font-body ${
                    activeCreature === i
                      ? "bg-primary/10 border-primary box-glow"
                      : "bg-card/50 border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{c.emoji}</span>
                    <div>
                      <h4 className="font-display text-lg font-bold text-foreground">{c.name}</h4>
                      <span className="text-xs text-muted-foreground">{c.size}</span>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center">
              <motion.div
                key={activeCreature}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-card/60 backdrop-blur-md border border-border rounded-xl p-10 w-full min-h-[200px] flex items-center justify-center"
              >
                {activeCreature !== null ? (
                  <div className="text-center">
                    <span className="text-6xl block mb-4">{creatures[activeCreature].emoji}</span>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3 text-glow">
                      {creatures[activeCreature].name}
                    </h3>
                    <p className="text-muted-foreground font-body leading-relaxed">
                      {creatures[activeCreature].fact}
                    </p>
                  </div>
                ) : (
                  <p className="text-muted-foreground font-body italic">Select a creature to learn more...</p>
                )}
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TwilightSection;
