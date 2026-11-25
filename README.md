# Website Resmi SMP Negeri 6 Purwokerto

Aplikasi web portal resmi dan sistem informasi manajemen sekolah untuk **SMP Negeri 6 Purwokerto**, Banyumas, Jawa Tengah. Dibuat sesuai dengan spesifikasi pada dokumen [prd.md](file:///d:/backup%20c/haruna/smpn6purwokerto/prd.md).

---

## 🏫 Identitas & Informasi Sekolah
- **Nama Sekolah**: SMP Negeri 6 Purwokerto
- **Tanggal Berdiri**: 1 April 1979 (Dies Natalis ke-47)
- **Alamat**: Karangkobar, Sokanegara, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah 53115
- **Telepon**: (0281) 637648
- **Jam Operasional**: Senin – Sabtu (09.00 – 17.00 WIB), Minggu Tutup
- **Palet Warna Identitas**: Hijau Kebiruan / Tosca (`#0d9488`, `#0f766e`), Oranye Emas (`#f59e0b`), dan Hitam Abu Gelap (`#0f172a`).

---

## 🚀 Fitur Utama

### 1. Halaman Publik
- **Beranda (`/`)**:
  - Hero section dengan logo resmi, visi, ringkasan sejarah berdiri (1979), dan tombol aksi cepat.
  - Sambutan Kepala Sekolah (Sri Rejeki, S.Pd., M.Pd.).
  - Sorotan Berita, Prestasi & Pengumuman terbaru.
  - Preview ekstrakurikuler unggulan (Pramuka, PMR, Seni Kenthongan Banyumasan, OSN, Basket/Futsal, Paskibra).
  - Cuplikan galeri kegiatan sekolah.
  - Banner informasi dan panduan SPMB / PPDB.
- **Profil Sekolah (`/profil`)**:
  - Sejarah lengkap berdirinya sekolah pada 1 April 1979 dan filosofi kearifan lokal Banyumasan.
  - Visi & Misi sekolah.
  - Struktur Pimpinan Sekolah, dewan guru pengajar, dan staf tata usaha.
  - Direktori program ekstrakurikuler lengkap beserta jadwal latihan dan nama pembina.
- **Berita & Pengumuman (`/berita` dan `/berita/[slug]`)**:
  - Filter kategori dinamis (Semua, Berita, Pengumuman, Prestasi).
  - Fitur pencarian instan berdasarkan judul atau isi ringkasan.
  - Halaman baca detail artikel dengan tanggal publikasi, penulis, dan rekomendasi artikel terkait.
- **Galeri Foto (`/galeri`)**:
  - Album kegiatan sekolah (Pramuka di Baturraden, Gelar Karya P5 & Kenthongan, Laboratorium Komputer).
- **Penerimaan Siswa Baru / SPMB (`/spmb`)**:
  - Rincian 4 jalur PPDB: Zonasi (50%), Prestasi (25%), Afirmasi (20%), Perpindahan Tugas Orang Tua (5%).
  - Jadwal pelayanan pendaftaran dan verifikasi berkas.
  - Daftar dokumen persyaratan pendaftaran.
  - Panduan alur 4 langkah pendaftaran dan tautan ke portal PPDB daring Banyumas.
- **Kontak & Lokasi (`/kontak`)**:
  - Alamat lengkap, nomor telepon resmi, email, dan jam pelayanan.
  - Peta Google Maps interaktif.
  - Formulir pengiriman pesan/pengaduan masyarakat yang terhubung ke database.

### 2. Panel Admin Terpadu (`/admin`)
- **Autentikasi Aman**: Login berbasis kata sandi admin (`admin123`).
- **Kelola Berita & Pengumuman**: Formulir penambahan artikel, pengaturan kategori, upload sampul, dan tombol hapus publikasi.
- **Kelola Galeri Foto**: Tambah album kegiatan baru lengkap dengan tanggal acara dan foto.
- **Kelola Data Guru & Staf**: Tambah nama, NIP, mapel/jabatan, dan foto pendidik.
- **Kotak Masuk Pesan**: Melihat seluruh pesan masuk dari pengunjung website.

---

## 🛠️ Tech Stack
- **Framework**: Next.js 16 (App Router, React 19, TypeScript)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Penyimpanan Data**: Database fleksibel di `src/lib/db.ts` dengan data JSON persisten di `data/db.json` (juga siap disambungkan ke Neon / Supabase PostgreSQL).

---

## 💻 Cara Menjalankan Proyek

### 1. Jalankan Mode Pengembangan (Dev Server)
```bash
npm run dev
```
Buka browser pada: `http://localhost:3000`

### 2. Membuka Panel Admin
Buka `http://localhost:3000/admin`
- **Kata Sandi Default**: `admin123`

### 3. Build Produksi
```bash
npm run build
npm start
```
