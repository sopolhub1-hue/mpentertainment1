import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-black/5 bg-white/40">
      <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-black/60">
          © MP ENT 2025. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link href="/donate" className="subtle hover:text-black">
            Donate
          </Link>
          <Link href="/shop" className="subtle hover:text-black">
            Shop
          </Link>
          <Link href="/apply" className="subtle hover:text-black">
            Apply
          </Link>
        </div>
      </div>
    </footer>
  );
}
