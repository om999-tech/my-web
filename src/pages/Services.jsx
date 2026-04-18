export default function Services() {
  const services = [
    "ERP Software",
    "Billing System",
    "Online Exam Platform",
    "Website Development",
    "Android Apps",
    "iOS Apps",
  ];

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white pt-28 px-10">

      <h1 className="text-4xl font-bold text-center mb-10 text-purple-400">
        Our Services
      </h1>

      <div className="grid md:grid-cols-3 gap-6">

        {services.map((s, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl bg-white/5 border border-white/10
                       hover:scale-105 hover:border-purple-500 transition"
          >
            <h2 className="text-xl font-semibold">{s}</h2>
            <p className="text-gray-400 mt-2">
              Enterprise-grade scalable solution.
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}