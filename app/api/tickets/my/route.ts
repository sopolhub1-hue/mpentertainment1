import { NextResponse } from "next/server";
import { tickets } from "@/app/_data/tickets";

export async function GET() {
  return NextResponse.json({ ok: true, data: tickets });
}
