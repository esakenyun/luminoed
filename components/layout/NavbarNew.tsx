"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, ChevronRight, Globe, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useTranslation } from "@/components/providers/I18nProvider";

const heavyShadow =
  "0 30px 60px -12px rgba(50, 50, 93, 0.25), 0 18px 36px -18px rgba(0, 0, 0, 0.3)";
const lightShadow = "none";

export default function NavbarNew() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { t } = useTranslation();

  const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

  const isActive = hover || open || langOpen;

  return (
    <div
      className="hidden lg:block absolute top-0 left-0 right-0 z-50"
      onMouseEnter={() => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        hoverTimeout.current = setTimeout(() => setHover(true), 100);
      }}
      onMouseLeave={() => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        hoverTimeout.current = setTimeout(() => setHover(false), 120);
      }}
    >
      <NavigationMenu.Root
        className="relative w-full z-50"
        onValueChange={(val) => setOpen(!!val)}
      >
        <div className="relative mt-1.5">
          <div
            className={`
              absolute inset-0 mx-auto
              transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]

              ${isActive ? "max-w-7xl bg-white shadow-sm border border-gray-100 lg:mx-5 xl:mx-auto" : "max-w-7xl lg:mx-5 xl:mx-auto bg-transparent border border-transparent"}
${open ? "rounded-t-lg" : "rounded-lg"}
            `}
            style={{ boxShadow: isActive ? heavyShadow : lightShadow }}
          />

          <div className="relative max-w-7xl mx-auto lg:mx-5 xl:mx-auto">
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-10">
                <Link href="/">
                  <Image
                    src="/logo/logo-color.png"
                    width={120}
                    height={32}
                    className="w-auto h-auto"
                    alt="logo"
                    priority
                  />
                </Link>
              </div>

              <NavigationMenu.List className="flex items-center gap-7">
                <NavItem label={t("navbar.home")} path="/" />

                <NavigationMenu.Item value="Services">
                  <NavigationMenu.Trigger className="group flex items-center gap-1 font-semibold text-[#425466] hover:text-[#0A2540] cursor-pointer">
                    {t("navbar.services")}
                    <ChevronDown className="w-3.5 h-3.5 mt-0.5 transition-transform group-data-[state=open]:rotate-180" />
                  </NavigationMenu.Trigger>

                  <NavigationMenu.Content>
                    <MegaMenu />
                  </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavItem label={t("navbar.blog")} path="/blog" />
                <NavItem label={t("navbar.about")} path="/about" />
              </NavigationMenu.List>

              <div className="flex items-center gap-4">
                <LanguageSelector
                  isOpen={langOpen}
                  onOpenChange={setLangOpen}
                />
                <Link
                  href="/contact"
                  className="flex items-center gap-1.5 bg-secondary-blue-900 text-[#EEEEEE] px-4 py-1.5 rounded-md text-sm font-semibold"
                >
                  {t("navbar.contactSales")}
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute left-0 top-full w-full z-50">
          <div className="max-w-7xl mx-auto lg:mx-5 xl:mx-auto">
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
  const { t } = useTranslation();

  const servicesDropdown = [
    {
      title: t("navbar.megamenu.training"),
      items: [
        {
          label: t("navbar.megamenu.trainingItems.trainingIt"),
          href: "services/training/training-it",
        },
        {
          label: t("navbar.megamenu.trainingItems.aiTechnology"),
          href: "services/training/ai-technology",
        },
        {
          label: t("navbar.megamenu.trainingItems.googleWorkspace"),
          href: "services/training/google-workspace",
        },
      ],
    },
    {
      title: t("navbar.megamenu.marketing"),
      items: [
        {
          label: t("navbar.megamenu.marketingItems.designMarketing"),
          href: "services/marketing/design-marketing",
        },
      ],
    },
    {
      title: t("navbar.megamenu.streaming"),
      items: [
        {
          label: t("navbar.megamenu.streamingItems.liveStreaming"),
          href: "services/streaming/live-streaming",
        },
        {
          label: t("navbar.megamenu.streamingItems.hybridLearning"),
          href: "services/streaming/hybrid-learning",
        },
        {
          label: t("navbar.megamenu.streamingItems.photographyVideography"),
          href: "services/streaming/photography-videography",
        },
      ],
    },
    {
      title: t("navbar.megamenu.equipmentProvision"),
      items: [
        {
          label: t("navbar.megamenu.equipmentProvisionItems.discoverMore"),
          href: "services/equipment-provision",
        },
      ],
    },
    {
      title: t("navbar.megamenu.smartSchoolManagement"),
      items: [
        {
          label: t("navbar.megamenu.smartSchoolManagementItems.smartClass"),
          href: "services/smart-school/smart-class",
        },
        {
          label: t("navbar.megamenu.smartSchoolManagementItems.smartTalent"),
          href: "services/smart-school/smart-talent",
        },
        {
          label: t("navbar.megamenu.smartSchoolManagementItems.smartAsset"),
          href: "services/smart-school/smart-asset",
        },
        {
          label: t(
            "navbar.megamenu.smartSchoolManagementItems.smartManagement",
          ),
          href: "services/smart-school/smart-management",
        },
      ],
    },
    {
      title: t("navbar.megamenu.additionalServices"),
      items: [
        {
          label: t("navbar.megamenu.additionalServicesItems.lessonPlan"),
          href: "services/additional/lesson-plan",
        },
        {
          label: t("navbar.megamenu.additionalServicesItems.eRapor"),
          href: "services/additional/erapor",
        },
      ],
    },
  ];

  const topRow = [
    servicesDropdown[0],
    servicesDropdown[1],
    servicesDropdown[2],
  ];

  const bottomRow = [
    servicesDropdown[3],
    servicesDropdown[4],
    servicesDropdown[5],
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-3">
        {/* TOP ROW */}
        {topRow.map((section, idx) => (
          <div
            key={idx}
            className={idx !== 0 ? "border-l border-gray-200" : ""}
          >
            <div className="px-8 py-8">
              <h4 className="text-sm font-medium text-[#425466] mb-3">
                {section.title}
              </h4>

              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/${item.href}`}
                      className="text-sm font-medium text-secondary-green-600 hover:text-secondary-green-900"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}

        {/* FULL WIDTH DIVIDER */}
        <div className="col-span-3 border-t border-gray-200" />

        {/* BOTTOM ROW */}
        {bottomRow.map((section, idx) => (
          <div
            key={idx}
            className={idx !== 0 ? "border-l border-gray-200" : ""}
          >
            <div className="px-8 py-8">
              <h4 className="text-sm font-medium text-[#425466] mb-3">
                {section.title}
              </h4>

              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i}>
                    <Link
                      href={`/${item.href}`}
                      className="text-sm font-medium text-secondary-green-600 hover:text-secondary-green-900"
                    >
                      {item.label}
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

function LanguageSelector({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { locale, setLocale } = useTranslation();

  const languages = [
    { code: "id", label: "Indonesia", flag: "🇮🇩", abbr: "INA" },
    { code: "en", label: "English", flag: "🇺🇸", abbr: "ENG" },
  ];

  const selectedLang = languages.find((l) => l.code === locale) || languages[1];

  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger asChild>
        <button className="flex items-center gap-2 px-2 py-1 rounded-full text-sm font-semibold text-[#425466]">
          <Globe className="w-4 h-4" />
          {selectedLang.abbr}
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Content className="bg-white rounded-xl shadow-lg p-2">
        {languages.map((lang) => (
          <DropdownMenu.Item
            key={lang.code}
            onClick={() => setLocale(lang.code as any)}
            className="px-3 py-2 rounded-md cursor-pointer hover:bg-gray-100 flex items-center justify-between"
          >
            <span>
              {lang.label} {lang.flag}
            </span>
            {locale === lang.code && (
              <Check className="w-4 h-4 ml-2 inline text-green-600" />
            )}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

function NavItem({ label, path }: { label: string; path: string }) {
  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link asChild>
        <Link
          href={path}
          className="text-base font-semibold text-[#425466] hover:text-[#0A2540]"
        >
          {label}
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
}
