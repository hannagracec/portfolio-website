import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { karla } from './fonts';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hanna's Portfolio Website",
  description: 'Portfolio for Hanna Cho',
  icons: [
    {
      rel: 'icon',
      type: 'image/ico',
      sizes: '32x32',
      url: '/favicon.ico',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  );
}
