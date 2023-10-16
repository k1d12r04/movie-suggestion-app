import './globals.css';
import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import { Providers } from './providers/providers';
import Favicon from '@/public/favicon.ico';

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Ne izlesem ?',
  description:
    'Kategorilere göre filmlerin bulunabileceği ve film önerisi alınıp sevilen filmlerin kaydedilebileceği bir platform',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark">
      <body className={nunito.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
