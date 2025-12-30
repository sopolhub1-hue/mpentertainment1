import Card from "../_components/Card";
import Icon from "../_components/Icon";
import { announcements } from "../_data/announcements";
import { events } from "../_data/events";
import { tickets } from "../_data/tickets";

export const metadata = {
  title: "Admin • Dashboard | MP Entertainment",
};

export default function AdminDashboardPage() {
  const pinned = announcements.filter((a) => a.pinned).length;
  const openEvents = events.filter((e) => e.status === "open").length;

  const stats = [
    { label: "Announcements", value: announcements.length, icon: "note" as const },
    { label: "Pinned", value: pinned, icon: "info" as const },
    { label: "Events", value: events.length, icon: "calendar" as const },
    { label: "Open Events", value: openEvents, icon: "check" as const },
    { label: "Tickets (mock)", value: tickets.length, icon: "ticket" as const },
  ];

  return (
    <div className="space-y-4">
      <Card>
        <p className="subtle text-sm">Admin</p>
        <h1 className="h1">Dashboard</h1>
        <p className="subtle mt-2">Overview (mock).</p>
      </Card>

      <div className="grid-cards">
        {stats.map((s) => (
          <Card key={s.label} className="hover:bg-white/85">
            <div className="flex items-start justify-between">
              <div>
                <div className="subtle text-sm">{s.label}</div>
                <div className="text-3xl font-semibold">{s.value}</div>
              </div>
              <span className="pill">
                <Icon name={s.icon} />
                Stat
              </span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
