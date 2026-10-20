import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";
import Script from 'next/script';

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
  metadataBase: new URL('https://heywooddev.com'),

  title: {
    default: "Web Developer in Payson, Utah | Heywood Dev",
    template: "%s | Heywood Dev",
  },
  description: "Heywood Dev builds custom websites and Next.js web applications, with third-party API integration for small businesses in Payson and across Utah.",
  keywords: ["Web Developer Payson Utah", "Custom Web Development", "Next.js Web Applications", "Third-Party API Integration", "Utah Web Developer"],
  authors: [{ name: "Carlton Heywood" }],
  creator: "Carlton Heywood",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heywooddev.com",
    siteName: "Heywood Dev",
    title: "Web Developer in Payson, Utah | Heywood Dev",
    description: "Custom web development, Next.js applications, and third-party API integration for small businesses across Utah.",
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
    title: "Web Developer in Payson, Utah | Heywood Dev",
    description: "Custom web development and API integration for businesses in Utah.",
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
      {/* Place this inside the <head> tag of your RootLayout */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-18080043167"
        strategy="afterInteractive"
      />
      <Script id="google-ads-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18080043167');
        `}
      </Script>
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