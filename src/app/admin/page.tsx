import { getDb } from '@/lib/db';
import AdminDashboardClient from './AdminDashboardClient';

export const revalidate = 0;

export default function AdminPage() {
  const db = getDb();

  return (
    <AdminDashboardClient
      initialPosts={db.posts}
      initialGalleries={db.galleries}
      initialStaff={db.staff_members}
      initialMessages={db.contact_messages}
    />
  );
}
