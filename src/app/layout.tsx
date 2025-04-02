import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "ShadcnUI",
    "Javascript",
    "Typescript",
    "Docker",
    "Deployment",
    "AWS",
    "EC2",
    "Express",
    "Postgres",
    "MongoDB",
    "Database",
    "API",
    "AI",
  ],
  authors: [
    {
      name: "Harshal Khobragade",
      url: "https://github.com/Harshalvk",
    },
  ],
  creator: "Harshal Khobragade",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og`],
    creator: "@Harshalvk",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
