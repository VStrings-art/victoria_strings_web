type Feature = {
  image: string;
  title: string;
  body: string;
};

export default function MasterFeaturesSection({
  kicker,
  intro,
  features,
}: {
  kicker: string;
  intro: string;
  features: Feature[];
}) {
  return (
    <section className="bg-[#f7f3ee] py-[90px] text-center font-display">
      <p className="mb-[26px] text-[0.95rem] font-semibold tracking-[0.28em] text-[#b38a5a] uppercase">
        {kicker}
      </p>
      <p className="mx-auto mb-[55px] max-w-[980px] px-6 text-[21px] leading-[1.85] text-[#333] md:text-[25px]">
        {intro}
      </p>

      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-9 px-8 md:grid-cols-3">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="group relative min-h-[340px] overflow-hidden rounded-[20px] bg-cover bg-center p-[54px] px-[30px] text-left text-white transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)] md:min-h-[420px]"
            style={{ backgroundImage: `url('${f.image}')` }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(0,0,0,0.65),rgba(0,0,0,0.35))]" />
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border border-[#f4d27a]/80 text-[0.9rem] font-semibold tracking-[0.08em] text-[#f4d27a]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-4 text-[25px] font-bold text-white">{f.title}</h3>
              <p className="text-[18px] leading-[1.85] font-medium text-white">{f.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
