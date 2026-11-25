Product Requirements Document (PRD): Website Resmi SMP Negeri 6 Purwokerto
1. Ringkasan Produk & Tujuan
Website resmi SMP Negeri 6 Purwokerto dirancang sebagai portal informasi terpadu, pusat publikasi kegiatan akademik/non-akademik, layanan transparansi informasi publik, serta informasi penerimaan murid baru bagi siswa, orang tua/wali, guru, alumni, dan masyarakat umum.

Lokasi Sekolah: Karangkobar, Sokanegara, Kec. Purwokerto Tim., Kabupaten Banyumas, Jawa Tengah 53115

Kontak: (0281) 637648

Jam Operasional Layanan: Senin–Sabtu (09.00–17.00), Minggu tutup

2. Identitas Visual & Acuan Logo Sekolah
Berdasarkan penelusuran informasi resmi mengenai identitas visual SMP Negeri 6 Purwokerto, elemen logo dan filosofi warna yang menjadi acuan desain meliputi:

Simbol & Makna Logo:

Bentuk lingkaran menjulang ke atas menyimbolkan matahari, bulan, atau bumi sebagai kesiapan menghadapi perkembangan zaman dan era digital.

Konstruksi bidang bersiku dengan arah vertikal dan horizontal melambangkan keseimbangan karakter hubungan kepada Tuhan Yang Maha Esa (Habluminallah) dan sesama manusia (Habluminannas).

Tulisan SMP Negeri 6 PURWOKERTO di bagian bawah logo menegaskan peran dan tanggung jawab lembaga pendidikan.

Palet Warna Acuan (dari Filosofi Logo):

Hijau Kebiruan / Tosca: Warna aksen utama/sekunder yang mencerminkan kesejukan, keselarasan, kerja sama, dan kemanfaatan bagi sesama.

Oranye Kekuningan: Warna aksen pendukung untuk elemen sorotan (highlight), tombol aksi, atau lencana informasi penting.

Hitam / Abu Gelap: Digunakan untuk tipografi utama dan ketegasan struktur antarmuka.

Aset Logo di Google: Karena tautan file gambar mentah (.png/.svg) tidak dapat disematkan langsung sebagai tautan gambar eksternal dari hasil pencarian, tim pengembang perlu mengunduh langsung aset logo resmi SMP Negeri 6 Purwokerto dari hasil pencarian gambar Google / arsip resmi sekolah, menyimpannya ke direktori public/images/logo-smpn6-purwokerto.png (atau .svg), serta memastikan rasio aspek dan transparansi latar belakang terjaga.

3. Target Pengguna (User Personas)
Calon Murid & Orang Tua/Wali: Mencari informasi profil sekolah, jalur/jadwal pendaftaran peserta didik baru, fasilitas, ekstrakurikuler, dan kontak resmi.

Siswa Aktif: Mengakses pengumuman sekolah, jadwal kegiatan, berita prestasi, serta informasi ekstrakurikuler.

Guru, Tenaga Kependidikan & Admin Sekolah: Mengelola berita, pengumuman, galeri kegiatan, data guru/staf, dan dokumen publik secara terstruktur.

Masyarakat Umum & Stakeholders: Memverifikasi profil sekolah, lokasi, jam operasional, dan layanan informasi publik.

4. Tech Stack & Arsitektur Teknis
Framework Frontend & Backend: Next.js (App Router, TypeScript)

Styling: Tailwind CSS

Komponen UI: shadcn/ui (diaksesibilitas baik, konsisten, mendukung light mode dan dark mode opsional)

Database: Supabase (PostgreSQL + Auth + Storage) atau Neon (Serverless PostgreSQL) — pilih salah satu sesuai kebutuhan infrastruktur tim; Supabase cocok bila ingin Auth & Storage terintegrasi dalam satu ekosistem, sedangkan Neon unggul untuk PostgreSQL serverless murni dengan ORM seperti Drizzle/Prisma.

Deployment & Hosting: Vercel (CI/CD otomatis dari Git, Edge/Serverless Functions, Environment Variables terkelola)

5. Fitur Utama (Core Features) & Kebutuhan Fungsional
A. Halaman Publik (Public Pages)
Beranda (Landing Page):

Hero section dengan identitas SMP Negeri 6 Purwokerto, logo sekolah, ringkasan visi/semangat sekolah, dan tombol navigasi cepat (Profil Sekolah, Berita & Pengumuman, Kontak).

Ringkasan statistik/informasi kunci (misalnya jumlah program/ekstrakurikuler, berita terbaru, jadwal layanan).

Sorotan berita/pengumuman terbaru dan galeri kegiatan pilihan.

