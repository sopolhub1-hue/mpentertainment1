import Link from "next/link";
import Card from "../../../_components/Card";
import Icon from "../../../_components/Icon";
import { getEventById } from "../../../_data/events";

export default function TicketPaymentPage({
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
            <p className="subtle text-sm">Tickets • Step 4</p>
            <h1 className="h1">Payment (Mock)</h1>
            <p className="subtle mt-2 text-sm">
              {event.title} • Total: 0.00
            </p>
          </div>
          <Link href={`/tickets/${event.id}/confirm`} className="btn btn-ghost">
            <Icon name="arrow-left" />
            Back
          </Link>
        </div>
      </Card>

      <Card>
        <h2 className="h2">Confirm booking</h2>
        <p className="subtle mt-2 text-sm">
          This step simulates payment confirmation. No real payment is processed.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link href={`/tickets/${event.id}/ticket`} className="btn btn-primary">
            <Icon name="credit-card" />
            Confirm (Mock)
          </Link>
          <Link href="/tickets" className="btn btn-ghost">
            <Icon name="close" />
            Cancel
          </Link>
        </div>
      </Card>
    </div>
  );
}
