import React from 'react';

export const metadata = {
  title: 'Pluga',
  description: 'Pluga integrations',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>{children}</div>
      </body>
    </html>
  );
}
