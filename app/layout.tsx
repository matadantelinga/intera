import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata: Metadata = {
  title: "Intera — Digital Experiences Built for What's Next",
  description:
    "Intera helps businesses turn ideas into thoughtful digital products through design, technology, and strategy.",
  openGraph: {
    title: "Intera",
    description: "Digital experiences built for what's next.",
  },
  twitter: { card: "summary_large_image" },
};
export default function L({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
