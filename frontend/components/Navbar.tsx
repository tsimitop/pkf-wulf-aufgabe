"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Weather App</h1>
      <div className="space-x-6">
        <Link
          href="/"
          className="hover:bg-blue-700 px-3 py-1 rounded transition"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="hover:bg-blue-700 px-3 py-1 rounded transition"
        >
          Dashboard
        </Link>
      </div>
    </nav>
  );
}
