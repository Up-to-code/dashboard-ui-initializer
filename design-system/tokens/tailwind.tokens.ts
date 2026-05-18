export const designSystemTokens = {
  theme: {
    extend: {
      colors: {
        navy: "var(--color-primary-navy)",
        primary: "var(--color-primary-blue)",
        accent: "var(--color-accent-blue)",
        "blue-soft": "var(--color-soft-blue)",
        background: "var(--color-bg-app)",
        surface: "var(--color-bg-surface)",
        border: "var(--color-border)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        "text-muted": "var(--color-text-muted)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      fontSize: {
        display: ["40px", { lineHeight: "48px", fontWeight: "600" }],
        "page-title": ["28px", { lineHeight: "36px", fontWeight: "600" }],
        "section-title": ["20px", { lineHeight: "28px", fontWeight: "600" }],
        "card-title": ["16px", { lineHeight: "24px", fontWeight: "600" }],
        body: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-small": ["13px", { lineHeight: "18px", fontWeight: "400" }],
        label: ["12px", { lineHeight: "16px", fontWeight: "500" }],
        caption: ["11px", { lineHeight: "14px", fontWeight: "500" }]
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        10: "40px",
        12: "48px",
        16: "64px"
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        pill: "999px"
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        focus: "var(--shadow-focus)"
      },
      transitionDuration: {
        fast: "120ms",
        base: "180ms",
        slow: "260ms"
      },
      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        enter: "var(--ease-enter)",
        exit: "var(--ease-exit)"
      },
      zIndex: {
        sticky: "20",
        sidebar: "30",
        overlay: "40",
        modal: "50",
        toast: "60",
        command: "70"
      }
    }
  }
};
