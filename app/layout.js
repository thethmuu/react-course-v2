import { Inter } from 'next/font/google';

import NavMenu from '@/components/NavMenu';

import './globals.css';
import AuthProvider from './AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NextSocial',
  description: 'A positive social platform for improving daily habits',
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={inter.className}>
          <NavMenu />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
