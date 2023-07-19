import type { Metadata } from 'next';

const meta: Metadata = {
  metadataBase: new URL('https://durrrian.com'),

  title: 'Durrrian — Software House',

  description: 'Software house based in Jakarta, Indonesia 🇮🇩.',

  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },

  themeColor: '#F5CD3D',

  generator: 'Durrrian',
  applicationName: 'Durrrian',
  referrer: 'origin-when-cross-origin',
  keywords: ['Durrrian', 'Durrrian Landing Page'],
  authors: [{ name: 'Durrrian', url: 'https://durrrian.com' }],
  creator: 'Durrrian',
  publisher: 'Durrrian',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    title: 'Durrrian',
    description: 'Software house based in Jakarta, Indonesia 🇮🇩.',
    url: '/',
    siteName: 'Durrrian',
    images: [
      {
        url: '/meta.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/180x180.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/180x180.png',
    },
  },
};

export default meta;
