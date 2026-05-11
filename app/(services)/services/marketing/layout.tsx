import type { Metadata } from "next";
import { metadata as serviceMetadata } from "./metadata";

export const metadata: Metadata = serviceMetadata;

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative min-h-screen">
      <div className="relative">{children}</div>
    </section>
  );
}
