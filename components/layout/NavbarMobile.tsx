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

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

type MenuView = "main" | "services";

const servicesTraining = [
  {
    label: "Training IT",
    href: "/services/training/training-it",
    image: "/navbar/services/it-training.svg",
    icon: IoSchool,
  },
  {
    label: "AI Technology",
    image: "/navbar/services/ai-tech.svg",
    href: "/services/training/ai-technology",
    icon: GiBrain,
  },
  {
    label: "Google Workspace for Education",
    image: "/navbar/services/google-workspace.svg",
    href: "/services/training/google-workspace-for-education",
    icon: IoLogoGoogle,
  },
];

const servicesMarketing = [
  {
    label: "Design & Marketing",
    image: "/navbar/services/design-marketing.svg",
    href: "/services/marketing/design-marketing",
    icon: IoColorPalette,
  },
];

const servicesStreaming = [
  {
    label: "Live Streaming",
    image: "/navbar/services/live-streaming.svg",
    href: "/services/streaming/live-streaming",
    icon: IoVideocam,
  },
  {
    label: "Photography & Videography",
    image: "/navbar/services/photography-videography.svg",
    href: "/services/streaming/photography-videography",
    icon: IoCamera,
  },
  {
    label: "Hybrid Learning",
    image: "/navbar/services/hybrid-learning.svg",
    href: "/services/streaming/hybrid-learning",
    icon: IoCamera,
  },
];

const servicesEquipment = [
  {
    label: "Equipment Provision",
    image: "/navbar/services/equipment-provision.svg",
    href: "/services/equipment-provision",
    icon: IoHardwareChip,
  },
];

const servicesSmartSchool = [
  {
    label: "Smart Class",
    image: "/navbar/services/smart-class.svg",
    href: "/services/smart-school/smart-class",
    icon: IoPeople,
  },
  {
    label: "Smart Talent",
    image: "/navbar/services/smart-talent.svg",
    href: "/services/smart-school/smart-talent",
    icon: GiBrain,
  },
  {
    label: "Smart Asset",
    href: "/services/smart-school/smart-asset",
    image: "/navbar/services/smart-asset.svg",
    icon: IoCube,
  },
  {
    label: "Smart Management",
    image: "/navbar/services/smart-management.svg",
    href: "/services/smart-school/smart-management",
    icon: IoSettings,
  },
];

const servicesAdditional = [
  {
    label: "Lesson Plan",
    image: "/navbar/services/lesson-plan.svg",
    href: "/services/additional/lesson-plan",
    icon: IoClipboard,
  },
  {
    label: "eRapor",
    image: "/navbar/services/eRapor.svg",
    href: "/services/additional/erapor",
    icon: IoDocumentText,
  },
];

export default function NavbarMobile() {
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

  // Tutup modal & reset menu saat navigasi
  useEffect(() => {
    startTransition(() => {
      setIsModalOpen(false);
      setMenuView("main");
    });
  }, [pathname, searchParams]);

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
      logoSrc: "/logo/logo-white.png",
      menuClass:
        "py-1.5 px-3 rounded-full bg-slate-100/10 backdrop-blur-lg text-white",
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
    <header className="absolute top-0 left-0 w-full z-50 py-6 px-6 md:hidden">
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
                  {menuView === "services" ? (
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
                        <span>Services</span>
                        <IoIosArrowForward />
                      </li>

                      <li>
                        <Link href="/about">About Us</Link>
                      </li>

                      <li>
                        <Link href="/blog">Blog</Link>
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
                        <p className="text-xs font-semibold text-gray-400 mb-3">
                          Training
                        </p>
                        <ul className="space-y-4">
                          {servicesTraining.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-4 text-lg active:scale-[0.98] transition"
                              >
                                <Image
                                  src={item.image}
                                  width={50}
                                  height={50}
                                  className="w-5 h-5"
                                  alt={item.label}
                                  priority
                                />
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="my-6 border-t border-dashed" />

                      <div className="px-6">
                        <p className="text-xs font-semibold text-gray-400 mb-3">
                          Marketing
                        </p>
                        <ul className="space-y-4">
                          {servicesMarketing.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-4 text-lg active:scale-[0.98] transition"
                              >
                                <Image
                                  src={item.image}
                                  width={50}
                                  height={50}
                                  className="w-5 h-5"
                                  alt={item.label}
                                  priority
                                />
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="my-6 border-t border-dashed" />

                      <div className="px-6">
                        <p className="text-xs font-semibold text-gray-400 mb-3">
                          Streaming
                        </p>
                        <ul className="space-y-4">
                          {servicesStreaming.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-4 text-lg active:scale-[0.98] transition"
                              >
                                <Image
                                  src={item.image}
                                  width={50}
                                  height={50}
                                  className="w-5 h-5"
                                  alt={item.label}
                                  priority
                                />
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="my-6 border-t border-dashed" />

                      <div className="px-6">
                        <p className="text-xs font-semibold text-gray-400 mb-3">
                          Equipment Provision
                        </p>
                        <ul className="space-y-4">
                          {servicesEquipment.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-4 text-lg active:scale-[0.98] transition"
                              >
                                <Image
                                  src={item.image}
                                  width={50}
                                  height={50}
                                  className="w-5 h-5"
                                  alt={item.label}
                                  priority
                                />
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="my-6 border-t border-dashed" />

                      <div className="px-6">
                        <p className="text-xs font-semibold text-gray-400 mb-3">
                          SmartSchool Management
                        </p>
                        <ul className="space-y-4">
                          {servicesSmartSchool.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-4 text-lg active:scale-[0.98] transition"
                              >
                                <Image
                                  src={item.image}
                                  width={50}
                                  height={50}
                                  className="w-5 h-5"
                                  alt={item.label}
                                  priority
                                />
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="my-6 border-t border-dashed" />

                      <div className="px-6">
                        <p className="text-xs font-semibold text-gray-400 mb-3">
                          Additional Services
                        </p>
                        <ul className="space-y-4">
                          {servicesAdditional.map((item) => (
                            <li key={item.label}>
                              <Link
                                href={item.href}
                                className="flex items-center gap-4 text-lg active:scale-[0.98] transition"
                              >
                                <Image
                                  src={item.image}
                                  width={50}
                                  height={50}
                                  className="w-5 h-5"
                                  alt={item.label}
                                  priority
                                />
                                <span>{item.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="shrink-0 py-4 bg-white flex justify-center text-xs text-white font-bold">
                <Link
                  href="/contact"
                  onClick={handleNavigate}
                  className="inline-flex items-center
               bg-primary-green rounded-xl px-3 py-3"
                >
                  <span>Contact Us</span>
                  <IoIosArrowForward className="text-lg" />
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
