"use client";

import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  baseUserSchema,
  createUserSchema,
  updateUserSchema,
} from "../schemas/user.schema";
import * as z from "zod";

export type UserFormData = z.infer<typeof baseUserSchema> & {
  id?: string;
};

interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: UserFormData) => void;
  initialData?: UserFormData | null;
  title: string;
  isLoading?: boolean;
}

export default function UserModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  title,
  isLoading,
}: UserModalProps) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<UserFormData>({
    resolver: zodResolver(
      initialData ? updateUserSchema : createUserSchema,
    ) as any,
    defaultValues: {
      name: "",
      email: "",
      role: "SUPERADMIN",
    },
  });

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        reset({
          name: initialData.name,
          email: initialData.email,
          role: initialData.role,
        });
      } else {
        reset({
          name: "",
          email: "",
          role: "SUPERADMIN",
        });
      }
    }
  }, [isOpen, initialData, reset]);

  const onSubmitForm = (data: UserFormData) => {
    // If it's an edit and password is empty, we don't send it or handle it in the parent
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
          className="p-6 pt-2 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all ${
                errors.name ? "border-red-500" : "border-slate-200"
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              className={`w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all ${
                errors.email ? "border-red-500" : "border-slate-200"
              }`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Role
            </label>
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    className={`w-full px-4 py-2 h-auto border rounded-xl focus:ring-2 focus:ring-primary-blue focus:border-primary-blue outline-none transition-all bg-white font-normal data-[state=open]:border-primary-blue data-[state=open]:ring-2 data-[state=open]:ring-primary-blue text-base hover:bg-slate-50 focus:ring-offset-0 shadow-none ${
                      errors.role ? "border-red-500" : "border-slate-200"
                    }`}
                  >
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-slate-200 z-100 bg-white">
                    <SelectItem
                      value="SUPERADMIN"
                      className="rounded-lg cursor-pointer py-2 px-4 focus:bg-slate-50"
                    >
                      Super Admin
                    </SelectItem>
                    <SelectItem
                      value="ADMIN"
                      className="rounded-lg cursor-pointer py-2 px-4 focus:bg-slate-50"
                    >
                      Admin
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.role && (
              <p className="mt-1 text-sm text-red-500">{errors.role.message}</p>
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
                "Create User"
              )}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
