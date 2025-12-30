import Link from "next/link";
import Card from "../_components/Card";
import Icon from "../_components/Icon";
import { announcements } from "../_data/announcements";

export const metadata = {
  title: "Announcements | MP Entertainment",
};

export default function AnnouncementsPage() {
  return (
    <div className="space-y-5">
      <Card>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="subtle text-sm">MP Entertainment</p>
            <h1 className="h1">Announcements</h1>
            <p className="subtle mt-2">All announcements (mock).</p>
          </div>
          <Link href="/" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Home
          </Link>
        </div>
      </Card>

      <div className="space-y-3">
        {announcements.map((a) => (
          <Link
            key={a.id}
            href={`/announcements/${a.slug}`}
            className="block glass shadow-glass p-5 hover:bg-white/85"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  {a.pinned ? <span className="pill"><span className="dot dot-pink" />Pinned</span> : null}
                  <h2 className="h2">{a.title}</h2>
                </div>
                <p className="subtle mt-2 text-sm">{a.excerpt}</p>
              </div>
              <div className="subtle text-sm whitespace-nowrap">{a.date}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
