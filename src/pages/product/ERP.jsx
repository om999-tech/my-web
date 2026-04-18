import erp1 from "../../assets/images/erp2.jpg";
export default function CollegeERP() {
  const product = {
    name: "College ERP System",
    heroImg:erp1,
    appImg:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    aboutImg:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",

    desc:
      "A next-generation unified ERP platform designed for colleges & universities to streamline academics, automate administration, and enhance institutional transparency.",

    about:
      "Our College ERP System integrates every academic and administrative workflow into a single intelligent platform.",

    stats: [
      { label: "Institutions", value: "250+" },
      { label: "Students", value: "1.2M+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Support", value: "24/7" },
    ],

    modules: [
      "Smart Admission System",
      "AI Attendance Tracking",
      "Online Exams & Proctoring",
      "Fee Management",
      "Result Generation",
      "Faculty HR Suite",
      "Digital Library",
      "Smart Timetable",
      "Notifications System",
      "Mobile Student Portal",
      "Analytics Dashboard",
      "Cloud Backup Security",
    ],

    benefits: [
      "Reduces manual workload",
      "Improves transparency",
      "Centralized system",
      "Faster reporting",
      "Enterprise security",
      "Instant communication",
    ],
  };

  return (
    <div className="min-h-screen bg-[#F6F8FB] text-[#0F172A]">

      {/* HERO */}
      <section className="relative px-6 md:px-20 py-28 grid md:grid-cols-2 gap-14 items-center bg-gradient-to-br from-[#0B3C5D] via-[#0077b6] to-[#00b4d8] text-white overflow-hidden">

        <div>
          <span className="px-4 py-1 text-xs bg-white/15 rounded-full border border-white/20">
            ⚡ Smart Education ERP Platform
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold mt-5 leading-tight">
            {product.name}
          </h1>

          <p className="mt-6 text-white/80 text-lg">
            {product.desc}
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:scale-105 transition">
              Request Demo
            </button>
            <button className="px-6 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-white/10 blur-3xl rounded-3xl"></div>
          <img
            src={product.heroImg}
            className="relative w-full h-[350px] md:h-[450px] object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 md:px-20 py-14 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {product.stats.map((s, i) => (
            <div key={i} className="p-6 text-center rounded-2xl bg-gray-50 border">
              <h3 className="text-3xl font-bold text-[#0077b6]">{s.value}</h3>
              <p className="text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 md:px-20 py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <img src={product.aboutImg} className="rounded-2xl shadow-xl" />

          <div>
            <h2 className="text-3xl font-bold text-[#0B3C5D] mb-4">
              Built for Modern Institutions
            </h2>

            <p className="text-gray-600 text-lg">{product.about}</p>

            <div className="mt-6 p-5 bg-white border rounded-xl">
              <p className="text-sm text-gray-500">
                ✔ Cloud-first • Scalable • Mobile-ready ERP ecosystem
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section className="px-6 md:px-20 py-24 bg-white">
        <h2 className="text-3xl font-bold text-center mb-14 text-[#0B3C5D]">
          ERP Modules
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {product.modules.map((m, i) => (
            <div key={i} className="p-5 border rounded-2xl hover:shadow-lg transition">
              <p className="text-gray-700">▹ {m}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE APP SECTION (NEW) */}
      <section className="px-6 md:px-20 py-24 bg-gradient-to-br from-[#0B3C5D] to-[#00b4d8] text-white">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold">
              Download Mobile ERP App
            </h2>

            <p className="mt-4 text-white/80">
              Access attendance, results, fees & notifications anytime, anywhere using our mobile app for students, faculty & parents.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold">
                📱 Google Play
              </button>
              <button className="px-6 py-3 bg-black text-white rounded-xl font-semibold border border-white/20">
                🍎 App Store
              </button>
            </div>
          </div>

          {/* PHONE MOCKUP */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-white/20 blur-2xl rounded-3xl"></div>
              <img
                src={product.appImg}
                className="relative w-[260px] rounded-[2.5rem] shadow-2xl border border-white/20"
              />
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-28 text-center bg-[#0B3C5D] text-white">
        <h2 className="text-4xl font-bold">
          Transform Your Institution Digitally
        </h2>

        <p className="mt-4 text-white/70">
          One platform for academics, administration & analytics.
        </p>

        <button className="mt-8 px-10 py-4 bg-white text-blue-700 rounded-xl font-semibold hover:scale-105 transition">
          Get Free Demo
        </button>
      </section>

    </div>
  );
}