import { NextResponse } from "next/server";
import { events } from "@/app/_data/events";

export async function GET() {
  return NextResponse.json({ ok: true, data: events });
}
