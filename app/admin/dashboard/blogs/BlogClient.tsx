"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { CreatePostModal } from "@/features/blog/components/BlogModal";
import DeleteModal from "@/components/ui/DeleteModal";

export default function BlogClient() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Delete State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/blog");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        toast.error("Failed to load blog posts");
      }
    } catch {
      toast.error("An error occurred while fetching posts");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async () => {
    if (!deletingId) return;
    try {
      setIsDeleting(true);
      const res = await fetch(`/api/blog/${deletingId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete post");
      }

      toast.success("Post deleted successfully");
      fetchBlogs();
    } catch (error) {
      toast.error("Failed to delete post");
    } finally {
      setIsDeleting(false);
      setIsDeleteModalOpen(false);
      setDeletingId(null);
    }
  };

  return (
    <div className="space-y-6">
      <CreatePostModal
        open={isModalOpen}
        onOpenChange={(open: boolean) => {
          setIsModalOpen(open);
          if (!open) fetchBlogs(); // Refresh on close just in case a new post was saved
        }}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setDeletingId(null);
        }}
        onConfirm={handleDelete}
        title="Delete Post"
        subtitle="Are you sure you want to delete this blog post? This action cannot be undone."
        isLoading={isDeleting}
      />

      <div className="flex justify-end">
        <button
          className="cursor-pointer bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm hover:opacity-90 transition shadow-sm font-medium"
          onClick={() => setIsModalOpen(true)}
        >
          + New Post
        </button>
      </div>

      {/* Table */}
      <div className="rounded-2xl border bg-white shadow-sm overflow-x-auto ">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Category</th>
              <th className="px-4 py-3 font-medium">Updated</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  Loading posts...
                </td>
              </tr>
            ) : posts.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-6 text-gray-500">
                  No posts found. Create one!
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr
                  key={post.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-4 py-3 font-medium">{post.title}</td>

                  <td className="px-4 py-3">
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        post.status === "PUBLISHED"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {post.status === "PUBLISHED" ? "Published" : "Draft"}
                    </span>
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {post.category?.name || "Unknown"}
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(post.updatedAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>

                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <Link
                        href={`/admin/dashboard/blogs/${post.id}`}
                        className="cursor-pointer text-sm px-3 py-1 rounded-lg border text-blue-600 hover:bg-blue-200 transition"
                      >
                        Preview
                      </Link>
                      <button
                        onClick={() => {
                          setDeletingId(post.id);
                          setIsDeleteModalOpen(true);
                        }}
                        className="cursor-pointer text-sm px-3 py-1 rounded-lg border text-red-600 hover:bg-red-200 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination (optional) */}
      {!isLoading && posts.length > 0 && (
        <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
          <p>
            Showing 1–{posts.length} of {posts.length} posts
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded-lg border hover:bg-gray-50">
              Prev
            </button>
            <button className="px-3 py-1 rounded-lg border hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
