# Implementation Guide

Preferred stack: React, Tailwind, shadcn/ui, Radix UI, Framer Motion.

This repository uses Next.js canary and Tailwind 4 patterns. Read local Next docs before runtime changes and keep implementation aligned with existing `src/components/ui`, `src/components/shared`, and `src/components/layout` conventions.

## Folder Structure

```txt
src/
  components/
    ui/                 Primitive shadcn/Radix components
    layout/             Sidebar, topbar, shell, profile controls
    shared/             App-specific composition primitives
    custom/             Product-specific cards, tables, empty states
  domains/
    channels/
    conversations/
    automations/
    knowledge/
    analytics/
    team/
  lib/
    design-tokens/
```

## Naming

- Primitive components: `Button`, `Input`, `Dialog`.
- Product components: `ChannelStatusCard`, `AutomationRunTable`, `KnowledgeSourcePanel`.
- Layout components: `AppShell`, `WorkspaceSidebar`, `PageHeader`, `InspectorPanel`.
- Hooks: `useChannelWorkspace`, `useConversationFilters`.

## Token Usage

- Source tokens live in `design-system/tokens/tokens.json`.
- CSS variables live in `design-system/tokens/tokens.css`.
- Tailwind mapping lives in `design-system/tokens/tailwind.tokens.ts`.
- Runtime CSS should consume variables, not duplicate raw values.

## Component Strategy

Build from primitives upward:

1. shadcn/Radix primitive.
2. App composition component.
3. Domain-specific screen component.

Keep business logic out of primitives. Keep layout decisions out of data hooks.

## Motion

Use Framer Motion for sheets, command menu, inline list entrance, and state transitions. Avoid decorative persistent animation.
