import Breadcrumb from "../../components/layout/Breadcrumb";
import SectionTitle from "../../components/layout/SectionTitle";
import Button from "../../components/ui/Button";
import TextField from "../../components/ui/TextField";

export const metadata = {
  title: "Enregistrer mon véhicule",
};

export default function EnregistrerMonVehiculePage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Enregistrer Mon Véhicule" },
        ]}
      />

      <SectionTitle
        title="Bienvenue sur l’espace d’enregistrement de véhicule"
        subtitle="Saisissez le numéro d’immatriculation de votre véhicule et commencez"
      />

      <div className="px-4 sm:px-6">
        <section>
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8 md:gap-12 lg:gap-16">
            <img
              src="/images/plaque2.jpg"
              alt=""
              className="h-auto w-full max-w-60 object-contain sm:max-w-52 md:max-w-56"
            />
            <img
              src="/images/plaque.jpg"
              alt=""
              className="h-auto w-full max-w-60 object-contain sm:max-w-52 md:max-w-56"
            />
          </div>
        </section>

        <section className="mx-auto my-8 w-full max-w-4xl rounded-xl bg-white px-4 py-8 sm:my-12 sm:px-6 sm:py-12">
          <div className="mx-auto max-w-4xl">
            <TextField
              id="plaque-immatriculation"
              label="Numero de plaque d’immatriculation"
              placeholder="AA - 020 - AA"
            />

            <Button>Commencer</Button>
          </div>
        </section>
      </div>
    </>
  );
}
