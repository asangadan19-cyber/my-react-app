import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import shoe1 from "../assets/shoes/shoe1.webp";
import shoe2 from "../assets/shoes/shoe2.webp";
import shoe3 from "../assets/shoes/shoe3.webp";

const trustData = [
  {
    title: "Chosen by Professionals Worldwide",
    value: 5000,
    suffix: "+ Luxury Footwear Clients",
    img: shoe1,
  },
  {
    title: "Exceptional Leather Craftsmanship",
    value: 100,
    suffix: "% Authentic Premium Leather",
    img: shoe2,
  },
  {
    title: "Luxury Comfort Without Compromise",
    value: 24,
    suffix: "Hours of Refined Comfort",
    img: shoe3,
  },
];

// ✅ counter hook (safe usage)
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
}

// ✅ card component (fixes hooks rules)
function TrustCard({ item, i }) {
  const count = useCountUp(item.value);

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: i * 0.2 }}
      viewport={{ once: true }}
      className="flex items-center justify-between gap-10 p-6 rounded-2xl
      bg-white/5 backdrop-blur-xl border border-white/10
      hover:scale-[1.02] transition"
    >
      {/* TEXT */}
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-semibold">
          {item.title}
        </h3>

        <div className="text-3xl md:text-4xl text-yellow-400 mt-2 font-light tracking-wider">
          {count}
          <span className="text-gray-300 text-lg ml-2">
            {item.suffix}
          </span>
        </div>
      </div>

      {/* IMAGE */}
      <div className="w-[110px] h-[110px] rounded-xl overflow-hidden border border-yellow-500/30 shadow-xl">
        <img
          src={item.img}
          alt="trust visual"
          className="w-full h-full object-contain hover:scale-110 transition duration-500"
        />
      </div>
    </motion.div>
  );
}

export default function TrustSection() {
  return (
    <section className="relative py-32 text-white overflow-hidden">

      {/* 🎥 VIDEO BACKGROUND (PUBLIC FOLDER FIX) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/show.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* GOLD GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-yellow-500/10 blur-[160px] rounded-full top-10 left-1/2 -translate-x-1/2" />

      {/* CONTENT */}
      <div className="relative z-10">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl text-yellow-400 tracking-widest">
            Trusted By Professionals
          </h2>
        </div>

        {/* TRUST CARDS */}
        <div className="max-w-5xl mx-auto space-y-10 px-6">

          {trustData.map((item, i) => (
            <TrustCard key={i} item={item} i={i} />
          ))}

        </div>

        {/* BADGES */}
        <div className="mt-20 flex flex-wrap justify-center gap-4 px-6">

          {[
            "Genuine Leather Certified",
            "Premium Craftsmanship",
            "Luxury Comfort Guarantee",
            "Executive Approved",
          ].map((badge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="px-5 py-2 rounded-full border border-yellow-500/30
              text-yellow-400 text-sm bg-white/5 backdrop-blur-md hover:bg-yellow-500/10 transition"
            >
              {badge}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}