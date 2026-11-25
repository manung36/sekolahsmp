import { NextResponse } from 'next/server';
import { getDb, saveDb, ContactMessage } from '@/lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, emailOrPhone, subject, message } = body;

    if (!name || !emailOrPhone || !subject || !message) {
      return NextResponse.json({ error: 'Seluruh formulir wajib diisi.' }, { status: 400 });
    }

    const db = getDb();
    const newMessage: ContactMessage = {
      id: `msg-${Date.now()}`,
      sender_name: name,
      sender_email_or_phone: emailOrPhone,
      subject,
      message,
      is_read: false,
      created_at: new Date().toISOString()
    };

    db.contact_messages.unshift(newMessage);
    saveDb(db);

    return NextResponse.json({ success: true, message: 'Pesan berhasil disimpan.' });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
