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
          active: pathname === "/admin/dashboard",
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
          active: pathname.startsWith("/admin/dashboard/blogs"),
          submenus: [
            {
              href: "/admin/dashboard/blogs",
              label: "All Blogs",
              active: pathname === "/admin/dashboard/blogs",
            },
            {
              href: "/admin/dashboard/blogs/create",
              label: "New Post",
              active: pathname === "/admin/dashboard/blogs/create",
            },
          ],
        },
        {
          href: "/admin/dashboard/categories",
          label: "Categories",
          icon: Bookmark,
          active: pathname.startsWith("/admin/dashboard/categories"),
        },
      ],
    },
    ...(role === "SUPERADMIN"
      ? [
          {
            groupLabel: "Settings",
            menus: [
              {
                href: "/admin/dashboard/account",
                label: "Account",
                icon: Settings,
                active: pathname.startsWith("/admin/dashboard/account"),
              },
            ],
          },
        ]
      : []),
  ];
}
