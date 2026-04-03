"use client";

import { useState } from "react";
import TextField from "../../../../components/ui/TextField";
import RadioGroup from "../../../../components/ui/RadioGroup";
import FileUploadField from "../../../../components/ui/FileUploadField";

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
            <div>
              <label className="text-sm font-bold sm:text-xl mb-4 block">Numéro de téléphone</label>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-2 px-4 py-4 bg-[#F7F7F7] rounded-lg sm:py-5 shrink-0">
                  <img src="/images/ci.png" alt="Côte d'Ivoire" className="w-6 h-6 object-cover" />
                  <span className="text-base font-medium sm:text-lg">+225</span>
                </div>
                <input
                  type="tel"
                  id="telephone"
                  className="flex-1 rounded-lg border-0 bg-[#F7F7F7] px-4 py-4 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 sm:px-6 sm:py-5 sm:text-lg"
                  placeholder=""
                />
              </div>
            </div>
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
            <div>
              <label className="text-sm font-bold sm:text-xl mb-4 block">Numéro de téléphone</label>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-2 px-4 py-4 bg-[#F7F7F7] rounded-lg sm:py-5 shrink-0">
                  <img src="/images/ci.png" alt="Côte d'Ivoire" className="w-6 h-6 object-cover" />
                  <span className="text-base font-medium sm:text-lg">+225</span>
                </div>
                <input
                  type="tel"
                  id="telephone-entreprise"
                  className="flex-1 rounded-lg border-0 bg-[#F7F7F7] px-4 py-4 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 sm:px-6 sm:py-5 sm:text-lg"
                  placeholder=""
                />
              </div>
            </div>
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
