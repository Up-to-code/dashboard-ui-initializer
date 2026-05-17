import {
  demoActivityEvents,
  demoAgentMessages,
  demoAgentThreads,
  demoCalendarEvents,
  demoClients,
  demoClientTasks,
  demoClientUnitLinks,
  demoPartnerApps,
  demoPartnerConnections,
  demoProjects,
  demoProperties,
} from "@/demo-data/workspace";
import type { CalendarEvent } from "@/domains/calendar/store/calendar.types";
import type { Client, ClientTask } from "@/domains/clients/store/clients.types";
import type { Project } from "@/domains/projects/store/projects.types";
import type { PropertyUnit } from "@/domains/properties/store/properties.types";

type SearchParamsLike = URLSearchParams | Record<string, string | undefined>;

function getParam(params: SearchParamsLike | undefined, key: string) {
  if (!params) return undefined;
  if (params instanceof URLSearchParams) return params.get(key) ?? undefined;
  return params[key];
}

function matches(value: string, search?: string) {
  if (!search) return true;
  return value.toLowerCase().includes(search.toLowerCase());
}

function paginate<T>(items: T[], params?: SearchParamsLike) {
  const limit = Number(getParam(params, "limit") ?? 50);
  const cursor = Number(getParam(params, "cursor") ?? 0);
  const page = items.slice(cursor, cursor + limit);
  const next = cursor + limit;
  return {
    page,
    isDone: next >= items.length,
    continueCursor: next >= items.length ? "" : String(next),
  };
}

function listOrPage<T>(items: T[], params?: SearchParamsLike) {
  return getParam(params, "limit") ? paginate(items, params) : items;
}

export function projectStats(projects = demoProjects) {
  return {
    total: projects.length,
    approved: projects.filter((item) => item.status === "approved").length,
    pending: projects.filter((item) => item.status === "pending").length,
    draft: projects.filter((item) => item.status === "draft").length,
    rejected: projects.filter((item) => item.status === "rejected").length,
  };
}

export function propertyStats(properties = demoProperties) {
  return {
    total: properties.length,
    available: properties.filter((item) => item.status === "available").length,
    pending: properties.filter((item) => item.status === "pending").length,
    reserved: properties.filter((item) => item.status === "reserved").length,
    sold: properties.filter((item) => item.status === "sold").length,
    draft: properties.filter((item) => item.status === "draft").length,
  };
}

export function clientStats(clients = demoClients) {
  return {
    total: clients.length,
    active: clients.filter((item) => item.status === "active").length,
    inactive: clients.filter((item) => item.status === "inactive").length,
    buyers: clients.filter((item) => item.type === "Buyer").length,
    tenants: clients.filter((item) => item.type === "Tenant").length,
    investors: clients.filter((item) => item.type === "Investor").length,
    brokers: clients.filter((item) => item.type === "Broker").length,
    stages: {
      new: clients.filter((item) => item.pipelineStage === "new").length,
      qualified: clients.filter((item) => item.pipelineStage === "qualified").length,
      viewing: clients.filter((item) => item.pipelineStage === "viewing").length,
      negotiation: clients.filter((item) => item.pipelineStage === "negotiation").length,
      closed: clients.filter((item) => item.pipelineStage === "closed").length,
    },
  };
}

export function calendarStats(events = demoCalendarEvents) {
  return {
    total: events.length,
    confirmed: events.filter((item) => item.status === "confirmed").length,
    pending: events.filter((item) => item.status === "pending").length,
    draft: events.filter((item) => item.status === "draft").length,
    owners: new Set(events.map((item) => item.owner)).size,
  };
}

function auditEvents() {
  return demoActivityEvents.map((event, index) => ({
    id: event.id,
    actorUserId: event.actor,
    action: `account.${event.action.replace(/\s+/g, "_")}`,
    category: (["organization", "clients", "projects", "properties"] as const)[index % 4],
    target: event.target,
    summary: `${event.actor} ${event.action} ${event.target}`,
    createdAt: Date.now() - (index + 1) * 45 * 60 * 1000,
  }));
}

function filterProjects(params?: SearchParamsLike): Project[] {
  const status = getParam(params, "status");
  const search = getParam(params, "search");
  return demoProjects.filter((item) =>
    (!status || status === "all" || item.status === status) &&
    matches(`${item.name} ${item.developer} ${item.city} ${item.reference}`, search),
  );
}

function filterProperties(params?: SearchParamsLike): PropertyUnit[] {
  const status = getParam(params, "status");
  const search = getParam(params, "search");
  return demoProperties.filter((item) =>
    (!status || status === "all" || item.status === status) &&
    matches(`${item.title} ${item.project} ${item.city} ${item.reference}`, search),
  );
}

function filterClients(params?: SearchParamsLike): Client[] {
  const type = getParam(params, "type");
  const search = getParam(params, "search");
  return demoClients.filter((item) =>
    (!type || type === "all" || item.type === type) &&
    matches(`${item.name} ${item.contact} ${item.phone} ${item.propertyInterest}`, search),
  );
}

