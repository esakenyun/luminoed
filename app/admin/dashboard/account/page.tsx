import { ContentLayout } from "@/components/dashboard-panel/content-layout";
import { AccountClientPage } from "@/features/users/pages/AccountPage";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const session = await auth();

  if (session?.user?.role !== "SUPERADMIN") {
    redirect("/admin/dashboard");
  }

  return (
    <ContentLayout title="Account Management">
      <AccountClientPage />
    </ContentLayout>
  );
}
