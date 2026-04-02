import Breadcrumb from "../../components/layout/Breadcrumb";
import SectionTitle from "../../components/layout/SectionTitle";

export const metadata = {
  title: "Enregistrer mon véhicule",
};

export default function EnregistrerMonVehiculePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Enregistrer mon véhicule" },
        ]}
      />

      <SectionTitle
        title="Bienvenue sur l’espace d’enregistrement de véhicule"
        subtitle="Saisissez le numéro d’immatriculation de votre véhicule et commencez"
      />

      <section>
        <div className="w-2xl mx-auto flex justify-around gap-3">
          <img src="/images/plaque2.jpg" alt="" />
          <img src="/images/plaque.jpg" alt="" />
        </div>
      </section>

      <section className="bg-white w-4xl mx-auto my-12 py-12 px-6 rounded-xl">
        <div className="max-w-4xl mx-auto">
          {/* Input */}
          <div className="mb-10">
            <label htmlFor="" className="font-bold text-xl">
              Numero de plaque d’immatriculation
            </label>
            <input
              type="text"
              placeholder="AA - 020 - AA"
              className="w-full mt-4 px-6 py-5 text-lg text-gray-700 placeholder-gray-400 bg-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Button */}
          <button className="bg-primary hover:bg-[#175885] text-white text-lg font-medium px-22 py-5 rounded-lg transition">
            Commencer
          </button>
        </div>
      </section>
    </>
  );
}
