import Image from 'next/image';
import { getDb } from '@/lib/db';
import { ShieldCheck, Target, Compass, Award, Calendar, School, Users } from 'lucide-react';

export const revalidate = 0;

export default function ProfilPage() {
  const db = getDb();
  const { school_settings, staff_members, extracurriculars } = db;
  const leaders = staff_members.filter(s => s.category === 'pimpinan');
  const teachers = staff_members.filter(s => s.category === 'guru');
  const staff = staff_members.filter(s => s.category === 'staf');

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Header Banner - Royal Spempa Blue */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-lg">
          <div className="relative z-10 max-w-2xl">
            <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold uppercase tracking-wider">
              Tentang Sekolah
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold font-serif mt-3">
              Profil SMP Negeri 4 Purwokerto (Spempa)
            </h1>
            <p className="text-blue-100 text-sm sm:text-base mt-2 leading-relaxed">
              Mengenal lebih dekat visi & misi, kepemimpinan, jajaran guru pengajar, staf tenaga kependidikan, serta fasilitas pendukung belajar di SMPN 4 Purwokerto.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Sejarah & Filosofi */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-blue-700 font-bold text-sm uppercase tracking-wider">
                <School className="w-4 h-4" />
                <span>NPSN: {school_settings.npsn} | Akreditasi A Unggul</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-serif">
                Profil & Dedikasi Sekolah
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {school_settings.history}
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100">
                  <h4 className="font-bold text-blue-950 text-sm mb-1">Karakter Profil Pelajar Pancasila</h4>
                  <p className="text-xs text-blue-800 leading-relaxed">
                    Membina kedisiplinan, budi pekerti luhur, dan toleransi sosial berlandaskan nilai-nilai kebangsaan.
                  </p>
                </div>
                <div className="bg-indigo-50/70 p-4 rounded-2xl border border-indigo-100">
                  <h4 className="font-bold text-indigo-950 text-sm mb-1">Berwawasan Digital & Lingkungan</h4>
                  <p className="text-xs text-indigo-900 leading-relaxed">
                    Pembelajaran interaktif TIK, laboratorium komputer modern, serta lingkungan sekolah yang asri dan sejuk.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-56 h-56 bg-slate-50 rounded-3xl p-6 border border-gray-200 flex flex-col items-center justify-center text-center shadow-inner">
                <div className="relative w-28 h-28 mb-3">
                  <Image
                    src="/images/logo-smpn4-purwokerto.png"
                    alt="Logo SMPN 4 Purwokerto"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-bold text-gray-800">Lambang Resmi Spempa</p>
                <p className="text-[11px] text-gray-500 mt-1">
                  Obor Pendidikan & Perisai Karakter
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visi & Misi */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 bg-blue-950 text-white rounded-3xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-blue-800 text-blue-300 mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-blue-300 uppercase tracking-wider">Arah & Cita-Cita</h3>
              <h2 className="text-2xl font-bold font-serif mt-1 text-white">Visi Sekolah</h2>
              <div className="mt-6 p-6 rounded-2xl bg-blue-900/70 border border-blue-800 text-blue-100 text-base sm:text-lg italic font-serif leading-relaxed">
                &ldquo;{school_settings.vision}&rdquo;
              </div>
            </div>
            <div className="mt-8 text-xs text-blue-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Pedoman Mutu Pendidikan Berkelanjutan</span>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm">
            <div className="inline-flex items-center gap-2 p-2 rounded-xl bg-blue-100 text-blue-800 mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wider">Langkah Nyata</h3>
            <h2 className="text-2xl font-bold font-serif mt-1 text-gray-900 mb-6">Misi Sekolah</h2>
            <ul className="space-y-4">
              {school_settings.missions.map((m, idx) => (
                <li key={idx} className="flex items-start gap-3.5">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs mt-0.5">
                    {idx + 1}
                  </div>
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Struktur Pimpinan & Dewan Guru */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Pendidik & Tenaga Kependidikan</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif mt-1">
              Pimpinan, Guru & Tendik Spempa
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Didukung oleh guru mata pelajaran berpengalaman dan staf tata usaha yang berdedikasi membimbing perkembangan siswa.
            </p>
          </div>

          {/* Pimpinan Sekolah */}
          <div className="mb-10">
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
              Pimpinan & Tenaga Kependidikan Utama
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...leaders, ...staff].map(member => (
                <div key={member.id} className="bg-slate-50 p-5 rounded-2xl border border-gray-200/70 text-center flex flex-col items-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-3 border-2 border-blue-600 shadow">
                    <Image
                      src={member.photo_url}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">{member.name}</h4>
                  <p className="text-xs text-blue-700 font-semibold mt-0.5">{member.role_or_subject}</p>
                  <p className="text-[11px] text-gray-400 mt-1">NIP: {member.nip_or_id}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Dewan Guru Mata Pelajaran */}
          <div>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
              Dewan Guru Mata Pelajaran
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teachers.map(member => (
                <div key={member.id} className="bg-slate-50 p-4 rounded-2xl border border-gray-200/70 text-center flex flex-col items-center">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden mb-3 border border-gray-300">
                    <Image
                      src={member.photo_url}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-gray-900 text-xs sm:text-sm">{member.name}</h4>
                  <p className="text-xs text-blue-700 font-medium mt-0.5">{member.role_or_subject}</p>
                  <p className="text-[10px] text-gray-400 mt-1">NIP: {member.nip_or_id}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Daftar Seluruh Ekstrakurikuler */}
        <section id="ekstrakurikuler" className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/80 shadow-sm scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Pengembangan Diri</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-serif mt-1">
              Program Ekstrakurikuler Spempa
            </h2>
            <p className="text-gray-600 text-sm mt-2">
              Siswa dapat mengasah minat dan bakat melalui pilihan ekstrakurikuler kepanduan, olahraga, kesenian Banyumasan, dan riset sains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurriculars.map(ekskul => (
              <div key={ekskul.id} className="border border-gray-200 rounded-2xl p-5 hover:border-blue-500 hover:shadow-md transition">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800 uppercase">
                  {ekskul.category}
                </span>
                <h3 className="font-bold text-gray-900 text-lg mt-2">{ekskul.name}</h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">{ekskul.description}</p>
                <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col gap-1 text-xs text-gray-500">
                  <span><strong>Jadwal:</strong> {ekskul.schedule}</span>
                  {ekskul.coach && <span><strong>Pembina:</strong> {ekskul.coach}</span>}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
