"use client";
import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Image from "next/image";

type ListItemProps = React.ComponentPropsWithoutRef<"a"> & {
  title: string;
  children: React.ReactNode;
};

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, ...props }, ref) => {
    return (
      <li>
        <NavigationMenu.Link asChild>
          <a
            ref={ref}
            className={`block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7 ${
              className ?? ""
            }`}
            {...props}
          >
            <div className="mb-1.25 font-medium leading-[1.2] text-violet12">
              {title}
            </div>
            <p className="leading-[1.4] text-mauve11">{children}</p>
          </a>
        </NavigationMenu.Link>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export default function Navbar() {
  const pathname = usePathname();
  const [hidden, setHidden] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const [activeService, setActiveService] = React.useState<
          "training" | "marketing" | "streaming" | "equipment provision" | "smartschool" | "additional"
        >("training");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const goingDown = latest > previous;
    const goingUp = latest < previous;

    if (latest < 100) {
      setScrolled(false);
      setHidden(false);
      return;
    }

    setScrolled(true);

    if (goingDown) setHidden(true);
    else if (goingUp) setHidden(false);
  });

  const getPageKey = (path = pathname || "/") => {
    if (path.startsWith("/services")) return "services";
    if (path.startsWith("/about")) return "about";
    if (path.startsWith("/blog")) return "about";
    return "home";
  };

  const pageKey = getPageKey();

  const pageConfig: Record<
    string,
    {
      logoSrc: string;
      textClass: string;
      hoverClass: string;
      activeClass: string;
    }
  > = {
    home: {
      logoSrc: "/logo/logo-white.png",
      textClass: "text-white/90",
      hoverClass: "hover:text-primary-green",
      activeClass: "text-primary-green font-semibold",
    },
    services: {
      logoSrc: "/logo/logo-color.png",
      textClass: "text-slate-500",
      hoverClass: "hover:text-primary-blue",
      activeClass: "text-primary-blue font-semibold",
    },
    blog: {
      logoSrc: "/logo/logo-color.png",
      textClass: "text-slate-500",
      hoverClass: "hover:text-primary-blue",
      activeClass: "text-primary-blue font-semibold",
    },
    about: {
      logoSrc: "/logo/logo-color.png",
      textClass: "text-slate-500",
      hoverClass: "hover:text-primary-blue",
      activeClass: "text-primary-blue font-semibold",
    },
  };

  const cfg = pageConfig[pageKey] ?? pageConfig.home;

  const headerBgClass =
    pageKey === "home"
      ? scrolled
        ? "bg-primary-blue"
        : "bg-transparent"
      : "bg-transparent";

  const navItemClass = (href: string) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname?.startsWith(href) ?? false;

    return `relative px-3 py-2 text-xl rounded-md transition-colors duration-150 ${
      isActive ? cfg.activeClass : cfg.textClass
    } ${!isActive ? cfg.hoverClass : ""}`;
  };

  return (
    <motion.header
      className={`hidden md:block fixed top-0 z-50 w-full backdrop-blur transition-colors duration-300 ${headerBgClass}`}
      animate={hidden ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <nav className="mx-auto flex items-center justify-between max-w-7xl py-4">
        <Link href={"/"}>
          <Image
            src={cfg.logoSrc}
            width={500}
            height={500}
            alt="logo"
            className="w-32 h-auto"
            priority
          />
        </Link>

        <NavigationMenu.Root>
          <NavigationMenu.List className="relative flex items-center gap-8 font-medium ">
            <NavigationMenu.Item>
              <NavigationMenu.Link href="/" className={navItemClass("/")}>
                Home
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Trigger
                className={`group flex items-center gap-1 ${navItemClass(
                  "/services"
                )} focus:shadow-[0_0_0_2px] focus:shadow-blue-400`}
              >
                Services
                <svg
                  className="relative h-5 w-5 transition-transform duration-300 group-data-[state=open]:-rotate-180 mt-1"
                  viewBox="0 0 15 15"
                >
                  <path
                    d="M4 6l3.5 3L11 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </NavigationMenu.Trigger>

              <NavigationMenu.Content className="absolute top-full mt-2 right-0 w-[900px] bg-[#EBEFF1] rounded-xl p-2 shadow-xl z-50">
                <div className="grid grid-cols-3 gap-2">

                  {/* LEFT */}
                  <div className="col-span-1 bg-white rounded-lg p-4 space-y-3">
                    {[
                      { key: "training", label: "Training" },
                      { key: "marketing", label: "Marketing" },
                      { key: "streaming", label: "Streaming" },
                      { key: "equipment provision", label: "Equipment Provision" },
                      { key: "smartschool", label: "Smartschool Management" },
                      { key: "additional", label: "Additional Services" },
                    ].map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setActiveService(item.key as any)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition
                          ${
                            activeService === item.key
                              ? "bg-primary-blue text-white"
                              : "hover:bg-slate-100 text-slate-700"
                          }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>

                  {/* RIGHT */}
                  <div className="col-span-2 bg-white rounded-lg p-5">

                    {activeService === "training" && (
                      <>
                        <a href="/services/training" className="font-semibold uppercase text-sm">Training</a>
                        <div className="mt-4 grid grid-cols-2 gap-5">
                          <ServiceItem
                            icon="/navbar/services/it-training.svg"
                            label="Training IT"
                            href="/services/training/training-it"
                          />
                          <ServiceItem
                            icon="/navbar/services/google-workspace.svg"
                            label="Google Workspace for Education"
                            href="/services/training/google-workspace-for-education"
                          />
                          <ServiceItem
                            icon="/navbar/services/ai-tech.svg"
                            label="AI Technology"
                            href="/services/training/ai-technology"
                          />
                        </div>
                      </>
                    )}

                    {activeService === "marketing" && (
                      <>
                        <a href="/services/marketing" className="font-semibold uppercase text-sm">Marketing</a>
                        <div className="mt-4 grid grid-cols-2 gap-5">
                        <ServiceItem
                          icon="/navbar/services/design-marketing.svg"
                          label="Design & Marketing"
                          href="/services/marketing/design-marketing"
                        />
                        </div>
                      </>
                    )}

                    {activeService === "streaming" && (
                      <>
                        <a href="/services/streaming" className="font-semibold uppercase text-sm">Streaming</a>
                        <div className="mt-4 grid grid-cols-2 gap-5">
                          <ServiceItem 
                            icon="/navbar/services/live-streaming.svg" 
                            label="Live Streaming" 
                            href="/services/streaming/live-streaming"
                          />
                          <ServiceItem 
                            icon="/navbar/services/photography-videography.svg" 
                            label="Photography & Videography"
                            href="/services/streaming/photography-videography"
                          />
                          <ServiceItem 
                            icon="/navbar/services/hybrid-learning.svg" 
                            label="Hybrid Learning" 
                            href="/services/streaming/hybrid-learning"
                          />
                        </div>
                      </>
                    )}

                    {activeService === "equipment provision" && (
                      <>
                        <a href="/services/equipment-provision" className="font-semibold uppercase text-sm">Equipment Provision</a>
                        <div className="mt-4 grid grid-cols-2 gap-5">
                        <ServiceItem
                          icon="/navbar/services/equipment-provision.svg"
                          label="Equipment Provision"
                          href="/services/equipment-provision"
                        />
                        </div>
                      </>
                    )}

                    {activeService === "smartschool" && (
                      <>
                        <a href="/services/smart-school" className="font-semibold uppercase text-sm">Smartschool Management</a>
                        <div className="mt-4 grid grid-cols-2 gap-5">
                          <ServiceItem 
                            icon="/navbar/services/smart-class.svg" 
                            label="Smart Class"
                            href="/services/smart-school/smart-class"
                          />
                          <ServiceItem 
                            icon="/navbar/services/smart-talent.svg" 
                            label="Smart Talent" 
                            href="/services/smart-school/smart-talent"
                          />
                          <ServiceItem 
                            icon="/navbar/services/smart-asset.svg" 
                            label="Smart Asset" 
                            href="/services/smart-school/smart-asset"
                          />
                          <ServiceItem 
                            icon="/navbar/services/smart-management.svg" 
                            label="Smart Management" 
                            href="/services/smart-school/smart-management"
                          />
                        </div>
                      </>
                    )}

                    {activeService === "additional" && (
                      <>
                        <a href="/services/additional" className="font-semibold uppercase text-sm">Additional Services</a>
                        <div className="mt-4 grid grid-cols-2 gap-5">
                        <ServiceItem
                          icon="/navbar/services/lesson-plan.svg"
                          label="Lesson Plan"
                          href="/services/additional/lesson-plan"
                        />
                        <ServiceItem
                          icon="/navbar/services/eRapor.svg"
                          label="E-Rapor"
                          href="/services/additional/erapor"
                        />
                        </div>
                      </>
                    )}

                  </div>
                </div>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="/blog"
                className={navItemClass("/blog")}
              >
                Blog
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="/about"
                className={navItemClass("/about")}
              >
                About
              </NavigationMenu.Link>
            </NavigationMenu.Item>
            <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
              <div className="relative top-[70%] w-3 h-3 bg-[#EBEFF1] rotate-45" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>
        </NavigationMenu.Root>
      </nav>
    </motion.header>
  );
}

function ServiceItem({
  icon,
  label,
  href = "#",
}: {
  icon: string;
  label: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 text-sm hover:text-secondary-green-500"
    >
      <Image src={icon} alt={label} width={20} height={20} />
      {label}
    </Link>
  );
}