import ManageCategoriesButton from "@/features/categories/components/ManageCategoriesButton";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { ContentLayout } from "@/components/dashboard-panel/content-layout";
import { auth } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const session = await auth();
  const role = session?.user?.role;
  const [
    totalPosts,
    publishedPosts,
    draftPosts,
    totalCategories,
    recentPostsData,
    categoriesData,
  ] = await Promise.all([
    prisma.blog.count(),
    prisma.blog.count({ where: { status: "PUBLISHED" } }),
    prisma.blog.count({ where: { status: "DRAFT" } }),
    prisma.category.count(),
    prisma.blog.findMany({
      take: 5,
      orderBy: { createdAt: "desc" },
    }),
    prisma.category.findMany({
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
    }),
  ]);

  const stats = [
    { label: "Total Posts", value: totalPosts },
    { label: "Published", value: publishedPosts },
    { label: "Draft", value: draftPosts },
    { label: "Categories", value: totalCategories },
  ];

  const recentPosts = recentPostsData.map((post) => ({
    title: post.title,
    status: post.status === "PUBLISHED" ? "Published" : "Draft",
    date: new Date(post.createdAt).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),
  }));

  const categories = categoriesData.map((cat) => ({
    name: cat.name,
    count: cat._count.blogs,
  }));

  return (
    <ContentLayout title="Dashboard">
      <div className="space-y-3">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-sm text-gray-500">Welcome back 👋</p>
        </div>

        {/* Stats */}
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

        {/* Main grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Recent Posts */}
          <div className="md:col-span-2 rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold">Recent Posts</h2>
              <Link
                href="/admin/dashboard/blog"
                className="text-sm text-blue-600 hover:underline"
              >
                View all
              </Link>
            </div>

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
          </div>

          {/* Right column */}
          <div className="space-y-6">
            {/* Categories */}
            <div className="rounded-2xl border bg-white p-5 shadow-sm">
              <h2 className="font-semibold mb-3">Categories</h2>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <div key={cat.name} className="flex justify-between text-sm">
                    <span>{cat.name}</span>
                    <span className="text-gray-500">{cat.count}</span>
                  </div>
                ))}
              </div>
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
