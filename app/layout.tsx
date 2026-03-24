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
    default: "Heywood Dev | Professional Web Development & IT Management",
    template: "%s | Heywood Dev",
  },
  description: "Expert full-stack development and IT management consulting based in Utah. Specializing in Next.js, React, and scalable business solutions.",
  keywords: ["Web Development", "IT Management", "Utah Dev", "Next.js Expert", "Software Engineering"],
  authors: [{ name: "Carlton Heywood" }],
  creator: "Carlton Heywood",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heywood.dev",
    siteName: "Heywood Dev",
    title: "Heywood Dev | Web Development & IT Management",
    description: "Modern web solutions and strategic IT consulting.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Heywood Dev",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Heywood Dev",
    description: "Web Development & IT Management",
    images: ["/og-image.png"],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
      // 1. Silences errors from browser extensions injecting tokens
      suppressHydrationWarning 
    >
      <body 
        className="flex min-h-screen flex-col bg-off-white text-dark-slate"
        // 2. Double-safety for the body tag
        suppressHydrationWarning
      >
        <Header />
        
        {/* Constrained Content Well */}
        <main className="mx-auto w-full max-w-5xl grow px-6 py-12 md:px-12">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}