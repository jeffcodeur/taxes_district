"use client";

import Image from "next/image";
import { useState } from "react";
import Breadcrumb from "../../../components/layout/Breadcrumb";
import SectionTitle from "../../../components/layout/SectionTitle";
import Button from "../../../components/ui/Button";
import VehiculeInformations from "./_components/VehiculeInformations";
import ProprietaireInformations from "./_components/ProprietaireInformations";
import PersonnesLiees from "./_components/PersonnesLiees";
import Resume from "./_components/Resume";
import Stepper from "./_components/Stepper";
import TextField from "../../../components/ui/TextField";

const steps = [
  { id: 1, label: "1- Informations du véhicule" },
  { id: 2, label: "2- Informations du propriétaire" },
  { id: 3, label: "3- Personnes liées au véhicule" },
];

const stepTitles = {
  1: {
    title: "Saisissez les informations du véhicule",
    subtitle: "Saisissez exactement les informations inscrites sur la carte grise du véhicule",
  },
  2: {
    title: "Saisissez les informations du propriétaire",
    subtitle: "Saisissez exactement les informations inscrites sur la carte grise du véhicule",
  },
  3: {
    title: "Saisissez les informations des personnes liées au véhicule",
    subtitle: "Ces personnes seront liées au véhicule et pourront s’identifier pour suivre l’activité du véhicule sur la plateforme du DAA.",
  },
};

export default function EnregistrerMonVehiculePage() {
  const [step, setStep] = useState(0);

  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Enregistrer mon véhicule" },
        ]}
      />

     
      {step === 0 && (
        <>
          <SectionTitle
            title="Bienvenue sur l'espace d'enregistrement de véhicule"
            subtitle="Saisissez le numéro d'immatriculation de votre véhicule et commencez"
            sectionClassName="py-10 sm:py-14 max-w-4xl"
          />

          <div className="px-4 sm:px-6">
            <section>
              <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8 md:gap-12 lg:gap-16">
                <Image
                  src="/images/plaque2.jpg"
                  alt="Exemple de plaque d'immatriculation ivoirienne format 1"
                  width={240}
                  height={160}
                  className="h-auto w-full max-w-60 object-contain sm:max-w-52 md:max-w-56"
                />
                <Image
                  src="/images/plaque.jpg"
                  alt="Exemple de plaque d'immatriculation ivoirienne format 2"
                  width={240}
                  height={160}
                  className="h-auto w-full max-w-60 object-contain sm:max-w-52 md:max-w-56"
                />
              </div>
            </section>

            <section className="mx-auto my-8 w-full max-w-4xl rounded-xl bg-white px-4 py-8 sm:my-12 sm:px-6 sm:py-12">
              <TextField
                id="plaque-immatriculation"
                label="Numero de plaque d'immatriculation"
                placeholder="AA - 020 - AA"
                className="mb-8 sm:mb-10"
              />
              <Button onClick={() => setStep(1)}>Commencer</Button>
            </section>
          </div>
        </>
      )}

      {step >= 1 && step <= 3 && (
        <>
          <div className="my-4">
            <Stepper steps={steps} currentStep={step} />
          </div>

          <SectionTitle
            title={stepTitles[step as 1 | 2 | 3].title}
            subtitle={stepTitles[step as 1 | 2 | 3].subtitle}
            sectionClassName="max-w-5xl py-2"
            titleClassName="text-[#374151]"
            subtitleClassName="font-normal"
          />

          <div className="px-4 sm:px-6">
            <section className="mx-auto w-full max-w-4xl rounded-xl bg-white px-12 py-8 sm:my-12 sm:px-14 sm:py-12">

              {step === 1 && <VehiculeInformations />}

              {step === 2 && <ProprietaireInformations />}

              {step === 3 && <PersonnesLiees />}

            </section>

            {/* Navigation */}
            <div className="mx-auto mt-8 mb-8 flex items-center justify-between gap-4 max-w-4xl">
              <button
                onClick={() => setStep(step - 1)}
                className="text-xl font-medium text-gray-500 hover:text-gray-700 transition flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Précédent
              </button>
              {step <= 3 && (
                <Button onClick={() => setStep(step + 1)} className="!py-2 !text-base sm:!py-3">Suivant</Button>
              )}
            </div>
          </div>
        </>
      )}

      {step === 4 && (
        <div className="px-4 sm:px-6">
           <SectionTitle
        title="Résumé"
        subtitle=""
        sectionClassName="py-12"
        titleClassName="text-[#374151]"
      />
          <section className="mx-auto w-full max-w-4xl rounded-xl ">
            <Resume />
          </section>

          <div className="mx-auto mt-8 mb-8 flex items-center justify-between gap-4 max-w-4xl">
            <button
              onClick={() => setStep(3)}
              className="text-xl font-medium text-gray-500 hover:text-gray-700 transition flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Précédent
            </button>
            <Button className="!py-2 !text-base sm:!py-3">Valider</Button>
          </div>
        </div>
      )}

      
    </>
  );
}


