"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-black">Weather App</h1>
      <div className="space-x-6">
        <Link
          href="/"
          className="hover:bg-green-700 px-3 py-1 rounded transition text-black"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="hover:bg-green-700 px-3 py-1 rounded transition text-black"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
