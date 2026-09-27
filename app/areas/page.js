import PageHead from '@/components/PageHead';
import Sec, { Faq } from '@/components/Sec';
import CTA from '@/components/CTA';
import { faqs } from '@/lib/data';
export const metadata = { title: 'FAQ', description: 'Answers to common questions about booking a valet with BK Autocare in Listowel.' };

export default function Areas() {
  return (
    <>
      <PageHead title="Frequently asked questions" text="Everything you need to know before booking." />
      <Sec tone="light"><Faq items={faqs} tone="light" /></Sec>
      <CTA />
    </>
  );
}
