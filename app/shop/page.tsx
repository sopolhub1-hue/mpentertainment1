import Link from "next/link";
import Card from "../_components/Card";
import Icon from "../_components/Icon";

export const metadata = {
  title: "Shop | MP Entertainment",
};

export default function Page() {
  return (
    <div className="space-y-5">
      <Card>
        <div className="flex items-end justify-between gap-3">
          <div>
            <p className="subtle text-sm">MP Entertainment</p>
            <h1 className="h1">Shop</h1>
            <p className="subtle mt-2">Items are links (mock).</p>
          </div>
          <Link href="/" className="btn btn-ghost">
            <Icon name="arrow-left" />
            Home
          </Link>
        </div>
      </Card>
      <Card>
        <p className="subtle">This is a mock page scaffold.</p>
      </Card>
    </div>
  );
}
