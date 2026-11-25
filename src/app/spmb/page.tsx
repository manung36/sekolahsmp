import { getDb } from '@/lib/db';
import Link from 'next/link';
import { 
  CheckCircle, 
  Calendar, 
  FileText, 
  HelpCircle, 
  ExternalLink, 
  AlertCircle 
} from 'lucide-react';

export const revalidate = 0;

export default function SpmbPage() {
  const db = getDb();
  const { school_settings } = db;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-lg">
          <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold uppercase tracking-wider">
            Informasi Resmi PPDB / SPMB
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif mt-3">
            Penerimaan Siswa Baru SMP Negeri 4 Purwokerto
          </h1>
          <p className="text-blue-100 text-sm sm:text-base mt-2 max-w-2xl">
            Panduan lengkap persyaratan dokumen, jadwal seleksi, kuota 4 jalur penerimaan, dan titik zonasi bagi calon peserta didik baru Spempa.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Pengumuman Terkini */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-6 flex items-start gap-4 shadow-sm">
          <AlertCircle className="w-6 h-6 text-blue-700 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-bold text-blue-950 text-base">Pemberitahuan Resmi Panitia PPDB Spempa</h3>
            <p className="text-sm text-blue-900 leading-relaxed">
              {school_settings.spmb_announcement}
            </p>
            <p className="text-xs text-blue-800 font-semibold pt-1">
              Jadwal Layanan: {school_settings.spmb_schedule}
            </p>
          </div>
        </div>

        {/* 4 Jalur Pendaftaran */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-sm mb-4">
                50%
              </div>
              <h3 className="font-bold text-gray-900 text-base">Jalur Zonasi</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Diperuntukkan bagi calon murid yang berdomisili di dalam wilayah zonasi terdekat dengan SMP Negeri 4 Purwokerto (Pasir Kidul, Karanglewas, dll).
              </p>
            </div>
            <span className="text-[11px] text-blue-700 font-semibold mt-4 block">Berdasarkan KK Orang Tua</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-sm mb-4">
                25%
              </div>
              <h3 className="font-bold text-gray-900 text-base">Jalur Prestasi</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Berdasarkan akumulasi nilai rapor dan piagam kejuaraan akademik maupun non-akademik (olahraga, seni, pramuka) berjenjang.
              </p>
            </div>
            <span className="text-[11px] text-indigo-700 font-semibold mt-4 block">Sertifikat Resmi Terverifikasi</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center font-bold text-sm mb-4">
                20%
              </div>
              <h3 className="font-bold text-gray-900 text-base">Jalur Afirmasi</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Ditujukan bagi calon siswa dari keluarga ekonomi kurang mampu yang terdata resmi dalam program bantuan sosial pemerintah (KIP/PKH).
              </p>
            </div>
            <span className="text-[11px] text-sky-700 font-semibold mt-4 block">Kartu Bantuan Aktif</span>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-sm mb-4">
                5%
              </div>
              <h3 className="font-bold text-gray-900 text-base">Perpindahan Tugas</h3>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Bagi calon murid yang berpindah domisili mengikuti penugasan dinas resmi orang tua/wali dari instansi pemerintah/swasta.
              </p>
            </div>
            <span className="text-[11px] text-slate-700 font-semibold mt-4 block">Surat Tugas Resmi</span>
          </div>
        </div>

        {/* Persyaratan Dokumen & Alur */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Persyaratan Dokumen */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-blue-700" />
              <h3 className="text-xl font-bold text-gray-900 font-serif">Persyaratan Dokumen</h3>
            </div>
            <p className="text-xs text-gray-500 mb-6">
              Pastikan berkas asli dan fotokopi telah disiapkan sebelum melakukan verifikasi data:
            </p>
            <ul className="space-y-3">
              {school_settings.spmb_requirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Alur Pendaftaran */}
          <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <h3 className="text-xl font-bold text-gray-900 font-serif">Alur Pendaftaran</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  1
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Registrasi Akun PPDB Daring</h4>
                  <p className="text-xs text-gray-600">Calon murid membuat akun pada portal resmi PPDB Banyumas secara online.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  2
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Pilih SMP Negeri 4 Purwokerto</h4>
                  <p className="text-xs text-gray-600">Menentukan pilihan sekolah dan mengunggah pindaian berkas persyaratan.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  3
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Verifikasi Berkas di Kampus Pasir Kidul</h4>
                  <p className="text-xs text-gray-600">Panitia sekolah mencocokkan dokumen asli, piagam kejuaraan, dan alamat KK.</p>
                </div>
              </div>
              <div className="flex items-start gap-3.5">
                <span className="w-6 h-6 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                  4
                </span>
                <div>
                  <h4 className="text-sm font-bold text-gray-900">Pengumuman & Daftar Ulang</h4>
                  <p className="text-xs text-gray-600">Melihat hasil seleksi resmi dan melakukan daftar ulang sesuai petunjuk panitia.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-4">
              <a
                href={school_settings.spmb_link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs inline-flex items-center gap-2 shadow"
              >
                Kunjungi Portal PPDB Banyumas
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/kontak"
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-gray-800 font-semibold text-xs inline-flex items-center gap-2"
              >
                Pusat Bantuan Sekolah
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
