import { motion, useScroll, useTransform } from "framer-motion";

const DepthIndicator = () => {
  const { scrollYProgress } = useScroll();
  const depth = useTransform(scrollYProgress, [0, 1], [0, 11000]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2"
    >
      <div className="w-px h-32 bg-border relative overflow-hidden rounded-full">
        <motion.div
          className="absolute top-0 left-0 w-full bg-primary rounded-full"
          style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
        />
      </div>
      <motion.span className="text-xs font-body text-muted-foreground tabular-nums">
        {depth.get().toFixed(0)}m
      </motion.span>
    </motion.div>
  );
};

export default DepthIndicator;
