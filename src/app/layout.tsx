import type { Metadata } from 'next';
import { Inter, Lexend, Montserrat, Open_Sans, Sedan, Share_Tech_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Layout/Navbar';
import Footer from '@/Components/Layout/Footer';
import NextTopLoader from 'nextjs-toploader';
import { Suspense } from 'react';

const inter = Inter({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'] });
const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          montserrat.className +
          ' bg-primary_darkest ' +
          lexend.variable +
          ' flex flex-col min-h-[100vh]'
        }
      >
        <Suspense>
          <NextTopLoader color="#228061" />
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
