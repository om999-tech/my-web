// export default function MockTest() {
//   const product = {
//     name: "Mock Test Platform",
//     heroImg:
//       "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
//     aboutImg:
//       "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80",
//     desc:
//       "Online exam system with auto evaluation, timer-based tests, and real-time performance analytics.",
//     about:
//       "Our mock test platform enables institutes to conduct scalable online examinations with automated evaluation, smart timers, and advanced analytics dashboards.",

//     features: [
//       "Online Exams with Secure System",
//       "Auto Evaluation Engine",
//       "Smart Timer & Section Control",
//       "AI-Based Result Analytics",
//       "Student Performance Dashboard",
//       "Detailed Reports & Insights",
//     ],

//     screenshots: [
//       "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
//       "https://images.unsplash.com/photo-1554224155-8d0a9c6b1f0f?auto=format&fit=crop&w=800&q=80",
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-[#070A12] text-white overflow-hidden">

//       {/* HERO */}
//       <section className="relative px-6 md:px-20 py-28 overflow-hidden">

//         {/* background glow */}
//         <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-600/20 blur-[180px] rounded-full"></div>
//         <div className="absolute bottom-[-200px] right-0 w-[500px] h-[500px] bg-blue-500/10 blur-[160px] rounded-full"></div>

//         <div className="relative grid md:grid-cols-2 gap-14 items-center">

//           {/* TEXT */}
//           <div>
//             <span className="px-4 py-1 text-xs bg-white/10 border border-white/10 rounded-full">
//               🧠 Smart Online Examination System
//             </span>

//             <h1 className="text-5xl md:text-6xl font-extrabold mt-5 text-purple-400">
//               {product.name}
//             </h1>

//             <p className="mt-5 text-gray-300 text-lg leading-relaxed">
//               {product.desc}
//             </p>

//             <div className="mt-8 flex gap-4 flex-wrap">
//               <button className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition">
//                 Request Demo
//               </button>
//               <button className="px-6 py-3 border border-white/15 rounded-xl hover:border-purple-400 transition">
//                 Contact Sales
//               </button>
//             </div>
//           </div>

//           {/* HERO IMAGE */}
//           <div className="relative flex justify-center">

//             <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-3xl"></div>

//             <img
//               src={product.heroImg}
//               className="relative w-[420px] rounded-2xl shadow-2xl border border-white/10"
//             />
//           </div>

//         </div>
//       </section>

//       {/* ABOUT */}
//       <section className="px-6 md:px-20 py-24 bg-[#0b1020]">
//         <div className="grid md:grid-cols-2 gap-14 items-center">

//           <img
//             src={product.aboutImg}
//             className="rounded-2xl shadow-xl border border-white/10"
//           />

//           <div>
//             <h2 className="text-3xl font-bold text-purple-400 mb-4">
//               About the Platform
//             </h2>

//             <p className="text-gray-300 leading-relaxed">
//               {product.about}
//             </p>

//             <div className="mt-6 space-y-3">
//               {product.features.slice(0, 4).map((f, i) => (
//                 <p key={i} className="text-gray-300">
//                   ✔ {f}
//                 </p>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>

//       {/* FEATURES */}
//       <section className="px-6 md:px-20 py-24">
//         <h2 className="text-3xl text-center text-purple-400 mb-14">
//           Key Features
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           {product.features.map((f, i) => (
//             <div
//               key={i}
//               className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500 transition"
//             >
//               <p className="text-gray-200">✔ {f}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SCREENSHOTS (FLOATING STYLE) */}
//       <section className="px-6 md:px-20 py-28 bg-[#0b1020] relative">

//         <div className="text-center mb-16">
//           <h2 className="text-3xl text-purple-400">
//             Product Screenshots
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">

//           {product.screenshots.map((img, i) => (
//             <div key={i} className="relative group">

//               <div className="absolute inset-0 bg-purple-600/20 blur-2xl rounded-2xl group-hover:scale-105 transition"></div>

//               <img
//                 src={img}
//                 className="relative h-64 w-full object-cover rounded-2xl border border-white/10 transform group-hover:-translate-y-2 transition duration-300"
//               />
//             </div>
//           ))}

//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-6 md:px-20 py-28 text-center bg-gradient-to-r from-purple-600/20 to-blue-600/10">

//         <h2 className="text-4xl font-bold">
//           Ready to Launch Smart Exams?
//         </h2>

//         <p className="mt-4 text-gray-400">
//           Conduct secure online exams with automation & analytics.
//         </p>

//         <button className="mt-8 px-10 py-4 bg-purple-600 rounded-xl hover:bg-purple-700 transition">
//           Get Started
//         </button>

//       </section>

//     </div>
//   );
// }

import mockstest1 from "../../assets/images/mocktest1.jpg";
import mockstest2 from "../../assets/images/mocktest2.webp";
export default function MockTest() {
  const graphBars = [60, 75, 50, 90, 65, 85, 70];

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-[#0F172A]">

      {/* HERO SECTION */}
      <section className="px-6 md:px-20 py-20 bg-gradient-to-r from-[#0B3C5D] to-[#1E6091] text-white">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>

            <span className="px-4 py-1 text-xs bg-white/10 rounded-full border border-white/20">
              📘 Online Examination Module
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mt-5">
              Mock Test Analytics Dashboard
            </h1>

            <p className="mt-4 text-white/80 text-lg">
              Conduct secure online exams with auto evaluation, smart timer control,
              and advanced performance analytics integrated into ERP system.
            </p>

            <div className="mt-7 flex gap-4">
              <button className="px-6 py-3 bg-white text-[#0B3C5D] font-semibold rounded-lg">
                Request Demo
              </button>
              <button className="px-6 py-3 border border-white/30 rounded-lg">
                View Reports
              </button>
            </div>

            {/* KPI CARDS */}
            <div className="grid grid-cols-2 gap-4 mt-10">

              {[
                { label: "Success Rate", value: "94%" },
                { label: "Accuracy", value: "96%" },
                { label: "Time Saved", value: "62%" },
                { label: "Engagement", value: "88%" },
              ].map((s, i) => (
                <div key={i} className="p-4 bg-white/10 rounded-xl border border-white/20">
                  <p className="text-xs text-white/70">{s.label}</p>
                  <p className="text-xl font-bold">{s.value}</p>
                </div>
              ))}

            </div>

          </div>

          {/* VISUAL */}
          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
              className="rounded-2xl shadow-lg border border-white/20"
            />

            {/* FLOATING GRAPH */}
            <div className="absolute -bottom-10 left-6 bg-white p-4 rounded-xl shadow-lg w-[90%]">

              <p className="text-sm font-semibold text-gray-700 mb-3">
                Weekly Performance Trend
              </p>

              <div className="flex items-end gap-2 h-24">

                {graphBars.map((h, i) => (
                  <div
                    key={i}
                    className="w-4 bg-[#0B3C5D] rounded-md"
                    style={{ height: `${h}%` }}
                  ></div>
                ))}

              </div>

              <p className="text-xs text-gray-500 mt-2">
                ↑ 18% improvement this month
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="px-6 md:px-20 py-20">

        <h2 className="text-3xl font-bold text-center text-[#0B3C5D] mb-12">
          Complete Mock Test Ecosystem
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Smart Exam Creation",
            "Auto Evaluation Engine",
            "Real-Time Monitoring",
            "AI Question Analysis",
            "Performance Reports",
            "Secure Exam Mode",
          ].map((item, i) => (
            <div key={i} className="p-6 bg-white border rounded-xl shadow-sm">
              ✔ {item}
            </div>
          ))}

        </div>

      </section>

      {/* IMPACT SECTION */}
      <section className="px-6 md:px-20 py-20 bg-white">

        <h2 className="text-3xl font-bold text-center text-[#0B3C5D] mb-12">
          Measurable Academic Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            { label: "Result Accuracy", value: "96%" },
            { label: "Exam Efficiency", value: "88%" },
            { label: "Time Reduction", value: "65%" },
            { label: "Student Growth", value: "92%" },
          ].map((s, i) => (
            <div key={i} className="p-6 bg-[#F4F7FB] border rounded-xl text-center">
              <h3 className="text-3xl font-bold text-[#0B3C5D]">
                {s.value}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {s.label}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-20 py-20 bg-[#F4F7FB]">

        <h2 className="text-3xl font-bold text-center text-[#0B3C5D] mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Create Exam",
            "Assign Students",
            "Conduct Test",
            "Auto Evaluation",
          ].map((step, i) => (
            <div key={i} className="p-6 bg-white border rounded-xl text-center">

              <div className="w-10 h-10 mx-auto mb-3 bg-[#0B3C5D] text-white rounded-full flex items-center justify-center">
                {i + 1}
              </div>

              <p className="font-medium">{step}</p>

            </div>
          ))}

        </div>

      </section>

      {/* SCREENSHOTS */}
     {/* <section className="px-6 md:px-20 py-20 bg-white">

        <h2 className="text-3xl font-bold text-center text-[#0B3C5D] mb-12">
          System Preview
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            mockstest1,
            mockstest2,
            // "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
            // "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1554224155-8d0a9c6b1f0f?auto=format&fit=crop&w=800&q=80",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-60 w-full object-cover rounded-xl border shadow-sm hover:scale-[1.02] transition"
            />
          ))}

        </div>

      </section>*/}
      {/* ================= SYSTEM INSIGHTS (REPLACEMENT) ================= */}
<section className="px-6 md:px-20 py-20 bg-white">

  <h2 className="text-3xl font-bold text-center text-[#0B3C5D] mb-4">
    Smart Examination System Overview
  </h2>

  <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
    A complete digital exam ecosystem with real-time monitoring, AI evaluation, and advanced analytics designed for modern education systems.
  </p>

  {/* FEATURE GRID */}
  <div className="grid md:grid-cols-3 gap-6">

    {[
      {
        title: "Live Exam Monitoring",
        desc: "Track student activity in real time with anti-cheating alerts and session control.",
        icon: "📡",
      },
      {
        title: "AI Auto Evaluation",
        desc: "Automatically grade MCQs and descriptive answers with smart accuracy scoring.",
        icon: "🤖",
      },
      {
        title: "Performance Analytics",
        desc: "Detailed reports showing strengths, weaknesses, and improvement trends.",
        icon: "📊",
      },
      {
        title: "Question Bank System",
        desc: "Centralized repository of categorized questions with difficulty levels.",
        icon: "📚",
      },
      {
        title: "Secure Exam Mode",
        desc: "Fullscreen locked environment to prevent cheating and tab switching.",
        icon: "🔒",
      },
      {
        title: "Instant Result Engine",
        desc: "Results generated immediately after submission with detailed breakdown.",
        icon: "⚡",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="p-6 bg-[#F4F7FB] border rounded-xl shadow-sm hover:shadow-md transition"
      >
        <div className="text-3xl">{item.icon}</div>
        <h3 className="font-semibold text-[#0B3C5D] mt-3">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2">
          {item.desc}
        </p>
      </div>
    ))}

  </div>

  {/* BOTTOM STATS BAR */}
  <div className="mt-16 grid md:grid-cols-4 gap-6 text-center">

    {[
      { label: "Exam Accuracy", value: "96%" },
      { label: "System Uptime", value: "99.9%" },
      { label: "Time Saved", value: "70%" },
      { label: "Student Satisfaction", value: "92%" },
    ].map((s, i) => (
      <div key={i} className="p-6 bg-white border rounded-xl shadow-sm">
        <h3 className="text-2xl font-bold text-[#0B3C5D]">
          {s.value}
        </h3>
        <p className="text-gray-600 text-sm mt-1">
          {s.label}
        </p>
      </div>
    ))}

  </div>

</section>
      {/* MOBILE APP SECTION */}
      <section className="px-6 md:px-20 py-24 bg-[#F4F7FB]">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* TEXT SIDE */}
          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#0B3C5D]">
              ERP Mobile App for Students & Faculty
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Access mock tests, results, attendance, and performance analytics anytime
              from your mobile device. Designed for fast, secure, and seamless ERP access.
            </p>

            <div className="mt-8 space-y-3 text-gray-700">

              <p>✔ Instant exam notifications</p>
              <p>✔ Live test updates & timer sync</p>
              <p>✔ Result tracking & analytics</p>
              <p>✔ Student performance insights</p>

            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4 flex-wrap">

              <button className="px-6 py-3 bg-[#0B3C5D] text-white rounded-lg">
                📱 Google Play
              </button>

              <button className="px-6 py-3 border border-gray-300 rounded-lg">
                🍎 App Store
              </button>

            </div>

          </div>

          {/* MOBILE IMAGE SECTION */}
          <div className="relative flex justify-center">

            {/* BACKGROUND GLOW (ERP STYLE SOFT) */}
            <div className="absolute w-[300px] h-[300px] bg-[#0B3C5D]/10 blur-3xl rounded-full"></div>

            {/* PHONE 1 */}
            <img
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
              className="w-[220px] md:w-[240px] rounded-[2.5rem] shadow-xl border border-gray-200 transform rotate-[-8deg] z-10"
            />

            {/* PHONE 2 (BACK LAYER) */}
            <img
              src="https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=600&q=80"
              className="w-[220px] md:w-[240px] rounded-[2.5rem] shadow-lg border border-gray-200 absolute top-10 right-10 rotate-[10deg] opacity-90"
            />

          </div>

        </div>
        {/* BOTTOM CARDS */}
  <div className="grid md:grid-cols-3 gap-6 mt-20">

    {[
      {
        title: "Instant Exam Results",
        desc: "Get results immediately after submission",
      },
      {
        title: "AI Performance Analysis",
        desc: "Understand weak and strong areas",
      },
      {
        title: "Secure Test Environment",
        desc: "Prevent cheating with secure system",
      },
    ].map((c, i) => (
      <div
        key={i}
        className="p-6 bg-white border rounded-xl shadow-sm"
      >
        <h4 className="font-semibold text-[#0B3C5D]">
          {c.title}
        </h4>
        <p className="text-gray-600 text-sm mt-2">
          {c.desc}
        </p>
      </div>
    ))}

  </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-24 bg-[#0B3C5D] text-white text-center">

        <h2 className="text-4xl font-bold">
          Upgrade Your Examination System
        </h2>

        <p className="mt-3 text-white/80">
          Secure • Scalable • Smart ERP Mock Test Solution
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">

          <button className="px-8 py-3 bg-white text-[#0B3C5D] font-semibold rounded-lg">
            Request Demo
          </button>

          <button className="px-8 py-3 border border-white/30 rounded-lg">
            Contact Sales
          </button>

        </div>

      </section>

    </div>
  );
}