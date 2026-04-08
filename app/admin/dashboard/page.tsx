import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ContentLayout } from "@/components/dashboard-panel/content-layout";
import { auth } from "@/lib/auth";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  FileText,
  Tags,
  Settings,
  ChevronRight,
  Clock,
  ExternalLink,
} from "lucide-react";

import {
  StatsGrid,
  AnimatedCard,
  QuickAction,
} from "@/components/admin/components/dashboard-client";

async function DashboardStats() {
  const [totalPosts, publishedPosts, draftPosts, totalCategories] =
    await Promise.all([
      prisma.blog.count(),
      prisma.blog.count({ where: { status: "PUBLISHED" } }),
      prisma.blog.count({ where: { status: "DRAFT" } }),
      prisma.category.count(),
    ]);

  const stats = [
    {
      label: "Total Posts",
      value: totalPosts,
      icon: "FileText" as const,
      color: "bg-blue-600",
      trend: "+12%",
    },
    {
      label: "Published",
      value: publishedPosts,
      icon: "CheckCircle" as const,
      color: "bg-green-600",
      trend: "+8%",
    },
    {
      label: "Drafts",
      value: draftPosts,
      icon: "Edit3" as const,
      color: "bg-amber-600",
    },
    {
      label: "Categories",
      value: totalCategories,
      icon: "Tags" as const,
      color: "bg-purple-600",
    },
  ];

  return <StatsGrid stats={stats} />;
}

function StatsLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="rounded-3xl border border-gray-100 p-6 bg-white h-32"
        >
          <Skeleton className="h-4 w-20 mb-4" />
          <Skeleton className="h-10 w-16" />
        </div>
      ))}
    </div>
  );
}

async function RecentPostsList() {
  const recentPostsData = await prisma.blog.findMany({
    take: 6,
    orderBy: { createdAt: "desc" },
    include: { category: true },
  });

  return (
    <div className="divide-y divide-gray-100">
      {recentPostsData.map((post) => (
        <div
          key={post.id}
          className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
        >
          <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100 shrink-0">
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-300">
                <FileText className="w-6 h-6" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="font-semibold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
              {post.title}
            </h4>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                {post.category.name}
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {new Date(post.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2">
            <span
              className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-lg ${
                post.status === "PUBLISHED"
                  ? "bg-green-50 text-green-700 border border-green-100"
                  : "bg-amber-50 text-amber-700 border border-amber-100"
              }`}
            >
              {post.status}
            </span>
            <Link
              href={`/admin/dashboard/blogs/${post.id}`}
              className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

function PostsLoading() {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-4">
          <Skeleton className="h-16 w-16 rounded-xl" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/4" />
          </div>
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

  const maxCount = Math.max(...categoriesData.map((c) => c._count.blogs), 1);

  return (
    <div className="space-y-4">
      {categoriesData.map((cat) => (
        <div key={cat.id} className="space-y-1.5">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-gray-700">{cat.name}</span>
            <span className="text-gray-400">{cat._count.blogs} posts</span>
          </div>
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all duration-1000"
              style={{ width: `${(cat._count.blogs / maxCount) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function CategoriesLoading() {
  return (
    <div className="space-y-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-between">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-8" />
          </div>
          <Skeleton className="h-2 w-full rounded-full" />
        </div>
      ))}
    </div>
  );
}

export default async function DashboardPage() {
  const session = await auth();

  return (
    <ContentLayout title="Dashboard Overview">
      <div className="space-y-8">
        {/* Header Section
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 items-center">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Welcome back,{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                {session?.user?.name || "Admin"}
              </span>{" "}
              👋
            </h1>
            <p className="text-gray-500 mt-2">
              Here&apos;s a quick overview of what&apos;s happening with your
              content today.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/dashboard/blogs/create"
              className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-2xl font-semibold hover:bg-gray-800 transition-all shadow-lg shadow-gray-200 hover:shadow-xl hover:-translate-y-0.5 active:scale-95"
            >
              <Plus className="w-5 h-5" />
              New Post
            </Link>
          </div>
        </div> */}

        {/* Stats Grid */}
        <Suspense fallback={<StatsLoading />}>
          <DashboardStats />
        </Suspense>

        {/* Main Content Grid */}
        <div className="grid xl:grid-cols-3 gap-8">
          {/* Recent Posts - Takes up 2 columns on larger screens */}
          <div className="xl:col-span-2 space-y-6">
            <AnimatedCard className="h-full">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">
                    Recent Content
                  </h2>
                </div>
                <Link
                  href="/admin/dashboard/blogs"
                  className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors group"
                >
                  View Library
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
              <Suspense fallback={<PostsLoading />}>
                <RecentPostsList />
              </Suspense>
            </AnimatedCard>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8">
            {/* Categories Popularity */}
            <AnimatedCard delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                  <Tags className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Categories</h2>
              </div>
              <Suspense fallback={<CategoriesLoading />}>
                <CategoriesList />
              </Suspense>
            </AnimatedCard>

            {/* Quick Management */}
            <AnimatedCard delay={0.2}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                  <Settings className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Management</h2>
              </div>
              <div className="space-y-1">
                <QuickAction
                  href="/admin/dashboard/blogs/create"
                  icon="Plus"
                  label="Create New Blog"
                  description="Write and publish a new article"
                  color="bg-green-600"
                />
                <QuickAction
                  href="/admin/dashboard/categories"
                  icon="Tags"
                  label="Category Manager"
                  description="Organize your content topics"
                  color="bg-purple-600"
                />
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
}
