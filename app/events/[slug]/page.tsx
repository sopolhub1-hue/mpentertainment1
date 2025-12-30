import Link from "next/link";
import Card from "../../_components/Card";
import Icon from "../../_components/Icon";
import { getEventBySlug } from "../../_data/events";

export default function EventDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const event = getEventBySlug(params.slug);

  if (!event) {
    return (
      <Card>
        <h1 className="h2">Not found</h1>
        <p className="subtle mt-2">Event does not exist.</p>
        <div className="mt-4">
          <Link href="/events" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Back
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="subtle text-sm">Event</p>
            <h1 className="h1">{event.title}</h1>
            <p className="subtle mt-2 text-sm">
              {event.date} • {event.time} • {event.venue}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="pill">
                <span className={`dot ${event.status === "open" ? "dot-pink" : "dot-gray"}`} />
                {event.status.toUpperCase()}
              </span>
              <span className="pill">
                <Icon name="info" />
                Mock data
              </span>
            </div>
          </div>
          <Link href="/events" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Back
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href={event.status === "open" ? `/tickets/${event.id}/zones` : "#"}
            className={`btn ${event.status === "open" ? "btn-primary" : "btn-ghost"}`}
            aria-disabled={event.status !== "open"}
          >
            <Icon name="ticket" />
            Book Tickets
          </Link>
        </div>
      </Card>

      <Card>
        <h2 className="h2">Description</h2>
        <p className="subtle mt-2 text-sm leading-7">{event.description}</p>

        <div className="mt-6">
          <h2 className="h2">Schedule</h2>
          <div className="mt-3 space-y-2">
            {event.schedule.map((s) => (
              <div
                key={`${s.time}-${s.title}`}
                className="flex items-center justify-between rounded-[24px] border border-black/5 bg-white/50 p-4"
              >
                <div className="font-semibold">{s.title}</div>
                <div className="subtle text-sm">{s.time}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
