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

              <NavigationMenu.Content className="absolute top-full mt-2 w-137.5 right-0 bg-[#EBEFF1] rounded-md p-1 shadow-lg z-50">
                <ul className="space-y-1">
                  <div className="p-3 bg-white rounded-md">
                    <h1 className="mb-3 font-semibold uppercase text-sm">
                      Training
                    </h1>
                    <div className="flex flex-wrap gap-5">
                      <div className="flex gap-3 items-center flex-[1_1_200px] hover:text-secondary-green-500">
                        {/* <GiTeacher /> */}
                        <Image
                          src={"/navbar/services/it-training.svg"}
                          alt="it-training"
                          width={50}
                          height={50}
                          className="w-5 h-5"
                          priority
                        />
                        <Link href={"/training/trainingIT"} className="text-xs">
                          Training IT
                        </Link>
                      </div>
                      <div className="flex gap-3 items-center flex-[1_1_200px] hover:text-secondary-green-500">
                        {/* <FaGoogle /> */}
                        <Image
                          src={"/navbar/services/google-workspace.svg"}
                          alt="google-workspace"
                          width={50}
                          height={50}
                          className="w-5 h-5"
                          priority
                        />
                        <Link
                          href={"/training/googleworkspace"}
                          className="text-xs"
                        >
                          Google Workspace for Education
                        </Link>
                      </div>
                      <div className="flex gap-3 items-center flex-[1_1_200px] hover:text-secondary-green-500">
                        {/* <RiRobot2Fill /> */}
                        <Image
                          src={"/navbar/services/ai-tech.svg"}
                          alt="ai-tech"
                          width={50}
                          height={50}
                          className="w-5 h-5"
                          priority
                        />
                        <Link
                          href={"/training/aitechnology"}
                          className="text-xs"
                        >
                          AI Technology
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-md">
                    <h1 className="mb-3 font-semibold uppercase text-sm">
                      Marketing
                    </h1>
                    <div className="flex gap-3 items-center hover:text-secondary-green-500">
                      {/* <MdDesignServices /> */}
                      <Image
                        src={"/navbar/services/design-marketing.svg"}
                        alt="desain-marketing"
                        width={50}
                        height={50}
                        className="w-5 h-5"
                        priority
                      />
                      <Link href={"/training/aitechnology"} className="text-xs">
                        Design & Marketing
                      </Link>
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-md">
                    <h1 className="mb-3 font-semibold uppercase text-sm">
                      Streaming
                    </h1>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex gap-3 items-center hover:text-secondary-green-500">
                        {/* <CiStreamOn /> */}
                        <Image
                          src={"/navbar/services/live-streaming.svg"}
                          alt="live-streaming"
                          width={50}
                          height={50}
                          className="w-5 h-5"
                          priority
                        />
                        <Link
                          href={"/training/googleworkspace"}
                          className="text-xs"
                        >
                          Live Streaming
                        </Link>
                      </div>
                      <div className="flex gap-3 items-center hover:text-secondary-green-500">
                        {/* <FaPhotoVideo /> */}
                        <Image
                          src={"/navbar/services/photography-videography.svg"}
                          alt="photography-videography"
                          width={50}
                          height={50}
                          className="w-5 h-5"
                          priority
                        />
                        <Link
                          href={"/training/aitechnology"}
                          className="text-xs"
                        >
                          Photography & Videography
                        </Link>
                      </div>
                      <div className="flex gap-3 items-center hover:text-secondary-green-500">
                        {/* <FaPhotoVideo /> */}
                        <Image
                          src={"/navbar/services/hybrid-learning.svg"}
                          alt="hybrid-learning"
                          width={50}
                          height={50}
                          className="w-5 h-5"
                          priority
                        />
                        <Link
                          href={"/training/aitechnology"}
                          className="text-xs"
                        >
                          Hybrid Learning
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-md">
                    <div className="flex gap-3 items-center">
                      {/* <FaTools /> */}
                      <Image
                        src={"/navbar/services/equipment-provision.svg"}
                        alt="equipment-provision"
                        width={50}
                        height={50}
                        className="w-5 h-5"
                        priority
                      />
                      <h1 className="font-semibold uppercase text-sm">
                        EQUIPEMENT PROVISION
                      </h1>
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-md">
                    <Link
                      href={"/services/smart-school"}
                      className="font-semibold uppercase text-sm"
                    >
                      Smartschool Management
                    </Link>
                    <div className="mt-2 grid grid-cols-2 gap-5">
                      <div className="flex gap-3 items-center hover:text-secondary-green-500">
                        {/* <SiGoogleclassroom /> */}
                        <Image
                          src={"/navbar/services/smart-class.svg"}
                          alt="smart-class"
                          width={50}
                          height={50}
                          className="w-5 h-5"
                          priority
                        />
                        <Link href={"/training/trainingIT"} className="text-xs">
                          Smart Class
                        </Link>
                      </div>
                      <div className="flex gap-3 items-center hover:text-secondary-green-500">
                        {/* <FaUsers /> */}
                        <Image
                          src={"/navbar/services/smart-talent.svg"}
                          alt="smart-talent"
                          width={50}
                          height={50}
                          className="w-5 h-5"
                          priority
                        />
                        <Link
                          href={"/training/googleworkspace"}
                          className="text-xs"
                        >
                          Smart Talent
                        </Link>
                      </div>
                      <div className="flex gap-3 items-center hover:text-secondary-green-500">
                        {/* <FaBoxesStacked /> */}
                        <Image
                          src={"/navbar/services/smart-asset.svg"}
                          alt="smart-asset"
                          width={50}
                          height={50}
                          className="w-5 h-5"
                          priority
                        />
                        <Link
                          href={"/training/aitechnology"}
                          className="text-xs"
                        >
                          Smart Asset
                        </Link>
                      </div>
                      <div className="flex gap-3 items-center hover:text-secondary-green-500">
                        {/* <PiChartLineFill /> */}
                        <Image
                          src={"/navbar/services/smart-management.svg"}
                          alt="smart-management"
                          width={50}
                          height={50}
                          className="w-5 h-5"
                          priority
                        />
                        <Link
                          href={"/training/aitechnology"}
                          className="text-xs"
                        >
                          Smart Management
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-md">
                    <h1 className="mb-3 font-semibold uppercase text-sm">
                      Additional Services
                    </h1>
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex gap-3 items-center hover:text-secondary-green-500">
                        {/* <HiClipboardList /> */}
                        <Image
                          src={"/navbar/services/lesson-plan.svg"}
                          alt="lesson-plan"
                          width={50}
                          height={50}
                          className="w-5 h-5"
                          priority
                        />
                        <Link href={"/training/trainingIT"} className="text-xs">
                          Lesson Plan
                        </Link>
                      </div>
                      <div className="flex gap-3 items-center hover:text-secondary-green-500">
                        {/* <FaFileContract /> */}
                        <Image
                          src={"/navbar/services/eRapor.svg"}
                          alt="eRapor"
                          width={50}
                          height={50}
                          className="w-5 h-5"
                          priority
                        />
                        <Link
                          href={"/training/googleworkspace"}
                          className="text-xs"
                        >
                          eRapor
                        </Link>
                      </div>
                    </div>
                  </div>
                </ul>
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
