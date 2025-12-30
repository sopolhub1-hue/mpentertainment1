"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import Card from "../../_components/Card";
import Icon from "../../_components/Icon";
import Modal from "../../_components/Modal";
import Toast from "../../_components/Toast";
import { announcements as seed } from "../../_data/announcements";

type Row = {
  id: string;
  slug: string;
  title: string;
  date: string;
  pinned?: boolean;
};

export default function AdminAnnouncementsPage() {
  const [query, setQuery] = useState("");
  const [rows, setRows] = useState<Row[]>(() =>
    seed.map((a) => ({ id: a.id, slug: a.slug, title: a.title, date: a.date, pinned: a.pinned }))
  );
  const [confirmId, setConfirmId] = useState<string | null>(null);
  const [toast, setToast] = useState<{ open: boolean; title: string; kind: "success" | "error" | "info" }>({
    open: false,
    title: "",
    kind: "info",
  });

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => (r.title + " " + r.slug).toLowerCase().includes(q));
  }, [rows, query]);

  const target = rows.find((r) => r.id === confirmId) ?? null;

  function deleteRow(id: string) {
    setRows((prev) => prev.filter((r) => r.id !== id));
    setConfirmId(null);
    setToast({ open: true, kind: "success", title: "Deleted (mock)" });
  }

  return (
    <div className="space-y-4">
      <Card>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="subtle text-sm">Admin • Announcements</p>
            <h1 className="h1">Manage announcements</h1>
            <p className="subtle mt-2">CRUD scaffold (mock in-memory).</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/admin" className="btn btn-ghost">
              <Icon name="arrow-left" />
              Dashboard
            </Link>
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => setToast({ open: true, kind: "info", title: "Create (mock)" })}
            >
              <Icon name="plus" />
              New
            </button>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="input-wrap">
            <Icon name="search" />
            <input
              className="input"
              placeholder="Search title / slug..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button className="pill" type="button" onClick={() => setQuery("")}>
              <span className="dot dot-pink" />
              Clear
            </button>
            <a className="pill" href="/announcements" target="_blank" rel="noreferrer">
              <Icon name="external-link" />
              Preview
            </a>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        {filtered.map((r) => (
          <Card key={r.id} className="hover:bg-white/85">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  {r.pinned ? (
                    <span className="pill">
                      <span className="dot dot-pink" />
                      Pinned
                    </span>
                  ) : null}
                  <div className="font-semibold truncate">{r.title}</div>
                </div>
                <div className="subtle mt-1 text-sm truncate">/{r.slug}</div>
                <div className="subtle mt-2 text-sm">{r.date}</div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  className="btn btn-ghost"
                  type="button"
                  onClick={() => setToast({ open: true, kind: "info", title: "Edit (mock)" })}
                >
                  <Icon name="edit" />
                  Edit
                </button>
                <button className="btn" type="button" onClick={() => setConfirmId(r.id)}>
                  <Icon name="trash" />
                  Delete
                </button>
              </div>
            </div>
          </Card>
        ))}
        {!filtered.length ? (
          <Card>
            <h2 className="h2">No results</h2>
            <p className="subtle mt-2">Try a different keyword.</p>
          </Card>
        ) : null}
      </div>

      <Modal
        open={!!confirmId}
        title="Delete announcement?"
        onClose={() => setConfirmId(null)}
        footer={
          <>
            <button className="btn btn-ghost" type="button" onClick={() => setConfirmId(null)}>
              <Icon name="close" />
              Cancel
            </button>
            <button className="btn btn-primary" type="button" onClick={() => confirmId && deleteRow(confirmId)}>
              <Icon name="trash" />
              Delete
            </button>
          </>
        }
      >
        <p className="subtle">
          {target ? (
            <>
              You are about to delete <b>{target.title}</b> (mock only).
            </>
          ) : (
            "Selected item not found."
          )}
        </p>
      </Modal>

      <Toast open={toast.open} kind={toast.kind} title={toast.title} onClose={() => setToast((t) => ({ ...t, open: false }))} />
    </div>
  );
}