function filterCalendar(params?: SearchParamsLike): CalendarEvent[] {
  const clientId = getParam(params, "clientId");
  const startAt = Number(getParam(params, "startAt") ?? 0);
  const endAt = Number(getParam(params, "endAt") ?? Number.MAX_SAFE_INTEGER);
  return demoCalendarEvents.filter((item) =>
    (!clientId || item.clientId === clientId) &&
    (!item.startAt || (item.startAt >= startAt && item.startAt <= endAt)),
  );
}

export function getDemoQuery(pathname: string, params?: SearchParamsLike): unknown {
  if (pathname.endsWith("/integrations/partner-apps")) return { apps: demoPartnerApps };
  if (pathname.includes("/partner-connections")) return { connections: demoPartnerConnections };

  if (pathname.endsWith("/read/projects/index")) {
    const projects = filterProjects(params);
    return { list: paginate(projects, params), stats: projectStats(projects) };
  }
  if (pathname.endsWith("/read/projects/stats")) return projectStats(filterProjects(params));
  if (pathname.endsWith("/read/projects/options")) return demoProjects.map(({ id, name }) => ({ id, name }));
  if (pathname.includes("/read/projects/")) {
    const id = pathname.split("/").at(-1);
    return demoProjects.find((item) => item.id === id || item.reference === id) ?? null;
  }
  if (pathname.endsWith("/read/projects")) return listOrPage(filterProjects(params), params);

  if (pathname.endsWith("/read/properties/index")) {
    const properties = filterProperties(params);
    return { list: paginate(properties, params), stats: propertyStats(properties) };
  }
  if (pathname.endsWith("/read/properties/stats")) return propertyStats(filterProperties(params));
  if (pathname.endsWith("/read/properties/options")) return demoProperties.map(({ id, title }) => ({ id, title }));
  if (pathname.includes("/read/properties/by-project/")) {
    const projectId = pathname.split("/").at(-1);
    return demoProperties.filter((item) => item.projectId === projectId);
  }
  if (pathname.includes("/read/properties/")) {
    const id = pathname.split("/").at(-1);
    return demoProperties.find((item) => item.id === id || item.reference === id) ?? null;
  }
  if (pathname.endsWith("/read/properties")) return listOrPage(filterProperties(params), params);

  if (pathname.endsWith("/read/clients/index")) {
    const clients = filterClients(params);
    return { list: paginate(clients, params), stats: clientStats(clients) };
  }
  if (pathname.endsWith("/read/clients/stats")) return clientStats(filterClients(params));
  if (pathname.endsWith("/read/clients/options")) return demoClients.map(({ id, name }) => ({ id, name }));
  if (pathname.includes("/read/clients/")) {
    const id = pathname.split("/").at(-1);
    return demoClients.find((item) => item.id === id) ?? null;
  }
  if (pathname.endsWith("/read/clients")) return listOrPage(filterClients(params), params);

  if (pathname.endsWith("/read/calendar/index")) {
    const events = filterCalendar(params);
    return { events, stats: calendarStats(events) };
  }
  if (pathname.endsWith("/read/calendar/stats")) return calendarStats(filterCalendar(params));
  if (pathname.endsWith("/read/calendar/upcoming")) return filterCalendar(params).slice(0, Number(getParam(params, "limit") ?? 50));
  if (pathname.endsWith("/read/calendar")) return filterCalendar(params);

  if (pathname.endsWith("/read/tasks/options")) {
    return demoClientTasks.map(({ id, title, clientId }) => ({ id, title, clientId }));
  }

  if (pathname.endsWith("/read/activity/index")) {
    const events = auditEvents();
    return {
      list: paginate(events, params),
      stats: {
        total: events.length,
        people: events.filter((item) => item.category === "organization").length,
        business: events.filter((item) => item.category === "projects" || item.category === "properties" || item.category === "clients").length,
        latestAt: events[0]?.createdAt,
      },
    };
  }
  if (pathname.endsWith("/read/activity")) return paginate(auditEvents(), params);

  if (pathname.endsWith("/read/dashboard/index")) {
    return { weekEvents: demoCalendarEvents };
  }

  if (pathname.includes("/media/folders")) return [];
  if (pathname.includes("/media")) return [];

  return { ok: true, demo: true };
}

export function getClientTasks(clientId?: string): ClientTask[] {
  return clientId ? demoClientTasks.filter((task) => task.clientId === clientId) : demoClientTasks;
}

export function getClientUnitLinks(clientId?: string) {
  const links = clientId ? demoClientUnitLinks.filter((link) => link.clientId === clientId) : demoClientUnitLinks;
  return links.map((link) => ({
    link,
    unit: demoProperties.find((unit) => unit.id === link.propertyId) ?? null,
  }));
}

export function getPropertyClientLinks(propertyId?: string) {
  const links = propertyId ? demoClientUnitLinks.filter((link) => link.propertyId === propertyId) : demoClientUnitLinks;
  return links.map((link) => ({
    link,
    client: demoClients.find((client) => client.id === link.clientId) ?? null,
  }));
}

export function getAgentThreads() {
  return demoAgentThreads;
}

export function getAgentMessages() {
  return demoAgentMessages;
}

export async function fakeAsync<T>(value: T, delayMs = 180): Promise<T> {
  await new Promise((resolve) => setTimeout(resolve, delayMs));
  return value;
}
