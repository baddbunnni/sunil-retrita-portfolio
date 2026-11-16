import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { introPrePaintScript } from "@/lib/intro";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Sunil Mangtani Retrita | Applied AI, Data, Finance & FinTech",
    template: "%s | Sunil Mangtani Retrita"
  },
  description:
    "Personal portfolio of Sunil Mangtani Retrita — business solutions, software development, AI, data, finance and FinTech.",
  metadataBase: new URL("https://sunilretrita.co.uk"),
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
  openGraph: {
    title: "Sunil Mangtani Retrita",
    description: "Building intelligent solutions for real-world problems.",
    type: "website",
    url: "https://sunilretrita.co.uk"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: introPrePaintScript }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
