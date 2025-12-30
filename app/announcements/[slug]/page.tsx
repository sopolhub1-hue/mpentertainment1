import Link from "next/link";
import Card from "../../_components/Card";
import Icon from "../../_components/Icon";
import { getAnnouncementBySlug } from "../../_data/announcements";

export const dynamicParams = true;

export default function AnnouncementDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = getAnnouncementBySlug(params.slug);

  if (!item) {
    return (
      <Card>
        <h1 className="h2">Not found</h1>
        <p className="subtle mt-2">Announcement does not exist.</p>
        <div className="mt-4">
          <Link href="/announcements" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Back
          </Link>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-5">
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="subtle text-sm">Announcement</p>
            <h1 className="h1">{item.title}</h1>
            <p className="subtle mt-2 text-sm">{item.date}</p>
          </div>
          <Link href="/announcements" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Back
          </Link>
        </div>
      </Card>

      <Card>
        <p className="text-[15px] leading-7">{item.content}</p>

        {item.attachments?.length ? (
          <div className="mt-6">
            <h2 className="h2">Attachments</h2>
            <div className="mt-3 grid-cards">
              {item.attachments.map((att) => (
                <a key={att.label} href={att.url} className="glass p-4 hover:bg-white/85">
                  <div className="flex items-center gap-2">
                    <Icon name={att.type === "pdf" ? "file" : "download"} />
                    <div className="font-semibold">{att.label}</div>
                  </div>
                  <div className="subtle mt-1 text-sm">{att.type.toUpperCase()}</div>
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </Card>
    </div>
  );
}
