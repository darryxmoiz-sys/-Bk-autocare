import PageHead from '@/components/PageHead';
import Sec, { Card } from '@/components/Sec';
import CTA from '@/components/CTA';
import { services } from '@/lib/data';
export const metadata = { title: 'Services', description: 'Valeting, deep cleans, compounding, polishing, gloss enhancement and waxing in Listowel.' };

export default function Services() {
  return (
    <>
      <PageHead title="Our services" text="Premium valeting and detailing, done properly." />
      <Sec tone="light">
        {services.map(([t, d]) => (
          <div key={t} className="group grid gap-2 border-t border-ink/15 py-6 md:grid-cols-2 md:px-4">
            <h2 className="h text-xl text-ink transition group-hover:translate-x-2 group-hover:text-coral md:text-2xl">{t}</h2>
            <p className="text-ink/70">{d}</p>
          </div>
        ))}
      </Sec>
      <Sec title="Why choose BK Autocare">
        <div className="grid gap-4 md:grid-cols-2">
          <Card><h3 className="h text-lg text-white">Registered and insured</h3><p className="mt-2 text-white/70">BK Autocare is a registered business and trade insured, so your vehicle is in safe hands.</p></Card>
          <Card><h3 className="h text-lg text-white">Convenient collection</h3><p className="mt-2 text-white/70">Pick up and drop off is available, so you don't need to wait around while your car is being detailed.</p></Card>
        </div>
      </Sec>
      <CTA />
    </>
  );
}
