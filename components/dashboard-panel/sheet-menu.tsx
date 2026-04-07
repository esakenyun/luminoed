"use client";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Menu } from "@/components/dashboard-panel/menu";
import {
  Sheet,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useRoleSettings } from "@/features/auth/hooks/use-role-settings";

interface SheetMenuProps {
  unit?: string;
}

export function SheetMenu({ unit }: SheetMenuProps) {
  const {
    sidebarBg,
    sidebarText,
    activeColor,
    activeHoverColor,
    roleTitle,
    dashboardHref,
  } = useRoleSettings();

  return (
    <Sheet>
      <SheetTrigger className="tablet-landscape-max:hidden" asChild>
        <Button className="h-8" variant="outline" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent
        className={cn(
          "sm:w-72 px-3 h-full flex flex-col",
          sidebarBg,
          sidebarText,
        )}
        side="left"
      >
        <SheetHeader className="mt-5 flex items-center justify-center border-b border-slate-100 pb-5">
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <Button variant="linkMenu" className="p-0 bg-transparent" asChild>
            <Link
              href={dashboardHref}
              className="flex items-center justify-center"
            >
              <div className="flex justify-center px-4">
                <Image
                  src={"/logo/logo-color.png"}
                  width={120}
                  height={32}
                  className="h-8 w-auto object-contain"
                  alt="logo"
                  priority
                />
              </div>
            </Link>
          </Button>
          <SheetDescription className="sr-only">
            Sidebar Navigation Mobile
          </SheetDescription>
        </SheetHeader>
        <Menu
          isOpen
          activeColor={activeColor}
          activeHoverColor={activeHoverColor}
        />
      </SheetContent>
    </Sheet>
  );
}
