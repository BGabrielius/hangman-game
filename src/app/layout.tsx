import StyledComponentsRegistry from '../lib/registry';
import type { Metadata } from 'next';

import './globals.css';
import localFont from 'next/font/local';

export const metadata: Metadata = {
  title: 'Hangman game',
  description: '',
};

const font = localFont({
  src: '../../public/fonts/MouseMemoirs-Regular.ttf',
  variable: '--font-memoirs',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <StyledComponentsRegistry>
        <body
          className={`${font.variable} font-sans min-h-screen bg-[url('../components/svg/Background.svg')] bg-cover bg-center px-[26px] py-8 md:pl-10 md:pr-12 2xl:py-[61px] 2xl:px-28`}
        >
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
