import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

export default function Home() {
  return (
    <div>

<section className="max-w-6xl mx-auto px-6 pt-14 pb-12 text-center">
        <h1 className="max-w-4xl mx-auto text-center font-bold text-7xl leading-tight md:text-7xl md:leading-tight tracking-tight text-primary">
          Service de paiement des
          taxes du District Autonome d&apos;Abidjan
        </h1>
        <p className="max-w-4xl mx-auto mt-6 text-sm md:text-base text-[#6f7c89] leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
          tristique velit, eu facilisis massa. Vivamus semper eros et nisl
          posuere iaculis. Ut vitae dolor et sapien tempus lacinia.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/enregistrer-mon-vehicule"
            className="inline-flex h-12 items-center justify-center px-8 rounded-md bg-white border border-primary text-primary font-semibold hover:bg-[#eef7ff] transition"
          >
            Enregistrer mon véhicule
          </Link>
          <button className="h-12 px-8 rounded-md bg-primary text-white font-semibold hover:bg-[#045591] transition">
            Payer ma taxe
          </button>
        </div>
      </section>

<section className="max-w-6xl mx-auto px-6 pb-14">
        <h2 className="text-3xl font-bold text-center leading-tight text-title">
          Toutes vos taxes disponibles
          <br />
          en un seul endroit
        </h2>

        <div className="mt-10 flex flex-col md:flex-row gap-6">
          <article className="flex-1 bg-white rounded-lg border border-[#eceff3] p-6 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-[#8b98a5]">Taxes</p>
            <h3 className="mt-2 text-lg font-semibold leading-7">
              Taxe sur les taxis interurbains, stationnement, parking etc.
            </h3>
            <div className="mt-6 text-secondary text-4xl">🚕</div>
          </article>

          <article className="flex-1 bg-white rounded-lg border border-[#eceff3] p-6 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-[#8b98a5]">Taxes</p>
            <h3 className="mt-2 text-lg font-semibold leading-7">
              Pub sur support mobile, banderole
            </h3>
            <div className="mt-6 text-secondary text-4xl">📣</div>
          </article>

          <article className="flex-1 bg-white rounded-lg border border-[#eceff3] p-6 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-[#8b98a5]">Taxes</p>
            <h3 className="mt-2 text-lg font-semibold leading-7">
              Entreposage et transport des vivres, Artisanat
            </h3>
            <div className="mt-6 text-secondary text-4xl">◈</div>
          </article>
        </div>

        <div className="mt-8 text-center">
          <button className="h-11 px-6 rounded-md border border-[#cfd9e2] text-sm font-semibold text-dark bg-white hover:bg-[#f7fafc] transition">
            Voir toutes les taxes
          </button>
        </div>
      </section>

      <section className="bg-white py-14 border-y border-[#e8edf3]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-xs text-[#7d8a97] mb-3">Comment ca marche ?</p>
            <h2 className="text-4xl font-extrabold leading-tight">
              Quelques videos tutoriels pour faciliter la prise en main de votre
              plateforme
            </h2>
          </div>
          <div className="flex-1 w-full">
            <div className="w-full min-h-[180px] rounded-xl bg-primary text-white flex items-center justify-center text-2xl font-bold">
              Comment payer ma taxe
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
      <h2 className="text-5xl font-bold text-title text-center">Les autres moyens de <br /> payer vos taxes</h2>


        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center">
          <article className="w-full md:w-[320px] bg-white rounded-lg border border-[#eceff3] p-6">
            <h3 className="text-xl font-semibold leading-7">
              Via l'application
              <br />
              Cote d'ivoire identite
            </h3>
            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex items-center justify-center h-14 w-14 rounded-lg bg-secondary text-white text-2xl">
                📱
              </span>
              <div className="space-y-2 text-sm font-semibold">
                <p className="bg-black text-white px-3 py-1.5 rounded">Google Play</p>
                <p className="bg-black text-white px-3 py-1.5 rounded">App Store</p>
              </div>
            </div>
          </article>

          <article className="w-full md:w-[320px] bg-white rounded-lg border border-[#eceff3] p-6">
            <h3 className="text-xl font-semibold leading-7">
              Dans une antenne du
              <br />
              District Autonome d'Abidjan
            </h3>
            <div className="mt-5 text-secondary text-5xl">🏪</div>
          </article>
        </div>
      </section>
     
     <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-5xl font-bold text-title text-center">Questions fréquentes</h2>

        <div className="mt-16 space-y-3">
          {[
            "Comment payer une taxe interport ?",
            "Comment payer une taxe transport ?",
            "Comment payer une taxe transport ?",
            "Comment payer une taxe transport ?",
          ].map((item, index) => (
            <details
              key={`${item}-${index}`}
              className="bg-white rounded-md px-5 py-4"
            >
              <summary className="cursor-pointer font-medium text-base leading-10.75  list-none flex items-center justify-between">
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
