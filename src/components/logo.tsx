import Image from "next/image";
import Link from "next/link";

import { templateConfig } from "@/template-config";

export const BrandMark = ({ className = "h-5 w-5", priority = false }: { className?: string; priority?: boolean }) => (
  <>
    <Image
      src={templateConfig.branding.logoLight}
      alt={templateConfig.appName}
      width={24}
      height={28}
      className={`${className} dark:hidden`}
      priority={priority}
    />
    <Image
      src={templateConfig.branding.logoDark}
      alt={templateConfig.appName}
      width={24}
      height={28}
      className={`${className} hidden dark:block`}
      priority={priority}
    />
  </>
);

export const Logo = () => {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-zinc-200 transition-transform group-hover:scale-110 dark:bg-zinc-950 dark:ring-white/10">
        <BrandMark className="h-5 w-5" priority />
      </div>
      <span className="text-[17px] font-black tracking-tight text-zinc-950 dark:text-white">
        {templateConfig.appName}
      </span>
    </Link>
  );
};
