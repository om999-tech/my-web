import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0B3C5D] shadow-md border-b border-white/10">

      <div className="flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <h1 className="text-white font-bold text-xl">
          MyCompany ERP
        </h1>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-white/90 text-sm font-medium">

          <Link className="hover:text-white" to="/">Home</Link>

          <Link className="hover:text-white" to="/products">Products</Link>

          <Link className="hover:text-white" to="/download">Download</Link>

          <Link className="hover:text-white" to="/contact">Contact</Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0B3C5D] border-t border-white/10 px-6 py-4 space-y-3">

          <Link
            onClick={() => setOpen(false)}
            className="block text-white/90 hover:text-white"
            to="/"
          >
            Home
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="block text-white/90 hover:text-white"
            to="/products"
          >
            Products
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="block text-white/90 hover:text-white"
            to="/download"
          >
            Download
          </Link>

          <Link
            onClick={() => setOpen(false)}
            className="block text-white/90 hover:text-white"
            to="/contact"
          >
            Contact
          </Link>

        </div>
      )}

    </nav>
  );
}