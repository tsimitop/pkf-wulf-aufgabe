import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import "./globals.css"

export const metadata = {
	title: "Mini Weather App",
	description: "Dashboard with weather widgets",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
	<html lang="en">
      <body className="bg-black min-h-screen">
		<Navbar />
		{children}
	  </body>
    </html>
  );
}
