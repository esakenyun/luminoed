"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Tag,
  Loader2,
} from "lucide-react";

import {
  createCategorySchema,
  updateCategorySchema,
} from "../schemas/category.schema";
import * as z from "zod";

export type CategoryFormData = z.infer<typeof createCategorySchema> & {
  id?: string;
};

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CategoryFormData) => void;
  initialData?: CategoryFormData | null;
  title: string;
  isLoading?: boolean;
}

export default function CategoryModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  title,
  isLoading,
}: CategoryModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryFormData>({
    resolver: zodResolver(
      initialData ? updateCategorySchema : createCategorySchema,
    ) as any,
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        reset({
          name: initialData.name,
        });
      } else {
        reset({
          name: "",
        });
      }
    }
  }, [isOpen, initialData, reset]);

  const onSubmitForm = (data: CategoryFormData) => {
    onSubmit(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-white rounded-[2rem] border-none shadow-2xl">
        <DialogHeader className="p-8 pb-4 relative">
          <DialogTitle className="text-2xl font-extrabold text-gray-900 tracking-tight">
            {title}
          </DialogTitle>
          <p className="text-sm text-gray-500 mt-1">
            {initialData ? "Update the name of this category." : "Add a new category to organize your articles."}
          </p>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="p-8 pt-2 space-y-6"
        >
          <div className="space-y-4">
            {/* Category Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
                Category Name
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors pointer-events-none">
                  <Tag size={18} />
                </div>
                <input
                  type="text"
                  {...register("name")}
                  className={`w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border-2 outline-none transition-all ${
                    errors.name 
                      ? "border-red-100 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" 
                      : "border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  }`}
                  placeholder="e.g. Technology, Lifestyle..."
                />
              </div>
              {errors.name && (
                <p className="text-xs font-semibold text-red-500 ml-1">{errors.name.message}</p>
              )}
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-6 py-3.5 border-2 border-gray-100 text-gray-600 rounded-2xl hover:bg-gray-50 hover:border-gray-200 transition-all font-bold text-sm disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex justify-center items-center gap-2 px-6 py-3.5 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl transition-all font-bold text-sm shadow-lg shadow-gray-200 active:scale-[0.98] disabled:opacity-50"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {initialData ? "Apply Changes" : "Create Category"}
                </>
              )}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
