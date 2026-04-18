import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  const products = {
    billing: {
      name: "Billing Management Software",
      heroImg:
        "https://images.unsplash.com/photo-1554224155-8d0a9c6b1f0f?auto=format&fit=crop&w=1200&q=80",
      aboutImg:
        "https://images.unsplash.com/photo-1551281044-8c7c6c1b3c8a?auto=format&fit=crop&w=1200&q=80",
      desc: "All-in-one invoicing, GST billing & payment tracking system.",
      about:
        "Our billing system helps automate invoicing, manage customers, track payments and generate real-time business reports.",
      features: [
        "Invoice Automation",
        "GST Ready System",
        "Payment Tracking",
        "Inventory Control",
        "Multi-user Access",
        "Cloud Backup",
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1554224155-8d0a9c6b1f0f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551281044-8c7c6c1b3c8a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=80",
      ],
    },
  };

  const product = products[id];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0b0c10]">
        Product not found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 md:px-20 py-28">
        
        {/* glow background */}
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[160px] rounded-full"></div>

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-purple-400">{product.name}</span>
            </h1>

            <p className="mt-4 text-gray-400 text-lg">
              {product.desc}
            </p>

            <div className="mt-6 flex gap-4">
              <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
                Request Demo
              </button>

              <button className="px-6 py-3 border border-gray-600 rounded-lg hover:border-purple-500 transition">
                Contact Us
              </button>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={product.heroImg}
              alt="product"
              className="w-full max-w-md h-[320px] object-cover rounded-2xl shadow-2xl border border-white/10"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          About the Product
        </h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          <img
            src={product.aboutImg}
            alt="about"
            className="rounded-2xl shadow-xl border border-white/10 w-full h-[350px] object-cover"
            loading="lazy"
          />

          <div>
            <p className="text-gray-400 text-lg leading-relaxed">
              {product.about}
            </p>

            <div className="mt-6 space-y-3">
              {product.features.slice(0, 4).map((f, i) => (
                <p key={i} className="text-gray-300">
                  ✔ {f}
                </p>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-20 py-20 bg-[#0f172a]">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {product.features.map((f, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white/5 border border-white/10
                         hover:border-purple-500 hover:scale-105 transition"
            >
              <p className="text-gray-200 font-medium">✔ {f}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENSHOTS */}
      <section className="px-6 md:px-20 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Product Screenshots
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {product.screenshots.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="screenshot"
              className="h-60 w-full object-cover rounded-xl border border-white/10
                         hover:scale-105 transition duration-300"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-20 text-center bg-gradient-to-r from-purple-600/10 to-indigo-600/10">
        <h2 className="text-3xl font-bold">
          Ready to automate your business?
        </h2>

        <p className="text-gray-400 mt-3">
          Get your custom billing or ERP system today.
        </p>

        <button className="mt-6 px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
          Contact Us
        </button>
      </section>

    </div>
  );
}