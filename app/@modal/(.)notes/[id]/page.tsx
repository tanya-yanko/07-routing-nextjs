import { fetchNoteById } from "@/lib/api";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import PreviewClient from "./NotePreview.client";

type PreviewProps = {
  params: Promise<{ id: string }>;
};

interface LayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

export default async function Preview({ params }: PreviewProps) {
  const { id } = await params;

  const queryClient = new QueryClient();
  queryClient.prefetchQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(Number(id)),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PreviewClient />
    </HydrationBoundary>
  );
}