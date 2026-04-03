import TextField from "../../../../components/ui/TextField";
import { useState } from "react";

interface PersonneLiee {
  id: string;
  nom: string;
  prenoms: string;
  telephone: string;
  email: string;
  relation: string;
}

export default function PersonnesLiees() {
  const [personnes, setPersonnes] = useState<PersonneLiee[]>([
    { id: "1", nom: "", prenoms: "", telephone: "", email: "", relation: "" }
  ]);

  const ajouterPersonne = () => {
    const nouvellePersonne: PersonneLiee = {
      id: Date.now().toString(),
      nom: "",
      prenoms: "",
      telephone: "",
      email: "",
      relation: ""
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
        <div key={personne.id} className="rounded-lg border border-gray-200 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
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

          <div className="grid gap-6 md:grid-cols-2">
            <TextField
              id={`nom-${personne.id}`}
              label="Nom"
              placeholder="Ex: KONAN"
              value={personne.nom}
              onChange={(e) => mettreAJourPersonne(personne.id, 'nom', e.target.value)}
              className="mb-8 sm:mb-10"
              required
            />
            <TextField
              id={`prenoms-${personne.id}`}
              label="Prénoms"
              placeholder="Ex: YAO JEAN"
              value={personne.prenoms}
              onChange={(e) => mettreAJourPersonne(personne.id, 'prenoms', e.target.value)}
              className="mb-8 sm:mb-10"
              required
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <TextField
              id={`telephone-${personne.id}`}
              label="Numéro de téléphone"
              placeholder="Ex: 00225012345678"
              type="tel"
              value={personne.telephone}
              onChange={(e) => mettreAJourPersonne(personne.id, 'telephone', e.target.value)}
              className="mb-8 sm:mb-10"
              required
            />
            <TextField
              id={`email-${personne.id}`}
              label="Adresse email"
              placeholder="Ex: nom@example.com"
              type="email"
              value={personne.email}
              onChange={(e) => mettreAJourPersonne(personne.id, 'email', e.target.value)}
              className="mb-8 sm:mb-10"
              required
            />
          </div>

          <div>
            <TextField
              id={`relation-${personne.id}`}
              label="Relation avec le véhicule"
              placeholder="Ex: Conducteur principal, Conducteur secondaire, Gestionnaire, etc."
              value={personne.relation}
              onChange={(e) => mettreAJourPersonne(personne.id, 'relation', e.target.value)}
              className="mb-8 sm:mb-10"
              required
            />
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={ajouterPersonne}
        className="w-full rounded-lg border-2 border-dashed border-gray-300 py-4 text-center text-sm font-medium text-gray-600 hover:border-gray-400 hover:text-gray-800 transition"
      >
        + Ajouter une personne
      </button>
    </div>
  );
}
