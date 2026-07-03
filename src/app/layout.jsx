import "../styles.css";

import { CustomCursor, Footer, Navbar } from "@/components/site/shared";

export const metadata = {
  metadataBase: new URL("https://instechsol.com"),
  title: {
    default: "Instech Sol — Full-Stack Development Agency",
    template: "%s — Instech Sol",
  },
  description:
    "Instech Sol is a full-stack software development agency in Islamabad crafting web, mobile, and cloud experiences for modern brands.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    title: "Instech Sol — Full-Stack Development Agency",
    description: "Crafting powerful digital solutions for modern brands.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" data-scroll-behavior="smooth">
      <body>
        <div className="relative bg-background text-foreground">
          <div className="grain-overlay" aria-hidden />
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}