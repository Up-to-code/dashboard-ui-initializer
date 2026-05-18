"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { BarChart3, BookOpen, Home, MessageCircle, MessageSquareText } from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import { Sidebar } from "@/components/layout/sidebar";
import { SidebarProvider } from "@/components/layout/sidebar-context";
import { Topbar } from "@/components/layout/topbar";
import { ToastProvider } from "@/components/ui/toast";
import { AccountProvider } from "@/domains/auth";
import { cn } from "@/lib/utils";
import { markAppPerformance } from "@/lib/utils/performance";
import { appConfig } from "@/app-config";
import { useLocale } from "next-intl";

export function DashboardAppWrapper({ children }: { children: ReactNode }) {
  return (
    <AccountProvider>
      <DashboardAuthenticatedShell>{children}</DashboardAuthenticatedShell>
    </AccountProvider>
  );
}

function DashboardAuthenticatedShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    markAppPerformance("shell:ready", { workspaceStatus: "demo" });
    markAppPerformance("workspace:ready", { organizationId: appConfig.demoOrganizationId });
  }, []);

  return (
    <ToastProvider>
      <SidebarProvider>
        <div className="flex h-full overflow-hidden bg-background text-text-primary">
          <div className="hidden h-full lg:flex">
            <Sidebar />
          </div>

          <div className="relative flex min-w-0 flex-1 flex-col overflow-hidden bg-surface">
            <Topbar />
            <main className="flex-1 overflow-y-auto pb-20 outline-none lg:pb-0">{children}</main>
            <MobileNav />
          </div>
        </div>
      </SidebarProvider>
    </ToastProvider>
  );
}

const mobileNavItems = [
  { label: "home", href: "/dashboard", icon: Home },
  { label: "channels", href: "/channels", icon: MessageCircle },
  { label: "contacts", href: "/conversations", icon: MessageSquareText },
  { label: "stats", href: "/analytics", icon: BarChart3 },
  { label: "knowledge", href: "/knowledge", icon: BookOpen },
] as const;

function MobileNav() {
  const pathname = usePathname();
  const locale = useLocale();
  const copy =
    locale === "ar"
      ? {
          home: "الرئيسية",
          channels: "القنوات",
          contacts: "جهات الاتصال",
          stats: "التحليلات",
          knowledge: "المعرفة",
        }
      : {
          home: "Home",
          channels: "Channels",
          contacts: "Contacts",
          stats: "Stats",
          knowledge: "Knowledge",
        };

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 px-2 py-2 lg:hidden">
      <div className="grid grid-cols-5 gap-1">
        {mobileNavItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : item.href === "/channels"
                ? pathname === "/channels" || pathname === "/channels/new"
                : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex h-12 flex-col items-center justify-center gap-1 rounded-lg text-[11px] font-semibold transition",
                isActive ? "bg-[#DBEAFE] dark:bg-white/10 text-[#2563EB]" : "text-slate-500 dark:text-slate-400 hover:bg-[#F8FAFC] dark:hover:bg-white/5 hover:text-[#0F172A] dark:text-slate-100",
              )}
            >
              <item.icon className="h-4 w-4" />
              <span className="max-w-full truncate px-1">{copy[item.label]}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
