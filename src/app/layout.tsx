import './styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { notojp } from './utils/font';

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
      <body className={inter.className}>
        <CssBaseline />
        <Navbar />
        <Toolbar id="back-to-top-anchor" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
