"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SidebarToggle } from "./sidebar-toggle";
import { Menu } from "./menu";
import Image from "next/image";

interface SidebarProps {
  backgroundColor: string;
  textColor: string;
  activeColor: string;
  activeHoverColor: string;
  title: string;
  dashboardHref: string;
  unit?: string;
}

export function Sidebar({
  backgroundColor,
  textColor,
  activeColor,
  activeHoverColor,
  title,
  dashboardHref,
  unit,
}: SidebarProps) {
  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;
  const { isOpen, toggleOpen, getOpenState, setIsHover, settings } = sidebar;
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen -translate-x-full tablet-landscape-max:translate-x-0 transition-[width] ease-in-out duration-300",
        !getOpenState() ? "w-[90px]" : "w-60",
        settings.disabled && "hidden",
        backgroundColor,
        textColor,
      )}
    >
      <SidebarToggle isOpen={isOpen} setIsOpen={toggleOpen} />
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="relative h-full flex flex-col px-3 overflow-y-hidden shadow-md"
      >
        <div className="flex items-center justify-center h-[108px] tablet-landscape-max:h-[80px] shrink-0 border-b border-slate-100">
          <Button
            className={cn(
              "transition-all ease-in-out duration-300",
              !getOpenState() ? "w-10 h-10 p-0" : "w-full bg-transparent p-0",
            )}
            variant="linkMenu"
            asChild
          >
            <Link
              href={dashboardHref}
              className="flex items-center justify-center w-full"
            >
              {!getOpenState() ? (
                <div className="w-10 h-10 bg-secondary-green-400 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm shrink-0">
                  L
                </div>
              ) : (
                <div className="w-full flex justify-center px-6">
                  <Image
                    src={"/logo/logo-color.png"}
                    width={100}
                    height={32}
                    className="h-8 w-auto object-contain"
                    alt="logo"
                    priority
                  />
                </div>
              )}
            </Link>
          </Button>
        </div>
        <Menu
          isOpen={getOpenState()}
          activeColor={activeColor}
          activeHoverColor={activeHoverColor}
        />
      </div>
    </aside>
  );
}
