import Link from "next/link";
import Card from "../../../_components/Card";
import Icon from "../../../_components/Icon";
import { getEventById } from "../../../_data/events";

export default function TicketZonesPage({
  params,
}: {
  params: { eventId: string };
}) {
  const event = getEventById(params.eventId);

  if (!event) {
    return (
      <Card>
        <h1 className="h2">Not found</h1>
        <p className="subtle mt-2">Event does not exist.</p>
        <Link href="/tickets" className="btn btn-ghost mt-4">
          <Icon name="arrow-left" />
          Back
        </Link>
      </Card>
    );
  }

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="subtle text-sm">Tickets • Step 2</p>
            <h1 className="h1">Select zone / seat</h1>
            <p className="subtle mt-2 text-sm">
              {event.title} • {event.date} • {event.venue}
            </p>
          </div>
          <Link href="/tickets" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Back
          </Link>
        </div>
      </Card>

      <Card>
        <h2 className="h2">SVG Seating Plan (Mock)</h2>
        <p className="subtle mt-2 text-sm">
          This is a placeholder seating selection. Real SVG seat picking will be added later.
        </p>

        <div className="mt-4 rounded-[28px] border border-black/10 bg-white/50 p-5">
          <div className="subtle text-sm">Example zones:</div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="pill"><span className="dot dot-pink" />Zone A</span>
            <span className="pill"><span className="dot dot-gray" />Zone B</span>
            <span className="pill"><span className="dot dot-gray" />Zone C</span>
          </div>
          <div className="mt-4">
            <Link href={`/tickets/${event.id}/confirm`} className="btn btn-primary">
              <Icon name="chevron-right" />
              Continue
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
