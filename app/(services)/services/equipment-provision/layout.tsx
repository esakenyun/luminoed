import type { Metadata } from "next";
import { metadata as equipmentMetadata } from "./metadata";

export const metadata: Metadata = equipmentMetadata;

export default function EquipmentprovisionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
