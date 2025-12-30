import Link from "next/link";
import Card from "../../../_components/Card";
import Icon from "../../../_components/Icon";
import { getEventById } from "../../../_data/events";

function mockQrValue(eventId: string) {
  return `MP-TICKET:${eventId}:MOCK:${Date.now()}`;
}

export default function TicketResultPage({
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

  const qrText = mockQrValue(event.id);

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="subtle text-sm">Tickets • Step 5</p>
            <h1 className="h1">Your Ticket (Mock)</h1>
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

      <div className="grid-cards">
        <Card>
          <h2 className="h2">Ticket Details</h2>
          <div className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between"><span className="subtle">Holder</span><span>Mock User</span></div>
            <div className="flex justify-between"><span className="subtle">Zone</span><span>A</span></div>
            <div className="flex justify-between"><span className="subtle">Seat</span><span>A-01</span></div>
            <div className="flex justify-between"><span className="subtle">Status</span><span>UNUSED</span></div>
          </div>
          <div className="mt-4">
            <span className="pill">
              <Icon name="ticket" />
              Mock Ticket
            </span>
          </div>
        </Card>

        <Card>
          <h2 className="h2">QR (Mock)</h2>
          <p className="subtle mt-2 text-sm">
            This is a mock QR payload (text). Real QR image can be generated later.
          </p>
          <div className="mt-4 rounded-[28px] border border-black/10 bg-white/50 p-4 text-sm break-all">
            {qrText}
          </div>
          <div className="mt-4 flex gap-2">
            <button className="btn btn-ghost" type="button">
              <Icon name="download" />
              Download (Mock)
            </button>
            <Link href="/" className="btn btn-primary">
              <Icon name="home" />
              Home
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
