export default function ReelEmbed({ url }) {
  const src = `https://www.facebook.com/plugins/video.php?height=476&href=${encodeURIComponent(url)}&show_text=false&width=267&t=0`;
  return (
    <div className="mx-auto aspect-[9/16] w-full max-w-[267px] overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm">
      <iframe src={src} width="267" height="476" style={{ border: 'none', overflow: 'hidden', width: '100%', height: '100%' }}
        loading="lazy" allow="autoplay; encrypted-media; picture-in-picture; web-share" allowFullScreen title="BK Autocare reel" />
    </div>
  );
}
