import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/header";
import Footer from "./components/footer";
import "./globals.css";
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';

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
    default: "Business-First Websites for Utah Businesses | HeywoodDev",
    template: "%s | Heywood Dev",
  },
  description: "Fast, low-maintenance websites for Utah small businesses, clinics, and service providers—planned around your operations, customers, and security needs.",
  keywords: ["Small Business Websites Utah", "Clinic Website Design Utah", "Service Business Websites", "Payson Utah Web Consultant"],
  authors: [{ name: "Carlton Heywood" }],
  creator: "Carlton Heywood",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://heywooddev.com",
    siteName: "Heywood Dev",
    title: "Business-First Websites for Utah Businesses | HeywoodDev",
    description: "Practical, secure, low-maintenance websites for local businesses, clinics, and service providers.",
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
    title: "Business-First Websites for Utah Businesses | HeywoodDev",
    description: "Practical, secure, low-maintenance websites for local businesses, clinics, and service providers.",
    images: ["/og-image.png"],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
      suppressHydrationWarning 
    >
      <body 
        className="flex min-h-screen flex-col bg-off-white text-dark-slate"
        suppressHydrationWarning
      >
        {/* Google Ads Conversion Tag */}
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

        {/* Google Analytics 4 (Renders automatically if env var is set) */}
        {gaId && <GoogleAnalytics gaId={gaId} />}

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