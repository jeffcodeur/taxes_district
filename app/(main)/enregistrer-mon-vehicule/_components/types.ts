export type VehiculeData = {
  marque: string;
  modele: string;
  dateMiseEnCirculation: string;
  numeroCGrise: string;
  utilisation: string;
  preciser: string;
  carteGrise: File | null;
};

export type ProprietaireData = {
  typePersonne: "physique" | "morale";
  nom: string;
  prenoms: string;
  numeroCNI: string;
  telephone: string;
  email: string;
  cniFile: File | null;
  numeroRCCM: string;
  rccmFile: File | null;
};

export type PersonneLiee = {
  id: string;
  nomPrenoms: string;
  role: string;
  telephone: string;
};
