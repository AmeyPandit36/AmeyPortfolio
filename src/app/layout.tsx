import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amey Pandit — Data, AI & Software",
  description: "Amey Ravindra Pandit is an Information Technology student exploring data analytics, business intelligence, AI and software development.",
  openGraph: {
    title: "Amey Pandit — Data, AI & Software",
    description: "Curious about the signal in data. Building ideas across AI and software.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
