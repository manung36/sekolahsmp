import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SMP Negeri 4 Purwokerto - Website Resmi Spempa",
  description: "Portal Informasi Resmi SMP Negeri 4 Purwokerto (Spempa), Banyumas, Jawa Tengah. Berakhlak mulia, berprestasi tinggi, berwawasan lingkungan dan digital.",
  keywords: ["SMP Negeri 4 Purwokerto", "SMPN 4 Purwokerto", "Spempa Purwokerto", "Sekolah Purwokerto Barat", "PPDB SMP Banyumas", "SMP Banyumas"],
  openGraph: {
    title: "SMP Negeri 4 Purwokerto - Berakhlak & Berprestasi",
    description: "Portal resmi profil, berita prestasi, ekstrakurikuler, dan informasi SPMB SMPN 4 Purwokerto.",
    type: "website",
    locale: "id_ID",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-slate-50 text-slate-800`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
