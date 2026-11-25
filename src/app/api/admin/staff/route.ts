import { NextResponse } from 'next/server';
import { getDb, saveDb, StaffMember } from '@/lib/db';

export async function GET() {
  const db = getDb();
  return NextResponse.json(db.staff_members);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, role_or_subject, nip_or_id, photo_url, category } = body;

    if (!name || !role_or_subject) {
      return NextResponse.json({ error: 'Nama dan peran wajib diisi' }, { status: 400 });
    }

    const db = getDb();
    const newStaff: StaffMember = {
      id: `staff-${Date.now()}`,
      name,
      role_or_subject,
      nip_or_id: nip_or_id || '-',
      photo_url: photo_url || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=500',
      is_active: true,
      sort_order: db.staff_members.length + 1,
      category: category || 'guru'
    };

    db.staff_members.push(newStaff);
    saveDb(db);

    return NextResponse.json({ success: true, staff: newStaff });
  } catch {
    return NextResponse.json({ error: 'Gagal menambah data staf' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) return NextResponse.json({ error: 'ID tidak ada' }, { status: 400 });

    const db = getDb();
    db.staff_members = db.staff_members.filter((s: StaffMember) => s.id !== id);
    saveDb(db);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Gagal menghapus data staf' }, { status: 500 });
  }
}
