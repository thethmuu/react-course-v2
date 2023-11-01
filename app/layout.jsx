import { Outfit } from 'next/font/google';
import './globals.css';

import Providers from './Providers';

const font = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Hub Store',
  description: 'Clothing store',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
