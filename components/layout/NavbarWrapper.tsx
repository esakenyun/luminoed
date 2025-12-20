"use client";

import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"), {
  ssr: false,
});

const NavbarMobile = dynamic(() => import("./NavbarMobile"), {
  ssr: false,
});

export default function NavbarWrapper() {
  return (
    <>
      <Navbar />
      <NavbarMobile />
    </>
  );
}
