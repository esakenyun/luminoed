"use client";

import { useState, useEffect } from "react";
import CategoryModal, {
  CategoryFormData,
} from "@/features/categories/components/CategoryModal";
import DeleteModal from "@/components/ui/DeleteModal";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Pencil, Trash } from "lucide-react";

export interface Category {
  id: string;
  name: string;
}

export default function ManageCategoriesButton() {
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoadingList, setIsLoadingList] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

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
    if (isManageModalOpen) {
      fetchCategories();
      setCurrentPage(1);
    }
  }, [isManageModalOpen]);

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

  return (
    <>
      <button
        onClick={() => setIsManageModalOpen(true)}
        className="cursor-pointer w-full rounded-xl border py-2 text-sm hover:opacity-90 transition shadow-sm font-medium hover:bg-gray-50"
      >
        Manage Categories
      </button>

      <Dialog open={isManageModalOpen} onOpenChange={setIsManageModalOpen}>
        <DialogContent className="sm:max-w-4xl p-0 overflow-hidden bg-white rounded-xl border-none shadow-xl">
          <DialogHeader className="p-6 bg-linear-to-r from-emerald-50 to-white border-b">
            <div className="flex justify-between items-start">
              <div>
                <DialogTitle className="text-2xl font-bold text-slate-800">
                  Category Manager
                </DialogTitle>
                <p className="text-sm text-slate-500 mt-1">
                  Organize your taxonomy easily
                </p>
              </div>

              <button
                onClick={() => handleOpenCategoryModal()}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm transition"
              >
                + New Category
              </button>
            </div>
          </DialogHeader>

          <div className="max-h-[57vh] overflow-y-auto bg-white">
            {isLoadingList ? (
              <div className="flex justify-center p-8">
                <div className="w-8 h-8 border-4 border-slate-200 border-t-[#2DF197] rounded-full animate-spin" />
              </div>
            ) : (
              <>
                <table className="w-full text-sm">
                  <thead className="bg-[#f8f9fc] text-slate-500 uppercase text-xs font-bold tracking-wider sticky top-0 z-10">
                    <tr className="text-left">
                      <th className="px-8 py-5 border-y border-slate-100">
                        CATEGORY NAME
                      </th>
                      <th className="px-8 py-5 border-y border-slate-100 text-right">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {categories
                      .slice(
                        (currentPage - 1) * itemsPerPage,
                        currentPage * itemsPerPage,
                      )
                      .map((category) => (
                        <tr
                          key={category.id}
                          className="group border-b last:border-0 hover:bg-slate-50 transition"
                        >
                          <td className="px-8 py-5">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
                                {category.name.charAt(0)}
                              </div>

                              <span className="font-semibold text-slate-700">
                                {category.name}
                              </span>
                            </div>
                          </td>

                          <td className="px-8 py-5 text-right">
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() =>
                                  handleOpenCategoryModal(category)
                                }
                                className="p-2 rounded-lg hover:bg-slate-100"
                              >
                                <Pencil size={16} />
                              </button>

                              <button
                                onClick={() => handleOpenDeleteModal(category)}
                                className="p-2 rounded-lg hover:bg-red-50 text-red-500"
                              >
                                <Trash size={16} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}

                    {categories.length === 0 && (
                      <tr>
                        <td
                          colSpan={2}
                          className="px-8 py-12 text-center text-slate-500 bg-white"
                        >
                          No categories found. Create one to get started!
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {categories.length > itemsPerPage && (
                  <div className="flex justify-between items-center px-8 py-4 bg-white border-t border-slate-100 text-sm text-slate-500 font-medium">
                    <p>
                      Showing {(currentPage - 1) * itemsPerPage + 1}-
                      {Math.min(currentPage * itemsPerPage, categories.length)}{" "}
                      of {categories.length} categories
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setCurrentPage((p) => Math.max(1, p - 1))
                        }
                        disabled={currentPage === 1}
                        className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-50"
                      >
                        Prev
                      </button>
                      <button
                        onClick={() =>
                          setCurrentPage((p) =>
                            Math.min(
                              Math.ceil(categories.length / itemsPerPage),
                              p + 1,
                            ),
                          )
                        }
                        disabled={
                          currentPage >=
                          Math.ceil(categories.length / itemsPerPage)
                        }
                        className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="p-6 border-t border-slate-100 bg-white flex justify-end items-center gap-6 rounded-b-3xl shrink-0">
            <button
              onClick={() => setIsManageModalOpen(false)}
              className="text-sm font-semibold text-slate-600 hover:text-slate-800 transition cursor-pointer"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>

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
            ? `Are you sure you want to delete ${categoryToDelete.name}? This action cannot be undone.`
            : "Are you sure you want to delete this category?"
        }
        isLoading={isDeleteLoading}
      />
    </>
  );
}
