import Link from "next/link";
import Card from "../../../_components/Card";
import Icon from "../../../_components/Icon";
import { getEventById } from "../../../_data/events";

export default function AdminEventDetailPage({
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

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="subtle text-sm">Admin • Event</p>
            <h1 className="h1">{event.title}</h1>
            <p className="subtle mt-2 text-sm">
              {event.date} • {event.time} • {event.venue}
            </p>
          </div>
          <Link href="/admin/events" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Back
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link href={`/admin/events/${event.id}/seating`} className="btn btn-primary">
            <Icon name="map" />
            Seating SVG
          </Link>
          <Link href={`/admin/events/${event.id}/tickets`} className="btn">
            <Icon name="ticket" />
            Tickets
          </Link>
          <Link href={`/events/${event.slug}`} className="btn btn-ghost">
            <Icon name="external-link" />
            Public preview
          </Link>
        </div>
      </Card>

      <Card>
        <h2 className="h2">Actions (Mock)</h2>
        <p className="subtle mt-2 text-sm">
          Toggle open/closed, edit event info, manage rounds (future).
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="btn btn-primary" type="button">
            <Icon name="check" />
            Set OPEN
          </button>
          <button className="btn" type="button">
            <Icon name="close" />
            Set CLOSED
          </button>
        </div>
      </Card>
    </div>
  );
}
