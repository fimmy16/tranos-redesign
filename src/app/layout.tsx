import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingQuoteButton from "@/components/FloatingQuoteButton";
import QuoteModal from "@/components/QuoteModal";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import SecurityProvider from "./SecurityProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Tranos | Industrial Power, Enclosures & Infrastructure Engineering",
    template: "%s | Tranos",
  },
  description:
    "Tranos delivers enterprise-grade electrical distribution, medium voltage controls, enclosures, cable management, power generation, warehouse storage, and wiring systems engineered for Nigeria's industrial sectors.",
  keywords: [
    "Tranos",
    "LV Panels",
    "Medium Voltage Switchgear",
    "Siemens SIVACON S8",
    "Siemens SIMOPRIME",
    "Siemens SIMOSEC",
    "GRP ATEX Enclosures",
    "Cable Trays",
    "Industrial Generators",
    "Warehouse Racking",
  ],
  metadataBase: new URL("https://www.tranos.ng"),
  openGraph: {
    title: "Tranos | Industrial Power, Enclosures & Infrastructure Engineering",
    description:
      "Enterprise-grade electrical, mechanical, and power infrastructure solutions engineered for Nigeria's industrial sectors.",
    url: "https://www.tranos.ng",
    siteName: "Tranos",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="no-js" suppressHydrationWarning>
      <head>
        <script
          // Removes the no-js fallback class before paint so reveal-on-scroll content
          // isn't stuck invisible for visitors without JS; see CLAUDE_RULES.md 4.3.
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js');",
          }}
        />
      </head>
      <body className="bg-white text-tranos-navy antialiased">
        <SecurityProvider>
          <QuoteModalProvider>
            <Navbar />
            <main className="pt-28">{children}</main>
            <Footer />
            <FloatingQuoteButton />
            <QuoteModal />
          </QuoteModalProvider>
        </SecurityProvider>
      </body>
    </html>
  );
}
