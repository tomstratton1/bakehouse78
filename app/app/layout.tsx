import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"], // Customize weights as needed
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bakehouse 78",
  description: "Delicious treats made fresh daily!",
  icons: {
    icon: "/icon.png?v=1", // Add query parameter for cache busting
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
