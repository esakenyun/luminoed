"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/components/providers/I18nProvider";

export default function Footer() {
  const { t } = useTranslation();
  const pathname = usePathname();

  if (pathname.startsWith("/admin")) {
    return null;
  }

  const navLinks = [
    { href: "/", label: t("footer.links.home") },
    { href: "/blog", label: t("footer.links.blog") },
    { href: "/about", label: t("footer.links.about") },
    { href: "/privacy-policy", label: t("footer.links.privacy") },
  ];

  return (
    <footer className="w-full bg-primary-blue text-white py-30 px-6">
      <div className="max-w-7xl px-6 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block hover:underline transition-colors ${
                pathname === link.href ? "text-lime-300 font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="space-y-4 pr-10">
          <p className="text-lime-300 font-semibold">{t("footer.followUs")}</p>
          <div className="flex items-center gap-3">
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-2 bg-white rounded-md hover:scale-110 transition-transform"
            >
              <Linkedin className="text-black" size={18} />
            </Link>

            <Link
              href="https://instagram.com"
              target="_blank"
              className="p-2 bg-white rounded-md hover:scale-110 transition-transform"
            >
              <Instagram className="text-black" size={18} />
            </Link>
          </div>

          <p className="text-lime-300 font-semibold pt-3">
            {t("footer.contactUs")}
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="tel:+62 815 712 0816"
              className="p-2 bg-white rounded-md inline-block hover:scale-110 transition-transform"
            >
              <Phone className="text-black" size={18} />
            </Link>
            <p className="text-neutral-200">+62 815 712 0816</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="mailto:adminlumino@kibarcm.id"
              className="p-2 bg-white rounded-md inline-block hover:scale-110 transition-transform"
            >
              <Mail className="text-black" size={18} />
            </Link>
            <p className="text-neutral-200">adminlumino@kibarcm.id</p>
          </div>

          <div className="pt-2 flex items-center gap-3">
            <Link
              href="https://maps.google.com/?q=Jl. Bulutangkis No. 13, Arcamanik, Bandung, Jawa Barat 40293"
              target="_blank"
              className="p-2 bg-white rounded-md inline-block hover:scale-110 transition-transform"
            >
              <MapPin className="text-black" size={18} />
            </Link>
            <p className="text-neutral-200">
              Jl. Bulutangkis No. 13, Arcamanik, Bandung, Jawa Barat 40293
            </p>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-4xl font-bold text-white leading-tight">
            {t("footer.cta.title")}
          </h2>
          <button
            onClick={() => (window.location.href = "/contact")}
            className="mt-10 flex items-center gap-2 cursor-pointer py-3 px-8 bg-primary-green text-xl font-bold text-white rounded-full hover:bg-white hover:text-primary-blue transition-all shadow-lg"
          >
            {t("footer.cta.button")}
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="mt-30 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="flex justify-center md:justify-start">
          <div className="p-8 rounded-2xl bg-white shadow-xl">
            <Image
              src="/logo/logo-color.png"
              alt="LuminoED Logo"
              width={250}
              height={50}
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-10 space-y-4">
          <p className="text-white font-bold text-lg">
            {t("footer.copyright")}
          </p>
          <p className="text-neutral-300 leading-relaxed">
            {t("footer.trademark")}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20">
        <div className="h-px bg-white/20"></div>
      </div>
    </footer>
  );
}
