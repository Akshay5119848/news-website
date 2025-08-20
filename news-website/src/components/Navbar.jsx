import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-blue-900 text-white px-4 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <span className="font-extrabold text-2xl tracking-tight">Web Daily</span>
      </div>
      <div className="hidden md:flex items-center gap-5">
        <Link to="/" className="hover:text-yellow-300">Home</Link>
        <button className="hover:text-yellow-300">Support</button>
        <button className="hover:text-yellow-300">Stay Updated</button>
        <button className="hover:text-yellow-300">Register/Login</button>
      </div>
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open Sidebar"
      >
        ☰
      </button>
      {sidebarOpen && <Sidebar close={() => setSidebarOpen(false)} />}
    </nav>
  );
}
