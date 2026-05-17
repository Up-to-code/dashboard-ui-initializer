export const templateConfig = {
  appName: "Dashboard",
  productName: "Dashboard UI Initializer",
  legalName: "Dashboard Template",
  description: "Reusable dashboard UI template with local demo data.",
  domainUrl: "http://localhost:3000",
  themeStorageKey: "dashboard-ui-theme",
  defaultLocale: "en",
  demoOrganizationId: "demo-account",
  branding: {
    logoLight: "/brand-logo-dark-blue.svg",
    logoDark: "/brand-logo-white.svg",
    favicon: "/favicon.svg",
    accentColor: "#0B5CFF",
  },
  user: {
    id: "demo-user",
    name: "Alex Morgan",
    email: "alex@example.com",
    image: null,
    role: "Template Owner",
  },
  account: {
    id: "demo-account",
    name: "Acme Dashboard",
    legalName: "Acme Dashboard Studio",
    type: "Demo Account",
    email: "workspace@example.com",
    phone: "+1 555 0100",
    website: "https://example.com",
    address: "100 Template Street",
    status: "Demo workspace ready",
  },
} as const;

export type TemplateConfig = typeof templateConfig;
