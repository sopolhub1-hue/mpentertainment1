import Link from "next/link";
import Card from "../_components/Card";
import Icon from "../_components/Icon";
import { events } from "../_data/events";

export const metadata = {
  title: "Events | MP Entertainment",
};

export default function EventsPage() {
  return (
    <div className="space-y-5">
      <Card>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="subtle text-sm">MP Entertainment</p>
            <h1 className="h1">Events</h1>
            <p className="subtle mt-2">Browse all events (mock).</p>
          </div>
          <Link href="/" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Home
          </Link>
        </div>
      </Card>

      <div className="grid-cards">
        {events.map((e) => (
          <Card key={e.id} className="hover:bg-white/85">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="pill">
                    <span className={`dot ${e.status === "open" ? "dot-pink" : "dot-gray"}`} />
                    {e.status.toUpperCase()}
                  </span>
                  <h2 className="h2">{e.title}</h2>
                </div>
                <p className="subtle mt-2 text-sm">
                  {e.date} • {e.time} • {e.venue}
                </p>
                <p className="subtle mt-2 text-sm">{e.description}</p>
              </div>
              <Link className="btn btn-primary" href={`/events/${e.slug}`}>
                <Icon name="chevron-right" />
                View
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
