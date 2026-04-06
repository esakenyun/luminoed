import { cookies } from "next/headers";
import { SheetMenu } from "./sheet-menu";
import { auth } from "@/lib/auth";
import { UserNav } from "./user-nav";

interface NavbarProps {
  title: string;
}

export async function Navbar({ title }: NavbarProps) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("user_session")?.value;
  let user: any = null;

  if (sessionCookie) {
    try {
      user = JSON.parse(sessionCookie);
    } catch (e) {
      console.error("Failed to parse user session", e);
    }
  }

  if (!user) {
    const session = await auth();
    if (session?.user) {
      user = session.user;
    }
  }

  return (
    <header className="sticky top-0 z-10 w-full bg-background/95 shadow backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-4 sm:mx-8 flex h-14 items-center">
        <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-0 overflow-hidden">
          <SheetMenu />
          <div className="flex items-center min-w-0">
            <h1 className="font-bold text-sm sm:text-base truncate max-w-[120px] sm:max-w-none">
              {title}
            </h1>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end gap-3 md:gap-5">
          <UserNav
            name={user?.name || "User"}
            email={user?.email || ""}
            imageUrl={user?.imageUrl}
          />
        </div>
      </div>
    </header>
  );
}
