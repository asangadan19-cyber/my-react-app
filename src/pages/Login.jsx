import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  // ✅ LOGIN AUTH
  const handleLogin = (e) => {
    e.preventDefault();

    // Accept ANY email but password must be DANIEL123
    if (email && password === "DANIEL123") {
      navigate("/products"); // Redirect to products page
    } else {
      setError("Invalid password. Use DANIEL123");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-yellow-500/20 blur-[150px] rounded-full"></div>

      {/* LOGIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 w-[90%] max-w-md p-8 rounded-3xl 
        bg-white/5 backdrop-blur-2xl border border-yellow-500/20 
        shadow-[0_0_40px_rgba(255,215,0,0.15)]"
      >
        {/* LOGO / TITLE */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-400 tracking-widest">
            PRESTIGE STRIDE
          </h1>

          <p className="text-gray-400 mt-2 text-sm">
            Luxury Leather Experience
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin}>

          {/* EMAIL */}
          <div className="relative mb-5">
            <Mail className="absolute left-4 top-4 text-yellow-400" size={20} />

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full py-3 pl-12 pr-4 rounded-xl 
              bg-black/40 border border-gray-700 
              text-white outline-none focus:border-yellow-400
              transition-all duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="relative mb-4">
            <Lock className="absolute left-4 top-4 text-yellow-400" size={20} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="w-full py-3 pl-12 pr-12 rounded-xl 
              bg-black/40 border border-gray-700 
              text-white outline-none focus:border-yellow-400
              transition-all duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div
              className="absolute right-4 top-4 text-yellow-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {error}
            </p>
          )}

          {/* LOGIN BUTTON */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded-xl bg-yellow-500 
            text-black font-bold tracking-wide 
            hover:bg-yellow-400 transition-all duration-300"
          >
            LOGIN
          </motion.button>
        </form>

        {/* SIGNUP */}
        <p className="text-gray-400 text-center mt-6 text-sm">
          No account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-yellow-400 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </motion.div>
    </div>
  );
}