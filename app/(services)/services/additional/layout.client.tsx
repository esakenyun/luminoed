"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { label: "Lesson Plan", href: "/services/additional/lesson-plan" },
  { label: "E-Rapor", href: "/services/additional/erapor" },
];

export default function AdditionalLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <section className="relative min-h-screen">
      <div className="max-w-7xl mx-6 md:mx-0 xl:mx-auto pt-20 pb-10">
        <div className="flex justify-between items-center md:px-5 xl:px-0">
          <Link
            href="/services/additional"
            className={`group flex items-center gap-2 ${
              pathname === "/services/additional"
                ? "text-primary-blue font-bold"
                : "text-primary-green font-semibold"
            }`}
          >
            <Image
              src="/navbar/services/lesson-plan.svg"
              alt="Additional Services"
              width={20}
              height={20}
            />
            <p className="text-xs md:text-base whitespace-nowrap">
              Additional Services
            </p>
          </Link>

          <ul className="hidden tablet-landscape-max:flex gap-5 px-3">
            {tabs.map((tab) => (
              <li key={tab.href}>
                <Link
                  href={tab.href}
                  className={
                    pathname === tab.href
                      ? "font-bold text-primary-blue"
                      : "text-primary-green"
                  }
                >
                  {tab.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="tablet-landscape-max:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="bg-white text-black px-4 py-2 rounded-md text-xs md:text-base outline">
                {tabs.find((tab) => tab.href === pathname)?.label || "Overview"}
              </DropdownMenuTrigger>

              <DropdownMenuPortal>
                <DropdownMenuContent
                  side="bottom"
                  align="end"
                  className="bg-white rounded-md shadow-md w-44"
                >
                  <DropdownMenuItem asChild>
                    <Link
                      href="/services/additional"
                      className={`block px-4 py-2 ${
                        pathname === "/services/additional"
                          ? "font-bold text-primary-blue"
                          : ""
                      }`}
                    >
                      Overview
                    </Link>
                  </DropdownMenuItem>

                  {tabs.map((tab) => (
                    <DropdownMenuItem key={tab.href} asChild>
                      <Link
                        href={tab.href}
                        className={`block px-4 py-2 ${
                          pathname === tab.href
                            ? "font-bold text-primary-blue"
                            : ""
                        }`}
                      >
                        {tab.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <div className="relative">{children}</div>
    </section>
  );
}
