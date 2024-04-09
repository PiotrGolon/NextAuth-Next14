"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="bg-secondary flex justify-between p-4 rounded-xl w-[600px] shadow-sm">
      <div className="flex gap-x-2">
        <Button asChild variant={pathname === "/server" ? "moj" : "outline"}>
          <Link href="/server">Serwer</Link>
        </Button>
        <Button asChild variant={pathname === "/client" ? "moj" : "outline"}>
          <Link href="/client">Klient</Link>
        </Button>
        <Button asChild variant={pathname === "/admin" ? "moj" : "outline"}>
          <Link href="/admin">Admin</Link>
        </Button>
        <Button asChild variant={pathname === "/settings" ? "moj" : "outline"}>
          <Link href="/settings">Ustawienia</Link>
        </Button>
      </div>
      <UserButton />
    </nav>
  );
};
