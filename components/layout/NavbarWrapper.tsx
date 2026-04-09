"use client";

import dynamic from "next/dynamic";
import React, { Suspense } from "react";
import { usePathname } from "next/navigation";

const Navbar = dynamic(() => import("./Navbar"), {
  ssr: false,
});

const NavbarMobile = dynamic(() => import("./NavbarMobile"), {
  ssr: false,
});

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
