# Dashboard UI Template Guide

This copied app has been converted into a UI-only dashboard initializer. The goal is to preserve the Workspace dashboard shell, page density, component styling, spacing, forms, tables, tabs, cards, loading states, empty states, and responsive behavior while removing private product infrastructure.

## What Was Preserved

- The main app shell: sidebar, topbar, profile menu, theme switcher, language switcher, and responsive dashboard layout.
- Dashboard, projects, units/properties, clients, calendar, activity, module/integration, settings, profile, onboarding, detail, form-heavy, and table-heavy page patterns.
- Tailwind and shadcn-style component structure under `src/components/ui`, `src/components/shared`, `src/components/custom`, and domain component folders.
- Existing loading, empty, error, delete confirmation, tabs, cards, data table, and form presentation patterns.
- Public assets that support the visual identity and app polish.

## What Was Removed Or Neutralized

- Live Better Auth session and organization selection.
- Convex React providers, Convex queries, and Convex dev startup requirement.
- UploadThing production upload dependency.
- Sentry runtime initialization and source map upload config.
- Hono API catch-all routing as the app's UI data source.
- Private `@qentrah/*` package aliases and file dependencies.
- Production OAuth/auth route behavior. OAuth pages are now demo/placeholder UI routes.
- Production API calls from UI data hooks now resolve against local demo API responses.

## Template Structure

- `src/template-config/index.ts`
  Central app name, product name, demo account, theme key, branding assets, and feature identity.

- `src/demo-data/workspace.ts`
  Local fixtures for projects, units, clients, tasks, calendar events, activity, modules, connections, and assistant threads.

- `src/demo-services/workspace-service.ts`
  Fake service/query layer used by the demo API route and a few client hooks. Replace these functions with real service calls when connecting a backend.

- `src/app/api/[[...route]]/route.ts`
  Placeholder API route that preserves the old `/api/v1/...` shapes and returns local fixtures.

- `src/components`
  Shared UI primitives, layout components, cards, tables, upload widgets, shell, and reusable dashboard pieces.

- `src/domains/*/components`
  Page-level UI patterns by domain. Keep these as examples when building future apps.

- `src/domains/*/api`
  UI-facing data hooks and fake mutations. These are the first files to replace with real data sources.

## Migration Map

- Keep:
  `src/components`, `src/app/[locale]/(app)`, `src/domains/*/components`, `src/app/globals.css`, `public`, `messages`.

- Convert to mock:
  `src/domains/*/api`, `src/domains/auth/hooks/use-account-context.ts`, `src/lib/auth-client.ts`, `src/lib/uploadthing.ts`, `src/app/api/[[...route]]/route.ts`.

- Removed from runtime:
  Convex provider, Better Auth provider, Sentry setup, private package aliases, UploadThing production uploader, Hono catch-all API.

- Needs review before production use:
  Public landing/legal copy, OAuth demo screens, old server folder docs, e2e tests that referenced production flows.

## Add A New Page

1. Add a route under `src/app/[locale]/(app)/your-page/page.tsx`.
2. Compose the screen with `AppPageShell`, `AppPageHeader`, `AppSection`, `AppToolbar`, `AppDataTable`, `StatusPill`, and existing UI primitives.
3. Add mock records to `src/demo-data/workspace.ts`.
4. Add a service selector to `src/demo-services/workspace-service.ts` if the page uses API-style loading.
5. Add a sidebar item in `src/components/layout/sidebar.tsx`.

## Customize Navigation

Edit `navigationGroups` in `src/components/layout/sidebar.tsx`.

Keep the current group structure, icon sizing, active states, and collapsed behavior if you want the copied Workspace feel to remain intact.

## Change Branding

Start with `src/template-config/index.ts`:

- `appName`
- `productName`
- `description`
- `branding.logoLight`
- `branding.logoDark`
- `branding.accentColor`
- `themeStorageKey`

Then update assets in `public` if you want a different logo or favicon.

## Replace Mock Services With A Real Backend

1. Keep UI components unchanged.
2. Replace functions in `src/domains/*/api` with your backend client.
3. Replace `src/domains/auth/hooks/use-account-context.ts` with real account/session logic.
4. Replace `src/app/api/[[...route]]/route.ts` with real route handlers only if your frontend still calls local API routes.
5. Replace `src/lib/uploadthing.ts` with your upload provider.
6. Add production monitoring in `src/instrumentation.ts` and `src/instrumentation-client.ts` if needed.

## Safe First Files To Edit

- `src/template-config/index.ts`
- `src/demo-data/workspace.ts`
- `src/components/layout/sidebar.tsx`
- `messages/en.json`
- `messages/ar.json`
- `src/app/[locale]/(app)/dashboard/page.tsx`
- `src/domains/*/components/*`

## Run The Template

```bash
npm install --legacy-peer-deps
npm run typecheck
npm run lint
npm run build
npm run dev
```

Open `http://localhost:3000/en/dashboard?mode=ws`.
