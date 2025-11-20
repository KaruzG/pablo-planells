import type { Metadata } from "next";
import "./globals.css";
import { robotoMono } from "@/fonts/fonts";
import Nav from "@/components/Nav";
// locales
import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';


export const metadata: Metadata = {
  title: "Pablo Planells",
  description: "Personal website of Pablo Planells",
};

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/images/favicon.svg" sizes="any" />
      </head>
      <body className={`antialiased ${robotoMono.variable}`}>
        <NextIntlClientProvider>
          <Nav></Nav>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
