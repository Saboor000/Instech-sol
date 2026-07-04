import "../styles.css";

import { CustomCursor, Footer, Navbar } from "@/components/site/shared";
import FooterCTAWrapper from "@/components/site/footer-cta-wrapper";

export const metadata = {
  metadataBase: new URL("https://instechsol.com"),
  title: {
    default: "Instech Sol — Innovate. Build. Scale.",
    template: "%s — Instech Sol",
  },
  description:
    "Instech Sol is a premium AI & full-stack software development agency in Islamabad. We build AI-powered applications, web & mobile apps, cloud infrastructure and digital transformation solutions for startups, SMEs and enterprises worldwide.",
  keywords: [
    "AI development", "full-stack agency", "web development", "mobile app development",
    "Shopify development", "cloud DevOps", "digital transformation", "Pakistan tech agency",
    "Next.js", "React Native", "AI chatbot", "LLM integration", "Islamabad",
  ],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    title: "Instech Sol — Innovate. Build. Scale.",
    description: "Premium AI-powered web, mobile, and cloud solutions for modern businesses. Your one-stop digital transformation partner.",
    url: "https://instechsol.com",
    siteName: "Instech Sol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instech Sol — Innovate. Build. Scale.",
    description: "Premium AI-powered web, mobile, and cloud solutions for modern businesses.",
  },
  robots: {
    index: true,
    follow: true,
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
          <FooterCTAWrapper />
          <Footer />
        </div>
      </body>
    </html>
  );
}