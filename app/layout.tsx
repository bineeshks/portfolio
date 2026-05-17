import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const syne = Syne({ 
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Bineesh K S — Digital Marketer & Creative Content Creator | Kochi Kerala",
  description: "I build brands that people actually remember. From Instagram strategy to reels, ads, and design — I handle the full creative cycle.",
  keywords: "Digital Marketer, Content Creator, Social Media Marketing, Meta Ads, Kochi, Kerala, Bineesh K S, Reel Editing, Graphic Design",
  openGraph: {
    title: "Bineesh K S — Digital Marketer & Creative Content Creator",
    description: "Premium digital marketing and creative content services in Kochi, Kerala.",
    type: "website",
    locale: "en_IN",
    siteName: "Bineesh Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${syne.variable} font-inter antialiased bg-navy text-white selection:bg-violet selection:text-white`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
