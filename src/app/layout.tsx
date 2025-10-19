import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The blog - Este é um blog com Next.js',
  description: 'Essa seria a descrição dessa página.',
};

type RootLayoutProps = {
@@ -12,7 +12,7 @@ type RootLayoutProps = {

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='pt-BR'>
      <body>{children}</body>
    </html>
  );
