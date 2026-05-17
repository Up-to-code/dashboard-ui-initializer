import {getRequestConfig} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import { templateConfig } from '@/template-config';

type Locale = (typeof routing.locales)[number];

function isLocale(locale: string): locale is Locale {
  return routing.locales.includes(locale as Locale);
}

function applyBrandMessages(value: unknown, locale: Locale): unknown {
  if (typeof value === "string") {
    const brand = locale === "ar" ? "لوحة التحكم" : templateConfig.appName;
    const workspace = locale === "ar" ? "لوحة التحكم" : templateConfig.appName;
    const platform = locale === "ar" ? "قالب لوحة التحكم" : templateConfig.productName;

    return value
      .replaceAll("Qentrahd Workspace", workspace)
      .replaceAll("Qentrahd Platform", platform)
      .replaceAll("Qentrahd", brand)
      .replaceAll("Qentrah Workspace", workspace)
      .replaceAll("Qentrah Platform", platform)
      .replaceAll("Qentrah", brand)
      .replaceAll("qentrah", brand.toLowerCase())
      .replaceAll("real estate", "dashboard")
      .replaceAll("Real estate", "Dashboard")
      .replaceAll("property", "record")
      .replaceAll("Property", "Record")
      .replaceAll("organization", "account")
      .replaceAll("Organization", "Account")
      .replaceAll("أنان", brand);
  }

  if (Array.isArray(value)) {
    return value.map((entry) => applyBrandMessages(entry, locale));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, entry]) => [key, applyBrandMessages(entry, locale)]),
    );
  }

  return value;
}

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;
 
  // Ensure that a valid locale is used
  if (!locale || !isLocale(locale)) {
    locale = routing.defaultLocale;
  }
 
  const resolvedLocale = locale as Locale;

  return {
    locale: resolvedLocale as string,
    messages: applyBrandMessages((await import(`../../messages/${resolvedLocale}.json`)).default, resolvedLocale) as Record<string, unknown>
  };
});
