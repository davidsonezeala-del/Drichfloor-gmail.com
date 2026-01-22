import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Ghana Valentine's Experience 2026 | Luxury 3-Day Cultural Escape",
  description:
    "A premium Valentine's getaway to Ghana. Feb 13-15, 2026. Luxury transport, 3-night hotel stay, curated tours of Accra, Aburi & Cape Coast. Limited to 30 guests. ₦1,000,000 all-inclusive.",
  keywords:
    "Ghana Valentine, luxury travel Ghana, Valentine's Day 2026, cultural immersion, Accra tours, Cape Coast, Aburi mountains, luxury Nigeria Ghana travel",
  openGraph: {
    title: "Ghana Valentine's Experience 2026 | Luxury Cultural Escape",
    description:
      "Valentine, Redefined Through Africa. Join 30 selected individuals for a 3-day luxury cultural escape to Ghana.",
    type: "website",
    url: "https://yourwebsite.com",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ghana Valentine's Experience 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghana Valentine's Experience 2026",
    description:
      "Valentine, Redefined Through Africa. Luxury 3-day escape to Ghana.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
