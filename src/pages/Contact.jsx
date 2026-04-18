export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F4F7FB] text-[#0F172A]">

      {/* HEADER */}
      <section className="pt-28 pb-14 text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D]">
          Contact Us
        </h1>

        <p className="text-gray-600 mt-4">
          We are here to help you with ERP setup, billing & support
        </p>

      </section>

      {/* MAIN SECTION */}
      <section className="px-6 md:px-20 pb-20 grid md:grid-cols-2 gap-12 items-start">

        {/* CONTACT INFO */}
        <div className="space-y-6">

          <div className="p-6 bg-white border rounded-xl">
            <h3 className="text-[#0B3C5D] font-semibold">📍 Office Address</h3>
            <p className="text-gray-600 mt-2 text-sm">
              123 Business Street, Tech City, India
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl">
            <h3 className="text-[#0B3C5D] font-semibold">📞 Phone</h3>
            <p className="text-gray-600 mt-2 text-sm">
              +91 828553 4303
            </p>
          </div>

          <div className="p-6 bg-white border rounded-xl">
            <h3 className="text-[#0B3C5D] font-semibold">📧 Email</h3>
            <p className="text-gray-600 mt-2 text-sm">
              support@omgroups.com
            </p>
          </div>

        </div>

        {/* FORM */}
        <div className="bg-white border rounded-2xl shadow-sm p-8">

          <h2 className="text-2xl font-bold text-[#0B3C5D] mb-6">
            Send Message
          </h2>

          <input
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6091]"
            placeholder="Your Name"
          />

          <input
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6091]"
            placeholder="Your Email"
          />

          <textarea
            rows="4"
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E6091]"
            placeholder="Your Message"
          />

          <button className="w-full py-3 bg-[#0B3C5D] text-white rounded-lg hover:bg-[#1E6091] transition">
            Send Message
          </button>

        </div>

      </section>

    </div>
  );
}