"use client";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import Image from "next/image";
import { useEffect, Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

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
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/admin/dashboard" });
    } catch (error) {
      console.error("Sign in error:", error);
      setIsLoading(false);
      toast.error("Terjadi kesalahan saat masuk. Silakan coba lagi.");
    }
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden relative selection:bg-primary-blue/30">
      <Suspense fallback={null}>
        <LoginErrorToast />
      </Suspense>

      {/* Left Pane - Brand Identity */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary-blue overflow-hidden items-center justify-center p-12">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary-green/20 blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-primary-blue/40 blur-[120px]"
          />
        </div>

        <div className="relative z-10 w-full max-w-lg text-center lg:text-left space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-16 mb-12">
              <Image
                src="/logo/logo-color.png"
                alt="LuminoED Logo"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
            <h2 className="text-4xl xl:text-5xl font-extrabold text-white leading-tight">
              Elevating Education through{" "}
              <span className="text-primary-green">Luminous</span> Innovation.
            </h2>
            <p className="mt-6 text-lg text-slate-300 font-medium max-w-md lead-relaxed">
              Manage your educational ecosystem with our powerful, intuitive
              admin dashboard.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-64 w-64 mx-auto lg:mx-0"
          >
            {/* The Luminous Sphere */}
            <div className="absolute inset-0 bg-primary-green opacity-20 blur-3xl rounded-full" />
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-green/30 to-transparent" />
              <div className="w-3/4 h-3/4 rounded-full bg-white/5 border border-white/10" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right Pane - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-24 bg-slate-50 relative">
        {/* Mobile Logo Only */}
        <div className="lg:hidden absolute top-8 left-8">
          <div className="relative w-32 h-8">
            <Image
              src="/logo/logo-color.png"
              alt="LuminoED Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Admin Login
            </h1>
            <p className="text-base text-slate-500 font-medium">
              Please sign in with your authorized account to access the
              dashboard tools and management features.
            </p>
          </div>

          <div className="space-y-6">
            <button
              type="button"
              disabled={isLoading}
              onClick={handleSignIn}
              className="group relative w-full flex items-center justify-center py-4 px-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden active:scale-[0.98]"
            >
              <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex items-center justify-center">
                {isLoading ? (
                  <Loader2 className="w-5 h-5 mr-3 animate-spin text-primary-blue" />
                ) : (
                  <svg
                    className="w-6 h-6 mr-4 transition-transform duration-300 group-hover:scale-110"
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
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                  </svg>
                )}
                <span className="text-lg font-bold text-slate-700">
                  {isLoading ? "Signing in..." : "Sign in with Google"}
                </span>
              </div>
            </button>
          </div>

          <div className="pt-12 flex items-center space-x-2 text-slate-400">
            <div className="h-px w-8 bg-slate-200" />
            <span className="text-xs font-semibold uppercase tracking-widest">
              LUMINOED ADMIN PORTAL
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
