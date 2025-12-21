// import { ImSad2 } from "react-icons/im";

// export default function NotFound() {
//   return (
//     <div className="min-h-screen flex justify-center items-center bg-linear-to-tl from-primary-green to-primary-blue">
//       <div className="layout-content-container flex flex-col w-full max-w-160">
//         <div className="flex flex-col items-center bg-white rounded-xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden">
//           <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
//           <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>

//           <div className="mb-8 relative z-10">
//             <div
//               className="bg-center bg-no-repeat bg-cover rounded-lg w-64 h-48 mx-auto"
//               data-alt="Abstract illustration of a student looking at a map or books, representing learning and exploration"
//             ></div>

//             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
//               <span className="text-primary-green text-7xl">
//                 <ImSad2 />
//               </span>
//             </div>
//           </div>

//           <div className="flex flex-col items-center gap-4 mt-6 relative z-10">
//             <h1 className="text-primary-green text-6xl md:text-8xl font-bold tracking-tighter leading-none">
//               404
//             </h1>
//             <h2 className="text-[#0d121b] text-2xl font-bold leading-tight">
//               Page Not Found
//             </h2>
//             <p className="text-[#4c669a] text-base font-normal leading-relaxed max-w-105">
//               It seems youve wandered off the syllabus. This className might
//               have been cancelled, or the link is broken. Lets get you back to
//               learning.
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full justify-center relative z-10">
//             <button className="flex min-w-35 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/20">
//               <span className="truncate">Back to Home</span>
//             </button>
//             <button className="flex min-w-35 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-transparent border-2 border-primary/20 hover:border-primary text-primary hover:bg-primary/5 transition-all text-base font-bold leading-normal tracking-[0.015em]">
//               <span className="truncate">Browse Courses</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { ImSad2 } from "react-icons/im";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-tr from-primary-green to-primary-blue px-4">
      <div className="w-full max-w-xl">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl p-6 sm:p-8 md:p-12 text-center">
          {/* Decorative blur */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-primary/10 rounded-full blur-3xl" />

          {/* Illustration */}
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

          {/* Content */}
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

          {/* CTA */}
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
