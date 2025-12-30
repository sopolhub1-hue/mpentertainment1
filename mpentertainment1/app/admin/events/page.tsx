import Link from "next/link";
import Card from "../../_components/Card";
import Icon from "../../_components/Icon";
import { events } from "../../_data/events";

export const metadata = {
  title: "Admin • Events | MP Entertainment",
};

export default function AdminEventsPage() {
  return (
    <div className="space-y-4">
      <Card>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="subtle text-sm">Admin • Events</p>
            <h1 className="h1">Manage events</h1>
            <p className="subtle mt-2">Open/close and manage seating (mock).</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/admin" className="btn btn-ghost">
              <Icon name="arrow-left" />
              Dashboard
            </Link>
            <button className="btn btn-primary" type="button">
              <Icon name="plus" />
              New
            </button>
          </div>
        </div>
      </Card>

      <div className="grid-cards">
        {events.map((e) => (
          <Card key={e.id} className="hover:bg-white/85">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="pill">
                    <span className={`dot ${e.status === "open" ? "dot-pink" : "dot-gray"}`} />
                    {e.status.toUpperCase()}
                  </span>
                  <h2 className="h2">{e.title}</h2>
                </div>
                <p className="subtle mt-2 text-sm">
                  {e.date} • {e.time} • {e.venue}
                </p>
              </div>
              <Link className="btn btn-primary" href={`/admin/events/${e.id}`}>
                <Icon name="chevron-right" />
                Manage
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
