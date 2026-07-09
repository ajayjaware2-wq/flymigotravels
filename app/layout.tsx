import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const SITE_URL = 'https://flymigotravels.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Flymigo Travels | Customized Luxury Travel Experiences',
    template: '%s | Flymigo Travels',
  },
  description:
    'Flymigo Travels creates customized travel experiences — domestic & international holidays, honeymoon packages, luxury villas, car rentals, group tours and complete travel management. Travel Your Way, We\'ll Plan the Rest.',
  keywords: [
    'Flymigo Travels',
    'customized travel experiences',
    'luxury travel India',
    'domestic tour packages',
    'international tour packages',
    'honeymoon packages',
    'luxury villas',
    'car rentals',
    'group tours',
    'Navi Mumbai travel agency',
    'visa assistance',
    'hotel bookings',
  ],
  authors: [{ name: 'Flymigo Travels' }],
  creator: 'Flymigo Travels',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Flymigo Travels',
    title: 'Flymigo Travels | Customized Luxury Travel Experiences',
    description:
      'Travel Your Way, We\'ll Plan the Rest. Customized domestic & international holidays, honeymoons, luxury villas, car rentals and complete travel management.',
    images: [
      {
        url: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Flymigo Travels - Luxury Travel Experiences',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flymigo Travels | Customized Luxury Travel Experiences',
    description:
      'Travel Your Way, We\'ll Plan the Rest. Customized holidays, honeymoons, luxury villas & car rentals.',
    images: [
      'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  name: 'Flymigo Travels',
  description:
    'Customized travel experiences including domestic and international holidays, honeymoon packages, luxury stays, car rentals, group tours and complete travel management.',
  telephone: '+91 9321414441',
  email: 'flymigotravels@gmail.com',
  url: SITE_URL,
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Navi Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
  },
  areaServed: ['India', 'International'],
  priceRange: '₹₹₹',
  slogan: 'Travel Your Way, We\'ll Plan the Rest.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
