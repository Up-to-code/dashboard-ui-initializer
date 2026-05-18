# Responsive System

Responsive behavior preserves task continuity. It should not create a different product on mobile.

## Breakpoints

| Name | Width | Behavior |
| --- | --- | --- |
| Mobile | `< 768px` | Single column, sheet navigation |
| Tablet | `768px-1023px` | Collapsed sidebar, two-column where useful |
| Desktop | `1024px-1439px` | Full shell, 12-column grid |
| Wide | `1440px+` | Constrained content, optional inspector rail |

## Desktop

- Persistent sidebar.
- Topbar remains 56px.
- Main dashboard can use 12 columns.
- Inspector panels may appear on the right.

## Tablet

- Sidebar defaults collapsed.
- Tables keep primary columns and move secondary metadata into expandable rows.
- Tabs may scroll horizontally.

## Mobile

- Sidebar becomes a navigation sheet.
- Header actions collapse into icon buttons or overflow menus.
- Cards become full-width rows.
- Charts collapse below summaries.
- AI configuration panels use step sections instead of side-by-side forms.
