import type { Metadata } from "next";
import "./globals.css";
import { Roboto_Mono } from "next/font/google";
import Nav from "@/components/Nav";
// locales
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

export const metadata: Metadata = {
  title: "Pablo Planells",
  description: "Personal website of Pablo Planells",
};

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={`antialiased ${robotoMono.variable}`}>
        <NextIntlClientProvider>
          <Nav></Nav>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
