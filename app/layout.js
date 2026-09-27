import './globals.css';
import Link from 'next/link';
import { Poppins, Fraunces } from 'next/font/google';
import SmoothScroll from '@/components/SmoothScroll';
import Preloader from '@/components/Preloader';
import Cursor from '@/components/Cursor';
import Nav from '@/components/Nav';
import WhatsAppButton from '@/components/WhatsAppButton';
import { PHONE_DISPLAY, TEL, WA, EMAIL, FB, LOCATION } from '@/lib/data';

const display = Fraunces({ subsets: ['latin'], weight: ['600'], variable: '--font-display' });
const body = Poppins({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-body' });

export const metadata = {
  title: { default: 'BK Autocare | Premium Valeting & Detailing, Listowel', template: '%s | BK Autocare Listowel' },
  description: 'Premium valeting and detailing in Listowel, Co. Kerry: deep cleans, compounding, polishing, gloss enhancement and waxing. Pick up and drop off available.',
};
const schema = { '@context': 'https://schema.org', '@type': 'AutoRepair', name: 'BK Autocare', telephone: '+353876971826', email: EMAIL, areaServed: 'Listowel, Co. Kerry' };

export default function RootLayout({ children }) {
  return (
    <html lang="en-IE" className={`${display.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SmoothScroll /><Preloader /><Cursor /><Nav />
        <main className="overflow-x-clip">{children}</main>
        <footer className="bg-charcoal px-5 py-12 text-sm text-white/60">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
            <div><p className="h text-lg text-white">BK Autocare</p><p className="mt-2">Premium valeting and detailing. Based in {LOCATION}.</p></div>
            <div className="space-y-1"><Link href="/services" className="block hover:text-coral">Services</Link><Link href="/gallery" className="block hover:text-coral">Gallery</Link><Link href="/areas" className="block hover:text-coral">FAQ</Link><Link href="/contact" className="block hover:text-coral">Contact</Link></div>
            <div className="space-y-1"><a href={TEL} className="block hover:text-coral">{PHONE_DISPLAY}</a><a href={WA} className="block hover:text-coral">WhatsApp</a><a href={FB} target="_blank" rel="noreferrer" className="block hover:text-coral">Facebook</a></div>
          </div>
        </footer>
        <WhatsAppButton />
      </body>
    </html>
  );
}
