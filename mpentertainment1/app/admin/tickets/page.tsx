import Link from "next/link";
import Card from "../../_components/Card";
import Icon from "../../_components/Icon";
import { tickets } from "../../_data/tickets";
import { events } from "../../_data/events";

export const metadata = {
  title: "Admin • Tickets | MP Entertainment",
};

export default function AdminTicketsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="subtle text-sm">Admin • Tickets</p>
            <h1 className="h1">Tickets overview</h1>
            <p className="subtle mt-2">All tickets (mock).</p>
          </div>
          <Link href="/admin" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Dashboard
          </Link>
        </div>
      </Card>

      <Card>
        <div className="mt-1 space-y-2">
          {tickets.map((t) => {
            const ev = events.find((e) => e.id === t.eventId);
            return (
              <div
                key={t.id}
                className="flex flex-col gap-2 rounded-[24px] border border-black/5 bg-white/50 p-4 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <div className="font-semibold truncate">{t.holderName}</div>
                  <div className="subtle text-sm">
                    {ev?.title ?? t.eventId} • {t.zone} • {t.seat}
                  </div>
                </div>
                <span className="pill">
                  <span className={`dot ${t.status === "unused" ? "dot-pink" : "dot-gray"}`} />
                  {t.status.toUpperCase()}
                </span>
              </div>
            );
          })}
          {!tickets.length ? <p className="subtle text-sm">No tickets.</p> : null}
        </div>
      </Card>
    </div>
  );
}
