import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ ok: true, user: { id: "u1", role: "user" } });
}
