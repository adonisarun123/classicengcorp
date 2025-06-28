import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Classic Engineering Corp - Industrial Motors, Gearboxes & Pumps",
  description: "Leading provider of industrial motors, gearboxes, pumps, and custom engineering solutions. Quality products and services for manufacturing industries.",
  keywords: "industrial motors, gearboxes, pumps, engineering solutions, maintenance services, industrial equipment",
  authors: [{ name: "Classic Engineering Corp" }],
  creator: "Classic Engineering Corp",
  publisher: "Classic Engineering Corp",
  robots: "index, follow",
  openGraph: {
    title: "Classic Engineering Corp - Industrial Motors, Gearboxes & Pumps",
    description: "Leading provider of industrial motors, gearboxes, pumps, and custom engineering solutions.",
    url: "http://www.classicengineeringcorp.com",
    siteName: "Classic Engineering Corp",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Classic Engineering Corp - Industrial Motors, Gearboxes & Pumps",
    description: "Leading provider of industrial motors, gearboxes, pumps, and custom engineering solutions.",
  },
  alternates: {
    canonical: "http://www.classicengineeringcorp.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Classic Engineering Corp",
              "url": "http://www.classicengineeringcorp.com/",
              "logo": "http://www.classicengineeringcorp.com/logo.svg",
              "description": "Leading provider of industrial motors, gearboxes, pumps, and custom engineering solutions.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No 195/1, Krishnagiri Bypass Road, Near Thirumala Lodge",
                "addressLocality": "Hosur",
                "addressRegion": "Tamil Nadu",
                "postalCode": "635109",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": ["+91-9894081022", "+91-9443340831"],
                "contactType": "customer service",
                "email": "info@classicengineeringcorp.com"
              },
              "sameAs": []
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
