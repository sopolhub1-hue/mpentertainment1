export type Announcement = {
  id: string;
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  pinned?: boolean;
  excerpt: string;
  content: string;
  attachments?: { label: string; type: "pdf" | "image" | "file"; url: string }[];
};

export const announcements: Announcement[] = [
  {
    id: "a1",
    slug: "mp-ent-launch",
    title: "MP Entertainment Website (Mock) Launch",
    date: "2025-12-30",
    pinned: true,
    excerpt: "We are live with a mock system and premium minimal UI.",
    content:
      "Welcome to MP Entertainment. This is the first public mock release. Features will be upgraded step-by-step.",
    attachments: [
      { label: "Press Kit (PDF)", type: "pdf", url: "/og.png" },
    ],
  },
  {
    id: "a2",
    slug: "event-schedule-update",
    title: "Event Schedule Update",
    date: "2025-12-28",
    excerpt: "New lineup and timetable are available in the event detail page.",
    content:
      "We updated the schedule for upcoming events. Please check the event detail page for the latest timetable.",
  },
  {
    id: "a3",
    slug: "audition-open",
    title: "Audition Apply (Mock) Open",
    date: "2025-12-20",
    excerpt: "Application form is now available (mock).",
    content:
      "You can submit your application through the Apply page. This is currently a mock flow and will be upgraded later.",
  },
];

export function getAnnouncementBySlug(slug: string) {
  return announcements.find((a) => a.slug === slug);
}
