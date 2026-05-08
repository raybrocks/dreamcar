import type {Metadata} from 'next';
import { Inter, Montserrat, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'Dream Car AS | Trygg bruktbilhandel i Vennesla & Kristiansand',
  description: 'Kjøp bruktbil med trygghet. Vi tilbyr 12 mnd garanti, ny tilstandsrapport og ny EU-kontroll på våre biler. Din lokale forhandler i Vennesla.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="no" className={`${inter.variable} ${montserrat.variable} ${cormorant.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-black selection:text-white" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
