import { NextResponse } from "next/server";
import { announcements } from "@/app/_data/announcements";

export async function GET() {
  return NextResponse.json({ ok: true, data: announcements });
}
