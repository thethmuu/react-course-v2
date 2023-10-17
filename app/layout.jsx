import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const font = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Hub Store',
  description: 'Clothing store',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
