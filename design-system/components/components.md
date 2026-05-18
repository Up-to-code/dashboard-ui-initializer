# Component Architecture

Components should be boring in the best sense: predictable, composable, and hard to misuse.

## Buttons

Purpose: trigger explicit actions.

Anatomy: label, optional leading icon, optional loading indicator.

States: default, hover, focus, pressed, disabled, loading.

Rules: one primary button per decision area. Use icon-only buttons for common tools with accessible labels.

## Cards And Panels

Purpose: group one operational concept.

Anatomy: header, optional metadata, content, optional action area.

Spacing: 20px padding default, 16px compact.

Rules: do not nest cards inside cards. Use borders over shadows.

## Tabs

Purpose: switch peer views within one workspace or object.

Rules: tabs should not navigate across unrelated products. Keep labels short and stable.

## Command Menu

Purpose: search, jump, create, and perform quick actions.

Rules: group by object type. Include keyboard shortcuts only when implemented.

## Modals And Sheets

Purpose: focused confirmation, creation, or inspection.

Rules: use modals for blocking decisions, sheets for contextual editing or detail inspection.

## Chat Interfaces

Purpose: inspect and manage customer/AI conversation flow.

Rules: distinguish customer, AI, teammate, and system events. Make handoff, assign, summarize, and mark resolved actions persistent.

## AI Configuration Panels

Purpose: configure behavior safely.

Rules: separate identity, instructions, knowledge, tools, escalation, testing, and publishing. Show draft/published state.

## Analytics Summaries

Purpose: answer operational health questions.

Rules: use summary rows, trends, and deltas. Charts support the answer; they do not become the page.
