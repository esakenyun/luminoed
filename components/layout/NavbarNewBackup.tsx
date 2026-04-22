"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const developersDropdown = [
  {
    title: "Documentation",
    items: [
      "Stripe docs",
      "API reference",
      "Libraries and SDKs",
      "Stripe Apps",
    ],
  },
  {
    title: "Guides",
    items: [
      "Accept online payments",
      "Implement a prebuilt checkout",
      "Build a platform or marketplace",
      "Manage subscriptions",
      "Offer usage-based billing",
      "Issue stablecoin-backed cards",
    ],
  },
  {
    title: "Resources",
    items: ["App integrations", "Code samples", "Developer blog", "API status"],
  },
];

export default function NavbarNew() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const heavyShadow =
    "0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3)";
  const lightShadow = "none";
  const isActive = hover;

  return (
    <div
      className="hidden lg:block absolute top-0 left-0 right-0 z-50"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <NavigationMenu.Root
        className="relative w-full z-50"
        onValueChange={(val) => setOpen(!!val)}
      >
        {/* NAVBAR */}
        <div className="relative mt-1.5">
          {/* BACKGROUND LAYER */}
          <div
            className={`
              absolute inset-0 mx-auto
              transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]

              ${isActive ? "max-w-7xl bg-white shadow-sm border border-gray-100" : "max-w-6xl bg-transparent border border-transparent"}
${open ? "rounded-t-lg" : "rounded-lg"}
            `}
            style={{ boxShadow: isActive ? heavyShadow : lightShadow }}
          />

          {/* CONTENT (ALWAYS 6xl) */}
          <div className="relative max-w-6xl mx-auto">
            <div className="flex items-center justify-between px-6 py-4">
              {/* LEFT */}
              <div className="flex items-center gap-10">
                <Link href="/">
                  <Image
                    src="/logo/logo-color.png"
                    width={120}
                    height={32}
                    alt="logo"
                    priority
                  />
                </Link>
              </div>

              {/* MENU */}
              <NavigationMenu.List className="flex items-center gap-7">
                <NavItem label="Home" />

                <NavigationMenu.Item value="developers">
                  <NavigationMenu.Trigger className="group flex items-center gap-1 font-semibold text-[#425466] hover:text-[#0A2540]">
                    Developers
                    <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform group-data-[state=open]:rotate-180" />
                  </NavigationMenu.Trigger>

                  <NavigationMenu.Content>
                    <MegaMenu />
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavItem label="Blog" />
                <NavItem label="About" />
              </NavigationMenu.List>

              {/* RIGHT */}
              <div className="flex items-center gap-4">
                <Link
                  href="#"
                  className="flex items-center gap-1.5 bg-secondary-blue-900 text-[#EEEEEE] px-4 py-1.5 rounded-md text-base font-semibold"
                >
                  Contact sales
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DROPDOWN */}
        <div className="absolute left-0 top-full w-full z-50">
          <div className="max-w-7xl mx-auto">
            <NavigationMenu.Viewport
              className="
                w-full
                bg-white
                border-t
                rounded-b-lg
                overflow-hidden

                transition-[opacity,transform] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]

                data-[state=open]:opacity-100
                data-[state=open]:translate-y-0

                data-[state=closed]:opacity-0
                data-[state=closed]:-translate-y-2
              "
              style={{ boxShadow: heavyShadow }}
            />
          </div>
        </div>
      </NavigationMenu.Root>
    </div>
  );
}

function MegaMenu() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-3">
        {developersDropdown.map((section, idx) => (
          <div
            key={idx}
            className={idx !== 0 ? "border-l border-gray-200" : ""}
          >
            <div className="px-8 py-10">
              <h4 className="text-sm font-medium text-[#425466] mb-5">
                {section.title}
              </h4>

              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="text-sm font-medium text-[#635BFF] hover:text-[#0A2540]"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NavItem({ label }: { label: string }) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <Link
          href={`/${label.toLowerCase()}`}
          className="text-base font-semibold text-[#425466] hover:text-[#0A2540]"
        >
          {label}
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}
