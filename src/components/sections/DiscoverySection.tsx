import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

const DiscoverySection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />

      {/* Glow orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5 blur-3xl"
            style={{
              width: 200 + i * 100,
              height: 200 + i * 100,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 18}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-10 container max-w-4xl px-6 text-center">
        <ScrollReveal>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Section 05 — The Discovery</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 text-glow">
            What Lies Beneath
          </h2>
          <p className="text-muted-foreground font-body text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-8">
            We have mapped more of Mars than our own ocean floor. Over 80% of the ocean remains unexplored, unmapped, and unobserved. Every dive reveals something new — a species, a formation, a mystery.
          </p>
          <p className="text-foreground font-body text-lg leading-relaxed max-w-2xl mx-auto mb-16">
            The deep is not empty. It is waiting.
          </p>
        </ScrollReveal>

        {/* Interactive CTA */}
        <ScrollReveal delay={0.3}>
          <div className="bg-card/60 backdrop-blur-md border border-border rounded-2xl p-8 md:p-12 box-glow max-w-lg mx-auto">
            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <span className="text-5xl block mb-4">🌊</span>
                <h3 className="font-display text-2xl font-bold text-foreground text-glow mb-2">
                  Welcome, Explorer
                </h3>
                <p className="text-muted-foreground font-body">
                  Your journey into the deep has just begun.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  Begin Your Descent
                </h3>
                <p className="text-muted-foreground font-body text-sm mb-6">
                  Join the exploration. Receive stories from the deep.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-lg bg-background border border-border text-foreground font-body placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => email && setSubscribed(true)}
                    className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-body font-medium tracking-wide hover:opacity-90 transition-opacity"
                  >
                    Dive In
                  </motion.button>
                </div>
              </>
            )}
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={0.5}>
          <div className="mt-24 pt-12 border-t border-border">
            <p className="text-muted-foreground font-body text-sm">
              The Deep — An Interactive Ocean Experience
            </p>
            <p className="text-muted-foreground/50 font-body text-xs mt-2">
              Built with React, Framer Motion & Tailwind CSS
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default DiscoverySection;
