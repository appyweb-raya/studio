import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: {
    default: "AppyWeb",
    template: "%s | AppyWeb",

  },
  description:
    "We design, build, and scale reliable digital products tailored for startups and growing businesses.",
  keywords: ["software development", "web development", "mobile app development", "ui/ux design", "startups"],
  icons: {
    icon: "/logo.png",          // favicon
    shortcut: "/logo.png",      // optional shortcut icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "font-body antialiased bg-background text-foreground"
        )}
      >
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-[calc(100vh-20rem)]">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
