import PageHead from '@/components/PageHead';
import Sec from '@/components/Sec';
import ReelEmbed from '@/components/ReelEmbed';
import CTA from '@/components/CTA';
import { reels } from '@/lib/data';
export const metadata = { title: 'Gallery', description: 'Watch BK Autocare valeting and detailing jobs from Listowel.' };

export default function GalleryPage() {
  return (
    <>
      <PageHead title="See the finish for yourself" text="A closer look at recent valets and detailing jobs, straight from our Facebook page." />
      <Sec tone="light">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {reels.map((url) => <ReelEmbed key={url} url={url} />)}
        </div>
      </Sec>
      <CTA />
    </>
  );
}
