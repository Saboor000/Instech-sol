import "../styles.css";

import Script from "next/script";
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
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var saved = localStorage.getItem('theme');
              var pref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              var theme = saved || pref;
              if (theme === 'light') {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
              } else {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
              }
            } catch (e) {}
          })()
        ` }} />
      </head>
      <body>
        <div className="relative bg-transparent text-foreground">
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