import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GlobalProvider } from '@/redux/store';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Minesweeper',
  description: 'Test task for interning in IQ Group',
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
          inter.className +
          'm-auto pt-5 max-h-screen flex flex-col gap-5 items-center text-sm md:text-base scroll-smooth'
        }
      >
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
