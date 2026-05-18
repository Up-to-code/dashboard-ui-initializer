"use client";

import NumberFlow from "@number-flow/react";
import { ArrowRight, CircleCheck } from "lucide-react";
import { useState } from "react";

import { LandingButton, PublicSection } from "@/components/landing/public-landing-kit";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const YEARLY_DISCOUNT = 20;
type TooltipKey = "sync" | "ai" | "governance";

type PricingPlan = {
  id: "launch" | "operate" | "institutional";
  name: string;
  price: number;
  description: string;
  buttonText: string;
  isPopular?: boolean;
  features: Array<{
    title: string;
    tooltip?: TooltipKey;
  }>;
};

const planCopy = {
  en: {
    eyebrow: "Pricing",
    title: "Choose the channel operations layer your team needs now.",
    description:
      "Start with a few connected channels, then expand into more agents, knowledge folders, automations, analytics, and team controls.",
    monthly: "Monthly",
    yearly: `Yearly (Save ${YEARLY_DISCOUNT}%)`,
    popular: "Most Popular",
    perMonth: "per month",
    tooltips: {
      sync: "Keeps WhatsApp, web chat, Telegram, Instagram, and Messenger connected to one workspace.",
      ai: "AI assists with replies, triage, escalation, summaries, and repetitive conversation work.",
      governance: "Controls roles, channel access, organization settings, and trusted team access.",
    },
    plans: [
      {
        id: "launch",
        name: "Launch",
        price: 79,
        description: "For teams connecting their first AI support and sales channels.",
        buttonText: "Start launch",
        features: [
          { title: "3 connected channels", tooltip: "sync" },
          { title: "Contacts and chat history" },
          { title: "Knowledge folders and uploads" },
          { title: "Core organization roles", tooltip: "governance" },
        ],
      },
      {
        id: "operate",
        name: "Operate",
        price: 149,
        description: "For growing teams that need multiple agents, automations, and better channel reporting.",
        buttonText: "Scale operations",
        isPopular: true,
        features: [
          { title: "Everything in Launch" },
          { title: "Multi-agent channel routing", tooltip: "ai" },
          { title: "Advanced channel access", tooltip: "governance" },
          { title: "Automation triggers and webhooks", tooltip: "sync" },
        ],
      },
      {
        id: "institutional",
        name: "Institutional",
        price: 299,
        description: "For organizations running many AI communication workflows across teams and brands.",
        buttonText: "Talk to Chats",
        features: [
          { title: "Everything in Operate" },
          { title: "Custom channel onboarding" },
          { title: "Conversation and agent exports", tooltip: "governance" },
          { title: "Dedicated implementation support" },
        ],
      },
    ],
  },
  ar: {
    eyebrow: "التسعير",
    title: "اختر طبقة تشغيل القنوات المناسبة لفريقك الآن.",
    description:
      "ابدأ بعدد قليل من القنوات المتصلة، ثم توسع إلى مزيد من الوكلاء، مجلدات المعرفة، الأتمتة، التحليلات، وصلاحيات الفريق.",
    monthly: "شهري",
    yearly: `سنوي (وفر ${YEARLY_DISCOUNT}%)`,
    popular: "الأكثر استخداماً",
    perMonth: "شهرياً",
    tooltips: {
      sync: "يحافظ على اتصال واتساب، دردشة الموقع، تيليجرام، إنستغرام، وماسنجر بمساحة عمل واحدة.",
      ai: "يساعد الذكاء الاصطناعي في الردود، الفرز، التصعيد، التلخيص، وعمل المحادثات المتكرر.",
      governance: "يدير الأدوار، صلاحيات القنوات، إعدادات المؤسسة، ووصول الفريق الموثوق.",
    },
    plans: [
      {
        id: "launch",
        name: "إطلاق",
        price: 79,
        description: "للفرق التي تربط أول قنوات دعم ومبيعات مدعومة بالذكاء الاصطناعي.",
        buttonText: "ابدأ الإطلاق",
        features: [
          { title: "3 قنوات متصلة", tooltip: "sync" },
          { title: "جهات الاتصال وسجل الدردشة" },
          { title: "مجلدات المعرفة والملفات" },
          { title: "أدوار المؤسسة الأساسية", tooltip: "governance" },
        ],
      },
      {
        id: "operate",
        name: "تشغيل",
        price: 149,
        description: "للفرق النامية التي تحتاج وكلاء متعددين، أتمتة، وتقارير قنوات أوضح.",
        buttonText: "وسّع العمليات",
        isPopular: true,
        features: [
          { title: "كل ما في إطلاق" },
          { title: "توجيه قنوات متعدد الوكلاء", tooltip: "ai" },
          { title: "صلاحيات قنوات متقدمة", tooltip: "governance" },
          { title: "محفزات أتمتة وويب هوك", tooltip: "sync" },
        ],
      },
      {
        id: "institutional",
        name: "مؤسسي",
        price: 299,
        description: "للمؤسسات التي تشغل تدفقات اتصالات ذكاء اصطناعي متعددة عبر الفرق والعلامات.",
        buttonText: "تحدث مع Chats",
        features: [
          { title: "كل ما في تشغيل" },
          { title: "تهيئة قنوات مخصصة" },
          { title: "تصدير المحادثات والوكلاء", tooltip: "governance" },
          { title: "دعم تنفيذ مخصص" },
        ],
      },
    ],
  },
} satisfies Record<
  "en" | "ar",
  {
    eyebrow: string;
    title: string;
    description: string;
    monthly: string;
    yearly: string;
    popular: string;
    perMonth: string;
    tooltips: Record<string, string>;
    plans: PricingPlan[];
  }
