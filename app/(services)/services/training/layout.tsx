import type { Metadata } from "next";
import { metadata as serviceMetadata } from "./metadata";
import TrainingLayoutClient from "./layout.client";

export const metadata: Metadata = serviceMetadata;

export default function TrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TrainingLayoutClient>{children}</TrainingLayoutClient>;
}
