import React from 'react';
import Header from '@/src/components/Header/Header';

export default async function PageLayout(
  {children, params}: { children: React.ReactNode, params: { lang: string } }
) {
  return (
    <>
      <Header lang={params.lang}/>
      {children}
    </>
  );
}
