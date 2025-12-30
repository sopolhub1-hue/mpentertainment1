import Link from "next/link";
import Card from "../_components/Card";
import Icon from "../_components/Icon";
import { events } from "../_data/events";

export const metadata = {
  title: "Tickets | MP Entertainment",
};

export default function TicketsPage() {
  const openEvents = events.filter((e) => e.status === "open");

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="subtle text-sm">Tickets</p>
            <h1 className="h1">Choose an event</h1>
            <p className="subtle mt-2">Mock booking flow.</p>
          </div>
          <Link href="/" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Home
          </Link>
        </div>
      </Card>

      <div className="grid-cards">
        {openEvents.map((e) => (
          <Card key={e.id} className="hover:bg-white/85">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="h2">{e.title}</h2>
                <p className="subtle mt-2 text-sm">
                  {e.date} • {e.time} • {e.venue}
                </p>
                <p className="subtle mt-2 text-sm">{e.description}</p>
              </div>
              <Link className="btn btn-primary" href={`/tickets/${e.id}/zones`}>
                <Icon name="chevron-right" />
                Select seats
              </Link>
            </div>
          </Card>
        ))}
        {!openEvents.length ? (
          <Card>
            <h2 className="h2">No open events</h2>
            <p className="subtle mt-2">Please check Events page.</p>
            <Link href="/events" className="btn btn-ghost mt-4">
              <Icon name="calendar" />
              Events
            </Link>
          </Card>
        ) : null}
      </div>
    </div>
  );
}
