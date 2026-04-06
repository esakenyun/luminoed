import {
  Bookmark,
  LayoutGrid,
  LucideIcon,
  Settings,
  SquarePen,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string, role?: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/admin/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: [],
        },
      ],
    },
    {
      groupLabel: "Menu",
      menus: [
        {
          href: "",
          label: "Blogs",
          icon: SquarePen,
          submenus: [
            {
              href: "/admin/dashboard/blogs",
              label: "All Blogs",
            },
            {
              href: "/posts/new",
              label: "New Post",
            },
          ],
        },
        {
          href: "/admin/dashboard/categories",
          label: "Categories",
          icon: Bookmark,
        },
      ],
    },
    {
      groupLabel: "Settings",
      menus: [
        ...(role === "SUPERADMIN"
          ? [
              {
                href: "/admin/dashboard/account",
                label: "Account",
                icon: Settings,
              },
            ]
          : []),
      ],
    },
  ];
}
