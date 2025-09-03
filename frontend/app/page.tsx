"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-6">
      <h1 className="text-3xl font-bold mb-6 text-green-400 drop-shadow-[0_0_10px#00FF00]">Enjoy my Weather App</h1>
      <button
        onClick={() => router.push("/dashboard")}
        className="px-6 py-3 bg-green-600 text-black rounded-lg hover:bg-green-700 transition"
      >
        Go to Dashboard
      </button>
    </div>
  );
}