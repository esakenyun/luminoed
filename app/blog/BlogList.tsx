"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";

export type BlogCard = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  publishedAt: string | null;
  createdAt: string;
  author: { id: number; name: string | null; image: string | null };
  category: { id: number; name: string };
};

interface BlogListProps {
  initialBlogs: BlogCard[];
  initialTotal: number;
  limit?: number;
}

// ── Component ────────────────────────────────────────────────────────────────

const LIMIT = 5;

export default function BlogList({
  initialBlogs,
  initialTotal,
  limit = LIMIT,
}: BlogListProps) {
  const [blogs, setBlogs] = useState<BlogCard[]>(initialBlogs);
  const [page, setPage] = useState(1); // page 1 was already SSR'd
  const [hasMore, setHasMore] = useState(initialBlogs.length < initialTotal);
  const [isPending, startTransition] = useTransition();

  // Intersection observer sentinel ref for automatic scroll trigger
  const sentinelRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (isPending || !hasMore) return;

    const nextPage = page + 1;

    startTransition(async () => {
      try {
        const res = await fetch(
          `/api/blog/public?page=${nextPage}&limit=${limit}`,
          { cache: "no-store" },
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const data: { blogs: BlogCard[]; hasMore: boolean } = await res.json();

        setBlogs((prev) => [...prev, ...data.blogs]);
        setPage(nextPage);
        setHasMore(data.hasMore);
      } catch (err) {
        console.error("BlogList loadMore error:", err);
      }
    });
  }, [hasMore, isPending, limit, page]);

  // Auto-trigger when sentinel scrolls into view
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMore();
      },
      { rootMargin: "200px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [loadMore]);

  // ── Render ─────────────────────────────────────────────────────────────────

  if (blogs.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500 text-lg">
        No published articles yet.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* ── Blog grid ── */}
      <div className="grid grid-cols-1 gap-8">
        {blogs.map((item, i) => (
          <BlogCard key={item.id} item={item} index={i} />
        ))}
      </div>

      {/* ── Sentinel + Load More ── */}
      <div ref={sentinelRef} className="flex flex-col items-center gap-4 pt-4">
        {isPending && (
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span className="size-4 rounded-full border-2 border-primary-green border-t-transparent animate-spin" />
            Loading more articles…
          </div>
        )}

        {hasMore && !isPending && (
          <button
            id="blog-load-more-btn"
            onClick={loadMore}
            className="
              group relative px-8 py-3 rounded-full font-semibold text-sm
              bg-primary-green text-white
              hover:bg-primary-blue
              transition-all duration-300
              shadow-lg hover:shadow-primary-green/30
              active:scale-95
            "
          >
            <span className="relative z-10">Load More Articles</span>
            <span
              className="
                absolute inset-0 rounded-full bg-white/10
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
              "
            />
          </button>
        )}

        {!hasMore && blogs.length > 0 && (
          <p className="text-slate-400 text-sm py-4">
            You&apos;ve reached the end — {blogs.length} article
            {blogs.length !== 1 ? "s" : ""} total.
          </p>
        )}
      </div>
    </div>
  );
}

// ── Individual Card ──────────────────────────────────────────────────────────

function BlogCard({ item, index }: { item: BlogCard; index: number }) {
  const date = new Date(item.publishedAt ?? item.createdAt).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    },
  );

  return (
    <Link
      href={`/blog/${item.slug}`}
      className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green rounded-2xl"
      style={{
        animationDelay: `${(index % LIMIT) * 60}ms`,
      }}
    >
      <article
        className="
          flex flex-col h-full
          bg-white rounded-2xl overflow-hidden
          shadow-sm hover:shadow-xl
          border border-slate-100 hover:border-primary-green/20
          transition-all duration-300
          hover:-translate-y-1
        "
      >
        {/* Cover image */}
        <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
          {item.image ? (
            <div
              className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${item.image})` }}
            />
          ) : (
            <div className="w-full h-full bg-linear-to-br from-primary-green/20 to-primary-blue/20" />
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 flex-1 p-5">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="bg-gray-100 text-secondary-green-700 px-2.5 py-1 rounded-full font-semibold">
              {item.category.name}
            </span>
            <span>{date}</span>
          </div>

          <h3 className="text-base font-bold leading-snug group-hover:text-primary-green transition-colors line-clamp-2">
            {item.title}
          </h3>

          <p className="text-slate-500 text-sm line-clamp-2 flex-1">
            {item.subtitle}
          </p>

          {/* Author */}
          <div className="flex items-center gap-2.5 mt-auto pt-3 border-t border-slate-100">
            {item.author.image ? (
              <Image
                width={28}
                height={28}
                src={item.author.image}
                alt={item.author.name ?? "Author"}
                className="size-7 rounded-full object-cover ring-1 ring-slate-200"
              />
            ) : (
              <div className="size-7 rounded-full bg-primary-green/20 flex items-center justify-center text-xs font-bold text-primary-green">
                {(item.author.name ?? "U")[0]}
              </div>
            )}
            <span className="text-xs font-medium text-slate-600">
              {item.author.name ?? "Unknown Author"}
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
