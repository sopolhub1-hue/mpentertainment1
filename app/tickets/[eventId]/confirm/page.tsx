import Link from "next/link";
import Card from "../../../_components/Card";
import Icon from "../../../_components/Icon";
import { getEventById } from "../../../_data/events";

export default function TicketConfirmPage({
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
            <p className="subtle text-sm">Tickets • Step 3</p>
            <h1 className="h1">Policy & Agreement</h1>
            <p className="subtle mt-2 text-sm">{event.title}</p>
          </div>
          <Link href={`/tickets/${event.id}/zones`} className="btn btn-ghost">
            <Icon name="arrow-left" />
            Back
          </Link>
        </div>
      </Card>

      <Card>
        <h2 className="h2">Agreement</h2>
        <p className="subtle mt-2 text-sm leading-7">
          This is a mock ticket system. Tickets are free. By continuing, you agree to the basic policy
          and confirm your booking information is correct.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <Link href={`/tickets/${event.id}/payment`} className="btn btn-primary">
            <Icon name="check" />
            I agree
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
