import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogService } from "@/features/blog/services/blog.service";
import { notFound } from "next/navigation";
import { BlogPreviewActions } from "@/features/blog/components/BlogPreviewActions";
import Image from "next/image";
import { ContentLayout } from "@/components/dashboard-panel/content-layout";

export default async function PreviewBlog({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await blogService.getBlogById(id);
  console.log(post);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ContentLayout title="Blog Preview">
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <Link
            href="/admin/dashboard/blogs"
            className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors bg-white px-4 py-2 border border-slate-200 rounded-xl hover:shadow-sm"
          >
            <ArrowLeft size={18} />
            <span className="font-medium text-sm">Back to Posts</span>
          </Link>

        <div className="flex items-center gap-3">
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-semibold ${
              post.status === "PUBLISHED"
                ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                : "bg-amber-100 text-amber-700 border border-amber-200"
            }`}
          >
            {post.status === "PUBLISHED" ? "Published" : "Draft"}
          </span>
          <BlogPreviewActions post={post} />
        </div>
      </div>

      {/* Blog Content Preview */}
      <article className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="">
          <main className="flex-1 flex justify-center pt-10 pb-20">
            <div className="max-w-7xl w-full flex flex-col px-6">
              <div className="flex gap-3 mb-6">
                <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors pl-4 pr-4 border border-gray-200">
                  <span className="text-secondary-green-700 text-xs font-bold uppercase tracking-wider">
                    {post.category?.name}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 mb-8">
                <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.02em]">
                  {post.title}
                </h1>
                <p className="text-gray-500 text-xl md:text-2xl font-light leading-normal">
                  {post.subtitle}
                </p>
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 pb-8 mb-8">
                <div className="flex items-center gap-4">
                  {/* <div
                    className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-gray-200"
                    data-alt={`Close up portrait of the author ${post.author}`}
                    // style={{
                    //   backgroundImage: `url("${post.authorImage}")`,
                    // }}
                  ></div> */}
                  <div
                    className="flex items-center justify-center text-xl
             bg-primary-green text-white font-semibold 
             rounded-full h-10 w-10 border border-gray-200"
                  >
                    {post.author?.name?.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-2">
                      <p className="text-black text-base font-bold leading-tight">
                        {post.author?.name}
                      </p>
                      <span className="text-secondary-green-700 text-sm font-medium cursor-pointer">
                        | Author
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm font-normal">
                      {formattedDate}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full mb-10 rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50">
                <div className="relative w-full aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
                  <p className="text-gray-400 text-sm italic">
                    {post.imageCredit}
                  </p>
                </div>
              </div>

              <div className="relative flex gap-10">
                <article className="prose max-w-none flex-1 font-display">
                  <div
                    dangerouslySetInnerHTML={{ __html: post.content || "" }}
                  />

                  {!post.content && (
                    <p className="mb-6 leading-[1.8] text-[1.125rem] text-gray-700">
                      Content for this article is coming soon.
                    </p>
                  )}
                </article>
              </div>

              {/* <section
                className="mt-16 border-t border-gray-200 pt-10"
                id="comments"
              >
                <h3 className="text-black text-2xl font-bold mb-8 flex items-center gap-2">
                  Discussion{" "}
                  <span className="text-gray-400 text-lg font-normal">(0)</span>
                </h3>
                <p className="text-gray-500">Comments section coming soon.</p>
              </section> */}
            </div>
          </main>
        </div>
        {/* Cover Image Placeholder
        <div className="h-64 sm:h-80 md:h-[400px] w-full bg-slate-100 relative">
          {post.image ? (
            <Image
              src={post.image}
              width={1000}
              height={1000}
              alt={post.title}
              className="w-full h-full object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400">
              No Cover Image
            </div>
          )}
        </div>

        <div className="p-8 sm:p-12">
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 font-medium">
            <span className="text-primary-blue bg-blue-50 px-3 py-1 rounded-full">
              {post.category?.name || "Uncategorized"}
            </span>
            <span>•</span>
            <span>{formattedDate}</span>
            <span>•</span>
            <span>By {post.author?.name || "Unknown Author"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2 leading-tight tracking-tight">
            {post.title}
          </h1>

          <h2 className="text-xl text-slate-500 font-medium mb-8">
            {post.subtitle}
          </h2>

          <div
            className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div> */}
      </article>

      {/* Footer info indicating preview */}
      <div className="text-center py-6 text-sm text-slate-400">
        You are currently viewing a preview of Post ID: {post.id}
      </div>
      </div>
    </ContentLayout>
  );
}
