# Component Documentation Standard

Every reusable component should include enough documentation for another engineer to use it without reading the implementation first.

## Required Sections

- Purpose: what user job the component supports.
- Anatomy: slots, required elements, optional elements.
- Variants: size, tone, layout, density.
- States: default, hover, focus, active, disabled, loading, empty, error.
- Spacing: padding, gaps, row height, icon size.
- Behavior: click, keyboard, async, overflow, responsive behavior.
- Accessibility: labels, roles, focus, announcements, contrast.
- Do: preferred usage.
- Do not: misuse cases.

## Example

```md
## Channel Status Card

Purpose: summarize one connected channel workspace.

Anatomy: channel icon, channel name, connection state, health metric, primary action, secondary metadata.

States: connected, degraded, disconnected, syncing, loading.

Spacing: 20px padding, 12px internal row gap, 8px metadata gap.

Behavior: primary click opens workspace; secondary action opens connection settings.

Accessibility: status text must not rely on color alone.
```
