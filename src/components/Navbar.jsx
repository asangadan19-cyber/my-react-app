import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { Search, User, ShoppingBag } from "lucide-react";
import logo from "../assets/shoes/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-black/40 border-b border-yellow-500/20">

      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-6 py-4">

        {/* LOGO (LEFT) */}
<motion.h1
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="flex items-center justify-center gap-3 text-yellow-400 tracking-[0.3em] font-semibold"
>
  <img
    src={logo}
    alt="Prestige Stride"
    className="w-6 h-6 md:w-16 md:h-16 rounded-full shadow-lg"
  />

  PRESTIGE STRIDE
</motion.h1>

        
        

        {/* NAV LINKS (CENTER) */}
        <nav className="hidden md:flex items-center justify-center gap-10 text-sm text-gray-300 font-medium">

          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link to="/collection" className="hover:text-yellow-400 transition">
            Collection
          </Link>

          <Link to="/shop" className="hover:text-yellow-400 transition">
            Shop
          </Link>

          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>

        </nav>

        {/* ICONS (RIGHT) */}
        <div className="flex items-center justify-end gap-5 text-gray-300">

          <Search className="hover:text-yellow-400 cursor-pointer transition" />

          <User
            onClick={() => navigate("/login")}
            className="hover:text-yellow-400 cursor-pointer transition"
          />

          <ShoppingBag className="hover:text-yellow-400 cursor-pointer transition" />

        </div>

      </div>
    </header>
  );
}