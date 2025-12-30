import Link from "next/link";
import Icon from "./Icon";
import LangSwitcher from "./LangSwitcher";

const nav = [
  { href: "/", label: "Home", icon: "home" as const },
  { href: "/announcements", label: "Announcements", icon: "note" as const },
  { href: "/events", label: "Events", icon: "calendar" as const },
  { href: "/tickets", label: "Tickets", icon: "ticket" as const },
  { href: "/guests", label: "Guests", icon: "users" as const },
  { href: "/partners", label: "Partners", icon: "link" as const },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/60 backdrop-blur-xl">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-10">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-10">
              <div className="flex items-center gap-10">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/70">
                  <span className="text-sm font-semibold">MP</span>
                </span>
              </div>
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="pill">
              <Icon name={i.icon} />
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitcher />
          <Link href="/account" className="btn btn-ghost">
            <Icon name="user" />
            Account
          </Link>
          <Link href="/admin" className="btn btn-primary hidden sm:inline-flex">
            <Icon name="layout" />
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
}
