import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import TaxCard, { type TaxCardProps } from "../../components/ui/TaxCard";

const taxCards: TaxCardProps[] = [
  {
    badge: "Transporteur",
    badgeClassName: "bg-[#FFF4E6] text-[#FF8C00]",
    title: "Taxe sur les taxis interurbains, stationnement, parking etc.",
    imageSrc: "/images/car.svg",
    imageAlt: "Transporteur",
  },
  {
    badge: "Publicité",
    badgeClassName: "bg-[#FFF9E6] text-[#FFB800]",
    title: "Pub sur support mobile, banderole",
    imageSrc: "/images/support.svg",
    imageAlt: "Publicité",
  },
  {
    badge: "Autres",
    badgeClassName: "bg-[#E6F4FF] text-[#0076D0]",
    title: "Entreposage et transport des viandes, Artisanat",
    imageSrc: "/images/other.svg",
    imageAlt: "Autres",
  },
];

export default function Home() {
return (
<div>

    <section className="max-w-7xl mx-auto px-6 pt-10 pb-16 md:pb-20 text-center">
        <h1
            className="max-w-[980px] mx-auto text-center font-bold text-4xl leading-tight tracking-[-0.02em] text-primary md:text-6xl md:leading-tight">
            Service de paiement des<br />
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
            {taxCards.map((card) => (
              <TaxCard key={card.badge} {...card} />
            ))}
        </div>

        <div className="mt-12 text-center">
            <button type="button" className="inline-flex items-center gap-2 rounded-lg border border-primary px-8 py-3 text-base font-semibold text-primary hover:bg-primary/5 transition">
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
                    <Image
                        src="/images/vector.svg"
                        alt="Bookmark icon"
                        width={56}
                        height={64}
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
                <Image
                  src="/images/ci-identite.png"
                  alt="Côte d'Ivoire Identité"
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Image
                  src="/images/playstore.png"
                  alt="Google Play"
                  width={176}
                  height={52}
                  className="h-auto object-contain"
                />
                <Image
                  src="/images/appstore.png"
                  alt="App Store"
                  width={176}
                  height={52}
                  className="h-auto object-contain"
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
              <Image
                src="/images/store.png"
                alt="Antenne du District"
                width={160}
                height={160}
                className="object-contain"
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
