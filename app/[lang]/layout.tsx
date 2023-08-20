import './../../src/styles/globals.scss';
import './../../src/styles/custom-antd.scss';
import type {Metadata} from 'next';
import localFont from 'next/font/local';
import React from 'react';
import ClientProvider from '@/src/components/ClientProvider';
import {NextIntlClientProvider} from 'next-intl';

const OpenSans = localFont({
  src: [
    {
      path: './../../public/fonts/open-sans-500.woff2',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--open-sans-font'
});

const Montserrat = localFont({
  src: [
    {
      path: './../../public/fonts/montserrat-600.woff',
      weight: '600',
      style: 'normal'
    }
  ],
  variable: '--montserrat-font'
});

export const metadata: Metadata = {
  title: 'ITMO',
  description: 'Университет ИТМО',
  icons: {
    icon: '/next.svg'
  }
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../dictionaries/${locale}.json`)).default;
  } catch (error) {
    return 'test'
  }
}

export function generateStaticParams() {
  return [{lang: 'ru'}, {lang: 'en'}, {lang: 'ch'}];
}

export default async function RootLayout(
  {children, params}: { children: React.ReactNode, params: { lang: string } }
) {

  let dictionary = await getMessages(params.lang);

  return (
    <html lang={params.lang} className={`${OpenSans.variable} ${Montserrat.variable}`}>
    <body>
    <NextIntlClientProvider locale={params.lang} messages={dictionary}>
      <ClientProvider>
        {children}
      </ClientProvider>
    </NextIntlClientProvider>
    </body>
    </html>
  )
}
