import { motion } from "framer-motion";

const sections = ["Surface", "Shallows", "Twilight", "Abyss", "Discovery"];

const NavigationDots = ({ activeSection }: { activeSection: number }) => {
  const scrollTo = (index: number) => {
    const el = document.getElementById(`section-${index}`);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-4">
      {sections.map((s, i) => (
        <button
          key={s}
          onClick={() => scrollTo(i)}
          className="group flex items-center gap-3"
          aria-label={`Go to ${s}`}
        >
          <motion.div
            className={`w-2.5 h-2.5 rounded-full border transition-all ${
              activeSection === i
                ? "bg-primary border-primary box-glow scale-125"
                : "border-muted-foreground/40 hover:border-primary/60"
            }`}
          />
          <span
            className={`text-xs font-body tracking-wide opacity-0 group-hover:opacity-100 transition-opacity ${
              activeSection === i ? "text-primary" : "text-muted-foreground"
            }`}
          >
            {s}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default NavigationDots;
