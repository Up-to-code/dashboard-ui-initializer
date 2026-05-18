"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

export default function OrganizationSettingsPage() {
  const isAr = useLocale() === "ar";
  const [organizationName, setOrganizationName] = useState("Little Builders");
  const canEditOrganization = true;

  return (
    <div className="min-h-full bg-[#F8FAFC] dark:bg-black">
      <div className="mx-auto max-w-2xl space-y-6 p-4 sm:p-6 lg:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2563EB]">{isAr ? "المؤسسة" : "Organization"}</p>
          <h1 className="mt-2 text-3xl font-bold text-[#0F172A] dark:text-slate-100">{isAr ? "إعدادات المؤسسة" : "Organization settings"}</h1>
        </div>

        <section className="rounded-2xl border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 p-6">
          <label className="block">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{isAr ? "اسم المؤسسة" : "Organization name"}</span>
            <div className="mt-2 flex gap-2">
              <input
                value={organizationName}
                onChange={(event) => setOrganizationName(event.target.value)}
                disabled={!canEditOrganization}
                className="h-11 min-w-0 flex-1 rounded-lg border border-[#E2E8F0] dark:border-white/10 bg-white dark:bg-zinc-950 px-3 text-sm font-semibold text-[#0F172A] dark:text-slate-100 outline-none disabled:bg-[#F8FAFC] dark:bg-black disabled:text-slate-500 dark:text-slate-400 focus:border-[#2563EB] focus:ring-4 focus:ring-[#DBEAFE] dark:focus:ring-white/10"
              />
              {canEditOrganization && (
                <Button className="h-11 bg-[#2563EB] text-white hover:bg-[#1D4ED8]">
                  <Check className="h-4 w-4" />
                  {isAr ? "حفظ" : "Save"}
                </Button>
              )}
            </div>
          </label>
        </section>
      </div>
    </div>
  );
}
