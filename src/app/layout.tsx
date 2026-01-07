import "@/css/satoshi.css";
import "@/css/style.css";

import { Sidebar } from "@/components/Layouts/sidebar";

import "flatpickr/dist/flatpickr.min.css";
import "jsvectormap/dist/jsvectormap.css";

import { Header } from "@/components/Layouts/header";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import type { PropsWithChildren } from "react";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Duvisch Dashboard",
  description: "Duvisch Admin Dashboard ",
  openGraph: {
    title: "Duvisch Dashboard",
    description: "Modern Admin Dashboard for Duvisch",
    url: "https://duvisch-admin-dashboard.vercel.app",
    siteName: "Duvisch",
    images: [
      {
        url: "https://duvisch-admin-dashboard.vercel.app",
        width: 1200,
        height: 630,
        alt: "Duvisch Dashboard",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NextTopLoader color="#005EEB" showSpinner={false} />

          <div className="flex min-h-screen">
            <Sidebar />

            <div className="w-full bg-gray-2 dark:bg-[#020d1a]">
              <Header />

              <main className="mx-auto w-full max-w-screen-3xl overflow-hidden p-4 md:p-6 2xl:p-10">
                {children}
              </main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
