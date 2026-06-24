import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, User, Mail, Lock, Phone } from "lucide-react";

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName) newErrors.fullName = "Full name required";
    if (!formData.username) newErrors.username = "Username required";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email";
    if (formData.phone.length < 11) newErrors.phone = "Invalid phone";

    if (!formData.password.includes("DANIEL123")) {
      newErrors.password = "Password must be DANIEL123";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.terms) newErrors.terms = "Accept terms required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem("prestigeUser", JSON.stringify(formData));
      navigate("/login");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* 🎬 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
      >
        <source src="/show0.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* FLOATING LIGHT GLOW */}
      <div className="absolute w-[600px] h-[600px] bg-yellow-400/10 blur-[140px] rounded-full animate-pulse" />

      {/* GLASS CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-lg p-8 rounded-3xl
        bg-white/5 backdrop-blur-2xl border border-white/10
        shadow-2xl"
      >
        {/* LOGO */}
        <div className="text-center mb-6">
          <h1 className="text-yellow-400 text-3xl tracking-[0.3em]">
            PRESTIGE STRIDE
          </h1>
          <p className="text-gray-300 text-sm mt-2">
            Luxury Footwear Experience
          </p>
        </div>

        <h2 className="text-white text-2xl font-semibold mb-6">
          Create Account
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* FULL NAME */}
          <InputField
            icon={<User size={18} />}
            name="fullName"
            placeholder="Full Name"
            handleChange={handleChange}
            value={formData.fullName}
            error={errors.fullName}
          />

          {/* USERNAME */}
          <InputField
            icon={<User size={18} />}
            name="username"
            placeholder="Username"
            handleChange={handleChange}
            value={formData.username}
            error={errors.username}
          />

          {/* EMAIL */}
          <InputField
            icon={<Mail size={18} />}
            name="email"
            placeholder="Email"
            handleChange={handleChange}
            value={formData.email}
            error={errors.email}
          />

          {/* PHONE */}
          <InputField
            icon={<Phone size={18} />}
            name="phone"
            placeholder="Phone"
            handleChange={handleChange}
            value={formData.phone}
            error={errors.phone}
          />

          {/* PASSWORD */}
          <div className="relative">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              <Lock size={18} className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-transparent outline-none text-white"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={18} className="text-gray-400" />
                ) : (
                  <Eye size={18} className="text-gray-400" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <InputField
            icon={<Lock size={18} />}
            name="confirmPassword"
            placeholder="Confirm Password"
            handleChange={handleChange}
            value={formData.confirmPassword}
            error={errors.confirmPassword}
          />

          {/* TERMS */}
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <input
              type="checkbox"
              name="terms"
              onChange={handleChange}
            />
            <span>I agree to terms & conditions</span>
          </div>

          {errors.terms && (
            <p className="text-red-400 text-xs">{errors.terms}</p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl font-semibold
            bg-gradient-to-r from-yellow-500 to-yellow-300
            text-black hover:scale-[1.02] transition"
          >
            CREATE ACCOUNT
          </button>
        </form>

        {/* LOGIN */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-yellow-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </motion.div>
    </div>
  );
}

/* 🔹 Reusable Input Component */
function InputField({
  icon,
  name,
  placeholder,
  handleChange,
  value,
  error,
}) {
  return (
    <div>
      <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
        <span className="text-gray-400">{icon}</span>

        <input
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="w-full bg-transparent outline-none text-white"
        />
      </div>

      {error && (
        <p className="text-red-400 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}