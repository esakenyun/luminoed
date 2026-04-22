"use client";

import { useState, useEffect, startTransition } from "react";
import {
  IoMenu,
  IoClose,
  IoSchool,
  IoLogoGoogle,
  IoColorPalette,
  IoVideocam,
  IoCamera,
  IoHardwareChip,
  IoPeople,
  IoCube,
  IoSettings,
  IoDocumentText,
  IoClipboard,
} from "react-icons/io5";

import { GiBrain } from "react-icons/gi";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Check, Globe } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "@/components/providers/I18nProvider";

type MenuView = "main" | "services" | "language";

export default function NavbarMobile() {
  const { t, locale, setLocale } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuView, setMenuView] = useState<MenuView>("main");

  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    if (isModalOpen) {
      setMenuView("main");
    }
  };

  const handleNavigate = () => {
    setIsModalOpen(false);
    setMenuView("main");
  };

  if (pathname.startsWith("/admin")) {
    return null;
  }

  // Tutup modal & reset menu saat navigasi
  useEffect(() => {
    startTransition(() => {
      setIsModalOpen(false);
      setMenuView("main");
    });
  }, [pathname, searchParams]);

  const servicesTraining = [
    {
      label: t("navbar.megamenu.trainingItems.trainingIt"),
      href: "/services/training/training-it",
      image: "/navbar/services/it-training.svg",
      icon: IoSchool,
    },
    {
      label: t("navbar.megamenu.trainingItems.aiTechnology"),
      image: "/navbar/services/ai-tech.svg",
      href: "/services/training/ai-technology",
      icon: GiBrain,
    },
    {
      label: t("navbar.megamenu.trainingItems.googleWorkspace"),
      image: "/navbar/services/google-workspace.svg",
      href: "/services/training/google-workspace-for-education",
      icon: IoLogoGoogle,
    },
  ];

  const servicesMarketing = [
    {
      label: t("navbar.megamenu.marketingItems.designMarketing"),
      image: "/navbar/services/design-marketing.svg",
      href: "/services/marketing/design-marketing",
      icon: IoColorPalette,
    },
  ];

  const servicesStreaming = [
    {
      label: t("navbar.megamenu.streamingItems.liveStreaming"),
      image: "/navbar/services/live-streaming.svg",
      href: "/services/streaming/live-streaming",
      icon: IoVideocam,
    },
    {
      label: t("navbar.megamenu.streamingItems.photographyVideography"),
      image: "/navbar/services/photography-videography.svg",
      href: "/services/streaming/photography-videography",
      icon: IoCamera,
    },
    {
      label: t("navbar.megamenu.streamingItems.hybridLearning"),
      image: "/navbar/services/hybrid-learning.svg",
      href: "/services/streaming/hybrid-learning",
      icon: IoCamera,
    },
  ];

  const servicesEquipment = [
    {
      label: t("navbar.megamenu.equipmentProvisionItems.discoverMore"),
      image: "/navbar/services/equipment-provision.svg",
      href: "/services/equipment-provision",
      icon: IoHardwareChip,
    },
  ];

  const servicesSmartSchool = [
    {
      label: t("navbar.megamenu.smartSchoolManagementItems.smartClass"),
      image: "/navbar/services/smart-class.svg",
      href: "/services/smart-school/smart-class",
      icon: IoPeople,
    },
    {
      label: t("navbar.megamenu.smartSchoolManagementItems.smartTalent"),
      image: "/navbar/services/smart-talent.svg",
      href: "/services/smart-school/smart-talent",
      icon: GiBrain,
    },
    {
      label: t("navbar.megamenu.smartSchoolManagementItems.smartAsset"),
      href: "/services/smart-school/smart-asset",
      image: "/navbar/services/smart-asset.svg",
      icon: IoCube,
    },
    {
      label: t("navbar.megamenu.smartSchoolManagementItems.smartManagement"),
      image: "/navbar/services/smart-management.svg",
      href: "/services/smart-school/smart-management",
      icon: IoSettings,
    },
  ];

  const servicesAdditional = [
    {
      label: t("navbar.megamenu.additionalServicesItems.lessonPlan"),
      image: "/navbar/services/lesson-plan.svg",
      href: "/services/additional/lesson-plan",
      icon: IoClipboard,
    },
    {
      label: t("navbar.megamenu.additionalServicesItems.eRapor"),
      image: "/navbar/services/eRapor.svg",
      href: "/services/additional/erapor",
      icon: IoDocumentText,
    },
  ];

  const languages = [
    { code: "id", label: "Indonesia", flag: "🇮🇩", abbr: "INA" },
    { code: "en", label: "English", flag: "🇺🇸", abbr: "ENG" },
  ];

  const selectedLang = languages.find((l) => l.code === locale) || languages[1];

  const getPageKey = (path = pathname || "/") => {
    if (path.startsWith("/services")) return "services";
    if (path.startsWith("/about")) return "about";
    if (path.startsWith("/blog")) return "blog";
    return "home";
  };

  const pageKey = getPageKey();

  const pageConfig: Record<
    string,
    {
      logoSrc: string;
      menuClass: string;
    }
  > = {
    home: {
      logoSrc: "/logo/logo-color.png",
      menuClass:
        "py-1.5 px-3 rounded-full bg-primary-green/50 backdrop-blur-lg text-white",
    },
    services: {
      logoSrc: "/logo/logo-color.png",
      menuClass:
        "py-1.5 px-3 rounded-full bg-primary-green/50 backdrop-blur-lg text-primary-blue",
    },
    about: {
      logoSrc: "/logo/logo-color.png",
      menuClass:
        "py-1.5 px-3 rounded-full bg-primary-green/50 backdrop-blur-lg text-primary-blue",
    },
    blog: {
      logoSrc: "/logo/logo-color.png",
      menuClass:
        "py-1.5 px-3 rounded-full bg-primary-green/50 backdrop-blur-lg text-primary-blue",
    },
  };

  const cfg = pageConfig[pageKey] ?? pageConfig.home;

  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 px-6 lg:hidden">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={cfg.logoSrc}
            width={500}
            height={500}
            className="w-28 h-7"
            alt="Logo"
            priority
          />
        </Link>

        <button onClick={toggleModal} className={cfg.menuClass}>
          <IoMenu className="text-xl" />
        </button>
      </nav>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={toggleModal}
          >
            <motion.div
              className="absolute inset-0 bg-white flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="shrink-0 flex justify-between items-center border-b border-dashed p-6">
                <AnimatePresence mode="wait">
                  {menuView !== "main" ? (
                    <motion.button
                      key="back"
                      onClick={() => setMenuView("main")}
                      className="flex items-center gap-1 text-secondary-green-700 text-lg"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -20, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <IoIosArrowBack />
                      Back
                    </motion.button>
                  ) : (
                    <motion.div
                      key="logo"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link href="/">
                        <Image
                          src={"/logo/logo-color.png"}
                          width={500}
                          height={500}
                          className="w-28 h-7"
                          alt="Logo"
                          priority
                        />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={toggleModal}
                  className="text-2xl text-gray-600"
                >
                  <IoClose />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto overflow-x-hidden overscroll-contain touch-pan-y">
                <AnimatePresence mode="wait">
                  {menuView === "main" && (
                    <motion.ul
                      key="main"
                      className="p-6 space-y-6 text-xl font-semibold text-primary-blue"
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <li
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => setMenuView("services")}
                      >
                        <span>{t("navbar.services")}</span>
                        <IoIosArrowForward />
                      </li>

                      <li>
                        <Link href="/about">{t("navbar.about")}</Link>
                      </li>

                      <li>
                        <Link href="/blog">{t("navbar.blog")}</Link>
                      </li>

                      <li
                        className="flex justify-between items-center cursor-pointer pt-6 border-t border-dashed"
                        onClick={() => setMenuView("language")}
                      >
                        <div className="flex items-center gap-2">
                          <Globe className="w-5 h-5" />
                          <span>Language</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-neutral-400">
                          <span>{selectedLang.abbr}</span>
                          <IoIosArrowForward />
                        </div>
                      </li>
                    </motion.ul>
                  )}

                  {menuView === "services" && (
                    <motion.div
                      key="services"
                      className="pb-24"
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                    >
                      <div className="px-6 pt-6">
                        <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          {t("navbar.megamenu.training")}
                        </p>
                        <ul className="space-y-4">
                          {servicesTraining.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-4 text-lg active:scale-[0.98] transition"
                              >
                                <div className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center">
                                  <Image
                                    src={item.image}
                                    width={50}
                                    height={50}
                                    className="w-5 h-5"
                                    alt={item.label}
                                    priority
                                  />
                                </div>
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="my-6 border-t border-dashed" />

                      <div className="px-6">
                        <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          {t("navbar.megamenu.marketing")}
                        </p>
                        <ul className="space-y-4">
                          {servicesMarketing.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-4 text-lg active:scale-[0.98] transition"
                              >
                                <div className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center">
                                  <Image
                                    src={item.image}
                                    width={50}
                                    height={50}
                                    className="w-5 h-5"
                                    alt={item.label}
                                    priority
                                  />
                                </div>
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="my-6 border-t border-dashed" />

                      <div className="px-6">
                        <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          {t("navbar.megamenu.streaming")}
                        </p>
                        <ul className="space-y-4">
                          {servicesStreaming.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-4 text-lg active:scale-[0.98] transition"
                              >
                                <div className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center">
                                  <Image
                                    src={item.image}
                                    width={50}
                                    height={50}
                                    className="w-5 h-5"
                                    alt={item.label}
                                    priority
                                  />
                                </div>
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="my-6 border-t border-dashed" />

                      <div className="px-6">
                        <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          {t("navbar.megamenu.equipmentProvision")}
                        </p>
                        <ul className="space-y-4">
                          {servicesEquipment.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-4 text-lg active:scale-[0.98] transition"
                              >
                                <div className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center">
                                  <Image
                                    src={item.image}
                                    width={50}
                                    height={50}
                                    className="w-5 h-5"
                                    alt={item.label}
                                    priority
                                  />
                                </div>
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="my-6 border-t border-dashed" />

                      <div className="px-6">
                        <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          {t("navbar.megamenu.smartSchoolManagement")}
                        </p>
                        <ul className="space-y-4">
                          {servicesSmartSchool.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-4 text-lg active:scale-[0.98] transition"
                              >
                                <div className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center">
                                  <Image
                                    src={item.image}
                                    width={50}
                                    height={50}
                                    className="w-5 h-5"
                                    alt={item.label}
                                    priority
                                  />
                                </div>
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="my-6 border-t border-dashed" />

                      <div className="px-6">
                        <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                          {t("navbar.megamenu.additionalServices")}
                        </p>
                        <ul className="space-y-4">
                          {servicesAdditional.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-4 text-lg active:scale-[0.98] transition"
                              >
                                <div className="w-8 h-8 rounded-lg bg-neutral-50 flex items-center justify-center">
                                  <Image
                                    src={item.image}
                                    width={50}
                                    height={50}
                                    className="w-5 h-5"
                                    alt={item.label}
                                    priority
                                  />
                                </div>
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}

                  {menuView === "language" && (
                    <motion.div
                      key="language"
                      className="p-6 space-y-6"
                      initial={{ x: 30, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -30, opacity: 0 }}
                    >
                      <p className="text-xs font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                        Select Language
                      </p>
                      <ul className="space-y-4">
                        {languages.map((lang) => (
                          <li
                            key={lang.code}
                            onClick={() => {
                              setLocale(lang.code as any);
                              setMenuView("main");
                            }}
                            className="flex items-center justify-between py-2 cursor-pointer active:bg-gray-50 rounded-lg transition-colors"
                          >
                            <div className="flex items-center gap-4 text-lg font-medium text-primary-blue">
                              <span className="text-2xl">{lang.flag}</span>
                              <span>{lang.label}</span>
                            </div>
                            {locale === lang.code && (
                              <Check className="w-5 h-5 text-primary-green" />
                            )}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="shrink-0 py-6 px-6 bg-white border-t border-dashed">
                <Link
                  href="/contact"
                  onClick={handleNavigate}
                  className="flex items-center justify-center gap-2 bg-primary-blue text-white rounded-full py-4 px-8 font-bold text-lg hover:bg-secondary-blue-900 transition-all shadow-lg active:scale-[0.98]"
                >
                  <span>{t("navbar.contactSales")}</span>
                  <IoIosArrowForward className="text-xl" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {isModalOpen && (
        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      )}
    </header>
  );
}
