import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Furniture Website",
  description: "This is E-commerce website display products of furniture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
