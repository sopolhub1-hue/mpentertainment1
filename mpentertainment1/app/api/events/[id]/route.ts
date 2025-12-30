import { NextResponse } from "next/server";
import { events } from "@/app/_data/events";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const item = events.find((e) => e.id === params.id);
  if (!item) return NextResponse.json({ ok: false, error: "NOT_FOUND" }, { status: 404 });
  return NextResponse.json({ ok: true, data: item });
}
