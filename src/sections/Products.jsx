import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";

// SHOES
import shoe1 from "../assets/shoes/shoe1.webp";
import shoe2 from "../assets/shoes/shoe2.webp";
import shoe3 from "../assets/shoes/shoe3.webp";
import shoe4 from "../assets/shoes/shoe4.webp";
import shoe5 from "../assets/shoes/shoe5.webp";
import shoe6 from "../assets/shoes/shoe6.webp";
import shoe7 from "../assets/shoes/shoe7.webp";
import shoe8 from "../assets/shoes/shoe8.jpg";
import shoe9 from "../assets/shoes/shoe9.jpg";
import shoe10 from "../assets/shoes/shoe10.jpg";
import shoe11 from "../assets/shoes/shoe11.jpg";
import shoe12 from "../assets/shoes/shoe12.jpg";
import shoe13 from "../assets/shoes/shoe13.jpg";
import shoe14 from "../assets/shoes/shoe14.jpg";
import shoe15 from "../assets/shoes/shoe15.jpg";
import shoe16 from "../assets/shoes/shoe16.jpg";

export default function Products() {

  
  const [activeTab, setActiveTab] = useState("male");
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // 👞 MALE SHOES
  const maleShoes = [
    {
      id: 1,
      name: "Oxford Classic",
      price: "₦85,000",
      image: shoe1,
      color: "Black",
      material: "Leather",
      description: "Luxury Oxford shoe designed for executives.",
    },
    {
      id: 2,
      name: "Luxury Derby",
      price: "₦90,000",
      image: shoe2,
      color: "Brown",
      material: "Leather",
      description: "Premium Derby crafted for modern gentlemen.",
    },
    {
      id: 3,
      name: "Monk Strap Elite",
      price: "₦95,000",
      image: shoe3,
      color: "Espresso",
      material: "Leather",
      description: "Bold executive monk strap shoe.",
    },
    {
      id: 4,
      name: "Executive Loafer",
      price: "₦88,000",
      image: shoe4,
      color: "Tan",
      material: "Leather",
      description: "Minimal luxury loafer for comfort and style.",
    },
    {
      id: 5,
      name: "Chelsea Boot",
      price: "₦120,000",
      image: shoe5,
      color: "Black",
      material: "Suede",
      description: "Modern luxury Chelsea boot.",
    },
    {
      id: 6,
      name: "Royal Brogue",
      price: "₦110,000",
      image: shoe6,
      color: "Brown",
      material: "Leather",
      description: "Handcrafted brogue shoe.",
    },
    {
      id: 7,
      name: "Prestige Moccasin",
      price: "₦92,000",
      image: shoe7,
      color: "Navy",
      material: "Soft Leather",
      description: "Comfortable premium moccasin.",
    },
    {
      id: 8,
      name: "Imperial Boot",
      price: "₦135,000",
      image: shoe8,
      color: "Black",
      material: "Leather",
      description: "Powerful executive boot.",
    },
  ];

  // 👠 FEMALE SHOES (reused images)
  const femaleShoes = [
  {
    id: 9,
    name: "Women Oxford Classic",
    price: "₦85,000",
    image: shoe9,
    color: "Black",
    material: "Leather",
    description: "Elegant women Oxford designed for modern professionals.",
  },
  {
    id: 10,
    name: "Women Luxury Derby",
    price: "₦90,000",
    image: shoe10,
    color: "Brown",
    material: "Leather",
    description: "Premium women Derby crafted for elegance.",
  },
  {
    id: 11,
    name: "Women Monk Strap Elite",
    price: "₦95,000",
    image: shoe11,
    color: "Espresso",
    material: "Leather",
    description: "Stylish women monk strap luxury footwear.",
  },
  {
    id: 12,
    name: "Women Executive Loafer",
    price: "₦88,000",
    image: shoe12,
    color: "Tan",
    material: "Leather",
    description: "Soft luxury loafer for women executives.",
  },
  {
    id: 13,
    name: "Women Chelsea Boot",
    price: "₦120,000",
    image: shoe13,
    color: "Black",
    material: "Suede",
    description: "Elegant women Chelsea boot.",
  },
  {
    id: 14,
    name: "Women Royal Brogue",
    price: "₦110,000",
    image: shoe14,
    color: "Brown",
    material: "Leather",
    description: "Handcrafted women brogue design.",
  },
  {
    id: 15,
    name: "Women Prestige Moccasin",
    price: "₦92,000",
    image: shoe15,
    color: "Navy",
    material: "Soft Leather",
    description: "Luxury women moccasin comfort style.",
  },
  {
    id: 16,
    name: "Women Imperial Boot",
    price: "₦135,000",
    image: shoe16,
    color: "Black",
    material: "Leather",
    description: "Powerful women executive boot.",
  },
];

  // ✅ TAB FILTER FIRST
  const baseShoes = activeTab === "male" ? maleShoes : femaleShoes;

  // ✅ SEARCH FILTER
  const filteredShoes = baseShoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
   <section className="relative py-28 px-6 bg-black text-white overflow-hidden">


      {/* GLOW BACKGROUND */}
     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 blur-[160px] rounded-full pointer-events-none z-0" />
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-5xl text-yellow-400 tracking-widest">
          Premium Collection
        </h2>
        <p className="text-gray-400 mt-2">
          Luxury footwear for modern professionals
        </p>
      </div>

      {/* SEARCH */}
      <div className="flex justify-center mb-8 relative z-50">
  <input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search luxury shoes..."
    className="w-full max-w-md px-5 py-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-yellow-500 relative z-50"
  />
</div>

      {/* TABS */}
      <div className="flex justify-center gap-4 mb-12">
        {["male", "female"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full transition ${
              activeTab === tab
                ? "bg-yellow-500 text-black"
                : "border border-white/20"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-4 gap-8">

        {filteredShoes.map((shoe, i) => (
          <motion.div
            key={shoe.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.1,
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-visible shadow-xl"
          >

            {/* IMAGE */}
           <div
  onClick={() => setSelectedProduct(shoe)}
  className="overflow-hidden rounded-2xl"
>
  <img
    src={shoe.image}
    className="h-[260px] w-full object-cover transition-transform duration-500 hover:scale-110"
  />
</div>

            {/* INFO */}
            <div className="p-5">
              <h3 className="text-yellow-300 text-lg font-semibold">
                {shoe.name}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                {shoe.description}
              </p>

              <div className="flex justify-between items-center mt-4">
                <span className="text-yellow-400 font-bold">
                  {shoe.price}
                </span>

                <button
                  onClick={() => setSelectedProduct(shoe)}
                  className="w-10 h-10 bg-yellow-500 text-black rounded-full flex items-center justify-center"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* CLOSE */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={30} />
            </button>

            {/* CONTENT */}
            <div className="text-center">
              <h2 className="text-3xl text-yellow-400">
                {selectedProduct.name}
              </h2>

              <Link
                to="/payment"
                state={{ product: selectedProduct }}
              >
                <button className="mt-6 px-8 py-3 bg-yellow-500 text-black rounded-xl">
                  Proceed To Payment
                </button>
              </Link>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}