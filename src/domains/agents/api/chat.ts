"use client";

import { getAgentMessages, getAgentThreads, fakeAsync } from "@/demo-services/workspace-service";
import type { AgUiConversationTurn } from "@/components/ui/ag-ui/types";

export type AgentChatEvent =
  | { type: "meta"; threadId: string; runId: string }
  | { type: "status"; message: string }
  | { type: "text"; text: string }
  | { type: "ag_ui"; turn: AgUiConversationTurn }
  | { type: "done"; threadId: string }
  | { type: "error"; error: string };

export type AgentChatMessage = {
  id: string;
  role: "user" | "assistant" | "system" | "tool";
  content: string;
  createdAt: number;
  agUiTurn?: AgUiConversationTurn;
};

export type AgentThread = {
  id: string;
  organizationId: string;
  title: string;
  createdByUserId: string;
  createdAt: number;
  updatedAt: number;
  lastMessageAt: number;
};

export function parseAgentSseChunk(buffer: string, onEvent: (event: AgentChatEvent) => void) {
  const events = buffer.split("\n\n");
  const rest = events.pop() ?? "";
  for (const rawEvent of events) {
    const dataLine = rawEvent.split("\n").find((line) => line.startsWith("data: "));
    if (!dataLine) continue;
    try {
      onEvent(JSON.parse(dataLine.slice(6)) as AgentChatEvent);
    } catch {
      onEvent({ type: "error", error: "Agent stream returned an invalid event." });
    }
  }
  return rest;
}

export async function sendAgentChatRequest(input: {
  organizationId: string;
  threadId?: string;
  message: string;
  onEvent: (event: AgentChatEvent) => void;
}) {
  const threadId = input.threadId ?? `thread-${Date.now().toString(36)}`;
  input.onEvent({ type: "meta", threadId, runId: `run-${Date.now().toString(36)}` });
  input.onEvent({ type: "status", message: "Reading local demo fixtures..." });
  await fakeAsync(null, 220);
  input.onEvent({
    type: "text",
    text: `Chats UI is running without a real AI backend. Your message was: "${input.message}". Replace the demo agent service when you connect production logic.`,
  });
  input.onEvent({ type: "done", threadId });
}

export function useAgentMessagesQuery(_organizationId?: string, _threadId?: string, options: { enabled?: boolean } = {}) {
  return options.enabled === false ? undefined : getAgentMessages();
}

export function useAgentThreadsQuery(
  _organizationId?: string | null,
  options: { enabled?: boolean; limit?: number } = {},
) {
  if (options.enabled === false) return undefined;
  return getAgentThreads().slice(0, options.limit ?? 20);
}
