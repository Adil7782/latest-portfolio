import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Analytics } from '@vercel/analytics/next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Adil Saaly | Full Stack Developer Portfolio',
    template: '%s | Adil Saaly',
  },
  description:
    'Adil Saaly is a Full Stack Developer specializing in React, Next.js, TypeScript, and modern web technologies. Passionate about building responsive, high-performance web apps with exceptional UX.',
  keywords: [
    'Adil Saaly',
    'Full Stack Developer',
    'React Developer',
    'Next.js',
    'TypeScript',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Portfolio',
  ],
  authors: [{ name: 'Adil Saaly', url: 'https://adil-saaly.vercel.app/' }],
  creator: 'Adil Saaly',
  manifest: '/site.webmanifest',
  publisher: 'Adil Saaly',
  metadataBase: new URL('https://adil-saaly.vercel.app'),
  alternates: {
    canonical: 'https://adil-saaly.vercel.app',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adil-saaly.vercel.app',
    title: 'Adil Saaly | Full Stack Developer Portfolio',
    description:
      'Explore the portfolio of Adil Saaly, a Full Stack Developer specializing in React, Next.js, and TypeScript. Building scalable, performant, and visually stunning web apps.',
    siteName: 'Adil Saaly Portfolio',
    images: [
      {
        url: 'https://adil-saaly.vercel.app/logo.png', // Replace with your real OG image
        width: 1200,
        height: 630,
        alt: 'Adil Saaly Portfolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@adilsaaly', // Replace with your handle if you have one
    creator: '@adilsaaly',
    title: 'Adil Saaly | Full Stack Developer',
    description:
      'Building full-stack web applications using React, Next.js, and TypeScript. Explore my portfolio and projects.',
    images: ['https://adil-saaly.vercel.app/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="o1Q4_ZNzeoIu8rRbz3n5NVkFJzqEsf7CvQoCQoz0byk"
        />
        {/* Schema.org structured data for better SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Adil Saaly',
              url: 'https://adil-saaly.vercel.app',
              sameAs: [
                'https://github.com/Adil7782',
                'https://www.linkedin.com/in/adil-saaly-dev',
                'https://web.facebook.com/adil.saaly',
              ],
              jobTitle: 'Full Stack Developer',
              worksFor: {
                '@type': 'Organization',
                name: 'Freelance / Open Source',
              },
              description:
                'Full Stack Developer specializing in React, Next.js, and modern web technologies.',
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
               <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
