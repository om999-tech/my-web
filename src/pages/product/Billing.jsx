"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// images
import billing from "../../assets/images/billing.jpeg";
import billing1 from "../../assets/images/billing1.jpeg";
import billing2 from "../../assets/images/billing2.jpeg";
import billing3 from "../../assets/images/billing3.jpeg";
import billing4 from "../../assets/images/billing4.jpg";
import billing6 from "../../assets/images/billing6.jpg";

const features = [
  {
    title: "Automated Invoice Generation",
    desc: "Create GST-compliant invoices instantly with smart templates.",
    icon: "📄",
  },
  {
    title: "Advanced Analytics Dashboard",
    desc: "Track revenue, expenses, and growth with real-time insights.",
    icon: "📊",
  },
  {
    title: "Smart Payment Tracking",
    desc: "Monitor pending, paid, and overdue payments effortlessly.",
    icon: "💳",
  },
  {
    title: "Inventory Intelligence",
    desc: "Auto-sync stock levels and avoid shortages or overstock.",
    icon: "📦",
  },
  {
    title: "Role-Based Access Control",
    desc: "Secure multi-user system with permission management.",
    icon: "👥",
  },
  {
    title: "Secure Cloud Backup",
    desc: "Your data is encrypted, backed up, and always accessible.",
    icon: "☁️",
  },
];

const faqs = [
  {
    q: "Is this billing system GST compliant?",
    a: "Yes. It automatically applies GST rules, generates compliant invoices, and supports tax-ready reports.",
  },
  {
    q: "Can I use it on mobile devices?",
    a: "Absolutely. It is fully responsive and optimized for smartphones, tablets, and desktops.",
  },
  {
    q: "Do you offer customer support?",
    a: "Yes, we provide 24/7 priority support along with onboarding assistance for enterprise clients.",
  },
];

export default function BillingPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showModal, setShowModal] = useState(false); // ✅ FIXED

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <div className="bg-[#F6F9FC] text-[#0F172A] overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative px-6 md:px-12 py-32 grid md:grid-cols-2 gap-14 items-center
      bg-gradient-to-br from-[#0B3C5D] via-[#0077b6] to-[#00b4d8] text-white">

        <div className="absolute w-[500px] h-[500px] bg-cyan-300/20 blur-[140px] rounded-full top-[-120px] left-[-120px]" />

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm backdrop-blur border border-white/20">
            ⚡ Next-Gen Smart Billing Platform
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mt-4">
            Automate, Manage & Scale Your{" "}
            <span className="bg-gradient-to-r from-yellow-200 via-white to-cyan-200 bg-clip-text text-transparent">
              Entire Billing Ecosystem
            </span>
          </h1>

          <p className="mt-6 text-white/85 text-lg max-w-xl">
            A unified cloud-based system to manage invoices, payments, inventory, and analytics.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <button
              onClick={() => setShowModal(true)}
              className="px-7 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:scale-105 transition"
            >
              Get Free Demo
            </button>

            <button className="px-7 py-3 border border-white/30 rounded-xl hover:bg-white/10 transition">
              Talk to Sales
            </button>
          </div>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          src={billing}
          className="rounded-2xl shadow-2xl border border-white/20"
        />
      </section>

      {/* ================= FEATURES ================= */}
      <section className="px-6 md:px-12 py-28 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
        <h2 className="text-center text-4xl font-bold mb-14">
          Powerful Features Built for Modern Businesses
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -12, scale: 1.02 }}
              className="p-6 bg-white border rounded-2xl shadow-sm"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-500">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="px-6 md:px-12 py-28 bg-gradient-to-br from-blue-50 to-cyan-50">
        <h2 className="text-center text-4xl font-bold mb-12">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i} className="bg-white border rounded-xl shadow-sm">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-6 py-5 flex justify-between"
                >
                  <span className="font-semibold">{f.q}</span>
                  <span>{isOpen ? "−" : "+"}</span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-gray-600 text-sm"
                    >
                      {f.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 md:px-12 py-32 text-center bg-gradient-to-br from-[#0B3C5D] via-[#0077b6] to-[#00b4d8] text-white">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Ready to Modernize Your Billing System?
        </h2>

        <p className="mt-4 text-white/85">
          Reduce manual work, eliminate errors, and scale your business.
        </p>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            onClick={() => setShowModal(false)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 40 }}
              className="bg-white rounded-2xl w-full max-w-md p-6 relative"
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-4"
              >
                ✕
              </button>

              <h2 className="text-xl font-bold mb-4">
                Request Free Demo
              </h2>

              <form className="space-y-4">
                <input className="w-full border p-3 rounded" placeholder="Name" />
                <input className="w-full border p-3 rounded" placeholder="Email" />
                <input className="w-full border p-3 rounded" placeholder="Phone" />
                <textarea className="w-full border p-3 rounded" placeholder="Message" />

                <button className="w-full bg-blue-600 text-white py-3 rounded">
                  Submit
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}