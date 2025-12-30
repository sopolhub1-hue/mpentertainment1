import Link from "next/link";
import Card from "../_components/Card";
import Icon from "../_components/Icon";
import { partners, tiers } from "../_data/partners";

export const metadata = {
  title: "Partners | MP Entertainment",
};

export default function PartnersPage() {
  return (
    <div className="space-y-5">
      <Card>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="subtle text-sm">MP Entertainment</p>
            <h1 className="h1">Partners</h1>
            <p className="subtle mt-2">Partner tiers (mock).</p>
          </div>
          <Link href="/" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Home
          </Link>
        </div>
      </Card>

      <div className="space-y-4">
        {tiers.map((tier) => (
          <Card key={tier}>
            <div className="flex items-center justify-between gap-3">
              <h2 className="h2 capitalize">{tier}</h2>
              <span className="pill">
                <Icon name="link" />
                Tier
              </span>
            </div>
            <div className="mt-4 grid-cards">
              {partners
                .filter((p) => p.tier === tier)
                .map((p) => (
                  <div
                    key={p.id}
                    className="rounded-[24px] border border-black/5 bg-white/50 p-4"
                  >
                    <div className="font-semibold">{p.name}</div>
                    <div className="subtle mt-1 text-sm">Mock logo: /public/logo.png</div>
                  </div>
                ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
