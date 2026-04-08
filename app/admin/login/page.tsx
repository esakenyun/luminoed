"use client";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import { useEffect, Suspense } from "react";
import { signIn } from "next-auth/react";

function LoginErrorToast() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const errorParam = searchParams.get("error");
    if (errorParam === "AccessDenied") {
      toast.error("Akun belum terdaftar. Silakan hubungi administrator.");
    }
  }, [searchParams]);

  return null;
}

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-50 overflow-hidden relative selection:bg-primary-blue/30">
      <Suspense fallback={null}>
        <LoginErrorToast />
      </Suspense>
      {/* Background decorations */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary-blue/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary-green/10 blur-[100px] pointer-events-none" />

      <div className="w-full max-w-md p-8 sm:p-10 bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/50 relative z-10 m-4">
        <div className="text-center mb-8 space-y-4">
          <div className="flex justify-center mb-2">
            <div className="relative w-48 h-10">
              <Image
                src="/logo/logo-color.png"
                alt="LuminoED Logo"
                sizes="(max-width: 768px) 100vw, 300px"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <p className="text-sm text-slate-500 font-medium">
            Sign in to access your admin dashboard
          </p>
        </div>

        <div className="pt-4 space-y-3">
          <button
            type="button"
            onClick={() =>
              signIn("google", { callbackUrl: "/admin/dashboard" })
            }
            className="w-full flex justify-center items-center py-3.5 px-4 border border-slate-300 rounded-xl shadow-sm text-sm font-bold text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue transition-all duration-200"
          >
            <svg
              className="w-5 h-5 mr-3"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}
