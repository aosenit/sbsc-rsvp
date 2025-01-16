import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/components/layouts/QueryProvider";

export const metadata: Metadata = {
  title: "RSVP Event App",
  description: "Created by SBSC Frontend Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
