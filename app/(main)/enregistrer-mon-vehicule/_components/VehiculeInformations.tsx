"use client";

import TextField from "../../../../components/ui/TextField";
import RadioGroup from "../../../../components/ui/RadioGroup";
import FileUploadField from "../../../../components/ui/FileUploadField";
import type { VehiculeData } from "./types";

const utilisationOptions = [
  { id: "vtc", value: "vtc", label: "VTC" },
  { id: "taxi-inter-urbain", value: "taxi-inter-urbain", label: "Taxi inter urbain" },
  { id: "autres", value: "autres", label: "Autres" },
];

type Props = {
  data: VehiculeData;
  onChange: (data: VehiculeData) => void;
};

export default function VehiculeInformations({ data, onChange }: Props) {
  const update = (field: keyof VehiculeData, value: string | File | null) =>
    onChange({ ...data, [field]: value });

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:gap-16 md:grid-cols-2">
        <TextField id="marque" label="Marque du véhicule" placeholder="Suzuki" required value={data.marque} onChange={(e) => update("marque", e.target.value)} />
        <TextField id="modele" label="Modèle du véhicule" placeholder="Dzire" required value={data.modele} onChange={(e) => update("modele", e.target.value)} />
      </div>

      <div className="grid gap-6 md:gap-16 md:grid-cols-2">
        <TextField id="date-mise-en-circulation" label="Date de mise en circulation" placeholder="05 - 03 - 2025" required value={data.dateMiseEnCirculation} onChange={(e) => update("dateMiseEnCirculation", e.target.value)} />
        <TextField id="numero-cartegrise" label="Numéro de carte grise" placeholder="Ex: 050000000" type="number" required value={data.numeroCGrise} onChange={(e) => update("numeroCGrise", e.target.value)} />
      </div>

      <div className="grid gap-6 md:gap-16 md:grid-cols-2">
        <RadioGroup
          label="Utilisation"
          name="utilisation"
          options={utilisationOptions}
          selectedValue={data.utilisation}
          onChange={(value) => update("utilisation", value)}
        />
        <TextField id="preciser" label="Préciser" type="text" required value={data.preciser} onChange={(e) => update("preciser", e.target.value)} />
      </div>

      <FileUploadField
        id="carte-grise"
        label=""
        accept="image/*,.pdf"
        onChange={(file) => update("carteGrise", file)}
      />
    </div>
  );
}
