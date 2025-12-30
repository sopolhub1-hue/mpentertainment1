export type Ticket = {
  id: string;
  eventId: string;
  zone: string;
  seat: string;
  holderName: string;
  status: "unused" | "used" | "expired";
};

export const tickets: Ticket[] = [
  { id: "t1", eventId: "e1", zone: "A", seat: "A-01", holderName: "Mock User", status: "unused" },
];

export function getTicketsByEventId(eventId: string) {
  return tickets.filter((t) => t.eventId === eventId);
}
