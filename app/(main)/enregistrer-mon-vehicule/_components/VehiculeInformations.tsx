import TextField from "../../../../components/ui/TextField";
import RadioGroup from "../../../../components/ui/RadioGroup";
import FileUploadField from "../../../../components/ui/FileUploadField";
import { useState } from "react";

const utilisationOptions = [
  { id: "vtc", value: "vtc", label: "VTC" },
  { id: "taxi-inter-urbain", value: "taxi-inter-urbain", label: "Taxi inter urbain" },
  { id: "autres", value: "autres", label: "Autres" }
];

export default function VehiculeInformations() {
  const [utilisation, setUtilisation] = useState<string>("");

  return (
    <div className="space-y-6">
      <div className="grid gap-16 md:grid-cols-2">
        <TextField id="marque" label="Marque du véhicule" placeholder="Suzuki" required />
        <TextField id="modele" label="Modèle du véhicule" placeholder="Dzire" required />
      </div>

      <div className="grid gap-16 md:grid-cols-2">
        <TextField id="date-mise-en-circulation" label="Date de mise en circulation" placeholder="05 - 03 - 2025" required />
        <TextField id="numero-cartegrise" label="Numéro de carte grise" placeholder="Ex: 050000000" type="number" required />
      </div>

      <div className="grid gap-16 md:grid-cols-2">
        <RadioGroup
          label="Utilisation"
          name="utilisation"
          options={utilisationOptions}
          selectedValue={utilisation}
          onChange={setUtilisation}
        />
        <TextField id="preciser" label="Préciser" type="text" required />
      </div>

      <FileUploadField
        id="carte-grise"
        label=""
        accept="image/*,.pdf"
        onChange={(file) => console.log('File selected:', file)}
      />
    </div>
  );
}
