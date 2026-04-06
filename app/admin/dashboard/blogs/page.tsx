import { ContentLayout } from "@/components/dashboard-panel/content-layout";
import BlogClient from "./BlogClient";

export default function BlogMenuPage() {
  return (
    <ContentLayout title="Blogs">
      <BlogClient />
    </ContentLayout>
  );
}
