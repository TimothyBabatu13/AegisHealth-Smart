<<<<<<< HEAD
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/context/ContextProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

const title = "Aegis Health Smart";
const description = "A Healthcare application that leverages AI to provide personalized health insights, and diagnostics";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
     url: "https://www.aegis-health-smart.vercel.app",
     siteName: "NaijaRugged",
      images: [
        {
          url: '',
          width: 800,
          height: 800
        },
      ],
      locale: 'en',
      type: 'website'
    },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    siteId: "",
    creator: "@timothy_akanbii",
    creatorId: "",
    images: ['']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          {children}
        <Toaster />
        </ContextProvider>
      </body>
    </html>
  );
}
=======
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/context/ContextProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

const title = "Aegis Health Smart";
const description = "A Healthcare application that leverages AI to provide personalized health insights, and diagnostics";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
     url: "https://www.aegis-health-smart.vercel.app",
     siteName: "NaijaRugged",
      images: [
        {
          url: '',
          width: 800,
          height: 800
        },
      ],
      locale: 'en',
      type: 'website'
    },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    siteId: "",
    creator: "@timothy_akanbii",
    creatorId: "",
    images: ['']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          {children}
        <Toaster />
        </ContextProvider>
      </body>
    </html>
  );
}
>>>>>>> master
