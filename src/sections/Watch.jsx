import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Volume2, VolumeX, ArrowRight } from "lucide-react";

export default function WatchEditorial() {
  const videoRef = useRef(null);

  const [activeVideo, setActiveVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const handlePlay = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const toggleSound = () => {
    if (videoRef.current.muted) {
      videoRef.current.muted = false;
      setSoundOn(true);
    } else {
      videoRef.current.muted = true;
      setSoundOn(false);
    }
  };

  const editorialStories = [
    {
      title: "Crafted for Icons",
      duration: "04 MIN",
      description:
        "A cinematic journey through timeless leather craftsmanship and executive elegance.",
      image: "/shoe24.jpg",
      video: "/show111.mp4",
    },
    {
      title: "Executive Motion",
      duration: "03 MIN",
      description:
        "Luxury movement designed for modern leaders and refined professionals.",
      image: "/shoe23.jpg",
      video: "/show000.mp4",
    },
    {
      title: "The Lagos Edit",
      duration: "05 MIN",
      description:
        "Urban sophistication meets African luxury in a bold editorial experience.",
      image: "/shoe22.jpg",
      video: "/show999.mp4",
    },
  ];

  return (
    <div className="bg-[#050505] text-[#F5EFE6] overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden">

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-110"
        >
          <source src="/show111.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20 z-10" />

        <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-6">

          <motion.h1 className="text-5xl md:text-7xl font-serif">
            WATCH <span className="text-[#C8A96B]">EDITORIAL</span>
          </motion.h1>

          <motion.div className="flex gap-5 mt-12">

            <button onClick={handlePlay}>
              <Play /> Watch Film
            </button>

            <button onClick={toggleSound}>
              {soundOn ? <Volume2 /> : <VolumeX />} Sound
            </button>

          </motion.div>

        </div>
      </section>

      {/* STORIES */}
      <section className="pb-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-6xl font-serif mb-20">
            Stories In Motion
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {editorialStories.map((story, index) => (
              <div key={index} className="relative">

                <img
                  src={story.image}
                  className="h-[500px] w-full object-cover"
                />

                <div className="absolute bottom-0 p-8">

                  <h3 className="text-3xl font-serif">{story.title}</h3>

                  <button
                    onClick={() => setActiveVideo(story.video)}
                    className="flex items-center gap-2 text-[#C8A96B]"
                  >
                    Watch Story <ArrowRight />
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* GLOBAL VIDEO MODAL */}
   {activeVideo && (
  <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">

    <video
      key={activeVideo}   // 🔥 forces reload every time
      controls
      autoPlay
      muted               // 🔥 required for autoplay
      playsInline
      className="w-[80%] md:w-[60%] rounded-xl"
    >
      <source src={activeVideo} type="video/mp4" />
    </video>

          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

        </div>
      )}

      {/* ✅ CRAFTSMANSHIP SECTION (FIXED + PROPERLY PLACED) */}
      <section className="py-32 px-6 md:px-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src="/shoe27.jpg"
              alt=""
              className="rounded-[40px] h-[700px] object-cover w-full"
            />

            <div className="absolute inset-0 rounded-[40px] border border-[#C8A96B]/20" />
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-[#C8A96B] text-sm mb-5">
              Behind The Craft
            </p>

            <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
              Timeless Leather Craftsmanship
            </h2>

            <p className="text-[#d7d0c6] text-lg leading-relaxed mb-10">
              Every Prestige Stride silhouette is handcrafted with precision,
              combining executive sophistication with heritage leather artistry.
            </p>

            <div className="space-y-5 text-[#d7d0c6]">

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#C8A96B]" />
                Hand-stitched leather construction
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#C8A96B]" />
                Premium Italian-inspired finishing
              </div>

              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#C8A96B]" />
                Executive luxury design philosophy
              </div>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}