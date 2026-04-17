import { ContentLayout } from "@/components/dashboard-panel/content-layout";
import { BlogForm } from "@/features/blog/components/BlogForm";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface EditBlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const { slug } = await params;

  const blog = await prisma.blog.findUnique({
    where: { slug },
  });

  if (!blog) {
    notFound();
  }

  return (
    <ContentLayout title="Edit Article">
      <BlogForm initialData={blog} />
    </ContentLayout>
  );
}
