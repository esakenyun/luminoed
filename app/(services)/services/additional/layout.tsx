import type { Metadata } from "next";
import { metadata as serviceMetadata } from "./metadata";
import AdditionalLayoutClient from "./layout.client";

export const metadata: Metadata = serviceMetadata;

export default function AdditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdditionalLayoutClient>{children}</AdditionalLayoutClient>;
}