Profil Sekolah:

Sejarah singkat (termasuk catatan berdirinya pada 1 April 1979 dan perjalanan sekolah), visi & misi, struktur organisasi, serta profil kepala sekolah dan tenaga pendidik.

Informasi sarana & prasarana serta kegiatan ekstrakurikuler.

Berita & Pengumuman:

Daftar artikel berita kegiatan sekolah, prestasi siswa, dan pengumuman resmi dengan fitur pencarian, filter kategori, dan halaman detail artikel.

Galeri Foto & Kegiatan:

Koleksi dokumentasi kegiatan akademik, peringatan hari besar, dan ekstrakurikuler yang dikelompokkan berdasarkan album/kegiatan.

Informasi SPMB / Pendaftaran:

Halaman informasi alur, jadwal, persyaratan, dan tautan/pengumuman resmi penerimaan murid baru.

Kontak & Lokasi:

Alamat lengkap di Karangkobar, Sokanegara, Kec. Purwokerto Tim., Kabupaten Banyumas, nomor telepon (0281) 637648, jam operasional (Senin–Sabtu 09.00–17.00, Minggu tutup), peta lokasi interaktif, dan formulir pertanyaan/pesan masuk.

B. Panel Admin (Admin Dashboard)
Autentikasi Aman: Login khusus admin/operator sekolah (menggunakan Supabase Auth atau sesi terkelola yang aman).

Manajemen Berita & Pengumuman (CRUD): Tambah, ubah, hapus, publikasikan/jadwalkan artikel, serta unggah gambar sampul.

Manajemen Galeri: Unggah dan kelola album foto kegiatan.

Manajemen Data Profil & Guru/Staf: Pembaruan visi/misi, daftar guru/staf, dan ekstrakurikuler.

Kotak Masuk Pesan: Melihat dan menandai status pesan yang dikirim melalui formulir kontak.

6. Rancangan Skema Data Awal (PostgreSQL — Supabase / Neon)
posts: id, title, slug, category (berita | pengumuman), excerpt, content, cover_image_url, is_published, published_at, created_at, updated_at

galleries: id, title, description, event_date, created_at

gallery_items: id, gallery_id, image_url, caption, sort_order

staff_members: id, name, role_or_subject, nip_or_id, photo_url, is_active, sort_order

extracurriculars: id, name, category, schedule, description, image_url

contact_messages: id, sender_name, sender_email_or_phone, subject, message, is_read, created_at

school_settings: id, key, value (untuk konfigurasi profil dinamis, pengumuman banner, atau info SPMB)

7. Kebutuhan Non-Fungsional
Responsivitas (Mobile-First): Tampilan optimal di ponsel pintar, tablet, dan desktop menggunakan Tailwind CSS dan komponen shadcn/ui.

Performa & SEO: Menggunakan next/image untuk optimasi gambar, metadata SEO per halaman (generateMetadata), sitemap.xml, dan robots.txt.

Keamanan: Validasi input sisi klien dan server (misalnya menggunakan Zod), proteksi rute /admin, dan pengaturan Row Level Security (RLS) jika memakai Supabase.

Aksesibilitas: Kontras warna teks yang memadai, label formulir yang jelas, dan navigasi keyboard-friendly.

8. Tahapan Pengembangan (Roadmap)
Fase 1 – Inisiasi & Aset: Pengunduhan & kurasi logo resmi SMP Negeri 6 Purwokerto, inisialisasi Next.js + Tailwind CSS + shadcn/ui, serta setup database di Supabase atau Neon.

Fase 2 – Halaman Publik Inti: Pembuatan layout utama, Beranda, Profil Sekolah, Berita & Pengumuman, Galeri, dan Kontak.

Fase 3 – Panel Admin & Integrasi Data: Implementasi login admin, CRUD konten, unggah gambar, dan penyimpanan pesan kontak.

Fase 4 – Pengujian & Deployment: Uji responsivitas, SEO, dan keamanan, lalu deploy ke Vercel dengan konfigurasi environment variables produksi.

9. Kriteria Keberhasilan (Acceptance Criteria)
Seluruh halaman publik dapat diakses tanpa error dan tampil rapi di layar mobile maupun desktop.

Logo SMP Negeri 6 Purwokerto tampil jelas dan proporsional pada header serta footer.

Admin dapat membuat, mengedit, dan menghapus berita/pengumuman serta galeri yang langsung terupdate di database Supabase/Neon dan tampil di situs publik.

Formulir kontak tersimpan ke database dan informasi alamat serta jam operasional sekolah sesuai dengan data resmi.