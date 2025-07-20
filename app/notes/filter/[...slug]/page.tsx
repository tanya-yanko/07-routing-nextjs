import NotesClient from './Notes.client';
import { fetchNotes } from '@/lib/api';

interface NotesProps {
  params: { slug: string[] };
}

export default async function Notes({ params }: NotesProps) {
  const { slug } = params;
  const tag = slug[0] === 'all' ? undefined : slug[0];
  const data = await fetchNotes('', 1, tag);
  return (
    <NotesClient
      initialData={data}
      tag={tag}
    />
  );
}