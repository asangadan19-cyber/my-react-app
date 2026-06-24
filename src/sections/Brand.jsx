
import { useNavigate, Link } from "react-router-dom";
export default function PrestigeStrideLuxuryHomepage() {
  return (
   <div className="relative min-h-screen overflow-hidden bg-black text-[#F5E6C8] font-serif">

  {/* VIDEO */}
  <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute top-0 left-0 w-full h-full object-cover"
>
  <source src="/show11.mp4" type="video/mp4" />
</video>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/50" />

  {/* CONTENT */}
  <div className="relative z-10">
    {/* your navbar + hero here */}
  </div>



      {/* MAIN CONTENT */}
      <div className="relative z-10">
        {/* NAVBAR */}
        <nav className="flex items-center justify-between px-8 md:px-20 py-8 border-b border-white/10 backdrop-blur-md bg-white/5">
          {/* LOGO + NAME */}
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Prestige Stride"
              className="w-14 h-14 rounded-full object-cover border border-yellow-500/40 shadow-[0_0_25px_rgba(255,215,0,0.15)]"
            />

            <div>
              <h1 className="text-2xl md:text-3xl tracking-[0.4em] font-light text-yellow-400">
                PRESTIGE STRIDE
              </h1>

              <p className="text-xs tracking-[0.3em] text-white/60 uppercase mt-1">
                Timeless Leather Craftsmanship
              </p>
            </div>
          </div>

  {/* NAV LINKS */}
          <div className="hidden md:flex items-center gap-10 uppercase tracking-[0.2em] text-sm text-white/80">
            <a
              href="#"
              className="hover:text-yellow-400 transition duration-500"
            >
              Home
            </a>

            <Link to="/collection"
              className="hover:text-yellow-400 transition duration-500"
            >
              Collections
            </Link>

            <Link to="/shop"
              className="hover:text-yellow-400 transition duration-500"
            >
              Luxury
            </Link>

            <Link to="/contact"
              className="hover:text-yellow-400 transition duration-500"
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* HERO SECTION */}
        <section className="min-h-screen flex items-center px-8 md:px-20 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
            {/* LEFT FLOATING IMAGE FRAME */}
            <div className="relative flex justify-center">
              {/* GOLD GLOW */}
              <div className="absolute w-[420px] h-[540px] bg-yellow-500/10 blur-3xl rounded-full animate-pulse" />

              {/* IMAGE FRAME */}
              <div className="relative border border-yellow-500/30 p-4 rounded-[40px] backdrop-blur-xl bg-white/5 shadow-[0_0_60px_rgba(255,215,0,0.08)] animate-[float_6s_ease-in-out_infinite]">
                <img
                  src="/many2.jpg"
                  alt="Luxury Leather Shoe"
                  className="w-[420px] h-[540px] object-cover rounded-[30px]"
                />
              </div>
            </div>

            {/* HERO TEXT */}
            <div>
              <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-6">
                Executive Elegance
              </p>

              <h1 className="text-5xl md:text-7xl leading-tight font-light mb-8">
                Crafted For
                <span className="block italic text-yellow-400">
                  Powerful Presence
                </span>
              </h1>

              <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-10">
                Prestige Stride delivers cinematic luxury leather footwear
                designed for leaders, executives, and gentlemen who appreciate
                timeless sophistication, handcrafted perfection, confidence, and
                world-class elegance.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-6">
                  <Link to="/shop" className="hover:text-yellow-400 transition">
                          
                <button className="px-10 py-4 bg-yellow-500 text-black rounded-full uppercase tracking-[0.2em] hover:scale-105 transition duration-500 shadow-[0_0_40px_rgba(255,215,0,0.3)]">
                  Explore Collection
                </button>
                  </Link>

          <Link to="/watch">
                <button   className="px-10 py-4 border border-white/20 rounded-full uppercase tracking-[0.2em] hover:border-yellow-400 hover:text-yellow-400 transition duration-500 backdrop-blur-xl bg-white/5">
                  Watch Editorial
                </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* LUXURY COLLECTIONS */}
        <section className="py-24 px-8 md:px-20">
          {/* SECTION TITLE */}
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-4">
              Luxury Collections
            </p>

            <h2 className="text-4xl md:text-5xl font-light">
              Inspired By Iconic Fashion Houses
            </h2>
          </div>

          {/* BRAND CARDS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {[
              {
                name: "Gucci",
                logo: "/logo111.png",
              },
              {
                name: "Louis Vuitton",
                logo: "/logo22.png",
              },
              {
                name: "Balenciaga",
                logo: "/logo3.png",
              },
              {
                name: "Ferragamo",
                logo: "/logo4.png",
              },
              {
                name: "Cole Haan",
                logo: "/logo5.png",
              },
            ].map((brand) => (
              <div
                key={brand.name}
                className="group border border-white/10 rounded-3xl py-10 px-6 backdrop-blur-xl bg-white/5 hover:border-yellow-500/40 hover:bg-white/10 transition duration-700 text-center"
              >
                {/* SMALL CIRCLE FRAME */}
                <div className="relative flex justify-center mb-6">
                  {/* GLOW */}
                  <div className="absolute w-20 h-20 rounded-full bg-yellow-500/10 blur-2xl group-hover:bg-yellow-500/20 transition duration-700" />

                  {/* FRAME */}
                  <div className="relative w-20 h-20 rounded-full border border-yellow-500/30 bg-black/40 backdrop-blur-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.12)] group-hover:scale-110 transition duration-700">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition duration-500"
                    />
                  </div>
                </div>

                {/* BRAND NAME */}
                <h3 className="text-lg md:text-xl tracking-[0.2em] text-white/70 group-hover:text-yellow-400 transition duration-500">
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED SECTION */}
        <section className="py-24 px-8 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* TEXT */}
            <div>
              <p className="uppercase tracking-[0.4em] text-yellow-400 text-sm mb-4">
                Signature Craftsmanship
              </p>

              <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight">
                Handmade Leather
                <span className="block italic text-yellow-400">
                  Executive Footwear
                </span>
              </h2>

              <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-xl">
                Every Prestige Stride piece is engineered with elite precision,
                luxury comfort technology, handcrafted leather materials, and
                timeless sophistication for refined gentlemen.
              </p>

              <button className="px-10 py-4 border border-yellow-500/40 rounded-full uppercase tracking-[0.2em] hover:bg-yellow-500 hover:text-black transition duration-500">
                Shop Premium Line
              </button>
            </div>

            {/* IMAGE */}
            <div className="relative flex justify-center">
              <div className="absolute w-[450px] h-[450px] rounded-full bg-yellow-500/10 blur-3xl" />

              <img
                src="/many.jpg"
                alt="Luxury Shoe"
                className="relative w-full max-w-[550px] rounded-[40px] border border-white/10 shadow-[0_0_80px_rgba(255,215,0,0.08)] animate-[float_8s_ease-in-out_infinite]"
              />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-white/10 py-10 text-center text-white/50 tracking-[0.2em] uppercase text-sm backdrop-blur-xl bg-white/5">
          Prestige Stride — Luxury Leather Footwear
        </footer>
      </div>

      {/* FLOATING ANIMATION */}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-15px);
          }

          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}