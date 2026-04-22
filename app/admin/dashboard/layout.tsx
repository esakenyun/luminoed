import DashboardPanelLayout from "@/components/dashboard-panel/dashboard-layout";
import { AuthProvider } from "@/components/providers/session-provider";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <DashboardPanelLayout>{children}</DashboardPanelLayout>
    </AuthProvider>
  );
}
