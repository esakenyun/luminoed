import type { Metadata } from "next";
import { metadata as serviceMetadata } from "./metadata";
import StreamingLayoutClient from "./layout.client";

export const metadata: Metadata = serviceMetadata;

export default function StreamingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StreamingLayoutClient>{children}</StreamingLayoutClient>;
}
