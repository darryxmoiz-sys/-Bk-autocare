import PageHead from '@/components/PageHead';
import Sec, { Card } from '@/components/Sec';
import ContactForm from '@/components/ContactForm';
import { PHONE_DISPLAY, TEL, WA, EMAIL, IG, LOCATION } from '@/lib/data';
export const metadata = { title: 'Contact', description: 'Call, WhatsApp, email or message BK Autocare to book a valet in Listowel.' };

export default function Contact() {
  return (
    <>
      <PageHead title="Book your valet" text="Call, WhatsApp, email, or send a message below." />
      <Sec tone="light">
        <a href={TEL} className="h block text-4xl text-coral transition hover:text-ink md:text-6xl">{PHONE_DISPLAY}</a>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={TEL} className="rounded-sm bg-coral px-6 py-3 font-semibold text-white transition hover:bg-ink">Call now</a>
          <a href={WA} className="rounded-sm border border-ink px-6 py-3 font-semibold text-ink transition hover:bg-ink hover:text-white">WhatsApp</a>
        </div>
      </Sec>
      <Sec tone="light" title="Send a message">
        <ContactForm />
      </Sec>
      <Sec title="Other details">
        <div className="grid gap-4 md:grid-cols-3">
          <Card><h3 className="h text-lg text-white">Email</h3><a href={`mailto:${EMAIL}`} className="mt-2 block break-all text-white/70 hover:text-coral">{EMAIL}</a></Card>
          <Card><h3 className="h text-lg text-white">Instagram</h3><a href={IG} target="_blank" rel="noreferrer" className="mt-2 block text-white/70 hover:text-coral">bk_autocare_listowel</a></Card>
          <Card><h3 className="h text-lg text-white">Based in</h3><p className="mt-2 text-white/70">{LOCATION}</p></Card>
        </div>
      </Sec>
    </>
  );
}
