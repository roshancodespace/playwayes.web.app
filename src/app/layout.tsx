import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Playwaves — Your Galaxy of Music",
  description:
    "Playwaves is a minimal, privacy-first music player with a stunning galaxy-inspired design. Experience high-quality streaming with peak performance on Android.",
  keywords: ["Playwaves", "music player", "Android app", "galaxy theme", "privacy first"],
  authors: [{ name: "Bhanu Pratap" }],
  creator: "Bhanu Pratap",
  publisher: "Playwaves",
  openGraph: {
    title: "Playwaves — Your Galaxy of Music",
    description:
      "Minimal design, peak performance, and privacy-first music player for Android.",
    url: "https://your-domain.com",
    siteName: "Playwaves",
    images: [
      {
        url: "/og-image.png", // <-- put a real OG image (1200x630 recommended)
        width: 1200,
        height: 630,
        alt: "Playwaves App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Playwaves — Your Galaxy of Music",
    description:
      "Minimal, privacy-first music player with galaxy aesthetics. Built for Android.",
    images: ["/og-image.png"], // <-- same OG image works
    creator: "@your_twitter_handle",
  },
  metadataBase: new URL("https://your-domain.com"), // update to your domain
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased text-white overflow-x-hidden`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
