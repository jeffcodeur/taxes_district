"use client";

import TextField from "../../../../components/ui/TextField";
import SelectField from "../../../../components/ui/SelectField";
import PhoneField from "../../../../components/ui/PhoneField";
import type { PersonneLiee } from "./types";

const roleOptions = [
  { value: "", label: "" },
  { value: "conducteur-principal", label: "Conducteur principal" },
  { value: "conducteur-secondaire", label: "Conducteur secondaire" },
  { value: "gestionnaire", label: "Gestionnaire" },
];

type Props = {
  personnes: PersonneLiee[];
  onChange: (personnes: PersonneLiee[]) => void;
};

export default function PersonnesLiees({ personnes, onChange }: Props) {
  const ajouterPersonne = () => {
    onChange([
      ...personnes,
      { id: Date.now().toString(), nomPrenoms: "", role: "", telephone: "" },
    ]);
  };

  const supprimerPersonne = (id: string) => {
    if (personnes.length > 1) {
      onChange(personnes.filter((p) => p.id !== id));
    }
  };

  const mettreAJourPersonne = (id: string, champ: keyof PersonneLiee, valeur: string) => {
    onChange(
      personnes.map((personne) =>
        personne.id === id ? { ...personne, [champ]: valeur } : personne
      )
    );
  };

  return (
    <div className="space-y-8">
      {personnes.map((personne, index) => (
        <div key={personne.id} className="space-y-6 pb-8 border-b border-gray-200 last:border-b-0 last:pb-0">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-primary">Personne {index + 1}</h3>
            {personnes.length > 1 && (
              <button
                type="button"
                onClick={() => supprimerPersonne(personne.id)}
                className="text-sm text-red-600 hover:text-red-800 transition"
              >
                Supprimer
              </button>
            )}
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            <TextField
              id={`nom-prenoms-${personne.id}`}
              label="Nom et prénoms"
              placeholder=""
              value={personne.nomPrenoms}
              onChange={(e) => mettreAJourPersonne(personne.id, "nomPrenoms", e.target.value)}
              required
            />
            <SelectField
              id={`role-${personne.id}`}
              label="Rôle"
              value={personne.role}
              onChange={(e) => mettreAJourPersonne(personne.id, "role", e.target.value)}
              options={roleOptions}
            />
          </div>

          <PhoneField
            id={`telephone-${personne.id}`}
            label={
              <>
                Numéro de téléphone{" "}
                <span className="text-xs font-normal text-gray-500">
                  (un lien sera envoyé par sms sur le numéro saisi pour la confirmation de la personne)
                </span>
              </>
            }
            value={personne.telephone}
            onChange={(e) => mettreAJourPersonne(personne.id, "telephone", e.target.value)}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={ajouterPersonne}
        className="inline-flex items-center gap-2 rounded-lg border-2 border-[#F97316] bg-white px-6 py-3 text-base font-semibold text-[#F97316] hover:bg-orange-50 transition"
      >
        + Ajouter une personne
      </button>
    </div>
  );
}
