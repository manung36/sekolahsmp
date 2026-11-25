'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, Clock, MapPin, ChevronRight, Lock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Bar Informasi Ringkas - Royal Deep Blue */}
      <div className="bg-blue-950 text-blue-100 text-xs py-2 px-4 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Pasir Kidul, Kec. Purwokerto Barat, Banyumas
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Senin–Sabtu: 07.00–16.00 WIB
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:0281635053" className="hover:text-amber-300 transition-colors flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              (0281) 635053
            </a>
            <span className="text-blue-800">|</span>
            <Link href="/admin" className="hover:text-amber-300 transition-colors flex items-center gap-1 text-[11px] font-medium bg-blue-900 px-2 py-0.5 rounded">
              <Lock className="w-3 h-3 text-amber-400" />
              Admin
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo-smpn4-purwokerto.png"
                  alt="Logo SMP Negeri 4 Purwokerto"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-blue-950 font-serif leading-tight">
                  SMP NEGERI 4
                </span>
                <span className="text-xs sm:text-sm font-semibold text-blue-700 tracking-wider">
                  PURWOKERTO (SPEMPA)
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1 font-medium text-sm text-gray-700">
              <Link href="/" className="px-3.5 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition">
                Beranda
              </Link>
              <Link href="/profil" className="px-3.5 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition">
                Profil Sekolah
              </Link>
              <Link href="/berita" className="px-3.5 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition">
                Berita & Pengumuman
              </Link>
              <Link href="/galeri" className="px-3.5 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition">
                Galeri
              </Link>
              <Link href="/kontak" className="px-3.5 py-2 rounded-lg hover:text-blue-700 hover:bg-blue-50 transition">
                Kontak
              </Link>
              <Link
                href="/spmb"
                className="ml-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-700 hover:bg-blue-800 text-white font-semibold shadow-sm transition transform hover:-translate-y-0.5"
              >
                Info SPMB
                <ChevronRight className="w-4 h-4 text-white" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-blue-800 hover:bg-blue-50 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-1 shadow-lg">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700"
            >
              Beranda
            </Link>
            <Link
              href="/profil"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700"
            >
              Profil Sekolah
            </Link>
            <Link
              href="/berita"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700"
            >
              Berita & Pengumuman
            </Link>
            <Link
              href="/galeri"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700"
            >
              Galeri
            </Link>
            <Link
              href="/kontak"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-800 hover:bg-blue-50 hover:text-blue-700"
            >
              Kontak
            </Link>
            <Link
              href="/spmb"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-3 py-2.5 rounded-lg text-center font-bold bg-blue-700 text-white shadow"
            >
              Penerimaan Siswa Baru (SPMB)
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
