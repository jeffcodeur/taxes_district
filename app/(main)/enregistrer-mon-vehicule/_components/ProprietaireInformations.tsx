"use client";

import TextField from "../../../../components/ui/TextField";
import FileUploadField from "../../../../components/ui/FileUploadField";
import RadioGroup from "../../../../components/ui/RadioGroup";
import PhoneField from "../../../../components/ui/PhoneField";
import type { ProprietaireData } from "./types";

const typePersonneOptions = [
  { id: "personne-physique", value: "physique", label: "Personne physique" },
  { id: "personne-morale", value: "morale", label: "Personne morale (Entreprise)" },
];

type Props = {
  data: ProprietaireData;
  onChange: (data: ProprietaireData) => void;
};

export default function ProprietaireInformations({ data, onChange }: Props) {
  const update = (field: keyof ProprietaireData, value: string | File | null) =>
    onChange({ ...data, [field]: value });

  return (
    <div className="space-y-6">
      <RadioGroup
        label=""
        name="type-personne"
        options={typePersonneOptions}
        selectedValue={data.typePersonne}
        onChange={(value) => update("typePersonne", value)}
      />

      {data.typePersonne === "physique" && (
        <>
          <div className="grid gap-6 md:gap-16 md:grid-cols-2">
            <TextField id="nom" label="Nom" placeholder="" required value={data.nom} onChange={(e) => update("nom", e.target.value)} />
            <TextField id="prenoms" label="Prénoms" placeholder="" required value={data.prenoms} onChange={(e) => update("prenoms", e.target.value)} />
          </div>

          <div className="grid gap-6 md:gap-16 md:grid-cols-2">
            <TextField id="numero-cni" label="Numéro de CNI" placeholder="" required value={data.numeroCNI} onChange={(e) => update("numeroCNI", e.target.value)} />
            <PhoneField id="telephone" label="Numéro de téléphone" value={data.telephone} onChange={(e) => update("telephone", e.target.value)} />
          </div>

          <div>
            <TextField id="email" label="Adresse e-mail (Facultatif)" placeholder="" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} />
          </div>

          <FileUploadField
            id="cni"
            label=""
            accept="image/*,.pdf"
            customizableText="votre CNI"
            onChange={(file) => update("cniFile", file)}
          />
        </>
      )}

      {data.typePersonne === "morale" && (
        <>
          <div className="grid gap-6 md:gap-16 md:grid-cols-2">
            <TextField id="numero-rccm" label="Numéro RCCM" placeholder="" required value={data.numeroRCCM} onChange={(e) => update("numeroRCCM", e.target.value)} />
            <PhoneField id="telephone-entreprise" label="Numéro de téléphone" value={data.telephone} onChange={(e) => update("telephone", e.target.value)} />
          </div>

          <div>
            <TextField id="email-entreprise" label="Adresse e-mail (Facultatif)" placeholder="" type="email" value={data.email} onChange={(e) => update("email", e.target.value)} />
          </div>

          <FileUploadField
            id="rccm"
            label=""
            accept="image/*,.pdf"
            onChange={(file) => update("rccmFile", file)}
          />
        </>
      )}
    </div>
  );
}
