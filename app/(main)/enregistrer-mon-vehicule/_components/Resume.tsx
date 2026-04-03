import type { VehiculeData, ProprietaireData, PersonneLiee } from "./types";
import ReadOnlyField from "../../../../components/ui/ReadOnlyField";

type ResumeProps = {
  plaque: string;
  vehicule: VehiculeData;
  proprietaire: ProprietaireData;
  personnes: PersonneLiee[];
};

export default function Resume({ plaque, vehicule, proprietaire, personnes }: ResumeProps) {
  return (
    <>
      <div className="bg-white rounded-xl p-8 mb-6 sm:p-10 space-y-8">
        <h2 className="text-2xl font-bold text-secondary">Informations du véhicule</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <ReadOnlyField label="Marque du véhicule" value={vehicule.marque} />
          <ReadOnlyField label="Modèle du véhicule" value={vehicule.modele} />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <ReadOnlyField label="Date de mise en circulation" value={vehicule.dateMiseEnCirculation} />
          <ReadOnlyField label="Numéro de carte grise" value={vehicule.numeroCGrise} />
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-[1fr_1fr_200px]">
          <ReadOnlyField label="Utilisation" value={vehicule.utilisation} />
          <ReadOnlyField label="Préciser" value={vehicule.preciser} />
          <div className="flex items-end">
            <button className="w-full rounded-lg bg-gray-500 px-4 py-4 text-base text-white font-medium flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              Carte grise
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 mb-6 sm:p-10 space-y-8">
        <h2 className="text-2xl font-bold text-secondary">Informations du propriétaire</h2>

        <ReadOnlyField
          label="Type de personne"
          value={proprietaire.typePersonne === "physique" ? "Personne physique" : "Personne morale (Entreprise)"}
        />

        {proprietaire.typePersonne === "physique" ? (
          <>
            <div className="grid gap-6 md:grid-cols-3">
              <ReadOnlyField label="Nom" value={proprietaire.nom} />
              <ReadOnlyField label="Prénoms" value={proprietaire.prenoms} />
              <ReadOnlyField label="Numéro CNI" value={proprietaire.numeroCNI} />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <ReadOnlyField label="Numéro de téléphone" value={proprietaire.telephone} />
              <ReadOnlyField label="Adresse e-mail" value={proprietaire.email} />
            </div>
          </>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            <ReadOnlyField label="Numéro RCCM" value={proprietaire.numeroRCCM} />
            <ReadOnlyField label="Numéro de téléphone" value={proprietaire.telephone} />
            <ReadOnlyField label="Adresse e-mail" value={proprietaire.email} />
          </div>
        )}
      </div>

      {personnes.map((personne, index) => (
        <div key={personne.id} className="bg-white rounded-xl p-8 mb-6 sm:p-10 space-y-8">
          <h2 className="text-2xl font-bold text-secondary">Personne {index + 1}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ReadOnlyField label="Nom et prénoms" value={personne.nomPrenoms} />
            <ReadOnlyField label="Rôle" value={personne.role} />
          </div>
          <ReadOnlyField label="Numéro de téléphone" value={personne.telephone} />
        </div>
      ))}
    </>
  );
}
