import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import abyssImg from "@/assets/ocean-abyss.jpg";

const AbyssSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.3, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.6], ["40px", "0px"]);
  const [lightOn, setLightOn] = useState(false);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Sticky parallax background */}
      <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
        <img
          src={abyssImg}
          alt="Bioluminescent jellyfish"
          className="w-full h-full object-cover"
          loading="lazy"
          width={1920}
          height={1080}
          style={{ filter: lightOn ? "brightness(1.3)" : "brightness(0.4)" }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-background/60" />

      <motion.div style={{ y: textY }} className="relative z-10 container max-w-6xl px-6">
        <ScrollReveal>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Section 04 — Depth: 4,000–6,000m</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-glow">
            The Abyss
          </h2>
          <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            No sunlight has ever reached here. The pressure would crush a submarine. Yet life persists — glowing, pulsing, ancient.
          </p>
        </ScrollReveal>

        {/* Interactive light toggle */}
        <ScrollReveal delay={0.2}>
          <div className="flex flex-col items-center gap-8 my-16">
            <motion.button
              onClick={() => setLightOn(!lightOn)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-10 py-5 rounded-full font-body font-medium tracking-wide transition-all duration-500 ${
                lightOn
                  ? "bg-primary text-primary-foreground box-glow"
                  : "bg-card border border-border text-foreground hover:border-primary/50"
              }`}
            >
              {lightOn ? "✨ Bioluminescence Active" : "🔦 Activate Bioluminescence"}
              {lightOn && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary/20 animate-pulse-glow"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.button>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { value: "1,100", unit: "atm", label: "Pressure" },
              { value: "1–4", unit: "°C", label: "Temperature" },
              { value: "0%", unit: "", label: "Sunlight" },
              { value: "90%", unit: "", label: "Ocean unexplored" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-lg bg-card/40 backdrop-blur-sm border border-border"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary text-glow">
                  {stat.value}<span className="text-lg">{stat.unit}</span>
                </div>
                <p className="text-muted-foreground font-body text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </motion.div>
    </section>
  );
};

export default AbyssSection;
