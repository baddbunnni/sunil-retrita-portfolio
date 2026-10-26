import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: {
    default: "Sunil Mangtani Retrita | Applied AI, Data & FinTech",
    template: "%s | Sunil Mangtani Retrita"
  },
  description:
    "Personal portfolio of Sunil Mangtani Retrita — business solutions, software development, AI, data and FinTech.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Sunil Mangtani Retrita",
    description: "Building intelligent solutions for real-world problems.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
