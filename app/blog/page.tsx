import OurClient from "@/components/sections/home/OurClient";
import Image from "next/image";
import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { metadata as blogMetadata } from "./metadata";
import { prisma } from "@/lib/prisma";

export const metadata = blogMetadata;

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  let publishedBlogs: any[] = [];
  let hasError = false;

  try {
    publishedBlogs = await prisma.blog.findMany({
      where: { status: "PUBLISHED" },
      include: {
        author: true,
        category: true,
      },
      orderBy: { createdAt: "desc" },
    });
    console.log("Fetched blogs:", publishedBlogs.length);
  } catch (error) {
    console.error("Database error while fetching blogs:", error);
    hasError = true;
  }

  return (
    <div className="bg-[#F6F6F8] text-slate-900 selection:bg-primary-green/30">
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
        <main className="flex-1 flex justify-center pt-20 pb-20">
          <div className="flex flex-col max-w-400 w-full gap-8 px-6">
            <div className="relative w-full rounded-2xl overflow-hidden min-h-112.5 flex flex-col justify-center items-center text-center p-6 md:p-12 gap-6 group bg-primary-green">
              <div className="absolute inset-0 bg-linear-to-t from-primary-blue/80 via-primary-blue/60 to-primary-blue/30 z-10"></div>
              <div className="relative z-20 flex flex-col gap-4 max-w-2xl">
                <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em]">
                  Building the Future of Education
                </h1>
                <p className="text-slate-200 text-lg md:text-xl font-sans">
                  Perspectives, innovations, and strategies for modern schools
                  and foundations.
                </p>
              </div>

              <div className="relative z-20 w-full max-w-lg mt-4">
                <div className="relative flex items-center w-full h-14 rounded-xl shadow-2xl bg-white/20 backdrop-blur-sm border border-white/30">
                  <div className="grid place-items-center h-full w-12 text-white">
                    <IoSearch />
                  </div>
                  <input
                    className="h-full w-full outline-none text-sm text-white pr-2 bg-transparent placeholder-slate-300 font-sans"
                    placeholder="Search articles, topics, or authors..."
                    type="text"
                  />
                  <div className="pr-2">
                    <button className="h-10 px-6 rounded-lg bg-primary-blue hover:bg-primary-green text-white text-sm font-bold transition-colors">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-3xl font-bold border-b border-slate-200 pb-4 text-center">
              Latest Articles
            </h2>
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
              {hasError ? (
                <div className="text-center py-20">
                  <p className="text-red-500 font-semibold mb-2">
                    Error Connecting to Database
                  </p>
                  <p className="text-gray-500 text-sm">
                    Please check your connection or try again later.
                  </p>
                </div>
              ) : publishedBlogs.length === 0 ? (
                <div className="text-center py-20 text-gray-500">
                  No published articles yet.
                </div>
              ) : (
                publishedBlogs.map((item) => (
                  <Link
                    href={`/blog/${item.id}`}
                    key={item.id}
                    className="h-full block"
                  >
                    <article className="flex flex-col h-full group cursor-pointer max-w-4xl mx-auto">
                      <div className="relative w-full aspect-16/10 overflow-hidden rounded-xl mb-4 bg-gray-200">
                        {item.image && (
                          <div
                            className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                        )}
                      </div>

                      <div className="flex flex-col gap-2 flex-1">
                        <div className="text-xs text-slate-500 flex gap-2 items-center">
                          <span className="bg-gray-100 text-secondary-green-700 px-2 py-1 rounded-full font-semibold">
                            {item.category.name}
                          </span>
                          <span>
                            {new Date(item.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              },
                            )}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold group-hover:text-primary">
                          {item.title}
                        </h3>

                        <p className="text-slate-600 line-clamp-2">
                          {item.subtitle}
                        </p>

                        <div className="flex items-center gap-3 mt-auto pt-3 border-t">
                          {item.author.image ? (
                            <Image
                              width={50}
                              height={50}
                              src={item.author.image}
                              alt={item.author.name || "Author"}
                              className="size-8 rounded-full object-cover"
                            />
                          ) : (
                            <div className="size-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-gray-600">
                              {(item.author.name || "U")[0]}
                            </div>
                          )}
                          <span className="text-sm font-medium">
                            {item.author.name || "Unknown Author"}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))
              )}
            </div>
          </div>
        </main>
      </div>
      <div className="relative overflow-hidden z-10">
        <Image
          src="/wave.webp"
          width={500}
          height={500}
          alt="Dashboard Preview"
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <OurClient />
    </div>
  );
}
