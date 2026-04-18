export default function Download() {
  return (
    <div className="min-h-screen bg-[#F4F7FB] text-[#0F172A]">

      {/* HEADER */}
      <section className="pt-28 pb-14 text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold text-[#0B3C5D]">
          Download Billing Software
        </h1>

        <p className="text-gray-600 mt-4">
          Install on Windows & Linux platforms with secure setup packages
        </p>

      </section>

      {/* DOWNLOAD CARDS */}
      <section className="px-6 md:px-20 pb-16">

        <div className="grid md:grid-cols-2 gap-10">

          {/* WINDOWS */}
          <div className="bg-white border rounded-2xl shadow-sm p-8">

            <div className="text-4xl">🪟</div>

            <h2 className="text-2xl font-bold text-[#0B3C5D] mt-4">
              Windows Version
            </h2>

            <p className="text-gray-600 mt-3 text-sm">
              Install ERP system on Windows 10/11 with full desktop features,
              admin tools, and offline support.
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p>✔ Windows 10 / 11 supported</p>
              <p>✔ Auto updates enabled</p>
              <p>✔ Full admin dashboard</p>
            </div>

            <button className="mt-6 px-6 py-3 bg-[#0B3C5D] text-white rounded-lg w-full hover:opacity-90">
              Download for Windows
            </button>

          </div>

          {/* LINUX */}
          <div className="bg-white border rounded-2xl shadow-sm p-8">

            <div className="text-4xl">🐧</div>

            <h2 className="text-2xl font-bold text-[#1E6091] mt-4">
              Linux Version
            </h2>

            <p className="text-gray-600 mt-3 text-sm">
              Lightweight and secure ERP deployment for Ubuntu, Debian and other
              Linux distributions.
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p>✔ Ubuntu / Debian supported</p>
              <p>✔ CLI & server deployment</p>
              <p>✔ Docker ready package</p>
            </div>

            <button className="mt-6 px-6 py-3 bg-[#1E6091] text-white rounded-lg w-full hover:opacity-90">
              Download for Linux
            </button>

          </div>

        </div>

      </section>

      {/* SYSTEM REQUIREMENTS */}
      <section className="px-6 md:px-20 py-20 bg-white">

        <h2 className="text-3xl font-bold text-center text-[#0B3C5D] mb-10">
          System Requirements
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="p-6 bg-[#F4F7FB] border rounded-xl">
            <p className="font-semibold text-[#0B3C5D]">RAM</p>
            <p className="text-gray-600 mt-2">4 GB Minimum</p>
          </div>

          <div className="p-6 bg-[#F4F7FB] border rounded-xl">
            <p className="font-semibold text-[#0B3C5D]">Processor</p>
            <p className="text-gray-600 mt-2">Intel i3 or higher</p>
          </div>

          <div className="p-6 bg-[#F4F7FB] border rounded-xl">
            <p className="font-semibold text-[#0B3C5D]">Storage</p>
            <p className="text-gray-600 mt-2">2 GB Free Space</p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 md:px-20 py-20 bg-[#0B3C5D] text-white text-center">

        <h2 className="text-3xl font-bold">
          Need Help Installing ERP?
        </h2>

        <p className="mt-3 text-white/70">
          Our support team will assist you with setup & deployment
        </p>

        <button className="mt-6 px-8 py-3 bg-white text-[#0B3C5D] font-semibold rounded-lg">
          Contact Support
        </button>

      </section>

    </div>
  );
}