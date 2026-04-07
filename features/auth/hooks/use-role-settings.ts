import { usePathname } from "next/navigation";

export function useRoleSettings() {
  const pathname = usePathname();

  let sidebarBg = "bg-white";
  let sidebarText = "text-black";
  let activeColor = "bg-emerald-500 text-white";

  let activeHoverColor = "hover:bg-emerald-500 hover:text-white";
  let roleTitle = "Lumino School";
  let dashboardHref = "/admin/dashboard";

  if (pathname.includes("/admin/dashboard")) {
    sidebarBg = "bg-white";
    sidebarText = "text-primary-blue";
    activeColor = "bg-secondary-green-400 text-white";
    activeHoverColor = "hover:bg-secondary-green-400 hover:text-white";
    roleTitle = "Pimpinan";
    dashboardHref = "/admin/dashboard";
  }

  return {
    sidebarBg,
    sidebarText,
    activeColor,
    activeHoverColor,
    roleTitle,
    dashboardHref,
  };
}
