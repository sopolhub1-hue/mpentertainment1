import { NextResponse } from "next/server";
import { announcements } from "@/app/_data/announcements";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const item = announcements.find((a) => a.id === params.id);
  if (!item) return NextResponse.json({ ok: false, error: "NOT_FOUND" }, { status: 404 });
  return NextResponse.json({ ok: true, data: item });
}
