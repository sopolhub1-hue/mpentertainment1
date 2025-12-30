import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "MP Entertainment",
  description: "MP Entertainment (Mock System)",
  icons: {
    icon: "/icons/icon-192.png",
  },
  openGraph: {
    title: "MP Entertainment",
    description: "MP Entertainment (Mock System)",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
