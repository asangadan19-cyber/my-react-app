import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Payment() {
  const location = useLocation();
  const navigate = useNavigate();

  // RECEIVE PRODUCT DATA
  const product = location.state?.product;

  // IF NO PRODUCT SELECTED
  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
        <h1 className="text-4xl text-yellow-400 mb-4">
          No Product Selected
        </h1>

        <button
          onClick={() => navigate("/")}
          className="px-8 py-4 bg-yellow-500 text-black rounded-xl font-bold"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-yellow-500/10 blur-[180px] rounded-full" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* PRODUCT IMAGE */}
     {/* PRODUCT IMAGE */}
<motion.div
  initial={{ opacity: 0, x: -60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="rounded-[40px] overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center"
>
  <img
    src={product.image}
    alt={product.name}
    className="w-full h-[650px] object-contain p-6"
  />
</motion.div>

        {/* PAYMENT DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10"
        >

          <h1 className="text-5xl text-yellow-400 font-light mb-6">
            Payment
          </h1>

          <p className="text-gray-400 mb-10 leading-relaxed">
            Complete your luxury footwear purchase securely.
          </p>

          {/* PRODUCT INFO */}
          <div className="space-y-5 mb-10">

            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-gray-500 uppercase tracking-wider">
                Product
              </span>

              <span className="text-white">
                {product.name}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-gray-500 uppercase tracking-wider">
                Material
              </span>

              <span className="text-white">
                {product.material}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-gray-500 uppercase tracking-wider">
                Color
              </span>

              <span className="text-white">
                {product.color}
              </span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-4">
              <span className="text-gray-500 uppercase tracking-wider">
                Price
              </span>

              <span className="text-yellow-400 text-3xl font-bold">
                {product.price}
              </span>
            </div>

          </div>

          {/* FORM */}
          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-500"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-500"
              required
            />

            <input
              type="text"
              placeholder="Delivery Address"
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-yellow-500"
              required
            />

            <button
              type="submit"
              className="w-full py-5 rounded-2xl bg-yellow-500 text-black font-bold tracking-widest uppercase shadow-2xl shadow-yellow-500/30 hover:scale-[1.02] transition"
            >
              Complete Payment
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}