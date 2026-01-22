import type { Metadata } from "next";
import { metadata as serviceMetadata } from "./metadata";
import MarketingLayoutClient from "./layout.client";

export const metadata: Metadata = serviceMetadata;

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MarketingLayoutClient>{children}</MarketingLayoutClient>;
}
