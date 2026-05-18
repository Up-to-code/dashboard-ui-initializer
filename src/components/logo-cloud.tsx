import { Marquee } from "@/components/ui/marquee";
import { BrandMark } from "@/components/logo";
import { useLocale } from "next-intl";

const brandSlots = Array.from({ length: 8 }, (_, index) => index);

const LogoCloud = () => {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <div className="w-full border-b border-zinc-200/70 px-6 py-12 dark:border-white/[0.08] md:py-16">
      <div className="mx-auto max-w-7xl overflow-hidden">
        <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 md:text-base">
          {isAr ? "مصمم لقنوات العملاء ووكلاء الذكاء الاصطناعي" : "Built for customer channels and AI agents"}
        </p>

        <div className="mt-8 flex items-center justify-center overflow-hidden">
          <Marquee
            className="w-full [--duration:28s] [--gap:4rem] [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)]"
            dir="ltr"
            pauseOnHover
            repeat={6}
          >
            {brandSlots.map((slot) => (
              <span key={slot} className="flex h-12 w-12 items-center justify-center opacity-75">
                <BrandMark className="h-10 w-auto" />
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LogoCloud;
