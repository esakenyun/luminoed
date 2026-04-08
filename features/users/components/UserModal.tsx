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
  User,
  Mail,
  Shield,
  Loader2,
} from "lucide-react";

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
            {initialData ? "Update existing user credentials." : "Assign access to a new administrator."}
          </p>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="p-8 pt-2 space-y-6"
        >
          <div className="space-y-4">
            {/* Name Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
                Full Name
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors pointer-events-none">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  {...register("name")}
                  className={`w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border-2 outline-none transition-all ${
                    errors.name 
                      ? "border-red-100 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" 
                      : "border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  }`}
                  placeholder="Enter user's name"
                />
              </div>
              {errors.name && (
                <p className="text-xs font-semibold text-red-500 ml-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-50 border-2 outline-none transition-all ${
                    errors.email 
                      ? "border-red-100 focus:border-red-500 focus:ring-4 focus:ring-red-500/10" 
                      : "border-transparent focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  }`}
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && (
                <p className="text-xs font-semibold text-red-500 ml-1">{errors.email.message}</p>
              )}
            </div>

            {/* Role Input */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">
                Access Level
              </label>
              <Controller
                name="role"
                control={control}
                render={({ field }) => (
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10">
                    <Shield size={18} />
                  </div>
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger
                      className={`w-full pl-12 pr-4 h-[52px] rounded-2xl bg-gray-50 border-2 outline-none transition-all text-sm font-medium hover:bg-gray-100 focus:ring-4 focus:ring-blue-500/10 shadow-none border-transparent data-[state=open]:border-blue-500 data-[state=open]:bg-white ${
                        errors.role ? "border-red-500" : ""
                      } relative`}
                    >
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>
                    <SelectContent className="rounded-2xl border-gray-100 shadow-xl overflow-hidden p-1 bg-white">
                      <SelectItem
                        value="SUPERADMIN"
                        className="rounded-xl cursor-pointer py-3 px-4 focus:bg-blue-50 focus:text-blue-700 transition-colors font-medium"
                      >
                        Super Admin
                      </SelectItem>
                      <SelectItem
                        value="ADMIN"
                        className="rounded-xl cursor-pointer py-3 px-4 focus:bg-blue-50 focus:text-blue-700 transition-colors font-medium"
                      >
                        Administrator
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                )}
              />
              {errors.role && (
                <p className="text-xs font-semibold text-red-500 ml-1">{errors.role.message}</p>
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
                  {initialData ? "Apply Changes" : "Create Account"}
                </>
              )}
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
