import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import {} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { getGlobalPageData, getGlobalPageMetaData } from "@/data/loaders";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { madeTommy, fontSans } from "@/app/fonts";

//Get metadeta from strapi
export async function generateMetadata(): Promise<Metadata> {
  const metaData = await getGlobalPageMetaData();
  return { title: metaData?.title, description: metaData?.description };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const globalData = await getGlobalPageData();

  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          madeTommy.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header data={globalData.header} />
          {children}
          <Footer data={globalData.footer} />
        </ThemeProvider>
      </body>
    </html>
  );
}
