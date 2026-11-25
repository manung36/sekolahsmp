import { getDb } from '@/lib/db';
import BeritaClientPage from './BeritaClient';

export const revalidate = 0;

export default function BeritaPage() {
  const db = getDb();
  const publishedPosts = db.posts.filter(p => p.is_published);

  return <BeritaClientPage initialPosts={publishedPosts} />;
}
