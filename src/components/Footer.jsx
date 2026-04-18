import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#020617] text-gray-400 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">

        {/* COMPANY */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            MyCompany
          </h2>
          <p className="text-sm">
            We build scalable ERP systems, billing software, and mobile apps
            for modern businesses.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-4">
            <div className="p-2 bg-gray-800 rounded-full hover:bg-indigo-500 cursor-pointer transition">
              <FaFacebookF />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-indigo-500 cursor-pointer transition">
              <FaInstagram />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-indigo-500 cursor-pointer transition">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">ERP Solutions</li>
            <li className="hover:text-white cursor-pointer">Billing Software</li>
            <li className="hover:text-white cursor-pointer">Web Development</li>
            <li className="hover:text-white cursor-pointer">Mobile Apps</li>
          </ul>
        </div>

        {/* COMPANY LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@mycompany.com</li>
            <li>Phone: +91 9876543210</li>
            <li>Location: India</li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>

    </footer>
  );
}