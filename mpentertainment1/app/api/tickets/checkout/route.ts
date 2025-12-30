import { NextResponse } from "next/server";
export async function POST() {
  // mock checkout
  return NextResponse.json({ ok: true, orderId: "o1", ticketId: "t1" });
}
