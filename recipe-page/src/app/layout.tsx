import type { Metadata } from "next";
import { Young_Serif, Outfit } from "next/font/google";
import "./globals.css";

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-outfit",
});

export const youngSerif = Young_Serif({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-young-serif",
});

export const metadata: Metadata = {
  title: "Recipe page",
  description: "Recipe page",
  icons: {
    icon: "/favicon-32x32.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${youngSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}








