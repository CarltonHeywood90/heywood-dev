import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#A2D2FF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Heywood Dev | Premium Web Development & IT Solutions",
    template: "%s | Heywood Dev",
  },
  description: "High-performance web applications, custom software, and professional IT management based in Utah.",
  keywords: ["Web Development", "IT Management", "Next.js", "Python", "Utah Tech"],
  authors: [{ name: "Carlton Heywood" }],
  creator: "Heywood Dev",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-off-white text-dark-slate">
        <Header />
        
        {/* Constrained Content Well: The "Middle Third" logic */}
        <main className="mx-auto w-full max-w-5xl grow px-6 py-12 md:px-12">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}