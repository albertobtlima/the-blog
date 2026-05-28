import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blog",
  description: "Este é um blog com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
