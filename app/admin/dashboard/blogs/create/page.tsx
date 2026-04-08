import { ContentLayout } from "@/components/dashboard-panel/content-layout";
import { BlogForm } from "@/features/blog/components/BlogForm";

export default function CreateBlogPage() {
  return (
    <ContentLayout title="Create Article">
      <BlogForm />
    </ContentLayout>
  );
}
