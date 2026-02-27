import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SamaDesk — Bureaux ergonomiques au Sénégal",
    template: "%s | SamaDesk",
  },
  description:
    "SamaDesk propose des bureaux assis-debout, chaises ergonomiques, moniteurs et accessoires pour optimiser votre espace de travail. Livraison au Sénégal via Afriety.",
  keywords: ["bureau ergonomique", "standing desk", "Sénégal", "télétravail", "SamaDesk"],
  openGraph: {
    siteName: "SamaDesk",
    locale: "fr_SN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${geist.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
