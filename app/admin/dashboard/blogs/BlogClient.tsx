"use client";

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { toast } from "sonner";
import DeleteModal from "@/components/ui/DeleteModal";
import {
  Search,
  Eye,
  Trash2,
  Plus,
  Calendar,
  Tag,
  FileText,
  ChevronLeft,
  ChevronRight,
  Edit,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function BlogClient() {
  const router = useRouter();
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Search and Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<
    "ALL" | "PUBLISHED" | "DRAFT"
  >("ALL");

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

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category?.name?.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus =
        statusFilter === "ALL" || post.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [posts, searchQuery, statusFilter]);

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
    <div className="max-w-[1400px] mx-auto space-y-8">
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

      {/* Header & Actions Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Content Library
          </h1>
          <p className="text-gray-500">
            Manage and publish your blog articles.
          </p>
        </div>

        <Link
          href="/admin/dashboard/blogs/create"
          className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 active:scale-95 group shrink-0"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          Create Article
        </Link>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center bg-white p-4 rounded-[2rem] border border-gray-100 shadow-sm">
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title or category..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all outline-none text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
          {(["ALL", "PUBLISHED", "DRAFT"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shrink-0 ${
                statusFilter === status
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-gray-50 text-gray-500 hover:bg-gray-100"
              }`}
            >
              {status.charAt(0) + status.slice(1).toLowerCase()}
              {statusFilter === status && (
                <span className="ml-2 text-[10px] opacity-70">
                  {filteredPosts.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content Table */}
      <div className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50 overflow-hidden">
        <div className="overflow-x-auto overflow-y-hidden">
          <table className="w-full text-sm border-collapse table-fixed min-w-[800px]">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-6 py-5 text-left font-bold text-gray-600 border-b border-gray-100 w-[40%]">
                  Article
                </th>
                <th className="px-6 py-5 text-left font-bold text-gray-600 border-b border-gray-100 w-[15%]">
                  Status
                </th>
                <th className="px-6 py-5 text-left font-bold text-gray-600 border-b border-gray-100 w-[15%] hidden md:table-cell">
                  Category
                </th>
                <th className="px-6 py-5 text-left font-bold text-gray-600 border-b border-gray-100 w-[15%] hidden lg:table-cell">
                  Last Updated
                </th>
                <th className="px-6 py-5 text-right font-bold text-gray-600 border-b border-gray-100 w-[15%]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              <AnimatePresence mode="wait">
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <motion.tr
                      key={`skeleton-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <td colSpan={5} className="px-6 py-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-xl animate-pulse" />
                          <div className="space-y-2 flex-1">
                            <div className="h-4 bg-gray-100 rounded-full w-1/3 animate-pulse" />
                            <div className="h-3 bg-gray-100 rounded-full w-1/4 animate-pulse" />
                          </div>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : filteredPosts.length === 0 ? (
                  <motion.tr
                    key="empty-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <td colSpan={5} className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="p-4 bg-gray-50 rounded-full">
                          <Search className="w-8 h-8 text-gray-300" />
                        </div>
                        <div>
                          <p className="text-gray-900 font-bold">
                            No posts found
                          </p>
                          <p className="text-gray-500 text-sm">
                            Try adjusting your search or filters
                          </p>
                        </div>
                      </div>
                    </td>
                  </motion.tr>
                ) : (
                  filteredPosts.map((post, idx) => (
                    <motion.tr
                      key={post.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="group hover:bg-gray-50/50 transition-colors h-[80px]"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-gray-100 shrink-0 border border-gray-100">
                            {post.image ? (
                              <img
                                src={post.image}
                                alt=""
                                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-300">
                                <FileText className="w-5 h-5" />
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                              {post.title}
                            </h4>
                            <p className="text-xs text-gray-500 truncate mt-0.5">
                              {post.subtitle}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            post.status === "PUBLISHED"
                              ? "bg-green-50 text-green-700 border border-green-100"
                              : "bg-amber-50 text-amber-700 border border-amber-100"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mr-2 ${
                              post.status === "PUBLISHED"
                                ? "bg-green-500"
                                : "bg-amber-500"
                            }`}
                          />
                          {post.status.toLowerCase()}
                        </span>
                      </td>

                      <td className="px-6 py-4 hidden md:table-cell">
                        <div className="flex items-center gap-2 text-gray-600 truncate">
                          <Tag className="w-3.5 h-3.5 opacity-40 shrink-0" />
                          <span className="font-medium truncate">
                            {post.category?.name || "Uncategorized"}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-4 hidden lg:table-cell">
                        <div className="flex items-center gap-2 text-gray-500 text-xs">
                          <Calendar className="w-3.5 h-3.5 opacity-40 shrink-0" />
                          {new Date(post.updatedAt).toLocaleDateString(
                            "en-GB",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            },
                          )}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <Link
                            href={`/admin/dashboard/blogs/${post.id}`}
                            title="Preview"
                            className="p-2.5 rounded-xl border border-gray-100 bg-white text-blue-600 hover:bg-blue-50 hover:border-blue-100 transition-all shadow-sm shrink-0"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <Link
                            href={`/admin/dashboard/blogs/${post.id}/edit`}
                            title="Edit"
                            className="p-2.5 rounded-xl border border-gray-100 bg-white text-amber-600 hover:bg-amber-50 hover:border-amber-100 transition-all shadow-sm shrink-0"
                          >
                            <Edit className="w-4 h-4" />
                          </Link>
                          <button
                            onClick={() => {
                              setDeletingId(post.id);
                              setIsDeleteModalOpen(true);
                            }}
                            title="Delete"
                            className="p-2.5 rounded-xl border border-gray-100 bg-white text-red-600 hover:bg-red-50 hover:border-red-100 transition-all shadow-sm shrink-0"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>

        {/* Improved Pagination / Footer */}
        {!isLoading && filteredPosts.length > 0 && (
          <div className="px-6 py-5 bg-gray-50/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium border-t border-gray-100">
            <p className="text-gray-500">
              Showing{" "}
              <span className="text-gray-900">{filteredPosts.length}</span> of{" "}
              <span className="text-gray-900">{posts.length}</span> total
              entries
            </p>
            <div className="flex gap-2">
              <button className="flex items-center gap-1 px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors">
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button className="flex items-center gap-1 px-4 py-2 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors">
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
