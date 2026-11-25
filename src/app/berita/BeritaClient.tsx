'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { Search, Calendar, Tag, ArrowRight } from 'lucide-react';

interface PostItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  cover_image_url: string;
  published_at: string;
}

export default function BeritaClientPage({ initialPosts }: { initialPosts: PostItem[] }) {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('semua');

  const filteredPosts = initialPosts.filter(post => {
    const matchCategory = selectedCategory === 'semua' || post.category === selectedCategory;
    const matchSearch = post.title.toLowerCase().includes(search.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white shadow-lg">
          <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold uppercase tracking-wider">
            Publikasi Resmi
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-serif mt-3">
            Berita, Prestasi & Pengumuman Spempa
          </h1>
          <p className="text-blue-100 text-sm sm:text-base mt-2 max-w-2xl">
            Ikuti informasi terkini seputar kegiatan akademik, prestasi siswa, dan edaran resmi dari pihak sekolah SMP Negeri 4 Purwokerto.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search & Filter Controls */}
        <div className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari artikel berita..."
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
          </div>

          {/* Filter Kategori */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {['semua', 'berita', 'pengumuman', 'prestasi'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition ${
                  selectedCategory === cat
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Daftar Post */}
        {filteredPosts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-200">
            <Tag className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-600 font-medium">Tidak ada publikasi yang cocok dengan kriteria pencarian.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={post.cover_image_url}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
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
                    Baca Lengkap
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
