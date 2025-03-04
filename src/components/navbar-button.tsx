"use client";

import { useState, useCallback, useEffect } from "react";

import { Button } from "@/components/ui/button";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { FolderKanban, HomeIcon, UserCircle2Icon } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: HomeIcon },
  { id: "about", label: "About", icon: UserCircle2Icon },
  { id: "project", label: "Project", icon: FolderKanban },
];

interface NavbarButtonProps {
  isMobile?: boolean;
}

export const NavbarButton = ({ isMobile = false }: NavbarButtonProps) => {
  const [activeSection, setActiveSection] = useState("home");

  // Scroll function with useCallback to optimize performance
  const scrollToSection = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(id);
  }, []);

  // Detect active section when scrolling
  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);
        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { threshold: 0.6 } // Trigger when 60% of the section is visible
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Render buttons for mobile
  if (isMobile) {
    return (
      <SheetContent className="bg-black border-black text-white">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
          <div className="flex flex-col items-start gap-y-2">
            {navItems.map((item) => (
              <SheetClose asChild key={item.id}>
                <Button
                  variant={item.id === activeSection ? "secondary" : "ghost"}
                  onClick={() => scrollToSection(item.id)}
                >
                  <item.icon />
                  {item.label}
                </Button>
              </SheetClose>
            ))}
          </div>
        </SheetHeader>
      </SheetContent>
    );
  }

  // Render buttons for desktop
  return (
    <>
      {navItems.map((item) => (
        <Button
          key={item.id}
          variant={item.id === activeSection ? "secondary" : "ghost"}
          onClick={() => scrollToSection(item.id)}
        >
          <item.icon />
          {item.label}
        </Button>
      ))}
    </>
  );
};
