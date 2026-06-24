import { motion } from "framer-motion";


import shoe1 from "../assets/shoes/shoe1.webp";


export default function PrestigeStrideLuxurySection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden text-[#f5f0e8] bg-black"
    >

      {/* 🎬 VIDEO BACKGROUND */}
     <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover z-0"
>
 <source src="/show.mp4" type="video/mp4" />
</video>

      {/* 🎭 DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/80 z-[1]" />

      {/* ✨ GOLD GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-black/50 z-[1]" />

      {/* 🌟 FLOATING LIGHTS */}
      <div className="absolute top-10 left-[-100px] w-[350px] h-[350px] bg-yellow-500/10 blur-[140px] rounded-full z-[1]" />

      <div className="absolute bottom-0 right-[-100px] w-[300px] h-[300px] bg-yellow-500/5 blur-[120px] rounded-full z-[1]" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >

          {/* BADGE */}
          <div className="inline-block px-5 py-2 border border-yellow-500/20 rounded-full text-yellow-400 tracking-[0.35em] text-xs uppercase mb-10 backdrop-blur-xl bg-white/5">
            Prestige Stride
          </div>

          {/* HEADING */}
          <h2 className="text-5xl md:text-7xl font-light leading-[1.1] mb-10">
            Executive{" "}
            <span className="text-yellow-400 italic">
              Elegance
            </span>
            <br />
            Crafted In Leather
          </h2>

          {/* TEXT */}
          <p className="text-gray-300 text-lg leading-relaxed max-w-xl mb-16">
            Prestige Stride delivers world-class premium leather footwear
            designed for leaders, executives, and individuals who command
            presence. Experience timeless craftsmanship, confidence,
            and sophistication in every stride.
          </p>

          {/* CONTACT CARDS */}
          <div className="space-y-8 max-w-lg">

            {/* LOCATION */}
            <motion.div
              whileHover={{ y: -5 }}
              className="p-7 rounded-[30px] bg-white/[0.04] border border-white/10 backdrop-blur-2xl hover:border-yellow-500/30 transition duration-500"
            >
              <h3 className="text-yellow-400 text-sm uppercase tracking-[0.25em] mb-3">
                Location
              </h3>

              <p className="text-2xl font-light">
                Wuse 2 Opposite Banex Plaza
              </p>
            </motion.div>

            {/* PHONE + HOURS */}
            <div className="grid md:grid-cols-2 gap-6">

              <motion.div
                whileHover={{ y: -5 }}
                className="p-7 rounded-[30px] bg-white/[0.04] border border-white/10 backdrop-blur-2xl hover:border-yellow-500/30 transition duration-500"
              >
                <h3 className="text-yellow-400 text-sm uppercase tracking-[0.25em] mb-3">
                  Phone
                </h3>

                <div className="space-y-2 text-xl font-light">
                  <p>09015377306</p>
                  <p>08035898281</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-7 rounded-[30px] bg-white/[0.04] border border-white/10 backdrop-blur-2xl hover:border-yellow-500/30 transition duration-500"
              >
                <h3 className="text-yellow-400 text-sm uppercase tracking-[0.25em] mb-3">
                  Hours
                </h3>

                <p className="text-xl font-light">
                  Open 24 Hours
                </p>
              </motion.div>
            </div>

            {/* SOCIALS */}
            <div className="grid md:grid-cols-2 gap-6">

              <motion.div
                whileHover={{ y: -5 }}
                className="p-7 rounded-[30px] bg-white/[0.04] border border-white/10 backdrop-blur-2xl hover:border-yellow-500/30 transition duration-500"
              >
                <h3 className="text-yellow-400 text-sm uppercase tracking-[0.25em] mb-3">
                  Instagram
                </h3>

                <p className="text-lg text-gray-300">
                  prestigestride@ps
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="p-7 rounded-[30px] bg-white/[0.04] border border-white/10 backdrop-blur-2xl hover:border-yellow-500/30 transition duration-500"
              >
                <h3 className="text-yellow-400 text-sm uppercase tracking-[0.25em] mb-3">
                  Facebook
                </h3>

                <p className="text-lg text-gray-300">
                  prestigestride@ps123
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE FRAME */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -10, 0],
          }}
          className="relative h-[700px] rounded-[40px] overflow-hidden border border-yellow-500/10"
        >

          {/* IMAGE */}
          <img
            src={shoe1}
            alt="Luxury Shoe"
           className="absolute inset-0 w-full h-full object-contain scale-110 p-8 transition duration-700 hover:scale-125"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30" />

          {/* DIVIDED LINES */}
          <div className="absolute left-1/3 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-yellow-500/40 to-transparent" />

          <div className="absolute right-1/3 top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-yellow-500/40 to-transparent" />

          {/* FLOATING LABEL */}
          <div className="absolute bottom-10 left-10 right-10 p-7 rounded-[30px] bg-black/40 border border-white/10 backdrop-blur-2xl">
            <p className="text-yellow-400 uppercase tracking-[0.25em] text-sm mb-3">
              Prestige Collection
            </p>

            <h3 className="text-3xl md:text-4xl font-light leading-tight">
              Luxury Leather
              <br />
              Footwear Redefined
            </h3>
          </div>
        </motion.div>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-yellow-500/10 mt-24">

        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">

          {/* FOOTER GRID */}
          <div className="grid lg:grid-cols-4 gap-20 mb-20">

            {/* BRAND */}
            <div>
              <h2 className="text-4xl font-light text-yellow-400 mb-6">
                Prestige Stride
              </h2>

              <p className="text-gray-400 leading-relaxed">
                World-class luxury leather footwear crafted for executives,
                visionaries, and timeless sophistication.
              </p>
            </div>

            {/* NAVIGATION */}
            <div>
              <h3 className="text-yellow-400 uppercase tracking-[0.25em] text-sm mb-6">
                Navigation
              </h3>

              <ul className="space-y-5 text-gray-300">
                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Home
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Collection
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Luxury Craft
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  About
                </li>

                <li className="hover:text-yellow-400 transition cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-yellow-400 uppercase tracking-[0.25em] text-sm mb-6">
                Contact
              </h3>

              <div className="space-y-4 text-gray-300">
                <p>Wuse 2 Opposite Banex Plaza</p>
                <p>09015377306</p>
                <p>08035898281</p>
                <p>Open 24 Hours</p>
              </div>
            </div>

            {/* NEWSLETTER */}
            <div>
              <h3 className="text-yellow-400 uppercase tracking-[0.25em] text-sm mb-6">
                Newsletter
              </h3>

              <p className="text-gray-400 mb-6">
                Subscribe for exclusive luxury releases and editorial drops.
              </p>

              <div className="flex flex-col gap-4">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-500/40 text-white"
                />

                <button className="bg-yellow-500 text-black font-medium py-4 rounded-2xl hover:scale-[1.02] transition duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent mb-10" />

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <p className="text-gray-500 text-sm">
              © 2026 Prestige Stride. Crafted For Executive Excellence.
            </p>

            {/* SOCIAL ICONS */}
          {/* SOCIAL ICONS */}
<div className="flex items-center gap-4">

  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:border-yellow-500/40 hover:text-yellow-400 transition cursor-pointer text-sm">
    IG
  </div>

  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:border-yellow-500/40 hover:text-yellow-400 transition cursor-pointer text-sm">
    FB
  </div>

  <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:border-yellow-500/40 hover:text-yellow-400 transition cursor-pointer text-sm">
    X
  </div>

</div>
          </div>
        </div>
      </footer>
    </section>
  );
}