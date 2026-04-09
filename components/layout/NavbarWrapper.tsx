"use client";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { usePathname } from "next/navigation";

import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      <Navbar />
      <Suspense fallback={null}>
        <NavbarMobile />
      </Suspense>
    </>
  );
}
