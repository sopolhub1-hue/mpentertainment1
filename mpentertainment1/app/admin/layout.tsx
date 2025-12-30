import Link from "next/link";
import Icon from "../_components/Icon";
import "../globals.css";

const adminNav = [
  { href: "/admin", label: "Dashboard", icon: "layout" as const },
  { href: "/admin/announcements", label: "Announcements", icon: "note" as const },
  { href: "/admin/events", label: "Events", icon: "calendar" as const },
  { href: "/admin/tickets", label: "Tickets", icon: "ticket" as const },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="sticky top-0 z-40 border-b border-black/5 bg-white/60 backdrop-blur-xl">
        <div className="container flex items-center justify-between py-3">
          <Link href="/" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Public site
          </Link>
          <div className="subtle text-sm">Admin Panel (Mock Auth)</div>
          <div className="btn btn-ghost">
            <Icon name="user" />
            Admin
          </div>
        </div>
      </div>

      <div className="container grid gap-4 py-6 lg:grid-cols-[280px_1fr]">
        <aside className="glass shadow-glass p-4">
          <div className="font-semibold">MP Admin</div>
          <div className="subtle text-sm">Manage content & tickets</div>
          <div className="mt-4 space-y-2">
            {adminNav.map((i) => (
              <Link key={i.href} href={i.href} className="pill w-full justify-start">
                <Icon name={i.icon} />
                {i.label}
              </Link>
            ))}
          </div>
        </aside>

        <section>{children}</section>
      </div>
    </div>
  );
}
