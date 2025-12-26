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
  { label: "Smart Class", href: "/services/smart-school/smart-class" },
  { label: "Smart Talent", href: "/services/smart-school/smart-talent" },
  { label: "Smart Asset", href: "/services/smart-school/smart-asset" },
  { label: "Smart Management", href: "/services/smart-school/smart-management" },
];

export default function SmartSchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <section className="relative min-h-screen">

      {/* TOP NAV AREA */}
      <div className="max-w-7xl mx-6 md:mx-auto pt-20 pb-10">

        {/* NAVIGATION */}
        <div className="flex justify-between items-center">

          {/* LEFT TITLE */}
          <Link
            href="/services/smart-school"
            className={`group flex items-center gap-2 ${
              pathname === "/services/smart-school"
                ? "text-primary-blue font-bold"
                : "text-primary-green font-semibold"
            }`}
          >
            <Image
              src="/navbar/services/smart-school.svg"
              alt="Smart School"
              width={20}
              height={20}
            />
            <p className="text-xs md:text-base whitespace-nowrap">
              Smart School Management
            </p>
          </Link>

          {/* DESKTOP TABS */}
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

          {/* Mobile Dropdown */}
            <div className="tablet-landscape-max:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger className="bg-white text-black px-4 py-2 rounded-md text-xs md:text-base outline">
                {
                    tabs.find(tab => tab.href === pathname)?.label || "Overview"
                }
                </DropdownMenuTrigger>

                <DropdownMenuPortal>
                <DropdownMenuContent
                    side="bottom"
                    align="end"
                    className="bg-white rounded-md shadow-md w-44"
                >
                    <DropdownMenuItem asChild>
                    <Link
                        href="/services/smart-school"
                        className={`block px-4 py-2 ${
                        pathname === "/services/smart-school"
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

      {/* PAGE CONTENT */}
      <div className="relative">
        {children}
      </div>

    </section>
  );
}