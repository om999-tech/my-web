import { Link } from "react-router-dom";

export default function Products() {
  const products = [
    {
      name: "ERP System",
      desc: "Complete institutional management system for academics, HR, finance & operations.",
      link: "/products/erp",
      icon: "🏫",
      color: "#0B3C5D",
    },
    {
      name: "Billing App",
      desc: "Smart invoicing and payment management system with automated billing workflows.",
      link: "/products/billing",
      icon: "💳",
      color: "#1E6091",
    },
    {
      name: "Mock Test Platform",
      desc: "Online examination system with auto evaluation and performance analytics.",
      link: "/products/mocktest",
      icon: "📝",
      color: "#2A6F97",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-[#0F172A]">

      {/* HEADER */}
      <section className="pt-28 pb-14 text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D]">
          ERP Software Suite
        </h1>

        <p className="text-gray-600 mt-4">
          Modular digital solutions for institutions & enterprise management
        </p>

      </section>

      {/* PRODUCTS GRID */}
      <section className="px-6 md:px-20 pb-16">

        <div className="grid md:grid-cols-3 gap-8">

          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl shadow-sm hover:shadow-md transition p-6"
            >

              {/* ICON */}
              <div
                className="w-12 h-12 flex items-center justify-center rounded-xl text-white text-xl"
                style={{ backgroundColor: p.color }}
              >
                {p.icon}
              </div>

              {/* TITLE */}
              <h2
                className="text-xl font-semibold mt-4"
                style={{ color: p.color }}
              >
                {p.name}
              </h2>

              {/* DESC */}
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {p.desc}
              </p>

              {/* BUTTON */}
              <Link to={p.link}>
                <button
                  className="mt-5 px-5 py-2 rounded-lg text-white text-sm transition hover:opacity-90"
                  style={{ backgroundColor: p.color }}
                >
                  Explore →
                </button>
              </Link>

            </div>
          ))}

        </div>

      </section>

      {/* PLATFORM HIGHLIGHTS */}
      <section className="px-6 md:px-20 py-20 bg-white">

        <h2 className="text-3xl font-bold text-center text-[#0B3C5D] mb-12">
          Platform Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              icon: "⚙️",
              title: "Modular Architecture",
              desc: "Independent yet connected ERP modules",
            },
            {
              icon: "🔗",
              title: "Unified System",
              desc: "All products work with shared data flow",
            },
            {
              icon: "📱",
              title: "Mobile Access",
              desc: "Fully responsive ERP mobile support",
            },
            {
              icon: "📊",
              title: "Live Analytics",
              desc: "Real-time reporting & insights",
            },
            {
              icon: "☁️",
              title: "Cloud Infrastructure",
              desc: "Secure and scalable hosting system",
            },
            {
              icon: "🔐",
              title: "Role-Based Access",
              desc: "Admin, faculty & student separation",
            },
          ].map((h, i) => (
            <div
              key={i}
              className="p-6 bg-[#F4F7FB] border rounded-xl hover:bg-white transition"
            >

              <div className="text-2xl text-[#1E6091]">
                {h.icon}
              </div>

              <h3 className="font-semibold mt-3 text-[#0B3C5D]">
                {h.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2">
                {h.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-20 bg-[#0B3C5D] text-white text-center">

        <h2 className="text-3xl font-bold">
          Build Your Complete ERP Ecosystem
        </h2>

        <p className="mt-3 text-white/70">
          Integrated solutions for education & enterprise management
        </p>

        <button className="mt-6 px-8 py-3 bg-white text-[#0B3C5D] font-semibold rounded-lg">
          Contact Sales
        </button>

      </section>

    </div>
  );
}