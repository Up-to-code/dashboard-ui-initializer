# Color System

This product uses color as infrastructure, not decoration. The interface should feel calm, legible, and operational across WhatsApp, Telegram, Website Chat, Instagram, Messenger, and future channels.

## Core Palette

| Token | Value | Usage |
| --- | --- | --- |
| `primary.navy` | `#0F172A` | Primary text, sidebar text, high-emphasis UI |
| `primary.blue` | `#2563EB` | Primary actions, focus states, selected navigation |
| `accent.blue` | `#3B82F6` | Secondary accents, links, lightweight highlights |
| `soft.blue` | `#DBEAFE` | Selected backgrounds, info surfaces |
| `background.app` | `#F8FAFC` | App background |
| `surface.card` | `#FFFFFF` | Cards, panels, sheets, dialogs |
| `border.default` | `#E2E8F0` | Dividers, containers, inputs |
| `text.primary` | `#0F172A` | Main copy and headings |
| `text.secondary` | `#475569` | Supporting copy and metadata |
| `text.muted` | `#94A3B8` | Timestamps, placeholders, disabled text |

Purple is not part of the system. Avoid purple, violet, magenta-purple gradients, and "AI glow" aesthetics.

## Semantic Color

Use semantic color only when the status changes user behavior. A failed automation run, disconnected channel, billing issue, or pending approval deserves semantic color. Decorative badges do not.

| Meaning | Strong | Soft |
| --- | --- | --- |
| Success | `#16A34A` | `#DCFCE7` |
| Warning | `#D97706` | `#FEF3C7` |
| Danger | `#DC2626` | `#FEE2E2` |
| Info | `#2563EB` | `#DBEAFE` |

## Channel Color

Channel colors identify source and routing, not brand theater. Use them as small dots, icons, thin left borders, and compact badges.

## Rules

- The app background is always `#F8FAFC`; use white surfaces for focused work.
- Primary blue is reserved for actions, selected states, and focus indication.
- Use borders before shadows. Shadows are rare and subtle.
- Never use rainbow analytics palettes. Trend charts use blue, slate, and semantic exceptions.
- Do not tint large page sections. Calm neutrality keeps channel work comparable.
