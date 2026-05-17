import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ ok: true, demo: true });
}

export function POST() {
  return NextResponse.json({ ok: true, demo: true });
}
