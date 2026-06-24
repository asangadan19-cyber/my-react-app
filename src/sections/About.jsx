import { motion } from "framer-motion";

export default function About() {

  // 🌊 dual-direction floating animation
  const floatMotion = {
    hidden: { opacity: 0, y: 60, x: -40 },
    show: {
      opacity: 1,
      y: [0, -12, 0],      // vertical float
      x: [0, 20, 0],       // horizontal drift
      transition: {
        duration: 6,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <section className="py-28 px-6 max-w-5xl mx-auto text-center overflow-hidden">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-10 tracking-widest"
      >
        About Prestige Stride
      </motion.h2>

      {/* DECOR LINE (floating) */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "120px", opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        animate={{
          x: [0, 10, 0],
        }}
        className="h-[2px] bg-yellow-400 mx-auto mb-10"
      />

      {/* FLOATING TEXT CARD */}
      <motion.div
        variants={floatMotion}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative p-10 rounded-2xl
        border border-yellow-500/20 bg-white/5 backdrop-blur-xl
        shadow-[0_0_50px_rgba(255,215,0,0.06)]"
      >

        {/* subtle glow layer */}
        <div className="absolute inset-0 bg-yellow-500/5 blur-2xl rounded-2xl"></div>

        <motion.p
          className="relative z-10 text-gray-300 text-lg leading-relaxed"
        >
          Prestige Stride crafts premium leather footwear for professionals who
          value elegance, confidence, and timeless sophistication. Each pair is
          designed with precision, luxury materials, and modern craftsmanship —
          built for leaders who walk with purpose and class.
        </motion.p>

      </motion.div>

    </section>
  );
}