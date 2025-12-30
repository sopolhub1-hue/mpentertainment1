import Link from "next/link";
import Card from "../../../../_components/Card";
import Icon from "../../../../_components/Icon";
import { getEventById } from "../../../../_data/events";
import { getTicketsByEventId } from "../../../../_data/tickets";

export default function AdminEventTicketsPage({
  params,
}: {
  params: { id: string };
}) {
  const event = getEventById(params.id);

  if (!event) {
    return (
      <Card>
        <h1 className="h2">Not found</h1>
        <p className="subtle mt-2">Event does not exist.</p>
        <Link href="/admin/events" className="btn btn-ghost mt-4">
          <Icon name="arrow-left" />
          Back
        </Link>
      </Card>
    );
  }

  const rows = getTicketsByEventId(event.id);

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="subtle text-sm">Admin • Event Tickets</p>
            <h1 className="h1">{event.title}</h1>
            <p className="subtle mt-2 text-sm">Tickets booked (mock).</p>
          </div>
          <Link href={`/admin/events/${event.id}`} className="btn btn-ghost">
            <Icon name="arrow-left" />
            Back
          </Link>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <h2 className="h2">Tickets</h2>
          <span className="pill">
            <Icon name="ticket" />
            {rows.length}
          </span>
        </div>

        <div className="mt-4 space-y-2">
          {rows.map((t) => (
            <div
              key={t.id}
              className="flex flex-col gap-2 rounded-[24px] border border-black/5 bg-white/50 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="min-w-0">
                <div className="font-semibold truncate">{t.holderName}</div>
                <div className="subtle text-sm">
                  {t.zone} • {t.seat} • {t.status.toUpperCase()}
                </div>
              </div>
              <div className="flex gap-2">
                <button className="btn btn-ghost" type="button">
                  <Icon name="download" />
                  Export (Mock)
                </button>
                <button className="btn" type="button">
                  <Icon name="settings" />
                  Manage (Mock)
                </button>
              </div>
            </div>
          ))}
          {!rows.length ? <p className="subtle mt-2 text-sm">No tickets yet.</p> : null}
        </div>
      </Card>
    </div>
  );
}
