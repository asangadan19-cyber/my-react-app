import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden text-center">

      {/* 🎬 CINEMATIC BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-50 scale-105"
      >
        <source src="/show.mp4" type="video/mp4" />
      </video>

      {/* DARK + GOLD LUXURY OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* GOLD AMBIENT GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] rounded-full" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-4xl px-6 flex flex-col items-center"
      >

        {/* SMALL SOCIETY LABEL */}
        <p className="text-yellow-400 tracking-[0.4em] uppercase text-xs mb-6">
          Prestige Stride Society™
        </p>

   <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight mt-8 translate-y-5">
  Walk With <span className="text-yellow-400">Prestige</span>
</h1>

        {/* SUBTEXT */}
        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mt-6 leading-relaxed">
          A private luxury footwear society for modern gentlemen and women executives, and visionaries who understand that presence is power.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col md:flex-row gap-4 items-center">

          {/* PRIMARY CTA */}
          <button
            onClick={() => navigate("/membership")}
            className="px-10 py-4 text-lg bg-yellow-500 text-black rounded-full hover:scale-105 transition font-semibold shadow-lg shadow-yellow-500/20"
          >
            Enter Society
          </button>

          {/* SECONDARY CTA */}
          <button
            onClick={() => navigate("/drops")}
            className="px-10 py-4 text-lg border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-500/10 transition font-semibold"
          >
            View Limited Drops
          </button>

          {/* TERTIARY (LUXURY CONCIERGE) */}
          <button
            onClick={() => window.open("https://wa.me/2348000000000", "_blank")}
            className="px-10 py-4 text-lg text-white/80 hover:text-yellow-400 transition font-medium"
          >
            WhatsApp Concierge
          </button>
        </div>

        {/* MICRO LUXURY LINE */}
        <p className="text-gray-500 text-sm mt-8 tracking-wide">
          Exclusive access • Limited collections • Membership only benefits
        </p>

      </motion.div>
    </section>
  );
}