import Image from "next/image";
import Link from "next/link";
import { ImSad2 } from "react-icons/im";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-tr from-primary-green to-primary-blue px-4">
      <div className="w-full max-w-xl">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl p-6 sm:p-8 md:p-12 text-center">
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative mb-10">
            <div className="mx-auto h-40 w-56 sm:h-44 sm:w-64 rounded-lg overflow-hidden bg-gray-100 relative">
              <Image
                src="https://images.unsplash.com/photo-1679156963558-80b8ab8adab9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Not-Found"
                fill
                sizes="(max-width: 640px) 224px, 256px"
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white p-3 shadow-lg">
              <ImSad2 className="text-primary-green text-5xl" />
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-primary-green text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
              404
            </h1>

            <h2 className="text-secondary-green-500 text-xl sm:text-2xl font-semibold">
              Page Not Found
            </h2>

            <p className="mx-auto max-w-md text-gray-600 text-sm sm:text-base leading-relaxed">
              Looks like this page doesn&apos;t exist anymore or the link is
              broken. Let&apos;s get you back on track.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 h-11 text-white font-semibold shadow-md transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
