"use client";

import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useLocale } from "next-intl";

export function Topbar() {
  const isAr = useLocale() === "ar";

  return (
    <header className="flex h-16 items-center justify-end gap-2 border-b border-[#E2E8F0] bg-white px-4 dark:border-white/10 dark:bg-zinc-950 sm:px-6 lg:px-8">
      <ThemeToggle className="h-10 w-10 rounded-lg shadow-none" />
      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-lg text-slate-500 hover:bg-[#F8FAFC] hover:text-[#0F172A] dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white">
        <Settings className="h-5 w-5" />
        <span className="sr-only">{isAr ? "فتح الإعدادات" : "Open settings"}</span>
      </Button>
    </header>
  );
}
