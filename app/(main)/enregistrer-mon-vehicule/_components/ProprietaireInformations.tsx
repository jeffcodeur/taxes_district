"use client";

import { useState } from "react";
import TextField from "../../../../components/ui/TextField";
import FileUploadField from "../../../../components/ui/FileUploadField";
import RadioGroup from "../../../../components/ui/RadioGroup";
import PhoneField from "../../../../components/ui/PhoneField";

export default function ProprietaireInformations() {
  const [typePersonne, setTypePersonne] = useState("physique");

  const typePersonneOptions = [
    { id: "personne-physique", value: "physique", label: "Personne physique" },
    { id: "personne-morale", value: "morale", label: "Personne moral (Entreprise)" }
  ];

  return (
    <div className="space-y-6">
      <RadioGroup
        label=""
        name="type-personne"
        options={typePersonneOptions}
        selectedValue={typePersonne}
        onChange={setTypePersonne}
      />

      {typePersonne === "physique" && (
        <>
          <div className="grid gap-16 md:grid-cols-2">
            <TextField
              id="nom"
              label="Nom"
              placeholder=""
              required
            />
            <TextField
              id="prenoms"
              label="Prénoms"
              placeholder=""
              required
            />
          </div>

          <div className="grid gap-16 md:grid-cols-2">
            <TextField
              id="numero-cni"
              label="Numéro de CNI"
              placeholder=""
              required
            />
            <PhoneField
              id="telephone"
              label="Numéro de téléphone"
              required
            />
          </div>

          <div>
            <TextField
              id="email"
              label="Adresse e-mail (Facultatif)"
              placeholder=""
              type="email"
            />
          </div>

          <FileUploadField
            id="cni"
            label=""
            accept="image/*,.pdf"
            onChange={(file) => console.log('File selected:', file)}
          />
        </>
      )}

      {typePersonne === "morale" && (
        <>
          <div className="grid gap-16 md:grid-cols-2">
            <TextField
              id="numero-rccm"
              label="Numéro RCCM"
              placeholder=""
              required
            />
            <PhoneField
              id="telephone-entreprise"
              label="Numéro de téléphone"
              required
            />
          </div>

          <div>
            <TextField
              id="email-entreprise"
              label="Adresse e-mail (Facultatif)"
              placeholder=""
              type="email"
            />
          </div>

          <FileUploadField
            id="rccm"
            label=""
            accept="image/*,.pdf"
            onChange={(file) => console.log('File selected:', file)}
          />
        </>
      )}
    </div>
  );
}
