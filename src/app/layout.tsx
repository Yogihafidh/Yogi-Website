import type { Metadata } from "next";
import "./globals.css";
import { Inter, Calistoga } from "next/font/google";
import { twMerge } from "tailwind-merge";

// Font Configurtation. Properti variable berguna ketika mau integrasi lebih dalam dengan Tailwind, misalnya pakai font-sans, font-serif di mana-mana.
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          " antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  );
}
