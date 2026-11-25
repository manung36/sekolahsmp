import { NextResponse } from 'next/server';
import { getDb, saveDb, Post } from '@/lib/db';

export async function GET() {
  const db = getDb();
  return NextResponse.json(db.posts);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, category, excerpt, content, cover_image_url, is_published, author } = body;

    if (!title || !excerpt) {
      return NextResponse.json({ error: 'Judul dan ringkasan wajib diisi.' }, { status: 400 });
    }

    const db = getDb();
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '') + `-${Math.floor(Math.random() * 1000)}`;

    const newPost: Post = {
      id: `post-${Date.now()}`,
      title,
      slug,
      category: category || 'berita',
      excerpt,
      content: content || `<p>${excerpt}</p>`,
      cover_image_url: cover_image_url || 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800',
      is_published: is_published ?? true,
      published_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      author: author || 'Admin Humas'
    };

    db.posts.unshift(newPost);
    saveDb(db);

    return NextResponse.json({ success: true, post: newPost });
  } catch {
    return NextResponse.json({ error: 'Gagal membuat postingan baru' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID tidak diberikan' }, { status: 400 });

    const db = getDb();
    db.posts = db.posts.filter((p: Post) => p.id !== id);
    saveDb(db);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Gagal menghapus postingan' }, { status: 500 });
  }
}
