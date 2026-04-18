"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import home1 from "../assets/images/home1.png";
import home2 from "../assets/images/home2.jpg";
import {
  Cpu,
  Smartphone,
  Globe,
  ShieldCheck,
  BarChart3,
  Code2,
} from "lucide-react";

const dashboardImages = [
  home1,
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  home2,
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % dashboardImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F7FAFF] text-[#0F172A] overflow-x-hidden relative">

      {/* GLOBAL BLOBS WRAPPER (FIX SCROLL) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-120px] left-[-120px] w-[450px] h-[450px] bg-blue-300/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-cyan-300/30 blur-[120px] rounded-full" />
      </div>

      {/* ================= HERO ================= */}
      <section className="relative px-6 md:px-12 pt-32 pb-28 grid md:grid-cols-2 gap-12 items-center
      bg-gradient-to-br from-[#0B3C5D] via-[#1D70A2] to-[#2EC4B6] text-white overflow-hidden">

        {/* grid overlay (added) */}
        <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-cyan-400/30 blur-[140px] rounded-full top-[-100px] left-[-100px] animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <div className="mb-4 inline-block px-4 py-1 bg-white/20 rounded-full text-sm backdrop-blur border border-white/20">
            Software Development Company
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            We Build{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-white to-cyan-200 bg-clip-text text-transparent">
              Future-Ready Software
            </span>
          </h1>

          <p className="mt-6 text-white/80 text-lg max-w-xl leading-relaxed">
            We craft scalable SaaS platforms, ERP systems, and mobile apps designed to grow with your business.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="px-7 py-3 bg-white text-blue-700 rounded-xl font-semibold shadow-2xl hover:scale-105 hover:shadow-white/30 hover:bg-gradient-to-r hover:from-white hover:to-cyan-100 transition">
              Get Started
            </button>

            <button className="px-7 py-3 border border-white/30 rounded-xl hover:bg-white/10 backdrop-blur transition">
              View Portfolio
            </button>
          </div>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-2xl opacity-30 rounded-3xl" />

          <div className="relative rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-2xl">
            <motion.img
              key={index}
              src={dashboardImages[index]}
              className="rounded-2xl h-[380px] w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="px-6 md:px-12 py-24 bg-white">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-3xl font-bold mb-4">
            Our Software Solutions
          </h2>
          <p className="text-center text-gray-600 mb-14">
            Custom-built systems tailored to your business needs
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Cpu, title: "ERP Systems", desc: "HR, inventory & accounting automation" },
              { icon: BarChart3, title: "Billing Software", desc: "GST billing & financial reports" },
              { icon: Globe, title: "SaaS Platforms", desc: "Cloud-based scalable apps" },
              { icon: Code2, title: "Web Applications", desc: "Dashboards & admin panels" },
              { icon: Smartphone, title: "Mobile Apps", desc: "Android & iOS development" },
              { icon: ShieldCheck, title: "Secure Systems", desc: "Enterprise-grade security" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12, scale: 1.03 }}
                className="relative rounded-2xl overflow-hidden group bg-white/70 backdrop-blur-xl border border-white/40 shadow-md"
              >
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[rgb(192,132,252)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="p-6 group-hover:bg-purple-50/40 transition">
                  <item.icon className="text-purple-500 w-9 h-9 mb-4 group-hover:scale-110 transition" />
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="relative px-6 md:px-12 py-28 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50 to-blue-50" />

        {/* FIXED BLOBS */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[500px] h-[500px] bg-purple-300/30 blur-[140px] rounded-full top-[-120px] left-[-120px] animate-pulse" />
          <div className="absolute w-[400px] h-[400px] bg-cyan-300/30 blur-[140px] rounded-full bottom-[-120px] right-[-120px] animate-pulse" />
        </div>

        <div className="absolute inset-0 opacity-40">
          <div className="absolute w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite] top-20 left-1/4" />
          <div className="absolute w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite] bottom-10 right-1/4" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold tracking-tight">
              Why Choose Us
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We build scalable, secure and high-performance software solutions designed for real business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Modern Tech Stack", desc: "Latest tools for speed & performance." },
              { title: "Scalable Architecture", desc: "Built to grow without breaking." },
              { title: "Clean UI/UX Design", desc: "User-focused, conversion-driven design." },
              { title: "Fast Delivery", desc: "Agile workflow for quick results." },
              { title: "Secure Systems", desc: "Enterprise-grade protection." },
              { title: "Ongoing Support", desc: "We stay with you after launch." },
            ].map((item, i) => (
              <div key={i} className="group relative p-[1px] rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[rgb(192,132,252)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-2xl p-6 shadow-sm
                  group-hover:shadow-2xl group-hover:-translate-y-2 transition duration-300">

                  <h3 className="text-lg font-semibold group-hover:text-purple-500 transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(-20px) translateX(10px); }
            100% { transform: translateY(0px) translateX(0px); }
          }
        `}</style>

      </section>

      {/* ================= PROCESS ================= */}
      <section className="px-6 md:px-12 py-24 bg-white">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-center text-3xl font-bold mb-14">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-5 gap-6 text-center">
            {["Idea", "Planning", "Design", "Development", "Launch"].map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                className="relative p-6 rounded-xl bg-white border shadow-sm group"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm shadow-md">
                  {i + 1}
                </div>
                <div className="mt-4 font-semibold group-hover:text-blue-600 transition">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="px-6 md:px-12 py-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center
      bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-400 text-white">

        {[
          { value: "50+", label: "Projects" },
          { value: "20+", label: "Clients" },
          { value: "5+", label: "Years Experience" },
          { value: "99%", label: "Client Satisfaction" },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.15 }}
            className="bg-white/10 backdrop-blur-md rounded-xl py-6 shadow-lg"
          >
            <h3 className="text-4xl font-extrabold">{item.value}</h3>
            <p className="mt-2 text-sm opacity-90">{item.label}</p>
          </motion.div>
        ))}
      </section>

      {/* ================= CTA ================= */}
      <section className="relative px-6 md:px-12 py-28 text-center bg-gradient-to-br from-blue-600 via-cyan-500 to-sky-400 text-white overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[400px] h-[400px] bg-white/20 blur-[120px] rounded-full top-[-100px] right-[-100px]" />
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold">
          Let’s Build Something Amazing
        </h2>

        <p className="mt-4 text-white/90 text-lg">
          Turn your idea into a powerful, scalable product.
        </p>

        <button className="mt-8 px-8 py-4 bg-white text-blue-700 rounded-xl font-semibold shadow-2xl hover:scale-105 transition">
          Contact Us
        </button>
      </section>

      {/* GLOBAL FIX */}
      <style jsx global>{`
        html, body {
          overflow-x: hidden;
          scroll-behavior: smooth;
        }
      `}</style>

    </div>
  );
}