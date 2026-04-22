"use client";

import dynamic from "next/dynamic";
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
      {/* <NavbarNew /> */}
      <NavbarMobile />
    </>
  );
}
