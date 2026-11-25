import Link from 'next/link';
import Image from 'next/image';
import { getDb } from '@/lib/db';
import { formatDate } from '@/lib/utils';
import { 
  Award, 
  Sparkles, 
  ArrowRight, 
  Calendar, 
  ChevronRight,
  School,
  Clock,
  Users
} from 'lucide-react';

export const revalidate = 0;

export default function HomePage() {
  const db = getDb();
  const { posts, galleries, extracurriculars, school_settings } = db;
  const recentPosts = posts.filter(p => p.is_published).slice(0, 3);
  const featuredGalleries = galleries.slice(0, 3);
  const topEkskul = extracurriculars.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Royal Spempa Blue */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-800/80 border border-blue-600/50 text-blue-200 text-xs font-semibold backdrop-blur-sm shadow-inner">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Portal Resmi SPEMPA Banyumas</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-serif leading-tight">
                SMP NEGERI 4 <br className="hidden sm:inline" />
                <span className="text-blue-300">PURWOKERTO</span>
              </h1>
              
              <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                {school_settings.tagline}. Membentuk insan beriman dan bertaqwa, unggul dalam kompetisi sains dan seni, serta berbudaya lingkungan hidup di Purwokerto Barat.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/spmb"
                  className="px-6 py-3.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition transform hover:-translate-y-0.5 flex items-center gap-2 text-sm"
                >
                  Informasi SPMB 2026
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/profil"
                  className="px-6 py-3.5 rounded-xl font-semibold bg-blue-800/70 hover:bg-blue-700/80 text-white border border-blue-500/40 backdrop-blur transition flex items-center gap-2 text-sm"
                >
                  Profil & Guru Tendik
                </Link>
                <Link
                  href="/berita"
                  className="px-6 py-3.5 rounded-xl font-semibold hover:bg-white/10 text-blue-200 transition text-sm"
                >
                  Kabar Terkini
                </Link>
              </div>

              {/* Fast Badges */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-blue-800/60 max-w-xl mx-auto lg:mx-0 text-left">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-800/80 text-blue-300">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Akreditasi A</p>
                    <p className="text-xs text-blue-300">Nilai Unggul</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-blue-800/80 text-blue-300">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">NPSN</p>
                    <p className="text-xs text-blue-300">{school_settings.npsn}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                  <div className="p-2 rounded-lg bg-blue-800/80 text-blue-300">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Siswa Berprestasi</p>
                    <p className="text-xs text-blue-300">Generasi Hebat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emblem / Visual Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 sm:w-80 h-72 sm:h-80 bg-gradient-to-tr from-blue-900/60 to-blue-700/30 p-8 rounded-3xl border border-blue-500/30 backdrop-blur-md shadow-2xl flex flex-col items-center justify-center text-center group">
                <div className="relative w-40 h-40 mb-4 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src="/images/logo-smpn4-purwokerto.png"
                    alt="Logo Resmi SMP Negeri 4 Purwokerto"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm font-semibold text-white tracking-wide">SMP NEGERI 4 PURWOKERTO</p>
                <p className="text-xs text-blue-300 mt-1 font-medium">Pasir Kidul, Purwokerto Barat, Banyumas</p>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-blue-200 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Senin–Sabtu 07.00–16.00 WIB</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sambutan Kepala Sekolah */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50/50 rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-sm flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-md flex-shrink-0 border-4 border-white">
              <Image
                src={school_settings.principal_photo}
                alt={school_settings.principal_name}
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4 text-center lg:text-left flex-grow">
              <div className="inline-block px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
                Sambutan Kepala Sekolah
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif">
                Selamat Datang di Portal SMPN 4 Purwokerto
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base italic">
                &ldquo;{school_settings.principal_welcome}&rdquo;
              </p>
              <div>
                <p className="text-base font-bold text-blue-950">{school_settings.principal_name}</p>
                <p className="text-xs text-gray-500 font-medium">Kepala SMP Negeri 4 Purwokerto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sorotan Berita & Pengumuman Terbaru */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Publikasi Sekolah</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif mt-1">
                Kabar, Prestasi & Pengumuman Spempa
              </h2>
            </div>
            <Link
              href="/berita"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 transition"
            >
              Lihat Semua Publikasi
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={post.cover_image_url}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider text-white shadow ${
                    post.category === 'prestasi' ? 'bg-amber-600' : post.category === 'pengumuman' ? 'bg-rose-600' : 'bg-blue-700'
                  }`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{formatDate(post.published_at)}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-snug group-hover:text-blue-700 transition line-clamp-2 mb-2">
                    <Link href={`/berita/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/berita/${post.slug}`}
                    className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 pt-2 border-t border-gray-100"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ekstrakurikuler Pilihan */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Bakat & Minat</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif mt-1">
              Ekstrakurikuler Unggulan Spempa
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Mengembangkan potensi siswa melalui kepramukaan, seni tradisional Banyumasan, riset sains, dan olahraga.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topEkskul.map((ekskul) => (
              <div
                key={ekskul.id}
                className="rounded-2xl overflow-hidden border border-gray-200/80 bg-slate-50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={ekskul.image_url}
                    alt={ekskul.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-3 text-xs font-semibold text-blue-300">
                    {ekskul.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-900 text-base mb-1">{ekskul.name}</h3>
                  <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed mb-3 flex-grow">
                    {ekskul.description}
                  </p>
                  <div className="pt-2 border-t border-gray-200/60 text-[11px] text-blue-900 font-medium flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{ekskul.schedule}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/profil#ekstrakurikuler"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl bg-blue-50 text-blue-800 hover:bg-blue-100 transition"
            >
              Lihat Seluruh Kegiatan Ekstrakurikuler
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Galeri Cuplikan */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Dokumentasi</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif mt-1">
                Galeri Aktivitas Siswa
              </h2>
            </div>
            <Link
              href="/galeri"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700 hover:text-blue-900 transition"
            >
              Buka Galeri Foto Lengkap
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredGalleries.map((gal) => (
              <div
                key={gal.id}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-64 bg-slate-900"
              >
                <Image
                  src={gal.cover_image_url}
                  alt={gal.title}
                  fill
                  className="object-cover opacity-85 group-hover:scale-110 group-hover:opacity-100 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <span className="text-[11px] font-semibold text-blue-300">
                    {formatDate(gal.event_date)}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug mt-1 group-hover:text-blue-300 transition">
                    {gal.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-1 mt-1 font-light">
                    {gal.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Ajakan SPMB - Royal Spempa Blue */}
      <section className="py-16 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 rounded-3xl p-8 sm:p-12 border border-white/20 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <span className="px-3 py-1 rounded-full bg-blue-500 text-white font-bold text-xs uppercase tracking-wide">
                Penerimaan Peserta Didik Baru
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif">
                Siap Menjadi Bagian dari SMP Negeri 4 Purwokerto?
              </h2>
              <p className="text-blue-100 text-sm leading-relaxed">
                Dapatkan informasi resmi seputar kuota zonasi, jalur prestasi, jalur afirmasi, dan persyaratan berkas pendaftaran tahun ajaran baru.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 flex-shrink-0">
              <Link
                href="/spmb"
                className="px-6 py-3 rounded-xl font-bold bg-white hover:bg-blue-50 text-blue-950 shadow-md transition"
              >
                Informasi & Panduan SPMB
              </Link>
              <Link
                href="/kontak"
                className="px-6 py-3 rounded-xl font-semibold bg-white/20 hover:bg-white/30 text-white transition border border-white/30"
              >
                Hubungi Panitia
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
