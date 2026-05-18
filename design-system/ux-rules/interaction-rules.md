# Interaction Rules

Interactions must make infrastructure work feel controlled and reversible.

## States

Every interactive component needs:

- Default.
- Hover.
- Focus visible.
- Active/pressed.
- Disabled.
- Loading where async.
- Error where user input or network operations can fail.

## Behavior

- Primary actions are specific: "Connect WhatsApp", "Publish Automation", "Train Agent".
- Destructive actions require confirmation when they affect channel behavior, knowledge, or customer conversations.
- Saving AI settings should explain whether changes apply immediately or after publish.
- Long-running operations show progress and a safe escape path.

## Focus

Dialogs, command menus, and sheets must trap focus. Closing them returns focus to the initiating control.
