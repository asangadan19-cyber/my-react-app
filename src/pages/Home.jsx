  
import Hero from "../sections/Hero";
import About from "../sections/About";
import Collection from "../sections/Collection";
import Products from "../sections/Products";
import Testify from "../sections/Testify";
import Count from "../sections/Count";
import Contact from "../sections/Contact";
import Navbar from "../components/Navbar";
import Brand from "../sections/Brand";
import Member from "../sections/Member";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-white">

      {/* VIDEO BACKGROUND */}
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
      {/* CONTENT */}
     <div className="relative z-20">
  <Navbar />
  <Hero />
  <About />
  <Collection />
  <Products />
  <Brand />

  <Testify />
   <Count />
   <Member />
   <Contact />

</div>
    </div>
  );
}