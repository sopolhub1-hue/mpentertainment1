import Link from "next/link";
import Card from "./_components/Card";
import Icon from "./_components/Icon";
import { announcements } from "./_data/announcements";
import { events } from "./_data/events";
import { partners, tiers } from "./_data/partners";

export default function HomePage() {
  const latestAnnouncements = announcements.slice(0, 3);
  const highlightEvent = events[0];

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="subtle text-sm">MP Entertainment</p>
            <h1 className="h1">Minimal Premium Entertainment Hub</h1>
            <p className="subtle mt-2">
              Mock system — ready to upgrade to real DB, auth, and payment.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/events" className="btn btn-primary">
              <Icon name="calendar" />
              Events
            </Link>
            <Link href="/tickets" className="btn">
              <Icon name="ticket" />
              Tickets
            </Link>
            <Link href="/guests" className="btn btn-ghost">
              <Icon name="users" />
              Artists / Guests
            </Link>
          </div>
        </div>
      </Card>

      <div className="grid-cards">
        <Card>
          <div className="flex items-center gap-2">
            <Icon name="calendar" />
            <h2 className="h2">Highlight Event</h2>
          </div>
          <div className="mt-3">
            <div className="font-semibold">{highlightEvent.title}</div>
            <div className="subtle text-sm">
              {highlightEvent.date} • {highlightEvent.time} • {highlightEvent.venue}
            </div>
            <p className="subtle mt-2 text-sm">{highlightEvent.description}</p>
            <div className="mt-4 flex gap-2">
              <Link className="btn btn-primary" href={`/events/${highlightEvent.slug}`}>
                <Icon name="chevron-right" />
                View
              </Link>
              <Link className="btn" href={`/tickets/${highlightEvent.id}/zones`}>
                <Icon name="ticket" />
                Book
              </Link>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-2">
            <Icon name="note" />
            <h2 className="h2">Latest Announcements</h2>
          </div>
          <div className="mt-3 space-y-3">
            {latestAnnouncements.map((a) => (
              <Link
                key={a.id}
                href={`/announcements/${a.slug}`}
                className="block rounded-[24px] border border-black/5 bg-white/50 p-4 hover:bg-white/75"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="font-semibold">{a.title}</div>
                  <span className="subtle text-sm">{a.date}</span>
                </div>
                <div className="subtle mt-1 text-sm">{a.excerpt}</div>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Link href="/announcements" className="btn btn-ghost">
              <Icon name="arrow-right" />
              View all
            </Link>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-2">
            <Icon name="link" />
            <h2 className="h2">Partners</h2>
          </div>
          <div className="mt-3 space-y-3">
            {tiers.map((tier) => (
              <div key={tier} className="rounded-[24px] border border-black/5 bg-white/50 p-4">
                <div className="text-sm font-semibold capitalize">{tier}</div>
                <div className="subtle mt-2 text-sm">
                  {partners.filter((p) => p.tier === tier).map((p) => p.name).join(" • ")}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Link href="/partners" className="btn btn-ghost">
              <Icon name="chevron-right" />
              Partners page
            </Link>
            <Link href="/donate" className="btn btn-ghost">
              <Icon name="credit-card" />
              Donate (Mock)
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
