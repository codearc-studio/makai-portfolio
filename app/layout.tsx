import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://makai.codearc.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Makai O'Neill | Designer + Developer",
  description:
    "Makai O'Neill is a designer and developer building native Apple apps, web products, developer tools, and client websites through CodeArc.studio.",
  applicationName: "Makai O'Neill",
  keywords: [
    "Makai O'Neill",
    "designer developer",
    "SwiftUI developer",
    "iOS developer",
    "macOS developer",
    "web developer",
    "product design",
    "CodeArc.studio",
  ],
  authors: [{ name: "Makai O'Neill", url: siteUrl }],
  creator: "Makai O'Neill",
  publisher: "Makai O'Neill",
  category: "technology",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    url: siteUrl,
    title: "Makai O'Neill | Designer + Developer",
    description:
      "Apps, websites, and tools designed to feel simple, useful, and genuinely finished.",
    siteName: "Makai O'Neill",
    locale: "en_US",
    firstName: "Makai",
    lastName: "O'Neill",
  },
  twitter: {
    card: "summary_large_image",
    title: "Makai O'Neill | Designer + Developer",
    description:
      "Apps, websites, and tools designed to feel simple, useful, and genuinely finished.",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f3f5f6",
  colorScheme: "light",
};

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Makai O'Neill",
  url: siteUrl,
  email: "mailto:makai@codearc.studio",
  jobTitle: "Designer and Developer",
  sameAs: [
    "https://github.com/codearc-studio",
    "https://g.dev/makai",
    "https://codearc.studio",
  ],
  worksFor: {
    "@type": "Organization",
    name: "CodeArc.studio",
    url: "https://codearc.studio",
  },
  knowsAbout: [
    "Swift",
    "SwiftUI",
    "iOS development",
    "macOS development",
    "Web development",
    "Product design",
    "Accessibility",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
      </body>
    </html>
  );
}
