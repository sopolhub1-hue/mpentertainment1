export type PartnerTier = "platinum" | "gold" | "silver";

export type Partner = {
  id: string;
  name: string;
  tier: PartnerTier;
  logo?: string;
  url?: string;
};

export const partners: Partner[] = [
  { id: "p1", name: "Platinum Partner", tier: "platinum", logo: "/logo.png" },
  { id: "p2", name: "Gold Partner", tier: "gold", logo: "/logo.png" },
  { id: "p3", name: "Silver Partner", tier: "silver", logo: "/logo.png" },
];

export const tiers: PartnerTier[] = ["platinum", "gold", "silver"];
