import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bonafer | Soluções metal-mecânicas',
  description: 'Corte, conformação e montagem metal-mecânica para grandes projetos.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: { title: 'Bonafer | Soluções metal-mecânicas', description: 'Excelência em cada detalhe.', images: ['/wallpaper.png'] },
  twitter: { card: 'summary_large_image', title: 'Bonafer | Soluções metal-mecânicas', description: 'Excelência em cada detalhe.', images: ['/wallpaper.png'] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
