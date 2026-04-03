"use client";

import TextField from "../../../../components/ui/TextField";
import SelectField from "../../../../components/ui/SelectField";
import { useState } from "react";

interface PersonneLiee {
  id: string;
  nomPrenoms: string;
  role: string;
  telephone: string;
}

export default function PersonnesLiees() {
  const [personnes, setPersonnes] = useState<PersonneLiee[]>([
    { id: "1", nomPrenoms: "", role: "", telephone: "" }
  ]);

  const ajouterPersonne = () => {
    const nouvellePersonne: PersonneLiee = {
      id: Date.now().toString(),
      nomPrenoms: "",
      role: "",
      telephone: ""
    };
    setPersonnes([...personnes, nouvellePersonne]);
  };

  const supprimerPersonne = (id: string) => {
    if (personnes.length > 1) {
      setPersonnes(personnes.filter(p => p.id !== id));
    }
  };

  const mettreAJourPersonne = (id: string, champ: keyof PersonneLiee, valeur: string) => {
    setPersonnes(personnes.map(personne => 
      personne.id === id ? { ...personne, [champ]: valeur } : personne
    ));
  };

  return (
    <div className="space-y-8">
      {personnes.map((personne, index) => (
        <div key={personne.id} className="space-y-6 pb-8 border-b border-gray-200 last:border-b-0 last:pb-0">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-primary">
              Personne {index + 1}
            </h3>
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
              onChange={(e) => mettreAJourPersonne(personne.id, 'nomPrenoms', e.target.value)}
              required
            />
            <SelectField
              id={`role-${personne.id}`}
              label="Rôle"
              value={personne.role}
              onChange={(e) => mettreAJourPersonne(personne.id, 'role', e.target.value)}
              options={[
                { value: "", label: "" },
                { value: "conducteur-principal", label: "Conducteur principal" },
                { value: "conducteur-secondaire", label: "Conducteur secondaire" },
                { value: "gestionnaire", label: "Gestionnaire" }
              ]}
            />
          </div>

          <div>
            <label className="text-sm font-bold sm:text-xl mb-4 block">
              Numéro de téléphone{" "}
              <span className="text-xs font-normal text-gray-500">
                (un lien sera envoyé par sms sur le numéro saisi pour la confirmation de la personne)
              </span>
            </label>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-2 px-4 py-4 bg-[#F7F7F7] rounded-lg sm:py-5 shrink-0">
                <img src="/images/ci.png" alt="Côte d'Ivoire" className="w-6 h-6 object-cover" />
                <span className="text-base font-medium sm:text-lg">+225</span>
              </div>
              <input
                type="tel"
                id={`telephone-${personne.id}`}
                value={personne.telephone}
                onChange={(e) => mettreAJourPersonne(personne.id, 'telephone', e.target.value)}
                className="flex-1 rounded-lg border-0 bg-[#F7F7F7] px-4 py-4 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 sm:px-6 sm:py-5 sm:text-lg"
                placeholder=""
              />
            </div>
          </div>
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
