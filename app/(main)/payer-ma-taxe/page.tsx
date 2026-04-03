"use client";

import { useState } from "react";
import Breadcrumb from "../../../components/layout/Breadcrumb";
import SectionTitle from "../../../components/layout/SectionTitle";
import TextField from "../../../components/ui/TextField";
import PhoneField from "../../../components/ui/PhoneField";
import Button from "../../../components/ui/Button";
import IconButton from "../../../components/ui/IconButton";

const TITRE_TAXE = "Taxe sur les taxis interurbains ou ceux dotés d'un compteur";

function DownloadIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  );
}

export default function PayerMaTaxePage() {
  const [step, setStep] = useState(1);
  const [plaque, setPlaque] = useState("");
  const [telephone, setTelephone] = useState("");
  const [modele, setModele] = useState("");

  const handleValidateStep1 = () => {
    setStep(2);
  };

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Payer Ma Taxe" },
        ]}
      />

      {step === 1 && (
        <>
          <SectionTitle
            title={TITRE_TAXE}
            subtitle=""
            sectionClassName="max-w-3xl py-8"
            titleClassName="text-title"
            subtitleClassName="font-normal"
          />

          <div className="px-4 sm:px-6 mb-12">
            <section className="mx-auto w-full max-w-4xl rounded-xl bg-white px-8 py-12 sm:px-12 sm:py-16">
              <div className="space-y-8">
                <TextField
                  id="plaque"
                  label="Entrer la plaque d'immatriculation du véhicule"
                  value={plaque}
                  onChange={(e) => setPlaque(e.target.value)}
                  placeholder=""
                />

                <PhoneField
                  id="telephone"
                  label="Entrer un numéro de téléphone lié au véhicule"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                />

                <div className="pt-4">
                  <Button onClick={handleValidateStep1} className="w-full sm:w-auto">Valider</Button>
                </div>
              </div>
            </section>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <SectionTitle
            title={TITRE_TAXE}
            subtitle="Janvier - Février - Mars"
            sepatorText="Période"
            sectionClassName="max-w-3xl py-8"
            titleClassName="text-title"
            subtitleClassName="font-normal"
          />

          <div className="px-4 sm:px-6 mb-12">
          <section className="mx-auto w-full max-w-4xl rounded-xl bg-white px-8 py-12 sm:px-12 sm:py-16">
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-gray-900">Dernier paiement effectué</h3>
                <p className="text-sm text-gray-600">Période 01/2025 - 03/2025</p>
                <p className="text-sm text-gray-900">25 000 FCFA</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <TextField
                  id="plaque-display"
                  label="Plaque d'immatriculation"
                  value={plaque}
                  readOnly
                  inputClassName="border border-[#F97316] !bg-[rgba(254,236,217,0.23)]"
                />
                <TextField
                  id="modele"
                  label="Modèle du véhicule"
                  value={modele}
                  onChange={(e) => setModele(e.target.value)}
                  inputClassName="border border-[#F97316] !bg-[rgba(254,236,217,0.23)]"
                />
              </div>

              <div className="bg-orange-50 border border-[#F97316] rounded-lg p-6 flex items-center justify-between">
                <div>
                  <p className="text-base font-bold text-gray-900 mb-1">Somme restante à payer</p>
                  <p className="text-sm text-gray-600">Période 04/2025 - 06/2025</p>
                </div>
                <p className="text-3xl font-bold text-[#F97316]">25 000 FCFA</p>
              </div>

              <div className="pt-4 flex justify-end">
                <Button onClick={() => setStep(3)} className="w-full sm:w-auto">Payer</Button>
              </div>
            </div>
          </section>
        </div>
        </>
      )}

      {step === 3 && (
        <>
          <SectionTitle
            title={TITRE_TAXE}
            subtitle="Confirmation de paiement"
            sectionClassName="max-w-3xl py-8"
            titleClassName="text-title"
            subtitleClassName="font-normal text-gray-600 text-xl"
          />

          <div className="px-4 sm:px-6 mb-12">
            <section className="mx-auto w-full max-w-3xl rounded-xl bg-white px-8 py-16 sm:px-12 sm:py-20">
              <div className="flex flex-col items-center gap-6">
                <div className="flex items-center justify-center w-40 h-40 rounded-2xl bg-success/10">
                  <svg className="w-20 h-20 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <p className="text-3xl  text-success">Paiement accepté !</p>
              </div>
            </section>
          </div>

          <div className="px-4 sm:px-6 mb-12">
            <div className="mx-auto w-full max-w-3xl flex justify-center">
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <IconButton variant="primary">
                  Attestation d&apos;acquittement
                  <DownloadIcon />
                </IconButton>

                <IconButton variant="secondary">
                  Macaron
                  <DownloadIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
