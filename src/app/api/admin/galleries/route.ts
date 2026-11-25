import { NextResponse } from 'next/server';
import { getDb, saveDb, Gallery } from '@/lib/db';

export async function GET() {
  const db = getDb();
  return NextResponse.json(db.galleries);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, description, event_date, cover_image_url, items } = body;

    if (!title) {
      return NextResponse.json({ error: 'Judul album wajib diisi.' }, { status: 400 });
    }

    const db = getDb();
    const newGallery: Gallery = {
      id: `gal-${Date.now()}`,
      title,
      description: description || '',
      event_date: event_date || new Date().toISOString().split('T')[0],
      cover_image_url: cover_image_url || 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800',
      created_at: new Date().toISOString(),
      items: items && items.length > 0 ? items : [
        {
          id: `gi-${Date.now()}`,
          image_url: cover_image_url || 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800',
          caption: title
        }
      ]
    };

    db.galleries.unshift(newGallery);
    saveDb(db);

    return NextResponse.json({ success: true, gallery: newGallery });
  } catch {
    return NextResponse.json({ error: 'Gagal menambah galeri' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID tidak ada' }, { status: 400 });

    const db = getDb();
    db.galleries = db.galleries.filter((g: Gallery) => g.id !== id);
    saveDb(db);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Gagal menghapus album' }, { status: 500 });
  }
}
