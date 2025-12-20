"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Phone } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ];

  return (
    <footer className="w-full bg-primary-blue text-white py-12 px-6">
      {/* TOP SECTION */}
      <div className="max-w-400 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Left Menu */}
        <div className="space-y-3">
          {navLinks
            .filter((link) => link.href !== "/services")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block hover:underline ${
                  pathname === link.href ? "text-lime-300 font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
        </div>

        {/* Social + Contact */}
        <div className="space-y-4">
          <p className="text-lime-300">Follow Us On</p>
          <div className="flex items-center gap-3">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-2 bg-white rounded-md"
            >
              <Linkedin className="text-black" size={18} />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="p-2 bg-white rounded-md"
            >
              <Instagram className="text-black" size={18} />
            </Link>
          </div>

          <p className="text-lime-300 pt-3">Contact Us</p>
          <Link
            href="tel:+123456789"
            className="p-2 bg-white rounded-md inline-block"
          >
            <Phone className="text-black" size={18} />
          </Link>
        </div>

        {/* Logo */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/logo/logo-color.png"
            alt="LuminoED Logo"
            width={200}
            height={200}
            className="rounded-xl bg-white/10 p-3"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-400 mx-auto mt-10">
        <div className="h-0.5 bg-primary-green"></div>
      </div>

      {/* Copyright */}
      <p className="text-center mt-6 text-sm font-semibold text-white">
        Copyright © {new Date().getFullYear()} LuminoED
      </p>
    </footer>
  );
}
