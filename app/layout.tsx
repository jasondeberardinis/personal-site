import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
});

const siteUrl = "https://jasondeberardinis.com";
const siteDescription =
  "Co-founder of GRRO (AI search optimization) and SHEATH (premium knife rolls for chefs). Growing tech companies at Riviera Partners.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jason DeBerardinis",
    template: "%s — Jason DeBerardinis",
  },
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Jason DeBerardinis",
    title: "Jason DeBerardinis",
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jason DeBerardinis",
    description: siteDescription,
    creator: "@jasondbusiness",
  },
  authors: [{ name: "Jason DeBerardinis", url: siteUrl }],
  creator: "Jason DeBerardinis",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jason DeBerardinis",
  url: siteUrl,
  email: "hello@jasondeberardinis.com",
  jobTitle: "Co-Founder & CMO",
  worksFor: [
    {
      "@type": "Organization",
      name: "GRRO",
      url: "https://grro.io",
    },
    {
      "@type": "Organization",
      name: "SHEATH",
      url: "https://sheathmade.com",
    },
    {
      "@type": "Organization",
      name: "Riviera Partners",
      url: "https://www.rivierapartners.com",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressRegion: "MA",
    addressCountry: "US",
  },
  sameAs: [
    "https://x.com/jasondbusiness",
    "https://linkedin.com/in/jasondeberardinis",
    "https://instagram.com/jasonndeb",
    "https://grro.io",
    "https://sheathmade.com",
  ],
  knowsAbout: [
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "AI Search Optimization",
    "Search Engine Optimization",
    "Brand Building",
    "Ecommerce",
    "Product Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-STPQ30C230" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-STPQ30C230');`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
