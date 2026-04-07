import ManageCategoriesButton from "@/features/categories/components/ManageCategoriesButton";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ContentLayout } from "@/components/dashboard-panel/content-layout";
import { auth } from "@/lib/auth";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// export const dynamic = "force-dynamic"; // Removing this to allow better caching behavior if Next.js decides

async function DashboardStats() {
  const [totalPosts, publishedPosts, draftPosts, totalCategories] =
    await Promise.all([
      prisma.blog.count(),
      prisma.blog.count({ where: { status: "PUBLISHED" } }),
      prisma.blog.count({ where: { status: "DRAFT" } }),
      prisma.category.count(),
    ]);

  const stats = [
    { label: "Total Posts", value: totalPosts },
    { label: "Published", value: publishedPosts },
    { label: "Draft", value: draftPosts },
    { label: "Categories", value: totalCategories },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s) => (
        <div
          key={s.label}
          className="rounded-2xl border p-4 shadow-sm bg-white"
        >
          <p className="text-sm text-gray-500">{s.label}</p>
          <p className="text-2xl font-semibold mt-1">{s.value}</p>
        </div>
      ))}
    </div>
  );
}

function StatsLoading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="rounded-2xl border p-4 shadow-sm bg-white h-24">
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-8 w-12" />
        </div>
      ))}
    </div>
  );
}

async function RecentPostsList() {
  const recentPostsData = await prisma.blog.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  const recentPosts = recentPostsData.map((post) => ({
    title: post.title,
    status: post.status === "PUBLISHED" ? "Published" : "Draft",
    date: new Date(post.createdAt).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  }));

  return (
    <div className="space-y-3">
      {recentPosts.map((post) => (
        <div
          key={post.title}
          className="flex justify-between items-center border rounded-xl p-3"
        >
          <div>
            <p className="font-medium">{post.title}</p>
            <p className="text-xs text-gray-500">{post.date}</p>
          </div>

          <span
            className={`text-xs px-2 py-1 rounded-full ${
              post.status === "Published"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {post.status}
          </span>
        </div>
      ))}
    </div>
  );
}

function PostsLoading() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex justify-between items-center border rounded-xl p-3"
        >
          <div className="space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-3 w-20" />
          </div>
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      ))}
    </div>
  );
}

async function CategoriesList() {
  const categoriesData = await prisma.category.findMany({
    include: {
      _count: {
        select: { blogs: true },
      },
    },
    orderBy: {
      blogs: {
        _count: "desc",
      },
    },
    take: 5,
  });

  const categories = categoriesData.map((cat) => ({
    name: cat.name,
    count: cat._count.blogs,
  }));

  return (
    <div className="space-y-2">
      {categories.map((cat) => (
        <div key={cat.name} className="flex justify-between text-sm">
          <span>{cat.name}</span>
          <span className="text-gray-500">{cat.count}</span>
        </div>
      ))}
    </div>
  );
}

function CategoriesLoading() {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex justify-between">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-8" />
        </div>
      ))}
    </div>
  );
}

export default async function DashboardPage() {
  // We still await auth() since we need it for the whole page or layout usually
  // but if we don't use it here, we could even defer it.
  // Actually, auth() is fast if it's just checking the cookie.
  const session = await auth();

  return (
    <ContentLayout title="Dashboard">
      <div className="space-y-3">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back 👋</p>
        </div>

        {/* Stats */}
        <Suspense fallback={<StatsLoading />}>
          <DashboardStats />
        </Suspense>

        {/* Main grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Recent Posts */}
          <div className="md:col-span-2 rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Recent Posts</h2>
              <Link
                href="/admin/dashboard/blogs"
                className="text-sm text-blue-600 hover:underline"
              >
                View all
              </Link>
            </div>
            <Suspense fallback={<PostsLoading />}>
              <RecentPostsList />
            </Suspense>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Categories */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <h2 className="font-semibold mb-3">Categories</h2>
              <Suspense fallback={<CategoriesLoading />}>
                <CategoriesList />
              </Suspense>
            </div>

            {/* Quick Actions */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <h2 className="font-semibold mb-3">Quick Actions</h2>
              <div className="flex flex-col gap-2">
                <button className="w-full rounded-xl bg-black text-white py-2 text-sm hover:opacity-90">
                  + New Post
                </button>
                <ManageCategoriesButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
