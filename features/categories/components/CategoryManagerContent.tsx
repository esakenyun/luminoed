"use client";

import { useState, useEffect, useMemo } from "react";
import CategoryModal, {
  CategoryFormData,
} from "@/features/categories/components/CategoryModal";
import DeleteModal from "@/components/ui/DeleteModal";
import { toast } from "sonner";
import {
  Pencil,
  Trash2,
  Plus,
  Search,
  Tags,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface Category {
  id: string;
  name: string;
  _count?: {
    blogs: number;
  };
}

export default function CategoryManagerContent() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Sub-modal states
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null,
  );

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<Category | null>(
    null,
  );

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const fetchCategories = async () => {
    setIsLoadingList(true);
    try {
      const res = await fetch("/api/category");
      if (res.ok) {
        const data = await res.json();
        setCategories(data);
      } else {
        toast.error("Failed to load categories");
      }
    } catch {
      toast.error("An error occurred while fetching categories");
    } finally {
      setIsLoadingList(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleOpenCategoryModal = (category?: Category) => {
    setSelectedCategory(category || null);
    setIsCategoryModalOpen(true);
  };

  const handleCloseCategoryModal = () => {
    setSelectedCategory(null);
    setIsCategoryModalOpen(false);
  };

  const handleSubmit = async (data: CategoryFormData) => {
    setIsSubmitLoading(true);
    try {
      const url = selectedCategory
        ? `/api/category/${selectedCategory.id}`
        : "/api/category";
      const method = selectedCategory ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success(
          selectedCategory
            ? "Category updated successfully"
            : "Category created successfully",
        );
        fetchCategories();
        handleCloseCategoryModal();
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to save category");
      }
    } catch {
      toast.error("An error occurred while saving the category");
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const handleOpenDeleteModal = (category: Category) => {
    setCategoryToDelete(category);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setCategoryToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteConfirm = async () => {
    if (!categoryToDelete) return;
    setIsDeleteLoading(true);
    try {
      const res = await fetch(`/api/category/${categoryToDelete.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("Category deleted successfully");
        fetchCategories();
        handleCloseDeleteModal();
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to delete category");
      }
    } catch {
      toast.error("An error occurred while deleting the category");
    } finally {
      setIsDeleteLoading(false);
    }
  };

  const filteredCategories = useMemo(() => {
    return categories.filter((cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [categories, searchQuery]);

  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const currentCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-extrabold text-gray-900 tracking-tight"
          >
            Content Category
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500"
          >
            Organize and structure your blog articles with categories.
          </motion.p>
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleOpenCategoryModal()}
          className="flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 active:scale-95 group shrink-0"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          New Category
        </motion.button>
      </div>

      {/* Redesigned Category Search: Integrated Table Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-[2.5rem] border border-gray-100 shadow-2xl shadow-gray-200/50 p-3"
      >
        <div className="flex flex-row items-center gap-3">
          <div className="relative flex-1 w-full group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-indigo-400 group-focus-within:text-indigo-600 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-14 pr-6 py-4 bg-indigo-50/30 border-2 border-transparent focus:border-indigo-100 focus:bg-white rounded-[2rem] outline-none transition-all text-sm font-semibold placeholder:text-indigo-300"
              placeholder="Explore categorized..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="px-6 py-4 bg-indigo-600 text-white rounded-[1.8rem] flex items-center gap-3 shadow-lg shadow-indigo-100 shrink-0">
            <Tags className="w-4 h-4 opacity-80" />
            <span className="text-xs font-bold uppercase tracking-widest">
              {filteredCategories.length} Result
              {filteredCategories.length !== 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </motion.div>

      {/* Content Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-100/50 overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse table-fixed min-w-[800px]">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-8 py-5 text-left font-bold text-gray-600 border-b border-gray-100 w-[50%]">
                  Category Details
                </th>
                <th className="px-8 py-5 text-center font-bold text-gray-600 border-b border-gray-100 w-[25%]">
                  Related Content
                </th>
                <th className="px-8 py-5 text-right font-bold text-gray-600 border-b border-gray-100 w-[25%]">
                  Management
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              <AnimatePresence>
                {isLoadingList ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <motion.tr
                      key={`skeleton-${i}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <td colSpan={3} className="px-8 py-8">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-2xl animate-pulse" />
                          <div className="space-y-2 flex-1">
                            <div className="h-4 bg-gray-100 rounded-full w-1/3 animate-pulse" />
                            <div className="h-3 bg-gray-100 rounded-full w-1/4 animate-pulse" />
                          </div>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : currentCategories.length === 0 ? (
                  <motion.tr
                    key="empty-state"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <td colSpan={3} className="px-8 py-20 text-center">
                      <div className="flex flex-col items-center gap-3">
                        <div className="p-4 bg-gray-50 rounded-full">
                          <Tags className="w-8 h-8 text-gray-300" />
                        </div>
                        <div>
                          <p className="text-gray-900 font-bold">
                            No categories found
                          </p>
                          <p className="text-gray-500 text-sm">
                            Try using a different search term
                          </p>
                        </div>
                      </div>
                    </td>
                  </motion.tr>
                ) : (
                  currentCategories.map((category) => (
                    <motion.tr
                      key={category.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="group hover:bg-gray-50/50 transition-colors h-[90px]"
                    >
                      <td className="px-8 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-100 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                            <span className="text-xl font-bold uppercase transition-transform">
                              {category.name.charAt(0)}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <h4 className="font-bold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                              {category.name}
                            </h4>
                            <p className="text-xs text-gray-400 font-medium">
                              {/* Identifier: {category.id} */}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-8 py-4 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 font-bold text-xs ring-1 ring-blue-100">
                          <FileText className="w-3.5 h-3.5" />
                          {category._count?.blogs || 0} Articles
                        </div>
                      </td>

                      <td className="px-8 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleOpenCategoryModal(category)}
                            className="p-3 rounded-xl border border-gray-100 bg-white text-indigo-600 hover:bg-indigo-50 hover:border-indigo-100 transition-all shadow-sm shrink-0 active:scale-90"
                            title="Edit Category"
                          >
                            <Pencil className="w-4.5 h-4.5" />
                          </button>
                          <button
                            onClick={() => handleOpenDeleteModal(category)}
                            className="p-3 rounded-xl border border-gray-100 bg-white text-red-600 hover:bg-red-50 hover:border-red-100 transition-all shadow-sm shrink-0 active:scale-90"
                            title="Delete Category"
                          >
                            <Trash2 className="w-4.5 h-4.5" />
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

        {/* Footer & Pagination */}
        {!isLoadingList && filteredCategories.length > 0 && (
          <div className="px-8 py-5 bg-gray-50/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium border-t border-gray-100">
            <p className="text-gray-500">
              Showing page <span className="text-gray-900">{currentPage}</span>{" "}
              of <span className="text-gray-900">{totalPages}</span>
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="flex items-center gap-1 px-5 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors shadow-sm active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </button>
              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="flex items-center gap-1 px-5 py-2.5 rounded-xl border border-gray-200 bg-white hover:bg-gray-50 disabled:opacity-50 transition-colors shadow-sm active:scale-95"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </motion.div>

      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={handleCloseCategoryModal}
        onSubmit={handleSubmit}
        initialData={selectedCategory}
        title={selectedCategory ? "Edit Category" : "Create New Category"}
        isLoading={isSubmitLoading}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteConfirm}
        title="Delete Category"
        subtitle={
          categoryToDelete
            ? `Are you sure you want to delete "${categoryToDelete.name}"? This action will permanently remove this taxonomy and may affect associated blogs.`
            : "Are you sure you want to delete this category?"
        }
        isLoading={isDeleteLoading}
      />
    </div>
  );
}
