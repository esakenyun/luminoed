"use client";

import { AlertTriangle } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  subtitle: string;
  isLoading?: boolean;
}

export default function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  subtitle,
  isLoading = false,
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-sm p-0 overflow-hidden bg-white rounded-2xl border-none">
        <div className="flex justify-between items-center p-6 pb-2">
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center shrink-0">
            <AlertTriangle className="text-red-600" size={24} />
          </div>
        </div>

        <div className="p-6 pt-2">
          <DialogTitle className="text-xl font-bold text-slate-800 mb-2">
            {title}
          </DialogTitle>
          <p className="text-slate-500 text-sm">{subtitle}</p>
        </div>

        <div className="p-6 pt-0 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-medium border-solid cursor-pointer disabled:opacity-50"
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors font-medium shadow-sm flex items-center justify-center cursor-pointer disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
