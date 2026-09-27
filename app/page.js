import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Sec, { Card, Faq } from '@/components/Sec';
import CTA from '@/components/CTA';
import { PHONE_DISPLAY, TEL, WA, services, faqs } from '@/lib/data';

export default function Home() {
  return (
    <>
      <section className="bg-paper px-5 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal delay={0.1}><p className="mb-3 font-semibold text-coral">Listowel, Co. Kerry</p></Reveal>
          <Reveal delay={0.25}><h1 className="h text-4xl text-ink sm:text-5xl md:text-6xl">Premium valeting &amp; detailing.</h1></Reveal>
          <Reveal delay={0.4}><p className="mx-auto mt-5 max-w-xl text-lg text-ink/70">Deep cleans, compounding, polishing, gloss enhancement and waxing. Registered and trade insured.</p></Reveal>
          <Reveal delay={0.55} className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={TEL} className="rounded-sm bg-coral px-7 py-4 font-semibold text-white transition hover:bg-ink">Call {PHONE_DISPLAY}</a>
            <a href={WA} className="rounded-sm border border-ink/20 px-7 py-4 text-ink transition hover:border-coral hover:text-coral">WhatsApp us</a>
          </Reveal>
        </div>
      </section>

      <section className="bg-coral text-white">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-5 py-5 text-center text-sm font-semibold md:grid-cols-4 md:text-base">
          {['Registered & trade insured', 'Pick up / drop off', '5-star premium service', 'Listowel based'].map((t) => <li key={t}>{t}</li>)}
        </ul>
      </section>

      <Sec tone="light" title="What we offer" intro="Every step from a deep clean to a full gloss finish.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([t, d]) => <Card key={t} tone="light"><h3 className="h text-lg text-ink">{t}</h3><p className="mt-2 text-sm text-ink/70">{d}</p></Card>)}
        </div>
        <Link href="/services" className="mt-8 inline-block font-semibold text-coral hover:underline">See all services</Link>
      </Sec>

      <Sec title="See it in action" intro="Watch recent valets and detailing jobs from our Facebook page.">
        <Link href="/gallery" className="inline-block rounded-sm bg-white px-6 py-3 font-semibold text-ink transition hover:bg-coral hover:text-white">Watch our reels</Link>
      </Sec>

      <Sec tone="light" title="Common questions">
        <Faq items={faqs.slice(0, 4)} />
        <Link href="/areas" className="mt-8 inline-block font-semibold text-coral hover:underline">More questions</Link>
      </Sec>
      <CTA />
    </>
  );
}
