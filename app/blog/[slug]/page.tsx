import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const article = await prisma.blog.findUnique({
    where: { slug },
    include: { author: true },
  });

  if (!article || article.status !== "PUBLISHED") {
    return {
      title: "Artikel Tidak Ditemukan | LuminoED Blog",
      description: "Artikel yang Anda cari tidak ditemukan di Blog LuminoED.",
    };
  }

  return {
    title: `${article.title} | LuminoED Blog`,
    description: article.subtitle,
    authors: [{ name: article.author?.name || "Unknown Author" }],
    openGraph: {
      title: article.title,
      description: article.subtitle,
      url: `https://luminoed.id/blog/${article.slug}`,
      siteName: "LuminoED",
      images: article.image
        ? [
            {
              url: article.image,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [],
      type: "article",
      locale: "id_ID",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.subtitle,
      images: article.image ? [article.image] : [],
    },
  };
}

export default async function ArticleBySlug({ params }: Props) {
  const { slug } = await params;

  const article = await prisma.blog.findUnique({
    where: { slug },
    include: { author: true, category: true },
  });

  if (!article || article.status !== "PUBLISHED") {
    notFound();
  }

  const recentArticles = await prisma.blog.findMany({
    where: { status: "PUBLISHED", id: { not: article.id } },
    orderBy: { createdAt: "desc" },
    take: 3,
    include: { author: true, category: true },
  });

  return (
    <div className="bg-[#FFFFFF] font-display text-[#111318] min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-1 flex justify-center pt-24 pb-20">
        <div className="max-w-7xl w-full flex flex-col px-6">
          <div className="flex gap-3 mb-6">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors pl-4 pr-4 border border-gray-200">
              <span className="text-secondary-green-700 text-xs font-bold uppercase tracking-wider">
                {article.category.name}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.02em]">
              {article.title}
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl font-light leading-normal">
              {article.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-between border-b border-gray-200 pb-8 mb-8">
            <div className="flex items-center gap-4">
              {article.author.image ? (
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-gray-200"
                  data-alt={`Close up portrait of the author ${article.author.name}`}
                  style={{
                    backgroundImage: `url("${article.author.image}")`,
                  }}
                ></div>
              ) : (
                <div className="rounded-full h-12 w-12 border border-gray-200 bg-gray-300 flex items-center justify-center text-lg font-bold text-gray-600">
                  {(article.author.name || "U")[0]}
                </div>
              )}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <p className="text-black text-base font-bold leading-tight">
                    {article.author.name || "Unknown Author"}
                  </p>
                  <span className="text-secondary-green-700 text-sm font-medium  cursor-pointer">
                    | Author
                  </span>
                </div>
                <p className="text-gray-500 text-sm font-normal">
                  {new Date(
                    article.publishedAt || article.createdAt,
                  ).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  {/* Note: dynamic readTime might require a helper function if you implement that calculation */}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mb-10 rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50">
            {article.image ? (
              <div className="relative w-full aspect-video bg-gray-100">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : null}
            <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
              <p className="text-gray-400 text-sm italic">
                Image credit: {article.imageCredit || "LuminoED"}
              </p>
            </div>
          </div>

          <div className="relative flex gap-10">
            <article className="prose max-w-none flex-1 font-display">
              <div
                dangerouslySetInnerHTML={{ __html: article.content || "" }}
              />

              {!article.content && (
                <p className="mb-6 leading-[1.8] text-[1.125rem] text-gray-700">
                  Content for this article is coming soon.
                </p>
              )}
            </article>
          </div>

          {recentArticles.length > 0 && (
            <section className="mt-16 border-t border-gray-200 pt-10">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-black text-2xl font-bold ">Recent Posts</h3>

                <Link href={"/blog"}> See All</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentArticles.map((item) => (
                  <Link
                    href={`/blog/${item.slug}`}
                    key={item.id}
                    className="h-full block"
                  >
                    <article className="flex flex-col h-full group cursor-pointer bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
                      <div className="relative w-full aspect-16/10 overflow-hidden bg-gray-200">
                        {item.image && (
                          <div
                            className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-105"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                        )}
                      </div>

                      <div className="flex flex-col gap-2 flex-1 p-5">
                        <div className="text-xs text-slate-500 flex gap-2 items-center">
                          <span className="bg-gray-100 text-secondary-green-700 px-2 py-1 rounded-full font-semibold">
                            {item.category?.name || "Uncategorized"}
                          </span>
                          <span>
                            {new Date(
                              item.publishedAt || item.createdAt,
                            ).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold group-hover:text-secondary-green-600 mt-2 line-clamp-2">
                          {item.title}
                        </h3>

                        <div className="flex items-center gap-3 mt-auto pt-4">
                          {item.author?.image ? (
                            <Image
                              width={32}
                              height={32}
                              src={item.author.image}
                              alt={item.author.name || "Author"}
                              className="size-8 rounded-full object-cover"
                            />
                          ) : (
                            <div className="size-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-gray-600">
                              {(item.author?.name || "U")[0]}
                            </div>
                          )}
                          <span className="text-sm font-medium text-gray-700">
                            {item.author?.name || "Unknown Author"}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
