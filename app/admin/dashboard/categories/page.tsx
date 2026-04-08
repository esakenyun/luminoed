import { ContentLayout } from "@/components/dashboard-panel/content-layout";
import CategoryManagerContent from "@/features/categories/components/CategoryManagerContent";

export default function CategoriesPage() {
  return (
    <ContentLayout title="Categories">
      <CategoryManagerContent />
    </ContentLayout>
  );
}
