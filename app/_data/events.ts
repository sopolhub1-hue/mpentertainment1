export type Event = {
  id: string;
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  venue: string;
  cover?: string;
  status: "open" | "closed";
  description: string;
  schedule: { time: string; title: string }[];
  gallery?: string[];
  seatingSvg?: string;
};

export const events: Event[] = [
  {
    id: "e1",
    slug: "mp-night-001",
    title: "MP NIGHT 001",
    date: "2026-01-20",
    time: "19:00",
    venue: "MP Hall",
    cover: "/og.png",
    status: "open",
    description:
      "A premium mock concert experience. Tickets are free in this mock system.",
    schedule: [
      { time: "19:00", title: "Doors Open" },
      { time: "19:30", title: "Opening" },
      { time: "20:00", title: "Main Show" },
      { time: "21:20", title: "Encore" },
    ],
    gallery: ["/og.png"],
    seatingSvg: "",
  },
  {
    id: "e2",
    slug: "mp-showcase-002",
    title: "MP SHOWCASE 002",
    date: "2026-02-10",
    time: "18:00",
    venue: "Studio Stage",
    cover: "/og.png",
    status: "closed",
    description: "Showcase event (closed).",
    schedule: [{ time: "18:00", title: "Doors Open" }],
  },
];

export function getEventBySlug(slug: string) {
  return events.find((e) => e.slug === slug);
}
export function getEventById(id: string) {
  return events.find((e) => e.id === id);
}
