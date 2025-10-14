import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adil Saaly - Full Stack Developer Portfolio',
  description:
    'Full Stack Developer specializing in React, Next.js, and modern web technologies. Building beautiful, responsive web applications with exceptional user experiences.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Web Development',
    'Portfolio',
    'Software Engineer',
  ],
  authors: [{ name: 'Adil Saaly' }],
  creator: 'Adil Saaly',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://example.com',
    title: 'Adil Saaly - Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    siteName: 'Adil Saaly Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adil Saaly - Full Stack Developer',
    description:
      'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
    creator: '@johndoe',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
