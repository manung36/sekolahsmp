'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Gagal mengirim pesan.');
      setSuccess(true);
      setFormData({ name: '', emailOrPhone: '', subject: '', message: '' });
    } catch {
      setError('Terjadi kesalahan saat mengirim pesan. Silakan coba kembali.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-lg">
          <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold uppercase tracking-wider">
            Layanan Komunikasi
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif mt-3">
            Kontak & Lokasi SMP Negeri 4 Purwokerto
          </h1>
          <p className="text-blue-100 text-sm sm:text-base mt-2 max-w-2xl">
            Hubungi kami untuk informasi seputar pendaftaran, administrasi akademik, atau kirimkan pertanyaan langsung melalui formulir pesan resmi.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Info Sekolah & Jam Operasional */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-gray-900 font-serif border-b border-gray-100 pb-3">
                Informasi Kantor Resmi
              </h2>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-800 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Alamat Kampus</h4>
                  <p className="text-sm text-gray-800 font-medium mt-1 leading-relaxed">
                    Jl. Kertawibawa No. 575, Pasir Kidul, Kec. Purwokerto Barat, Kabupaten Banyumas, Jawa Tengah 53133
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-800 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Telepon Kantor</h4>
                  <a href="tel:0281635053" className="text-sm text-blue-700 font-bold mt-1 block hover:underline">
                    (0281) 635053
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-800 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Korespondensi</h4>
                  <p className="text-sm text-gray-800 font-medium mt-1">
                    smp4_pwt@yahoo.co.id
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-indigo-100 text-indigo-800 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Jam Operasional Layanan</h4>
                  <p className="text-sm text-gray-800 font-bold mt-1">
                    Senin – Sabtu: 07.00 – 16.00 WIB
                  </p>
                  <p className="text-xs text-rose-600 font-semibold mt-0.5">
                    Minggu & Hari Libur Nasional: Tutup
                  </p>
                </div>
              </div>
            </div>

            {/* Peta Interaktif Google Maps Embed */}
            <div className="bg-white rounded-3xl p-4 border border-gray-200/80 shadow-sm overflow-hidden">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider px-2 py-1 mb-2">
                Peta Lokasi Interaktif (Jl. Kertawibawa No. 575)
              </h3>
              <div className="rounded-2xl overflow-hidden h-64 w-full border border-gray-200">
                <iframe
                  title="Peta Lokasi SMP Negeri 4 Purwokerto"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.418290374154!2d109.213192!3d-7.419356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655d8a87b640eb%3A0xe5433a04e548d1e!2sSMP%20Negeri%204%20Purwokerto!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Formulir Pesan Masuk */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/80 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 font-serif mb-2">
                Kirim Pesan / Pengaduan
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mb-6">
                Silakan isi formulir di bawah ini. Pesan Anda akan langsung diteruskan ke tim humas dan tata usaha sekolah.
              </p>

              {success && (
                <div className="mb-6 p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center gap-3 text-blue-800 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>Terima kasih! Pesan Anda telah berhasil terkirim dan akan segera ditindaklanjuti.</span>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: Tri Widodo"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email atau Nomor WhatsApp/Telepon *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.emailOrPhone}
                    onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                    placeholder="Contoh: 08123456789 atau email@domain.com"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Subjek Pertanyaan / Perihal *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Contoh: Pendaftaran Murid Baru Jalur Prestasi"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Isi Pesan *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan pertanyaan atau informasi yang ingin disampaikan..."
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2"
                >
                  {loading ? 'Mengirim...' : (
                    <>
                      <Send className="w-4 h-4" />
                      Kirim Pesan Sekarang
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
