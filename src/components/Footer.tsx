import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Kolom 1: Profil Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 flex-shrink-0 drop-shadow-md">
                <Image
                  src="/images/logo-smpn4-purwokerto.png"
                  alt="Logo SMP Negeri 4 Purwokerto"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight">SMP NEGERI 4</h3>
                <p className="text-blue-400 font-semibold text-xs tracking-wider">PURWOKERTO</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Sekolah Menengah Pertama Negeri unggul di Purwokerto Barat, Banyumas. Berakhlak mulia, berprestasi tinggi, berwawasan lingkungan dan terampil di era digital.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>NPSN: 20301962 | Terakreditasi A (Unggul)</span>
            </div>
          </div>

          {/* Kolom 2: Tautan Pintas */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 border-b border-blue-500/40 pb-2">
              Navigasi Utama
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> Beranda Utama
                </Link>
              </li>
              <li>
                <Link href="/profil" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> Sejarah & Visi Misi
                </Link>
              </li>
              <li>
                <Link href="/berita" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> Kabar & Pengumuman
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> Dokumentasi Kegiatan
                </Link>
              </li>
              <li>
                <Link href="/spmb" className="hover:text-blue-400 transition flex items-center gap-1.5">
                  <span className="text-blue-500">›</span> Info Penerimaan (SPMB)
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Layanan & Jam Operasional */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 border-b border-blue-500/40 pb-2">
              Jam Layanan Sekolah
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Senin – Sabtu</p>
                  <p className="text-slate-400 text-xs">07.00 – 16.00 WIB</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Minggu & Hari Libur</p>
                  <p className="text-slate-400 text-xs">Tutup</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                Pelayanan administrasi siswa, surat keterangan, dan legalisir dilayani di Ruang Tata Usaha.
              </p>
            </div>
          </div>

          {/* Kolom 4: Kontak Resmi */}
          <div>
            <h4 className="text-white font-semibold text-base mb-4 border-b border-blue-500/40 pb-2">
              Kontak & Lokasi
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-1" />
                <span className="text-slate-300 text-xs leading-relaxed">
                  Jl. Kertawibawa No. 575, Pasir Kidul, Kec. Purwokerto Barat, Kabupaten Banyumas, Jawa Tengah 53133
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:0281635053" className="hover:text-amber-300 transition text-xs">
                  (0281) 635053
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span className="text-slate-300 text-xs">smp4_pwt@yahoo.co.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SMP Negeri 4 Purwokerto. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Dikelola dengan</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>untuk masa depan generasi Spempa</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
