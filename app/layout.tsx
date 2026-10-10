
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SPC Dubai | Church Directory",
  description:
    "Satwa Pentecostal Church of God, Dubai – Member Directory",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
