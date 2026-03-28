import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import ThemeDetector from "@/components/ThemeDetector";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thytus.com"),
  title: {
    default: "AI Collaboration Platform for Teams | Thytus",
    template: "%s | Thytus",
  },
  description:
    "Thytus is a collaborative AI workspace that helps sales teams, marketing teams, researchers, and small businesses work with multiple AI models in one place.",
  keywords: [
    "AI collaboration platform",
    "AI tools for teams",
    "AI tools for sales teams",
    "AI tools for marketing teams",
    "AI research assistant",
    "AI tools for small businesses",
    "collaborative AI workspace",
    "multi AI model platform",
  ],
  icons: {
    icon: "/Thytus_Logo.png",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Thytus",
    locale: "en_US",
    title: "AI Collaboration Platform for Teams | Thytus",
    description:
      "Thytus is a collaborative AI workspace that helps sales teams, marketing teams, researchers, and small businesses work with multiple AI models in one place.",
    images: [{ url: "/Thytus_Logo.png", width: 512, height: 512, alt: "Thytus" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@showcase__ai",
    title: "AI Collaboration Platform for Teams | Thytus",
    description:
      "Thytus is a collaborative AI workspace that helps sales teams, marketing teams, researchers, and small businesses work with multiple AI models in one place.",
    images: ["/Thytus_Logo.png"],
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Thytus",
    url: "https://thytus.com",
    logo: "https://thytus.com/Thytus_Logo.png",
    sameAs: [
      "https://x.com/showcase__ai",
      "https://www.linkedin.com/company/thytus/",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Thytus",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Collaborative AI workspace where teams and AI agents work side by side with multiple models.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark')document.documentElement.classList.add('dark');else if(t==='light'){}else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.classList.add('dark')}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          as="style"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${sourceSerif.variable} antialiased`}>
        <ThemeDetector />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
