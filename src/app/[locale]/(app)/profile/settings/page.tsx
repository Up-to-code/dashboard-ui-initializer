"use client";

import { useState } from "react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

export default function ProfileSettingsPage() {
  const isAr = useLocale() === "ar";
  const [profileName, setProfileName] = useState("Alex Morgan");

  return (
    <div className="min-h-full bg-[#F8FAFC] dark:bg-black">
      <div className="mx-auto max-w-2xl space-y-6 p-4 sm:p-6 lg:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]">{isAr ? "الملف الشخصي" : "Profile"}</p>
          <h1 className="mt-2 text-3xl font-bold text-[#0F172A] dark:text-slate-100">{isAr ? "الملف الشخصي" : "Profile"}</h1>
        </div>

        <section className="rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 p-6">
          <label className="block">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{isAr ? "اسم المستخدم" : "Profile name"}</span>
            <input
              value={profileName}
              onChange={(event) => setProfileName(event.target.value)}
              className="mt-2 h-11 w-full rounded-lg border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 px-3 text-sm font-semibold text-[#0F172A] dark:text-slate-100 outline-none focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE] dark:focus:ring-white/10"
            />
          </label>

          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="text-sm font-semibold text-red-700">{isAr ? "منطقة الخطر" : "Danger area"}</p>
            <div className="mt-3 flex justify-end">
              <Button variant="outline" className="border-red-200 bg-white dark:bg-zinc-950 text-red-700 hover:bg-red-50">
              <LogOut className="h-4 w-4" />
              {isAr ? "تسجيل الخروج" : "Log out"}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
