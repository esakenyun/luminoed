"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import UserModal, { UserFormData } from "@/features/users/components/UserModal";
import DeleteModal from "@/components/ui/DeleteModal";
import { toast } from "sonner";
import { format } from "date-fns";
import { Account } from "@/features/users/schemas/user.schema";
import { Pencil, Trash } from "lucide-react";

export function AccountClientPage() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);
  const router = useRouter();

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/user");
      if (res.ok) {
        const data = await res.json();
        setAccounts(data);
      } else {
        toast.error("Failed to load users");
      }
    } catch {
      toast.error("An error occurred while fetching users");
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Accounts</h1>
          <p className="text-sm text-gray-500">Manage user access and roles</p>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search users..."
            className="border rounded-xl px-3 py-2 text-sm w-48 focus:outline-none focus:ring-2 focus:ring-primary-blue"
          />
          <button
            onClick={() => handleOpenUserModal()}
            className="cursor-pointer bg-emerald-400 hover:bg-emerald-500 text-white px-4 py-2 rounded-xl text-sm hover:opacity-90 transition shadow-sm font-medium"
          >
            + New Account
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl border bg-white shadow-sm overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr className="text-left">
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Created At</th>
              <th className="px-4 py-3 font-medium text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {accounts.map((account) => (
              <tr
                key={account.id}
                className="border-t hover:bg-slate-50 transition"
              >
                <td className="px-4 py-3 font-medium text-slate-900">
                  {account.name}
                </td>
                <td className="px-4 py-3 text-slate-500">{account.email}</td>
                <td className="px-4 py-3 text-slate-600">
                  <span
                    className={`px-2 py-1 bg-slate-100 rounded-md text-xs font-medium border border-slate-200 ${
                      account.role === "SUPERADMIN"
                        ? "text-primary-blue"
                        : "text-slate-600"
                    }`}
                  >
                    {account.role}
                  </span>
                </td>

                <td className="px-4 py-3 text-slate-500">
                  {account.createdAt
                    ? format(new Date(account.createdAt), "dd MMM yyyy")
                    : "-"}
                </td>

                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => handleOpenUserModal(account)}
                      className="cursor-pointer text-sm px-1.5 py-1 rounded-lg border hover:bg-slate-100 transition"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleOpenDeleteModal(account)}
                      disabled={account.id === currentUserId}
                      className={`text-sm px-1.5 py-1 rounded-lg border transition ${
                        account.id === currentUserId
                          ? "text-gray-300 border-gray-100 cursor-not-allowed"
                          : "cursor-pointer text-red-600 hover:bg-red-50"
                      }`}
                      title={
                        account.id === currentUserId
                          ? "You cannot delete your own account"
                          : "Delete account"
                      }
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm text-gray-500">
        <p>Showing 1–4 of 15 accounts</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded-lg border hover:bg-gray-50 transition">
            Prev
          </button>
          <button className="px-3 py-1 rounded-lg border hover:bg-gray-50 transition">
            Next
          </button>
        </div>
      </div>

      <UserModal
        isOpen={isUserModalOpen}
        onClose={handleCloseUserModal}
        onSubmit={handleUserSubmit}
        initialData={selectedUser}
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
