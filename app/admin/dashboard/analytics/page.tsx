import { ContentLayout } from "@/components/dashboard-panel/content-layout";
import AdminAnalyticsView from "@/features/analytics/pages/AdminAnalytics";
import { getActiveUsersData } from "@/lib/ga";

export default async function AdminAnalytics() {
  const analyticsData = await getActiveUsersData();

  return (
    <ContentLayout title="Analytics Users">
      <AdminAnalyticsView />
    </ContentLayout>
  );
}
