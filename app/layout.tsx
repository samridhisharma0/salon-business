import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SalonHQ | Premium Hair Artistry in Tribeca, NYC",
  description:
    "Premium hair salon in the heart of New York City. Expert stylists, luxury treatments, balayage, precision cuts, and exceptional results. 4.9★ rated.",
  keywords: [
    "hair salon NYC",
    "balayage New York",
    "haircut Tribeca",
    "premium hair salon",
    "SalonHQ",
    "hair coloring",
    "perm NYC",
    "bridal hair",
  ],
  openGraph: {
    title: "SalonHQ | Premium Hair Artistry",
    description: "Where Art Meets Precision. Premium hair salon in Tribeca, NYC.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
