import DashboardPanelLayout from "@/components/dashboard-panel/dashboard-layout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardPanelLayout>{children}</DashboardPanelLayout>;
}
