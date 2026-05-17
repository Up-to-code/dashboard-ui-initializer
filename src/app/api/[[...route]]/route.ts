import { NextResponse, type NextRequest } from "next/server";
import { getDemoQuery } from "@/demo-services/workspace-service";

export const dynamic = "force-dynamic";

function demoJson(request: NextRequest, payload?: unknown) {
  const data = payload ?? getDemoQuery(request.nextUrl.pathname, request.nextUrl.searchParams);
  return NextResponse.json(data);
}

export function GET(request: NextRequest) {
  return demoJson(request);
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const id = `demo-${Date.now()}`;
  return demoJson(request, {
    ok: true,
    demo: true,
    id,
    client: { id },
    project: { id },
    property: { id },
    media: [],
    body,
  });
}

export async function PUT(request: NextRequest) {
  return POST(request);
}

export async function PATCH(request: NextRequest) {
  return POST(request);
}

export function DELETE() {
  return NextResponse.json({ ok: true, demo: true });
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204 });
}
