# Accessibility

Accessibility is part of operational reliability.

## Requirements

- Maintain WCAG AA contrast for text and controls.
- All icon-only buttons need accessible names and tooltips.
- Focus rings must be visible and use `#2563EB` with a soft outline.
- Navigation, tabs, dialogs, command menus, and dropdowns must support keyboard use.
- Tables need real headers, sort labels, and row actions that are reachable by keyboard.
- Toasts should not be the only place critical errors appear.
- Respect reduced motion preferences.
- Form errors must be associated with fields.

## AI-Specific Notes

- Streaming messages must expose completion state to assistive technology.
- Chat transcripts should preserve reading order.
- Regenerate, approve, escalate, and publish controls need explicit labels.
