import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Obbel Coffee - Kopi Enak Tanpa Jarak",
  description: "Usaha kopi keliling yang sudah terbukti laku di lapangan. Sistem sudah jalan, cocok untuk anak muda yang mau mulai usaha kopi.",
  keywords: ["Obbel Coffee", "kopi", "kopi susu", "kopi keliling", "franchise kopi", "usaha kopi"],
  authors: [{ name: "Obbel Coffee Team" }],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "Obbel Coffee - Kopi Enak Tanpa Jarak",
    description: "Usaha kopi keliling yang sudah terbukti laku di lapangan. Sistem sudah jalan, cocok untuk anak muda yang mau mulai usaha kopi.",
    url: "https://obbelcoffee.com",
    siteName: "Obbel Coffee",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Obbel Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Obbel Coffee - Kopi Enak Tanpa Jarak",
    description: "Usaha kopi keliling yang sudah terbukti laku di lapangan. Sistem sudah jalan, cocok untuk anak muda yang mau mulai usaha kopi.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
