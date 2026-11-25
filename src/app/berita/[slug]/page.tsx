import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getDb } from '@/lib/db';
import { formatDate } from '@/lib/utils';
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react';

export const revalidate = 0;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const db = getDb();
  const post = db.posts.find(p => p.slug === slug);
  if (!post) return { title: 'Artikel Tidak Ditemukan' };

  return {
    title: `${post.title} - SMP Negeri 4 Purwokerto`,
    description: post.excerpt,
  };
}

export default async function DetailBeritaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const db = getDb();
  const post = db.posts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = db.posts
    .filter(p => p.slug !== slug && p.is_published)
    .slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigasi Balik */}
        <div className="mb-6">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Berita & Pengumuman
          </Link>
        </div>

        <article className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-sm">
          {/* Header Post */}
          <div className="space-y-4 mb-8">
            <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider text-white ${
              post.category === 'prestasi' ? 'bg-amber-600' : post.category === 'pengumuman' ? 'bg-rose-600' : 'bg-blue-700'
            }`}>
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 font-serif leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-2 border-t border-gray-100">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-blue-600" />
                {formatDate(post.published_at)}
              </span>
              {post.author && (
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-blue-600" />
                  {post.author}
                </span>
              )}
            </div>
          </div>

          {/* Cover Gambar */}
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-8 shadow-sm">
            <Image
              src={post.cover_image_url}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Konten Artikel */}
          <div 
            className="prose prose-slate max-w-none text-gray-800 leading-relaxed space-y-4 text-base"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Footer Info */}
          <div className="mt-10 pt-6 border-t border-gray-200 flex flex-wrap justify-between items-center text-xs text-gray-500 gap-4">
            <div className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-blue-600" />
              <span>Publikasi Resmi SMP Negeri 4 Purwokerto</span>
            </div>
            <div>
              <span className="text-slate-400">ID: {post.id}</span>
            </div>
          </div>
        </article>

        {/* Artikel Terkait */}
        {related.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 font-serif mb-6">
              Publikasi Lainnya
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map(r => (
                <Link
                  key={r.id}
                  href={`/berita/${r.slug}`}
                  className="bg-white p-4 rounded-2xl border border-gray-200 hover:shadow-md transition flex flex-col group"
                >
                  <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3">
                    <Image
                      src={r.cover_image_url}
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>
                  <h4 className="text-xs font-bold text-gray-900 group-hover:text-blue-700 line-clamp-2 leading-snug">
                    {r.title}
                  </h4>
                  <p className="text-[11px] text-gray-400 mt-2">{formatDate(r.published_at)}</p>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
