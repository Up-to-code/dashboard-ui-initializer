import { useLocale } from "next-intl";

export default function Integrations() {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <section id="resources" className="mx-auto flex max-w-7xl flex-col px-6 py-24 sm:py-32">
      <h2 className="text-center font-bold text-4xl tracking-tight sm:text-6xl text-zinc-950 dark:text-white">
        {isAr ? "متكامل مع قنواتك وأدواتك." : "Integrated with your channels and tools."}
      </h2>
      <p className="mt-6 text-center text-zinc-500 dark:text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto">
        {isAr 
          ? "اربط قنوات العملاء، أنظمة CRM، الجداول، الويب هوك، وأدوات الأتمتة حتى يعمل كل وكيل ذكاء اصطناعي من نفس طبقة التشغيل."
          : "Connect customer messaging channels, CRMs, sheets, webhooks, and automation tools so every AI agent works from the same operating layer."}
      </p>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-24 sm:grid-cols-2 lg:grid-cols-3">
        {(isAr ? integrationsAr : integrationsEn).map((integration) => (
          <div
            className="relative flex flex-col items-start overflow-hidden border border-zinc-200 bg-white dark:border-white/5 dark:bg-zinc-900/40 rounded-[2.5rem] transition-all hover:shadow-2xl"
            key={integration.title}
          >
            <div className="absolute inset-x-0 top-7 h-9.5 border-y border-dashed border-zinc-100 dark:border-white/5" />
            <div className="absolute inset-y-0 left-7 w-9.5 border-x border-dashed border-zinc-100 dark:border-white/5" />

            <div className="relative isolate flex items-start justify-between gap-5 p-10">
              <div className="w-fit shrink-0 rounded-3xl bg-transparent p-1">
                <div className="relative h-12 w-12 flex items-center justify-center rounded-2xl border bg-white dark:bg-zinc-800 dark:border-white/10">
                  <img
                    alt={integration.title}
                    className="absolute inset-0 size-10 blur-[36px] opacity-20"
                    src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(integration.url)}&sz=128`}
                  />
                  <img
                    alt={integration.title}
                    className="size-8"
                    src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(integration.url)}&sz=128`}
                  />
                </div>
              </div>
              <div>
                <h3 className="py-2 font-bold text-xl text-zinc-950 dark:text-white">
                  {integration.title}
                </h3>
                <p className="mt-2 text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {integration.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const integrationsEn = [
  {
    title: "WhatsApp",
    description: "Connect Meta Cloud API, webhooks, test numbers, and verified business messaging.",
    url: "https://www.whatsapp.com/business/",
  },
  {
    title: "Telegram",
    description: "Route Telegram conversations to an AI agent with contact context and handoff rules.",
    url: "https://telegram.org/",
  },
  {
    title: "Instagram",
    description: "Manage customer DMs, agent replies, and escalations from the same workspace.",
    url: "https://www.instagram.com/",
  },
  {
    title: "Messenger",
    description: "Connect Meta conversations with shared AI instructions and channel analytics.",
    url: "https://www.messenger.com/",
  },
  {
    title: "Slack",
    description: "Notify teammates when a hot lead, low-confidence reply, or human takeover appears.",
    url: "https://slack.com",
  },
  {
    title: "Zapier",
    description: "Push contacts, messages, and automation events into the tools your team already uses.",
    url: "https://zapier.com",
  },
];

const integrationsAr = [
  {
    title: "واتساب",
    description: "اربط Meta Cloud API والويب هوك وأرقام الاختبار ورسائل الأعمال الموثقة.",
    url: "https://www.whatsapp.com/business/",
  },
  {
    title: "تيليجرام",
    description: "وجّه محادثات تيليجرام إلى وكيل ذكاء اصطناعي مع سياق العميل وقواعد التحويل.",
    url: "https://telegram.org/",
  },
  {
    title: "إنستغرام",
    description: "أدر رسائل العملاء وردود الوكلاء والتصعيد من نفس مساحة العمل.",
    url: "https://www.instagram.com/",
  },
  {
    title: "ماسنجر",
    description: "اربط محادثات Meta بتعليمات ذكاء اصطناعي مشتركة وتحليلات للقناة.",
    url: "https://www.messenger.com/",
  },
  {
    title: "سلاك",
    description: "نبّه الفريق عند ظهور عميل مهم أو رد منخفض الثقة أو طلب تدخل بشري.",
    url: "https://slack.com",
  },
  {
    title: "زابيير",
    description: "ادفع جهات الاتصال والرسائل وأحداث الأتمتة إلى أدوات فريقك الحالية.",
    url: "https://zapier.com",
  },
];
