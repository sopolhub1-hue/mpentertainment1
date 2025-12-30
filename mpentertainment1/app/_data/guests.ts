export type Guest = {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  eventIds?: string[];
};

export const guests: Guest[] = [
  { id: "g1", name: "Guest A", role: "Special Guest", avatar: "/logo.png", eventIds: ["e1"] },
  { id: "g2", name: "Guest B", role: "Artist", avatar: "/logo.png", eventIds: ["e1", "e2"] },
];
