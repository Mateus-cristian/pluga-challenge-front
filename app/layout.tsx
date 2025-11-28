import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Pluga Challenge Front',
  description: 'Encontre e integre ferramentas com a Pluga.',
  keywords: 'Pluga, integrações, automação, ferramentas, apps',
  openGraph: {
    title: 'Pluga Challenge Front',
    description: 'Encontre e integre ferramentas com a Pluga.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/icon-pluga.png' type='image/png' />
      </head>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
