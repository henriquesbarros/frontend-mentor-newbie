import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600"]
});

export const metadata: Metadata = {
  title: "Four Card Feature Section",
  description: "Four Card Feature Section",
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
      <body
        className={`${poppins.className} bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}



