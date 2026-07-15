export default function Hero({
  image = "https://cdn.jsdelivr.net/gh/VStrings-art/web_image/assemble_new.png",
}: {
  image?: string;
}) {
  return (
    <section className="relative -mt-10 flex min-h-[80vh] w-full items-center justify-center overflow-hidden text-white">
      <div
        className="animate-hero-zoom absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0.15),rgba(0,0,0,0.65))]" />
      <div className="relative py-12 px-6 pb-14" />
    </section>
  );
}
