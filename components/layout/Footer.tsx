"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About Us" },
    { href: "/privacy-policy", label: "Privacy Policy" },
  ];

  return (
    <footer className="w-full bg-primary-blue text-white py-30 px-6">
      <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
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

        <div className="space-y-4 pr-10">
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
          <div className="flex items-center gap-3">
            <Link
              href="tel:+62 815 712 0816"
              className="p-2 bg-white rounded-md inline-block"
            >
              <Phone className="text-black" size={18} />
            </Link>
            <p>+62 815 712 0816</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="tel:+62 815 712 0816"
              className="p-2 bg-white rounded-md inline-block"
            >
              <Mail className="text-black" size={18} />
            </Link>
            <p>adminlumino@kibarcm.id</p>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <Link
              href="tel:+62 815 712 0816"
              className="p-2 bg-white rounded-md inline-block"
            >
              <MapPin className="text-black" size={18} />
            </Link>
            <p>Jl. Bulutangkis No. 13, Arcamanik, Bandung, Jawa Barat 40293</p>
          </div>
        </div>

        <div className="mt-10 items-center justify-center md:justify-center">
          <h2 className="text-4xl font-bold text-white">
            Elevate your business now, with creative solutions!
          </h2>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="mt-10 flex gap-0.5 cursor-pointer py-2 px-4 bg-primary-green text-xl font-bold text-white rounded-full hover:text-primary-blue"
          >
            Start Your Project
            <ChevronRight className="mt-1" />
          </button>
        </div>
      </div>

      <div className="mt-30 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="flex justify-center md:justify-center">
          <Image
            src="/logo/logo-color.png"
            alt="LuminoED Logo"
            width={500}
            height={10}
            className="p-10 rounded-[5px] bg-white"
          />
        </div>

        <div className="mt-10 space-y-4">
          <p className="text-white font-bold">Copyright © 2025 LuminoED</p>
          <p className="text-white">
            LuminoEd is a trademark of PT Kibar Cendekia Muda. Registered in the
            Directorate General of Intellectual Property of the Republic of
            Indonesia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20">
        <div className="h-0.5 bg-primary-green"></div>
      </div>
    </footer>
  );
}
