import { motion } from "framer-motion";
import person1 from "../assets/shoes/person1.png";
import person2 from "../assets/shoes/person2.png";
import person3 from "../assets/shoes/person3.png";

const testimonials = [
  {
    name: "Michael Anderson",
    role: "Senior Business Consultant",
    text:
      "Prestige Stride completely transformed my executive wardrobe. The craftsmanship, comfort, and premium leather finish make every step feel confident and refined.",
    rating: 5,
    img: person1,
  },
  {
    name: "Sophia Bennett",
    role: "Corporate Fashion Director",
    text:
      "I love how Prestige Stride combines luxury elegance with all-day comfort. The attention to detail perfectly complements my professional lifestyle.",
    rating: 5,
    img: person2,
  },
  {
    name: "David Richardson",
    role: "Investment Analyst",
    text:
      "From the premium leather quality to the executive styling, Prestige Stride delivers true sophistication.",
    rating: 5,
    img: person3,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-32 text-white overflow-hidden">

      {/* 🎬 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/show11.mp4" type="video/mp4" />
      </video>

      {/* 🌑 OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-light tracking-widest text-yellow-400">
            Trusted By Professionals Worldwide
          </h2>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Prestige Stride delivers confidence, elegance, and comfort to modern professionals who demand excellence in every step.
          </p>
        </div>

        {/* FLOATY STACK LAYOUT */}
        <div className="mt-24 flex flex-col gap-14 px-6 max-w-4xl mx-auto">

          {testimonials.map((item, i) => (

            <motion.div
              key={i}

              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{
                opacity: 1,
                y: [40, -10, 0], // floaty motion
                scale: 1,
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}

              className="flex items-center gap-6 p-6 rounded-3xl
              bg-white/5 backdrop-blur-xl border border-white/10
              shadow-[0_10px_60px_rgba(0,0,0,0.6)]
              hover:shadow-[0_20px_80px_rgba(234,179,8,0.15)]
              hover:-translate-y-2 transition-all duration-500
              w-full md:w-[90%] mx-auto"
            >

              {/* IMAGE */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={item.img}
                alt={item.name}
                className="w-20 h-20 md:w-24 md:h-24 object-contain flex-shrink-0 drop-shadow-xl"
              />

              {/* TEXT */}
              <div className="flex flex-col justify-center">

                <h3 className="text-xl font-semibold text-white tracking-wide">
                  {item.name}
                </h3>

                <p className="text-yellow-400 text-sm mt-1 tracking-wider">
                  {item.role}
                </p>

                <div className="w-10 h-[2px] bg-yellow-500/40 mt-2" />

                <p className="text-gray-300 mt-4 leading-relaxed text-sm">
                  “{item.text}”
                </p>

                <div className="mt-5 text-yellow-400 text-lg tracking-widest">
                  {"★".repeat(item.rating)}
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}