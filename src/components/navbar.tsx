"use client";

import Image from "next/image";

import { MenuIcon } from "lucide-react";

import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { NavbarButton } from "./navbar-button";
import Link from "next/link";

interface NavbarProps {
  hideMenu?: boolean;
}

const Navbar = ({ hideMenu = false }: NavbarProps) => {
  return (
    <div className="flex items-center justify-between h-16 border-b border-gray-900 py-10 p-8 bg-black">
      <Link href="/">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={25} height={25} />
          <p className="text-lg font-semibold">My Portofolio</p>
        </div>
      </Link>
      {!hideMenu && (
        <>
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              <NavbarButton />
            </div>
          </div>
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <MenuIcon />
              </SheetTrigger>
              <NavbarButton isMobile />
            </Sheet>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
