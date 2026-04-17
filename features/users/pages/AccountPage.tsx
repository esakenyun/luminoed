"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import UserModal, { UserFormData } from "@/features/users/components/UserModal";
import DeleteModal from "@/components/ui/DeleteModal";
import { toast } from "sonner";
import { format } from "date-fns";
import { Account } from "@/features/users/schemas/user.schema";
import {
  Pencil,
  Trash2,
  Search,
  User,
  Mail,
  Shield,
  Calendar,
  ChevronLeft,
  ChevronRight,
  UserPlus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AccountClientPage() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/user");
      if (res.ok) {
        const data = await res.json();
        setAccounts(data);
      } else {
        toast.error("Failed to load users");
      }
    } catch {
      toast.error("An error occurred while fetching users");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const checkAccessAndFetchUsers = async () => {
      try {
        const authRes = await fetch("/api/auth/me");
        if (authRes.ok) {
          const authData = await authRes.json();
          if (authData.role !== "SUPERADMIN") {
            toast.error("You do not have permission to access this page.");
            router.push("/admin/dashboard");
            return;
          }

          setCurrentUserId(authData.id);
          fetchUsers();
        } else {
          router.push("/admin/login");
        }
      } catch (error) {
        console.error("Auth check failed", error);
        router.push("/admin/login");
      }
    };

    checkAccessAndFetchUsers();
  }, [router]);

  const filteredAccounts = useMemo(() => {
    return accounts.filter(
      (account) =>
        account.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        account.email.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [accounts, searchQuery]);

  // Modal States
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<Account | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<Account | null>(null);
  const [isSubmitLoading, setIsSubmitLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const handleOpenUserModal = (user?: Account) => {
    setSelectedUser(user || null);
    setIsUserModalOpen(true);
  };

  const handleCloseUserModal = () => {
    setSelectedUser(null);
    setIsUserModalOpen(false);
  };

  const handleUserSubmit = async (data: UserFormData) => {
    setIsSubmitLoading(true);
    try {
      const url = selectedUser ? `/api/user/${selectedUser.id}` : "/api/user";
      const method = selectedUser ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success(
          selectedUser
            ? "User updated successfully"
            : "User created successfully",
        );
        fetchUsers();
        handleCloseUserModal();
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to save user");
      }
    } catch {
      toast.error("An error occurred while saving the user");
    } finally {
      setIsSubmitLoading(false);
    }
  };

  const handleOpenDeleteModal = (user: Account) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setUserToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteConfirm = async () => {
    if (!userToDelete) return;
    setIsDeleteLoading(true);
    try {
      const res = await fetch(`/api/user/${userToDelete.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success("User deleted successfully");
        fetchUsers();
        handleCloseDeleteModal();
      } else {
        const errorData = await res.json();
        toast.error(errorData.message || "Failed to delete user");
      }
    } catch {
      toast.error("An error occurred while deleting the user");
    } finally {
      setIsDeleteLoading(false);
    }
  };

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
            User Accounts
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500"
          >
            Manage access controls and administrative privileges.
          </motion.p>
        </div>
      </div>

      {/* Redesigned Account Search & Actions: Justify Between Layout */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-4 bg-gray-900/5 backdrop-blur-md p-1.5 rounded-[2rem] border border-white shadow-2xl shadow-gray-200/50 w-full sm:w-auto overflow-hidden"
        >
          <div className="relative group flex-1 sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            <input
              type="text"
              placeholder="Quick search accounts..."
              className="w-full pl-10 pr-4 py-3 rounded-[1.5rem] bg-white border-none shadow-inner outline-none text-sm font-medium focus:ring-2 focus:ring-blue-500/10 transition-all font-sans"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="hidden md:flex items-center gap-2 pr-5 pl-1 text-[10px] font-black uppercase tracking-widest text-gray-400 border-l border-gray-200 ml-1">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {filteredAccounts.length} User
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleOpenUserModal()}
          className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-[1.8rem] font-bold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 active:scale-95 group shrink-0 text-sm"
        >
          <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
          Create Account
        </motion.button>
      </div>

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
                <th className="px-6 py-5 text-left font-bold text-gray-600 border-b border-gray-100 w-[30%]">
                  User
                </th>
                <th className="px-6 py-5 text-left font-bold text-gray-600 border-b border-gray-100 w-[30%]">
                  Email Address
                </th>
                <th className="px-6 py-5 text-left font-bold text-gray-600 border-b border-gray-100 w-[15%]">
                  Role
                </th>
                <th className="px-6 py-5 text-left font-bold text-gray-600 border-b border-gray-100 w-[15%]">
                  Joined Date
                </th>
                <th className="px-6 py-5 text-right font-bold text-gray-600 border-b border-gray-100 w-[10%]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-50">
              <AnimatePresence>
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
                          <div className="w-10 h-10 bg-gray-100 rounded-full animate-pulse" />
                          <div className="space-y-2 flex-1">
                            <div className="h-4 bg-gray-100 rounded-full w-1/3 animate-pulse" />
                            <div className="h-3 bg-gray-100 rounded-full w-1/4 animate-pulse" />
                          </div>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                ) : filteredAccounts.length === 0 ? (
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
                            No users found
                          </p>
                          <p className="text-gray-500 text-sm">
                            Try adjusting your search query
                          </p>
                        </div>
                      </div>
                    </td>
                  </motion.tr>
                ) : (
                  filteredAccounts.map((account) => (
                    <motion.tr
                      key={account.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="group hover:bg-gray-50/50 transition-colors h-[80px]"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0 border border-blue-50 overflow-hidden relative group-hover:scale-105 transition-transform">
                            <User className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                                {account.name}
                              </h4>
                              {String(account.id) === currentUserId && (
                                <span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-tighter">
                                  You
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="w-3.5 h-3.5 opacity-40 shrink-0" />
                          <span className="truncate">{account.email}</span>
                        </div>
                      </td>

                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                            account.role === "SUPERADMIN"
                              ? "bg-purple-50 text-purple-700 border border-purple-100"
                              : "bg-blue-50 text-blue-700 border border-blue-100"
                          }`}
                        >
                          <Shield className="w-3 h-3 mr-1.5 opacity-60" />
                          {account.role}
                        </span>
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                          <Calendar className="w-3.5 h-3.5 opacity-40 shrink-0" />
                          {account.createdAt
                            ? format(new Date(account.createdAt), "dd MMM yyyy")
                            : "-"}
                        </div>
                      </td>

                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => handleOpenUserModal(account)}
                            className="p-2.5 rounded-xl border border-gray-100 bg-white text-amber-600 hover:bg-amber-50 hover:border-amber-100 transition-all shadow-sm shrink-0 active:scale-90"
                            title="Edit User"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleOpenDeleteModal(account)}
                            disabled={String(account.id) === currentUserId}
                            className={`p-2.5 rounded-xl border transition-all shadow-sm shrink-0 active:scale-90 ${
                              String(account.id) === currentUserId
                                ? "bg-gray-50 text-gray-300 border-gray-100 cursor-not-allowed"
                                : "bg-white text-red-600 border-gray-100 hover:bg-red-50 hover:border-red-100"
                            }`}
                            title={
                              String(account.id) === currentUserId
                                ? "Cannot delete self"
                                : "Delete User"
                            }
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

        {/* Footer */}
        {!isLoading && filteredAccounts.length > 0 && (
          <div className="px-6 py-5 bg-gray-50/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-medium border-t border-gray-100">
            <p className="text-gray-500">
              Showing{" "}
              <span className="text-gray-900">{filteredAccounts.length}</span>{" "}
              of <span className="text-gray-900">{accounts.length}</span> total
              users
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
      </motion.div>

      <UserModal
        isOpen={isUserModalOpen}
        onClose={handleCloseUserModal}
        onSubmit={handleUserSubmit}
        initialData={
          selectedUser
            ? { ...selectedUser, id: String(selectedUser.id) }
            : undefined
        }
        title={selectedUser ? "Edit Account" : "Create New Account"}
        isLoading={isSubmitLoading}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteConfirm}
        title="Delete Account"
        subtitle={
          userToDelete
            ? `Are you sure you want to delete ${userToDelete.name}? This action cannot be undone.`
            : "Are you sure you want to delete this account?"
        }
        isLoading={isDeleteLoading}
      />
    </div>
  );
}