>;

export function Pricing03({ locale }: { locale: string }) {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");
  const copy = locale === "ar" ? planCopy.ar : planCopy.en;

  return (
    <PublicSection
      id="pricing"
      className="relative bg-white py-14 dark:bg-zinc-950 md:py-20"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] border border-zinc-200/70 bg-white dark:border-white/10 dark:bg-white/[0.04]">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500/70 to-transparent" />
          <div className="grid items-center gap-8 p-6 md:p-8 lg:grid-cols-[1fr_360px]">
            <div className="max-w-2xl text-start">
              <span className="inline-flex rounded-full border border-blue-500/15 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-blue-700 dark:border-blue-400/20 dark:bg-white/5 dark:text-blue-200">
                {copy.eyebrow}
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-black dark:text-white md:text-4xl rtl:leading-[1.18]">
                {copy.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {copy.description}
              </p>
            </div>

            <div>
              <div className="grid h-12 min-w-[320px] grid-cols-2 gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-1 dark:border-white/10 dark:bg-zinc-950/50">
                {(["monthly", "yearly"] as const).map((period) => {
                  const isActive = selectedBillingPeriod === period;

                  return (
                    <button
                      className={cn(
                        "inline-flex h-10 items-center justify-center rounded-full px-5 text-xs font-bold text-zinc-500 transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 dark:text-zinc-400",
                        isActive && "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950",
                      )}
                      key={period}
                      onClick={() => setSelectedBillingPeriod(period)}
                      type="button"
                    >
                      {period === "monthly" ? copy.monthly : copy.yearly}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      <div className="relative mt-9 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {copy.plans.map((plan) => {
          const price =
            selectedBillingPeriod === "monthly"
              ? plan.price
              : plan.price * ((100 - YEARLY_DISCOUNT) / 100);

          return (
            <article
              className={cn(
                "relative flex min-h-[430px] flex-col overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-50/60 p-6 text-start transition duration-300 hover:bg-white dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]",
                plan.isPopular && "border-blue-500 bg-blue-50/40 text-zinc-950 hover:bg-blue-50/50 dark:border-blue-400/70 dark:bg-blue-500/10 dark:text-white dark:hover:bg-blue-500/10",
              )}
              key={plan.name}
            >
              <div className={cn("absolute inset-x-6 top-0 h-1 rounded-b-full", plan.isPopular ? "bg-blue-500" : "bg-zinc-200 dark:bg-white/10")} />
              {plan.isPopular && (
                <Badge className="absolute end-6 top-5 bg-blue-600 text-white dark:bg-blue-600 dark:text-white">
                  {copy.popular}
                </Badge>
              )}

              <div>
                <h3 className={cn("text-xl font-bold tracking-tight", plan.isPopular && "pe-24")}>{plan.name}</h3>
                <p className="mt-4 min-h-[64px] text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {plan.description}
                </p>
                <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.04]">
                  <p className="flex items-end gap-2">
                    <NumberFlow
                      className="text-4xl font-bold tracking-tight md:text-5xl"
                      prefix="$"
                      value={price}
                    />
                    <span className="pb-1 text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                      {copy.perMonth}
                    </span>
                  </p>
                </div>
              </div>

              <LandingButton
                href={plan.id === "institutional" ? "/contact" : "/dashboard"}
                className={cn(
                  "mt-5 h-11 w-full rounded-full",
                  plan.isPopular
                    ? "bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
                    : "border border-zinc-200 bg-white text-zinc-950 hover:bg-zinc-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
                )}
                variant="secondary"
              >
                {plan.buttonText}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </LandingButton>

              <div className="my-6 h-px bg-zinc-200 dark:bg-white/10" />

              <ul className="mt-auto space-y-3">
                {plan.features.map((feature) => (
                  <li className="flex items-start gap-3" key={feature.title}>
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-sm font-semibold leading-relaxed">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </PublicSection>
  );
}
