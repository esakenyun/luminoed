"use client";

import { useState } from "react";
import { Edit } from "lucide-react";
import { CreatePostModal } from "@/features/blog/components/BlogModal";
import { useRouter } from "next/navigation";

export function BlogPreviewActions({ post }: { post: any }) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => setIsEditModalOpen(true)}
        className="cursor-pointer flex items-center gap-2 px-4 py-2 bg-primary-blue text-white rounded-xl hover:bg-blue-800 transition-colors shadow-sm text-sm font-medium"
      >
        <Edit size={16} />
        Edit Post
      </button>

      <CreatePostModal
        open={isEditModalOpen}
        onOpenChange={(open) => {
          setIsEditModalOpen(open);
          if (!open) router.refresh();
        }}
        initialData={post}
      />
    </>
  );
}
