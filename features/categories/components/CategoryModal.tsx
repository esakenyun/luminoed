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

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-white rounded-2xl border-none">
        <DialogHeader className="p-6 border-b border-slate-100 pb-4">
          <DialogTitle className="text-xl font-bold text-slate-800">
            {title}
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="p-6 pt-4 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              {...register("name")}
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all ${
                errors.name ? "border-red-500" : "border-slate-200"
              }`}
              placeholder="e.g. Technology"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="pt-4 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="flex-1 px-4 py-2 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-medium cursor-pointer disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 flex justify-center items-center px-4 py-2 bg-emerald-400 hover:bg-emerald-500 text-white rounded-xl transition-colors font-medium shadow-sm cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : initialData ? (
                "Save Changes"
              ) : (
                "Create Category"
              )}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
