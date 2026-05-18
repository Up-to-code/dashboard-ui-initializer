export const appConfig = {
  appName: "Chats",
  productName: "Chats",
  legalName: "Chats",
  description: "AI channel infrastructure for agents, contacts, knowledge, automations, and analytics.",
  domainUrl: "http://localhost:3000",
  themeStorageKey: "chats-ui-theme",
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
    role: "Owner",
  },
  account: {
    id: "demo-account",
    name: "Little Builders",
    legalName: "Little Builders",
    type: "Organization",
    email: "workspace@example.com",
    phone: "+1 555 0100",
    website: "https://example.com",
    address: "100 Chats Street",
    status: "Workspace ready",
  },
} as const;

export type AppConfig = typeof appConfig;
