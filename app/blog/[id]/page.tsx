import Image from "next/image";
import { articles } from "../data";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params; // ✅ WAJIB di App Router terbaru

  const article = articles.find((item) => item.id === Number(id));

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan | LuminoED Blog",
      description: "Artikel yang Anda cari tidak ditemukan di Blog LuminoED.",
    };
  }

  return {
    title: `${article.title} | LuminoED Blog`,
    description: article.description,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://luminoed.id/blog/${article.id}`,
      siteName: "LuminoED",
      images: [
        {
          url: article.imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: "article",
      locale: "id_ID",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.imageUrl],
    },
  };
}
export default async function ArticleById({ params }: Props) {
  const { id } = await params;
  const article = articles.find((item) => item.id === parseInt(id));

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-[#FFFFFF] font-display text-[#111318] min-h-screen flex flex-col overflow-x-hidden">
      <main className="flex-1 flex justify-center pt-24 pb-20">
        <div className="max-w-7xl w-full flex flex-col px-6">
          <div className="flex gap-3 mb-6">
            <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors pl-4 pr-4 border border-gray-200">
              <span className="text-secondary-green-700 text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-8">
            <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.02em]">
              {article.title}
            </h1>
            <p className="text-gray-500 text-xl md:text-2xl font-light leading-normal">
              {article.description}
            </p>
          </div>

          <div className="flex items-center justify-between border-b border-gray-200 pb-8 mb-8">
            <div className="flex items-center gap-4">
              <div
                className="bg-center bg-no-repeat bg-cover rounded-full h-12 w-12 border border-gray-200"
                data-alt={`Close up portrait of the author ${article.author}`}
                style={{
                  backgroundImage: `url("${article.authorImage}")`,
                }}
              ></div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <p className="text-black text-base font-bold leading-tight">
                    {article.author}
                  </p>
                  <span className="text-secondary-green-700 text-sm font-medium hover:underline cursor-pointer">
                    Follow
                  </span>
                </div>
                <p className="text-gray-500 text-sm font-normal">
                  {article.date} • {article.readTime}
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mb-10 rounded-xl overflow-hidden shadow-2xl shadow-gray-200/50">
            <div className="relative w-full aspect-video">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="bg-gray-50 p-3 text-center border-t border-gray-100">
              <p className="text-gray-400 text-sm italic">
                Image credit: LuminoED
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

          <section
            className="mt-16 border-t border-gray-200 pt-10"
            id="comments"
          >
            <h3 className="text-black text-2xl font-bold mb-8 flex items-center gap-2">
              Discussion{" "}
              <span className="text-gray-400 text-lg font-normal">(0)</span>
            </h3>
            <p className="text-gray-500">Comments section coming soon.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
