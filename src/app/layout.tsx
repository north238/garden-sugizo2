import './styles/globals.css';
import { notojp } from './utils/font';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '庭屋すぎ蔵',
  description:
    '「地元を愛する造園家」お庭のデザインから外構工事まですべてお任せください',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`${notojp.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
