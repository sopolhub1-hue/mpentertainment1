"use client";

import Link from "next/link";
import { useState } from "react";
import Card from "../../../../_components/Card";
import Icon from "../../../../_components/Icon";
import Toast from "../../../../_components/Toast";
import { getEventById } from "../../../../_data/events";

export default function AdminSeatingPage({
  params,
}: {
  params: { id: string };
}) {
  const event = getEventById(params.id);
  const [svg, setSvg] = useState<string>(
    event?.seatingSvg ||
      `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="360" height="180" rx="18" fill="white" opacity="0.65" stroke="rgba(0,0,0,0.15)"/>
  <text x="200" y="55" text-anchor="middle" font-family="system-ui" font-size="18" fill="rgba(0,0,0,0.75)">Seating (Mock)</text>
  <circle cx="110" cy="120" r="18" fill="rgba(255,109,162,0.45)" stroke="rgba(0,0,0,0.2)"/>
  <circle cx="170" cy="120" r="18" fill="rgba(255,109,162,0.18)" stroke="rgba(0,0,0,0.2)"/>
  <circle cx="230" cy="120" r="18" fill="rgba(255,109,162,0.18)" stroke="rgba(0,0,0,0.2)"/>
  <circle cx="290" cy="120" r="18" fill="rgba(255,109,162,0.18)" stroke="rgba(0,0,0,0.2)"/>
</svg>`
  );
  const [toastOpen, setToastOpen] = useState(false);

  if (!event) {
    return (
      <Card>
        <h1 className="h2">Not found</h1>
        <p className="subtle mt-2">Event does not exist.</p>
        <Link href="/admin/events" className="btn btn-ghost mt-4">
          <Icon name="arrow-left" />
          Back
        </Link>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="subtle text-sm">Admin • Seating</p>
            <h1 className="h1">SVG Seating Editor</h1>
            <p className="subtle mt-2 text-sm">{event.title}</p>
          </div>
          <Link href={`/admin/events/${event.id}`} className="btn btn-ghost">
            <Icon name="arrow-left" />
            Back
          </Link>
        </div>
      </Card>

      <div className="grid-cards">
        <Card>
          <h2 className="h2">Editor</h2>
          <p className="subtle mt-2 text-sm">Store as string (future DB).</p>
          <textarea
            value={svg}
            onChange={(e) => setSvg(e.target.value)}
            className="mt-3 w-full rounded-[28px] border border-black/10 bg-white/60 p-4 text-sm outline-none"
            rows={12}
          />
          <div className="mt-4 flex flex-wrap gap-2">
            <button className="btn btn-primary" type="button" onClick={() => setToastOpen(true)}>
              <Icon name="check" />
              Save (Mock)
            </button>
            <button className="btn" type="button">
              <Icon name="file" />
              Upload (Mock)
            </button>
          </div>
        </Card>

        <Card>
          <h2 className="h2">Preview</h2>
          <p className="subtle mt-2 text-sm">Rendered SVG preview.</p>
          <div
            className="mt-3 rounded-[28px] border border-black/10 bg-white/50 p-4"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
          <div className="mt-4">
            <Link href={`/tickets/${event.id}/zones`} className="btn btn-ghost">
              <Icon name="external-link" />
              Preview booking step
            </Link>
          </div>
        </Card>
      </div>

      <Toast
        open={toastOpen}
        kind="success"
        title="Saved (mock)"
        message="SVG stored in memory only (not persisted)."
        onClose={() => setToastOpen(false)}
      />
    </div>
  );
}
