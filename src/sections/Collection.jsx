import { motion } from "framer-motion";

export default function Collection() {
  const floatContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const floatItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const wordReveal = {
    hidden: { opacity: 0, y: 15, filter: "blur(6px)" },
    show: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.06,
        duration: 0.5,
      },
    }),
  };

  const renderWords = (text) =>
    text.split(" ").map((word, i) => (
      <motion.span
        key={i}
        custom={i}
        variants={wordReveal}
        className="inline-block mr-2"
      >
        {word}
      </motion.span>
    ));

  return (
    <section
      id="collection"   // ✅ THIS IS THE FIX
      className="py-28 px-6 bg-black/90 overflow-hidden"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl text-center text-yellow-400 font-bold tracking-widest mb-20"
      >
        {renderWords("Executive Collection")}
      </motion.h2>

      {/* FLOATING CONTENT */}
      <motion.div
        variants={floatContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6 text-center"
      >
        <motion.div
          variants={floatItem}
          className="px-8 py-6 rounded-2xl border border-yellow-500/20 bg-white/5 backdrop-blur-xl"
        >
          <h3 className="text-xl text-yellow-300 mb-4">
            {renderWords("Men Collection")}
          </h3>
          <p className="text-gray-300">
            {renderWords("Oxford Shoes Derby Shoes Monk Straps Loafers Chelsea Boots")}
          </p>
        </motion.div>

        <motion.div
          variants={floatItem}
          className="px-8 py-6 rounded-2xl border border-yellow-500/20 bg-white/5 backdrop-blur-xl"
        >
          <h3 className="text-xl text-yellow-300 mb-4">
            {renderWords("Women Collection")}
          </h3>
          <p className="text-gray-300">
            {renderWords("Corporate Heels Luxury Flats Block Heels Leather Pumps")}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}