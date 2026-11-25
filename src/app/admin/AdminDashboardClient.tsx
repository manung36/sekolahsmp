'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  FileText, 
  Image as ImageIcon, 
  Users, 
  Mail, 
  Plus, 
  Trash2, 
  CheckCircle, 
  Lock, 
  LayoutDashboard,
  ShieldCheck,
  LogOut,
  ExternalLink
} from 'lucide-react';
import type { Post, Gallery, StaffMember, ContactMessage } from '@/lib/db';

interface AdminDashboardProps {
  initialPosts: Post[];
  initialGalleries: Gallery[];
  initialStaff: StaffMember[];
  initialMessages: ContactMessage[];
}

export default function AdminDashboardClient({
  initialPosts,
  initialGalleries,
  initialStaff,
  initialMessages
}: AdminDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [activeTab, setActiveTab] = useState<'posts' | 'galleries' | 'staff' | 'messages'>('posts');

  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [galleries, setGalleries] = useState<Gallery[]>(initialGalleries);
  const [staff, setStaff] = useState<StaffMember[]>(initialStaff);
  const [messages, setMessages] = useState<ContactMessage[]>(initialMessages);

  // Form State Post
  const [newPost, setNewPost] = useState({
    title: '',
    category: 'berita',
    excerpt: '',
    content: '',
    cover_image_url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
    author: 'Admin Sekolah'
  });

  // Form State Gallery
  const [newGallery, setNewGallery] = useState({
    title: '',
    description: '',
    event_date: new Date().toISOString().split('T')[0],
    cover_image_url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800'
  });

  // Form State Staff
  const [newStaffMember, setNewStaffMember] = useState({
    name: '',
    role_or_subject: '',
    nip_or_id: '',
    category: 'guru',
    photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500'
  });

  const [loading, setLoading] = useState(false);
  const [actionSuccess, setActionSuccess] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin123' || password === 'smpn6purwokerto') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Kata sandi salah. Gunakan default: admin123');
    }
  };

  const handleAddPost = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setActionSuccess('');
    try {
      const res = await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost)
      });
      const data = await res.json();
      if (data.success) {
        setPosts([data.post, ...posts]);
        setNewPost({
          title: '',
          category: 'berita',
          excerpt: '',
          content: '',
          cover_image_url: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
          author: 'Admin Sekolah'
        });
        setActionSuccess('Berita/Pengumuman berhasil diterbitkan!');
      }
    } catch {
      alert('Gagal menambah artikel');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Hapus publikasi ini?')) return;
    try {
      await fetch(`/api/admin/posts?id=${id}`, { method: 'DELETE' });
      setPosts(posts.filter(p => p.id !== id));
    } catch {
      alert('Gagal menghapus');
    }
  };

  const handleAddGallery = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setActionSuccess('');
    try {
      const res = await fetch('/api/admin/galleries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGallery)
      });
      const data = await res.json();
      if (data.success) {
        setGalleries([data.gallery, ...galleries]);
        setNewGallery({
          title: '',
          description: '',
          event_date: new Date().toISOString().split('T')[0],
          cover_image_url: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800'
        });
        setActionSuccess('Album foto kegiatan berhasil ditambahkan!');
      }
    } catch {
      alert('Gagal menambah album foto');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteGallery = async (id: string) => {
    if (!confirm('Hapus album kegiatan ini?')) return;
    try {
      await fetch(`/api/admin/galleries?id=${id}`, { method: 'DELETE' });
      setGalleries(galleries.filter(g => g.id !== id));
    } catch {
      alert('Gagal menghapus galeri');
    }
  };

  const handleAddStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setActionSuccess('');
    try {
      const res = await fetch('/api/admin/staff', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStaffMember)
      });
      const data = await res.json();
      if (data.success) {
        setStaff([...staff, data.staff]);
        setNewStaffMember({
          name: '',
          role_or_subject: '',
          nip_or_id: '',
          category: 'guru',
          photo_url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500'
        });
        setActionSuccess('Data guru/staf berhasil ditambahkan!');
      }
    } catch {
      alert('Gagal menambah data staf');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteStaff = async (id: string) => {
    if (!confirm('Hapus anggota staf/guru ini?')) return;
    try {
      await fetch(`/api/admin/staff?id=${id}`, { method: 'DELETE' });
      setStaff(staff.filter(s => s.id !== id));
    } catch {
      alert('Gagal menghapus');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-teal-900/40">
          <div className="text-center mb-6">
            <div className="relative w-16 h-16 mx-auto mb-3">
              <Image
                src="/images/logo-smpn4-purwokerto.png"
                alt="Logo SMPN 4 Purwokerto"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Panel Kelola SMPN 4 Purwokerto</h1>
            <p className="text-xs text-gray-500 mt-1">Masuk untuk mengelola publikasi, galeri, dan data guru Spempa</p>
          </div>

          {authError && (
            <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs text-center font-medium">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Kata Sandi Admin
              </label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan kata sandi..."
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600 pr-10"
                />
                <Lock className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2" />
              </div>
              <p className="text-[11px] text-gray-400 mt-1">Gunakan: <code>admin123</code></p>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow transition"
            >
              Masuk Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      {/* Sidebar Admin */}
      <aside className="w-full md:w-64 bg-blue-950 text-white flex-shrink-0 flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-3 pb-6 border-b border-blue-900">
            <div className="relative w-11 h-11 flex-shrink-0 drop-shadow-sm">
              <Image
                src="/images/logo-smpn4-purwokerto.png"
                alt="Logo Spempa"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h2 className="text-sm font-bold leading-tight">SMPN 4 PURWOKERTO</h2>
              <span className="text-[11px] text-blue-300 font-medium">Admin Control Panel</span>
            </div>
          </div>

          <nav className="mt-6 space-y-1">
            <button
              onClick={() => setActiveTab('posts')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === 'posts' ? 'bg-blue-800 text-white shadow' : 'text-blue-200 hover:bg-blue-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FileText className="w-4 h-4" />
                <span>Berita & Pengumuman</span>
              </div>
              <span className="bg-blue-900 px-2 py-0.5 rounded text-[10px]">{posts.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('galleries')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === 'galleries' ? 'bg-blue-800 text-white shadow' : 'text-blue-200 hover:bg-blue-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <ImageIcon className="w-4 h-4" />
                <span>Galeri Foto</span>
              </div>
              <span className="bg-blue-900 px-2 py-0.5 rounded text-[10px]">{galleries.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('staff')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === 'staff' ? 'bg-blue-800 text-white shadow' : 'text-blue-200 hover:bg-blue-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4" />
                <span>Data Guru & Staf</span>
              </div>
              <span className="bg-blue-900 px-2 py-0.5 rounded text-[10px]">{staff.length}</span>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === 'messages' ? 'bg-blue-800 text-white shadow' : 'text-blue-200 hover:bg-blue-900'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4" />
                <span>Kotak Pesan Kontak</span>
              </div>
              <span className="bg-blue-900 px-2 py-0.5 rounded text-[10px]">{messages.length}</span>
            </button>
          </nav>
        </div>

        <div className="pt-6 border-t border-blue-900 space-y-2">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs text-blue-300 hover:text-white transition py-1"
          >
            <ExternalLink className="w-4 h-4" />
            <span>Lihat Website Publik</span>
          </a>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="flex items-center gap-2 text-xs text-rose-300 hover:text-rose-100 transition py-1"
          >
            <LogOut className="w-4 h-4" />
            <span>Keluar Akun Admin</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto">
        {actionSuccess && (
          <div className="mb-6 p-4 rounded-2xl bg-teal-50 border border-teal-200 flex items-center gap-2 text-teal-800 text-sm">
            <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
            <span>{actionSuccess}</span>
          </div>
        )}

        {/* TAB 1: POSTS CRUD */}
        {activeTab === 'posts' && (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 font-serif">Kelola Berita & Pengumuman</h1>
                <p className="text-xs text-gray-500">Buat artikel berita kegiatan, prestasi siswa, atau surat pengumuman</p>
              </div>
            </div>

            {/* Formulir Tambah Post */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-teal-700" />
                Publikasikan Artikel Baru
              </h3>
              <form onSubmit={handleAddPost} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Judul Artikel *</label>
                    <input
                      type="text"
                      required
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      placeholder="Contoh: Tim Bola Basket SMPN 6 Juara 1"
                      className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Kategori *</label>
                    <select
                      value={newPost.category}
                      onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
                      className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                      <option value="berita">Berita</option>
                      <option value="pengumuman">Pengumuman</option>
                      <option value="prestasi">Prestasi</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Ringkasan / Excerpt *</label>
                  <input
                    type="text"
                    required
                    value={newPost.excerpt}
                    onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
                    placeholder="Deskripsi singkat yang tampil pada kartu artikel..."
                    className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">URL Gambar Sampul</label>
                  <input
                    type="text"
                    value={newPost.cover_image_url}
                    onChange={(e) => setNewPost({ ...newPost, cover_image_url: e.target.value })}
                    className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Isi Konten Lengkap</label>
                  <textarea
                    rows={4}
                    value={newPost.content}
                    onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                    placeholder="Tuliskan isi artikel lengkap..."
                    className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow transition"
                >
                  {loading ? 'Menyimpan...' : 'Terbitkan Artikel Sekarang'}
                </button>
              </form>
            </div>

            {/* List Postingan Terbit */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
              <div className="p-4 bg-slate-50 border-b border-gray-200 font-bold text-xs text-gray-700 uppercase tracking-wider">
                Daftar Seluruh Artikel ({posts.length})
              </div>
              <div className="divide-y divide-gray-100">
                {posts.map(post => (
                  <div key={post.id} className="p-4 sm:p-5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                        <Image
                          src={post.cover_image_url}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                          post.category === 'prestasi' ? 'bg-amber-100 text-amber-800' : post.category === 'pengumuman' ? 'bg-rose-100 text-rose-800' : 'bg-teal-100 text-teal-800'
                        }`}>
                          {post.category}
                        </span>
                        <h4 className="text-sm font-bold text-gray-900 truncate mt-1">{post.title}</h4>
                        <p className="text-xs text-gray-400 mt-0.5">Penulis: {post.author || 'Admin'}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeletePost(post.id)}
                      className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg transition"
                      title="Hapus"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: GALLERIES */}
        {activeTab === 'galleries' && (
          <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900 font-serif">Kelola Galeri Foto Kegiatan</h1>

            {/* Form Tambah Album */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-teal-700" />
                Tambah Album Dokumentasi Baru
              </h3>
              <form onSubmit={handleAddGallery} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Nama Album Kegiatan *</label>
                    <input
                      type="text"
                      required
                      value={newGallery.title}
                      onChange={(e) => setNewGallery({ ...newGallery, title: e.target.value })}
                      placeholder="Contoh: Upacara Hardiknas 2026"
                      className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Tanggal Acara</label>
                    <input
                      type="date"
                      value={newGallery.event_date}
                      onChange={(e) => setNewGallery({ ...newGallery, event_date: e.target.value })}
                      className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Deskripsi Album</label>
                  <input
                    type="text"
                    value={newGallery.description}
                    onChange={(e) => setNewGallery({ ...newGallery, description: e.target.value })}
                    placeholder="Keterangan singkat mengenai kegiatan..."
                    className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">URL Foto Sampul</label>
                  <input
                    type="text"
                    value={newGallery.cover_image_url}
                    onChange={(e) => setNewGallery({ ...newGallery, cover_image_url: e.target.value })}
                    className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow transition"
                >
                  {loading ? 'Menyimpan...' : 'Simpan Album'}
                </button>
              </form>
            </div>

            {/* List Album */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleries.map(g => (
                <div key={g.id} className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="relative h-40 w-full bg-slate-100">
                      <Image
                        src={g.cover_image_url}
                        alt={g.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold text-gray-900 text-sm">{g.title}</h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{g.description}</p>
                      <p className="text-[11px] text-teal-700 font-semibold mt-2">{g.event_date}</p>
                    </div>
                  </div>
                  <div className="p-3 border-t border-gray-100 flex justify-end">
                    <button
                      onClick={() => handleDeleteGallery(g.id)}
                      className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg text-xs flex items-center gap-1 font-semibold"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Hapus
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: STAFF */}
        {activeTab === 'staff' && (
          <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-900 font-serif">Kelola Data Guru & Tenaga Kependidikan</h1>

            {/* Form Tambah Staff */}
            <div className="bg-white p-6 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-teal-700" />
                Tambah Profil Guru / Staf
              </h3>
              <form onSubmit={handleAddStaff} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Nama Lengkap & Gelar *</label>
                    <input
                      type="text"
                      required
                      value={newStaffMember.name}
                      onChange={(e) => setNewStaffMember({ ...newStaffMember, name: e.target.value })}
                      placeholder="Contoh: Dra. Sri Wahyuni"
                      className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Jabatan / Guru Mapel *</label>
                    <input
                      type="text"
                      required
                      value={newStaffMember.role_or_subject}
                      onChange={(e) => setNewStaffMember({ ...newStaffMember, role_or_subject: e.target.value })}
                      placeholder="Contoh: Guru Bahasa Jawa"
                      className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">NIP / ID Pendidik</label>
                    <input
                      type="text"
                      value={newStaffMember.nip_or_id}
                      onChange={(e) => setNewStaffMember({ ...newStaffMember, nip_or_id: e.target.value })}
                      placeholder="Contoh: 19800101 200501 1 001"
                      className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Kategori Bagian</label>
                    <select
                      value={newStaffMember.category}
                      onChange={(e) => setNewStaffMember({ ...newStaffMember, category: e.target.value })}
                      className="w-full px-4 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
                    >
                      <option value="guru">Guru Mata Pelajaran</option>
                      <option value="pimpinan">Pimpinan Sekolah</option>
                      <option value="staf">Tenaga Kependidikan / TU</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow transition"
                >
                  {loading ? 'Menyimpan...' : 'Simpan Data Guru/Staf'}
                </button>
              </form>
            </div>

            {/* List Staff */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {staff.map(s => (
                <div key={s.id} className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-slate-100">
                      <Image
                        src={s.photo_url}
                        alt={s.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 leading-tight">{s.name}</h4>
                      <p className="text-[11px] text-teal-700 font-semibold mt-0.5">{s.role_or_subject}</p>
                      <p className="text-[10px] text-gray-400">NIP: {s.nip_or_id}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDeleteStaff(s.id)}
                    className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition"
                    title="Hapus"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: MESSAGES */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-gray-900 font-serif">Kotak Masuk Pesan Publik</h1>
            <p className="text-xs text-gray-500">Pesan dari wali murid, calon siswa, atau masyarakat yang dikirim lewat formulir kontak</p>

            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm">
              {messages.length === 0 ? (
                <div className="p-8 text-center text-gray-500 text-sm">
                  Belum ada pesan masuk.
                </div>
              ) : (
                <div className="divide-y divide-gray-100">
                  {messages.map(msg => (
                    <div key={msg.id} className="p-5 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <span className="font-bold text-gray-900 text-sm">{msg.sender_name}</span>
                          <span className="text-xs text-gray-400 ml-2">({msg.sender_email_or_phone})</span>
                        </div>
                        <span className="text-[11px] text-gray-400">
                          {new Date(msg.created_at).toLocaleString('id-ID')}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-teal-800">Perihal: {msg.subject}</p>
                      <p className="text-sm text-gray-700 bg-slate-50 p-3 rounded-xl border border-gray-100">
                        {msg.message}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
