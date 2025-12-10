import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./components/layout/Layout";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "National Digital Innovation Week – The Gambia",
  description: "Accelerating Digital Transformation and Strengthening Connectivity for Inclusive Growth in The Gambia. December 8-12, 2025.",
  keywords: ["digital innovation", "technology", "The Gambia", "digital transformation", "conference"],
  openGraph: {
    title: "National Digital Innovation Week – The Gambia",
    description: "Accelerating Digital Transformation and Strengthening Connectivity for Inclusive Growth in The Gambia. December 8-12, 2025.",
    type: "website",
    locale: "en_GB",
    siteName: "National Digital Innovation Week",
  },
  twitter: {
    card: "summary_large_image",
    title: "National Digital Innovation Week – The Gambia",
    description: "Accelerating Digital Transformation and Strengthening Connectivity for Inclusive Growth in The Gambia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
