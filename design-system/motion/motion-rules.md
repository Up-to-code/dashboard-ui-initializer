# Motion Rules

Motion should clarify state changes. It should never perform personality.

## Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `duration.fast` | 120ms | Hover, press, focus |
| `duration.base` | 180ms | Menus, tabs, inline transitions |
| `duration.slow` | 260ms | Modals, sheets, page inspectors |
| `ease.standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default |
| `ease.enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entering surfaces |
| `ease.exit` | `cubic-bezier(0.4, 0, 1, 1)` | Exiting surfaces |

## Rules

- Animate opacity and transform, not layout-heavy properties.
- Keep distances small: 4px to 12px.
- Do not loop decorative AI animations.
- Respect reduced motion preferences.
- Use motion to show hierarchy: command menu above page, sheet above table, toast above all.
