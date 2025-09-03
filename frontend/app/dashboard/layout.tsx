import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {/* <aside className="w-64 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li>Home</li>
          <li>Widgets</li>
        </ul>
      </aside> */}

      {/* Main content */}
      <main className="flex-1 p-6 bg-black">{children}</main>
    </div>
  );
}