import Image from 'next/image';
import { getDb } from '@/lib/db';
import { formatDate } from '@/lib/utils';
import { Calendar, Camera } from 'lucide-react';

export const revalidate = 0;

export default function GaleriPage() {
  const db = getDb();
  const { galleries } = db;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-lg">
          <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold uppercase tracking-wider">
            Dokumentasi Sekolah
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif mt-3">
            Galeri Kegiatan & Prestasi Spempa
          </h1>
          <p className="text-blue-100 text-sm sm:text-base mt-2 max-w-2xl">
            Koleksi potret momen kebersamaan, peringatan hari besar, kegiatan perkemahan, dan gelar karya siswa SMP Negeri 4 Purwokerto.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {galleries.map(album => (
          <section key={album.id} className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-2 mb-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 font-serif">
                  {album.title}
                </h2>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{album.description}</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(album.event_date)}</span>
              </div>
            </div>

            {/* Grid Foto Kegiatan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {album.items.map(item => (
                <div key={item.id} className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 bg-slate-50">
                  <div className="relative h-56 w-full overflow-hidden bg-slate-200">
                    <Image
                      src={item.image_url}
                      alt={item.caption}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <div className="p-3 bg-white flex items-center gap-2 text-xs text-gray-700">
                    <Camera className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span className="line-clamp-1">{item.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
