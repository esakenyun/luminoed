import type { Metadata } from "next";
import { metadata as serviceMetadata } from "./metadata";
import SmartSchoolLayoutClient from "./layout.client";

export const metadata: Metadata = serviceMetadata;

export default function SmartSchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SmartSchoolLayoutClient>{children}</SmartSchoolLayoutClient>;
}
