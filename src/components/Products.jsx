export default function Products() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-3xl text-center text-yellow-400 mb-12">
        Premium Footwear
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {["Oxford", "Derby", "Monk Strap"].map((item, i) => (
          <div
            key={i}
            className="border border-yellow-500/20 p-6 hover:bg-yellow-500/10 transition"
          >
            <div className="h-40 bg-gray-900 mb-4"></div>
            <h3 className="text-yellow-300">{item}</h3>
            <p className="text-gray-400">₦85,000</p>
          </div>
        ))}

      </div>
    </section>
  );
}z