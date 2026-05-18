"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  BookOpen,
  Camera,
  Check,
  Globe2,
  MessageCircle,
  Home,
  MessageSquareText,
  Plus,
  Send,
} from "lucide-react";
import { Link, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";

const primaryNav = [
  { label: "home", href: "/dashboard", icon: Home },
  { label: "channels", href: "/channels", icon: MessageCircle },
  { label: "contacts", href: "/conversations", icon: MessageSquareText },
  { label: "analytics", href: "/analytics", icon: BarChart3 },
  { label: "knowledge", href: "/knowledge", icon: BookOpen },
];

const bots = [
  { name: "Homework Helper", icon: Globe2, href: "/channels/homework-helper/overview" },
  { name: "Story Coach", icon: Camera, href: "/channels/story-coach/overview" },
  { name: "Classroom Guide", icon: Send, href: "/channels/classroom-guide/overview" },
];

export function Sidebar() {
  const pathname = usePathname();
  const isAr = useLocale() === "ar";
  const copy = isAr
    ? {
        home: "الرئيسية",
        channels: "القنوات",
        contacts: "جهات الاتصال",
        analytics: "التحليلات",
        knowledge: "المعرفة",
        saveOrg: "حفظ اسم المؤسسة",
        newChannel: "قناة جديدة",
        usage: "الاستخدام",
        owner: "مالك",
        organization: "المؤسسة",
      }
    : {
        home: "Home",
        channels: "Channels",
        contacts: "Contacts",
        analytics: "Analytics",
        knowledge: "Knowledge",
        saveOrg: "Save organization name",
        newChannel: "New Channel",
        usage: "Usage",
        owner: "Owner",
        organization: "Organization",
      };
  const [organizationName, setOrganizationName] = useState("Little Builders");
  const [isEditingOrganization, setIsEditingOrganization] = useState(false);
  const profileName = "Alex Morgan";

  function shortName(value: string) {
    return value.length > 5 ? `${value.slice(0, 5)}...` : value;
  }

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950">
      <div className="flex h-16 items-center border-b border-[#E2E8F0] dark:border-white/10 px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white dark:bg-zinc-950">
            <Image src="/brand-logo-dark-blue.svg" alt="Chats logo" width={24} height={28} priority className="h-7 w-auto" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-[#0F172A] dark:text-slate-100">Chats</p>
            <div className="mt-0.5 flex min-w-0 items-center gap-1">
              {isEditingOrganization ? (
                <>
                  <input
                    autoFocus
                    value={organizationName}
                    onChange={(event) => setOrganizationName(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") setIsEditingOrganization(false);
                    }}
                    className="h-6 min-w-0 flex-1 rounded-md border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 px-1.5 text-xs font-medium text-[#0F172A] dark:text-slate-100 outline-none focus:border-[#2563EB]"
                  />
                  <button
                    type="button"
                    onClick={() => setIsEditingOrganization(false)}
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[#2563EB] hover:bg-[#F8FAFC] dark:hover:bg-white/5"
                  >
                    <Check className="h-3.5 w-3.5" />
                    <span className="sr-only">{copy.saveOrg}</span>
                  </button>
                </>
              ) : (
                <button
                  type="button"
                  onClick={() => setIsEditingOrganization(true)}
                  className="truncate text-left text-xs text-slate-500 dark:text-slate-400 hover:text-[#2563EB]"
                >
                  {organizationName}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-1">
          {primaryNav.map((item) => {
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
                  "relative flex h-10 items-center gap-3 rounded-lg px-3 text-sm font-medium transition",
                  isActive ? "bg-[#DBEAFE] dark:bg-white/10 text-[#0F172A] dark:text-slate-100" : "text-slate-600 dark:text-slate-300 hover:bg-[#F8FAFC] dark:hover:bg-white/5 hover:text-[#0F172A] dark:text-slate-100",
                )}
              >
                {isActive && <span className="absolute left-0 h-5 w-0.5 rounded-r bg-[#2563EB]" />}
                <item.icon className={cn("h-4 w-4", isActive ? "text-[#2563EB]" : "text-slate-400 dark:text-slate-500")} />
                {copy[item.label as keyof typeof copy]}
              </Link>
            );
          })}
        </div>

        <div className="mt-7">
          <div className="mb-2 flex items-center justify-between px-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400 dark:text-slate-500">{copy.channels}</p>
          </div>
          <div className="space-y-1">
            {bots.map((bot) => {
              const isActive = pathname.startsWith(bot.href.replace("/overview", ""));
              const ChannelIcon = bot.icon;

              return (
                <Link
                  key={bot.href}
                  href={bot.href}
                  className={cn(
                    "relative flex items-center gap-3 rounded-lg px-3 py-2 transition",
                    isActive ? "bg-[#DBEAFE] dark:bg-white/10 text-[#0F172A] dark:text-slate-100" : "hover:bg-[#F8FAFC] dark:hover:bg-white/5",
                  )}
                >
                  {isActive && <span className="absolute left-0 h-5 w-0.5 rounded-r bg-[#2563EB]" />}
                  <ChannelIcon className={cn("h-4 w-4 shrink-0", isActive ? "text-[#2563EB]" : "text-slate-400 dark:text-slate-500")} />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-semibold text-[#0F172A] dark:text-slate-100">{bot.name}</span>
                  </span>
                </Link>
              );
            })}
          </div>
          <Link
            href="/channels/new"
            className="mt-3 flex h-10 items-center justify-center gap-2 rounded-lg border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 text-sm font-semibold text-[#2563EB] transition hover:bg-[#F8FAFC] dark:hover:bg-white/5"
          >
            <Plus className="h-4 w-4" />
            {copy.newChannel}
          </Link>
        </div>
      </nav>

      <div className="border-t border-[#E2E8F0] dark:border-white/10 p-4">
        <div className="mb-4">
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="font-medium text-slate-500 dark:text-slate-400">{copy.usage}</span>
            <span className="font-semibold text-[#0F172A] dark:text-slate-100">64%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
            <div className="h-full w-[64%] rounded-full bg-[#2563EB]" />
          </div>
        </div>
        <div className="space-y-2 rounded-xl border border-[#E2E8F0] dark:border-white/10 bg-[#F8FAFC] dark:bg-black p-2">
          <Link href="/profile/settings" className="flex items-center gap-2 rounded-lg bg-white dark:bg-zinc-950 p-2 transition hover:bg-[#F8FAFC] dark:hover:bg-white/5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#DBEAFE] dark:bg-white/10 text-xs font-bold text-[#2563EB]">
              {profileName.charAt(0)}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-[#0F172A] dark:text-slate-100">{shortName(profileName)}</span>
              <span className="block truncate text-xs text-slate-500 dark:text-slate-400">{copy.owner}</span>
            </span>
          </Link>

          <Link href="/settings/organization" className="flex items-center gap-2 rounded-lg bg-white dark:bg-zinc-950 p-2 transition hover:bg-[#F8FAFC] dark:hover:bg-white/5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0F172A] text-xs font-bold text-white">
              {organizationName.charAt(0)}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-[#0F172A] dark:text-slate-100">{shortName(organizationName)}</span>
              <span className="block truncate text-xs text-slate-500 dark:text-slate-400">{copy.organization}</span>
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
