import TextField from "../../../../components/ui/TextField";

export default function ProprietaireInformations() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <TextField
          id="nom-proprietaire"
          label="Nom du propriétaire"
          placeholder="Ex: KONAN"
          className="mb-8 sm:mb-10"
          required
        />
        <TextField
          id="prenoms-proprietaire"
          label="Prénoms du propriétaire"
          placeholder="Ex: YAO JEAN"
          className="mb-8 sm:mb-10"
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TextField
          id="date-naissance"
          label="Date de naissance"
          type="date"
          className="mb-8 sm:mb-10"
          required
        />
        <TextField
          id="lieu-naissance"
          label="Lieu de naissance"
          placeholder="Ex: Abidjan"
          className="mb-8 sm:mb-10"
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TextField
          id="nationalite"
          label="Nationalité"
          placeholder="Ex: Ivoirienne"
          className="mb-8 sm:mb-10"
          required
        />
        <TextField
          id="profession"
          label="Profession"
          placeholder="Ex: Ingénieur, Commercial, etc."
          className="mb-8 sm:mb-10"
          required
        />
      </div>

      <div>
        <TextField
          id="adresse"
          label="Adresse complète"
          placeholder="Ex: 21, 28 Plateau Nord (A), Abidjan"
          className="mb-8 sm:mb-10"
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TextField
          id="telephone"
          label="Numéro de téléphone"
          placeholder="Ex: 00225012345678"
          type="tel"
          className="mb-8 sm:mb-10"
          required
        />
        <TextField
          id="email"
          label="Adresse email"
          placeholder="Ex: nom@example.com"
          type="email"
          className="mb-8 sm:mb-10"
          required
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TextField
          id="numero-cni"
          label="Numéro de carte d'identité"
          placeholder="Ex: CI1234567890123"
          className="mb-8 sm:mb-10"
          required
        />
        <TextField
          id="date-delivrance-cni"
          label="Date de délivrance CNI"
          type="date"
          className="mb-8 sm:mb-10"
          required
        />
      </div>
    </div>
  );
}
