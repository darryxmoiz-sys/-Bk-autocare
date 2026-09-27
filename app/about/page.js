import PageHead from '@/components/PageHead';
import Sec, { Card } from '@/components/Sec';
import CTA from '@/components/CTA';
import { LOCATION } from '@/lib/data';
export const metadata = { title: 'About', description: 'BK Autocare is a registered, trade-insured valeting and detailing business in Listowel, Co. Kerry.' };

const values = [['Registered & insured', 'A registered business, fully trade insured.'], ['Premium standard', 'Striving for operational excellence on every job.'], ['Convenient', 'Pick up and drop off available.']];

export default function About() {
  return (
    <>
      <PageHead title="About BK Autocare" text="Premium valeting and detailing in Listowel." />
      <Sec tone="light">
        <div className="max-w-2xl space-y-4 text-lg text-ink/75">
          <h2 className="h text-2xl text-ink md:text-3xl">A premium standard, every time</h2>
          <p>BK Autocare is a registered, trade-insured valeting and detailing business based in {LOCATION}. From deep cleans to compounding, polishing, gloss enhancement and waxing, every job is finished to a premium standard.</p>
          <p>Pick up and drop off is available, so getting your car detailed doesn't have to take up your day.</p>
        </div>
      </Sec>
      <Sec title="What we stand for">
        <div className="grid gap-4 md:grid-cols-3">{values.map(([t, d]) => <Card key={t}><h3 className="h text-lg text-white">{t}</h3><p className="mt-2 text-white/70">{d}</p></Card>)}</div>
      </Sec>
      <CTA />
    </>
  );
}
