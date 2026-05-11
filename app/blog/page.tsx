import { IoSearch } from "react-icons/io5";
import { metadata as blogMetadata } from "./metadata";
import { blogService } from "@/features/blog/services/blog.service";
import BlogList, { type BlogCard } from "./BlogList";

export const metadata = blogMetadata;

export const revalidate = 60;

const INITIAL_LIMIT = 5;

export default async function BlogPage() {
  let initialBlogs: BlogCard[] = [];
  let initialTotal = 0;
  let hasError = false;

  try {
    const result = await blogService.getPublishedBlogs(1, INITIAL_LIMIT);
    // Cast is safe: the select in findPublished matches BlogCard exactly
    initialBlogs = result.blogs as unknown as BlogCard[];
    initialTotal = result.total;
  } catch (error) {
    console.error("[BlogPage] Database error while fetching blogs:", error);
    hasError = true;
  }

  return (
    <div className="bg-[#F6F6F8] text-slate-900 selection:bg-primary-green/30">
      <div className="relative flex min-h-screen w-full max-w-7xl mx-auto flex-col overflow-x-hidden">
        <main className="flex-1 flex justify-center py-20">
          <div className="flex flex-col max-w-400 w-full gap-10 px-6">

            {/* ── Hero banner ── */}
            <div className="relative w-full rounded-2xl overflow-hidden min-h-112.5 flex flex-col justify-center items-center text-center p-6 md:p-12 gap-6 group bg-primary-green">
              <div className="absolute inset-0 bg-linear-to-t from-primary-blue/80 via-primary-blue/60 to-primary-blue/30 z-10" />
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
                    id="blog-search-input"
                    className="h-full w-full outline-none text-sm text-white pr-2 bg-transparent placeholder-slate-300 font-sans"
                    placeholder="Search articles, topics, or authors..."
                    type="text"
                  />
                  <div className="pr-2">
                    <button
                      id="blog-search-btn"
                      className="h-10 px-6 rounded-lg bg-primary-blue hover:bg-primary-green text-white text-sm font-bold transition-colors"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Section header ── */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-2xl font-bold">Latest Articles</h2>
              {initialTotal > 0 && (
                <span className="text-sm text-slate-500">
                  {initialTotal} article{initialTotal !== 1 ? "s" : ""} published
                </span>
              )}
            </div>

            {/* ── Blog list (client — lazy load) ── */}
            {hasError ? (
              <div className="text-center py-20">
                <p className="text-red-500 font-semibold mb-2">
                  Error Connecting to Database
                </p>
                <p className="text-gray-500 text-sm">
                  Please check your connection or try again later.
                </p>
              </div>
            ) : (
              <BlogList
                initialBlogs={initialBlogs}
                initialTotal={initialTotal}
                limit={INITIAL_LIMIT}
              />
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
