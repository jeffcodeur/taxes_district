import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

export default function Home() {
return (
<div>

    <section className="max-w-7xl mx-auto px-6 pt-10 pb-16 md:pb-20 text-center">
        <h1
            className="max-w-[980px] mx-auto text-center font-bold text-4xl leading-tight tracking-[-0.02em] text-primary md:text-6xl md:leading-tight">
            Service de paiement des<br></br>
            taxes du District Autonome d&apos;Abidjan
        </h1>
        <p className="max-w-[1050px] mx-auto mt-6 text-base text-[#3A4660] leading-relaxed md:text-lg md:leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fringilla rhoncus orci, eu eleifend neque
            pellentesque non. Donec nibh massa, pretium eget euismod vel, tristique sit amet purus. Sed eu ultricies
            elit, non eleifend nisi. Ut id posuere nibh. In ut rhoncus libero. Duis iaculis augue id nisi condimentum
            vulputate.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/enregistrer-mon-vehicule"
                className="inline-flex h-14 min-w-[280px] items-center justify-center rounded-xl border-2 border-primary bg-white px-8 text-base font-semibold text-primary transition hover:bg-[#eef7ff] md:text-lg">
            Enregistrer mon véhicule
            </Link>
            <Link href="/payer-ma-taxe"
                className="inline-flex h-14 min-w-[280px] items-center justify-center rounded-xl bg-primary px-8 text-base font-semibold text-white transition hover:bg-[#045591] md:text-lg">
                Payer ma taxe
            </Link>
        </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center leading-tight text-title">
            Toutes vos taxes disponibles
            <br />
            en un seul endroit
        </h2>

        <div className="mt-16 flex flex-col md:flex-row gap-8 items-stretch">
            <article className="relative flex flex-1 w-full flex-col bg-white rounded-lg p-6 min-h-[340px]">
                <span className="inline-block w-fit rounded-full bg-[#FFF4E6] px-4 py-1.5 text-sm font-semibold text-[#FF8C00]">
                    Transporteur
                </span>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-[#1F2A44]">
                    Taxe sur les taxis interurbains, stationnement, parking etc.
                </h3>
                <div className="mt-auto pb-2">
                    <img src="/images/car.svg" alt="Transporteur" className="w-24 h-24" />
                </div>
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" className="absolute bottom-6 right-6 text-gray-300">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </article>

            <article className="relative flex flex-1 w-full flex-col bg-white rounded-lg p-6 min-h-[340px]">
                <span className="inline-block w-fit rounded-full bg-[#FFF9E6] px-4 py-1.5 text-sm font-semibold text-[#FFB800]">
                    Publicité
                </span>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-[#1F2A44]">
                    Pub sur support mobile, banderole
                </h3>
                <div className="mt-auto pb-2">
                    <img src="/images/support.svg" alt="Publicité" className="w-24 h-24" />
                </div>
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" className="absolute bottom-6 right-6 text-gray-300">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </article>

            <article className="relative flex flex-1 w-full flex-col bg-white rounded-lg p-6 min-h-[340px]">
                <span className="inline-block w-fit rounded-full bg-[#E6F4FF] px-4 py-1.5 text-sm font-semibold text-[#0076D0]">
                    Autres
                </span>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-[#1F2A44]">
                    Entreposage et transport des viandes, Artisanat
                </h3>
                <div className="mt-auto pb-2">
                    <img src="/images/other.svg" alt="Autres" className="w-24 h-24" />
                </div>
                <svg width="38" height="38" viewBox="0 0 24 24" fill="none" className="absolute bottom-6 right-6 text-gray-300">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </article>
        </div>

        <div className="mt-12 text-center">
            <button className="inline-flex items-center gap-2 rounded-lg border border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary/5 transition">
                Voir toute les taxes
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
    </section>

    <section className="bg-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-24 md:flex-row md:items-stretch">
            <div className="md:basis-[40%]">
                <p className="text-lg font-semibold text-gray-500">Comment ça marche ?</p>
                <h2 className="mt-5 text-3xl font-extrabold leading-[1.4] tracking-[-0.02em] text-[#1F2A44]">
                    Quelques vidéos tutoriels pour faciliter la prise en main de votre plateforme
                </h2>
            </div>

            <div 
                className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-[18px] bg-[#0076D0] px-8 py-10 md:basis-[60%] md:min-h-[320px] md:px-14 md:py-12"
                style={{
                    backgroundImage: "url('/images/hiw.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="relative flex items-center justify-center gap-4 md:gap-6">
                    <img 
                        src="/images/vector.svg" 
                        alt="Bookmark icon" 
                        className="shrink-0 w-12 h-14 md:w-14 md:h-16"
                    />

                    <h3 className="text-3xl font-bold leading-[1.1] text-white md:text-3xl">
                        Comment
                        <br />
                        Payer ma taxe
                    </h3>
                </div>
            </div>
        </div>
    </section>

    <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-5xl font-bold text-title text-center leading-tight">
          Les autres moyens de <br /> payer vos taxes
        </h2>

        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <article className="bg-white px-8 pt-8 pb-5 rounded-lg md:basis-1/2 md:max-w-[480px] min-h-[320px]">
            <h3 className="text-2xl font-bold text-title leading-tight">
              Via l&apos;application
              <br />
              Côte d&apos;Ivoire Identité
            </h3>
            <div className="mt-8 flex items-start gap-6">
              <div className="shrink-0">
                <img
                  src="/images/ci-identite.png"
                  alt="Côte d'Ivoire Identité"
                  className="w-32 h-32 object-contain"
                />
              </div>
              <div className="flex flex-col gap-3">
                <img
                  src="/images/playstore.png"
                  alt="Google Play"
                  className="w-44 h-auto object-contain"
                />
                <img
                  src="/images/appstore.png"
                  alt="App Store"
                  className="w-44 h-auto object-contain"
                />
              </div>
            </div>
          </article>

          <article className="bg-white px-8 pt-8 pb-5 rounded-lg md:basis-1/2 md:max-w-[480px] min-h-[320px]">
            <h3 className="text-2xl font-bold text-title leading-tight">
              Dans une antenne du
              <br />
              District Autonome d&apos;Abidjan
            </h3>
            <div className="mt-8">
              <img
                src="/images/store.png"
                alt="Antenne du District"
                className="w-40 h-40 object-contain"
              />
            </div>
          </article>
        </div>
      </section>

    <section className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-5xl font-bold text-title text-center">Questions fréquentes</h2>

        <div className="mt-16 space-y-3">
            {[
            "Comment payer une taxe interport ?",
            "Comment payer une taxe transport ?",
            "Comment payer une taxe transport ?",
            "Comment payer une taxe transport ?",
            ].map((item, index) => (
            <details key={`${item}-${index}`} className="bg-white rounded-md px-10 py-5">
                <summary
                    className="cursor-pointer font-medium text-xl leading-10.75  list-none flex items-center justify-between">
                    {item}
                    <FaChevronDown className="text-[#B8B8B8] h-4" />
                </summary>
            </details>
            ))}
        </div>

    </section>
</div>
);
}
