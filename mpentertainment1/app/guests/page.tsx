import Link from "next/link";
import Card from "../_components/Card";
import Icon from "../_components/Icon";
import { guests } from "../_data/guests";
import { events } from "../_data/events";

export const metadata = {
  title: "Guests | MP Entertainment",
};

export default function GuestsPage() {
  return (
    <div className="space-y-5">
      <Card>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="subtle text-sm">MP Entertainment</p>
            <h1 className="h1">Guests</h1>
            <p className="subtle mt-2">Guest and artist list (mock).</p>
          </div>
          <Link href="/" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Home
          </Link>
        </div>
      </Card>

      <div className="grid-cards">
        {guests.map((g) => (
          <Card key={g.id} className="hover:bg-white/85">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="h2">{g.name}</h2>
                <p className="subtle mt-1 text-sm">{g.role}</p>
                {g.eventIds?.length ? (
                  <p className="subtle mt-3 text-sm">
                    Events:{" "}
                    {g.eventIds
                      .map((id) => events.find((e) => e.id === id)?.title)
                      .filter(Boolean)
                      .join(" • ")}
                  </p>
                ) : null}
              </div>
              <span className="pill">
                <Icon name="users" />
                Guest
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
