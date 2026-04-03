"use client";

import SelectField from "../../../../components/ui/SelectField";
import SectionTitle from "../../../../components/layout/SectionTitle";

export default function Resume() {
  return (
    <>
      <SectionTitle
        title="Résumé"
        subtitle=""
        sectionClassName="py-0 mb-8"
        titleClassName="text-gray-800"
      />

      {/* Informations du véhicule */}
      <div className="bg-white rounded-xl p-8 mb-6 sm:p-10">
        <h2 className="text-xl font-bold text-[#F97316] mb-6">Informations du véhicule</h2>
        
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Marque du véhicule</label>
            <input
              type="text"
              value="Toyota"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Modèle du véhicule</label>
            <input
              type="text"
              value="Corolla"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Date de mise en circulation</label>
            <input
              type="text"
              value="15/03/2020"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Numéro de carte grise</label>
            <input
              type="text"
              value="AB-1234-CI"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-3">
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Utilisation</label>
            <input
              type="text"
              value="VTC"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Préciser</label>
            <input
              type="text"
              value="Transport de personnes"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800"></label>
            <button className="mt-4 w-full rounded-lg bg-gray-500 px-4 py-4 text-base text-white font-medium sm:px-6 sm:py-5 sm:text-lg flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              carte grise
            </button>
          </div>
        </div>
      </div>

      {/* Type de personne */}
      <div className="bg-white rounded-xl p-8 mb-6 sm:p-10">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Type de personne</h2>
        <SelectField
          id="type-personne-resume"
          label=""
          defaultValue="physique"
          options={[
            { value: "physique", label: "Personne physique" },
            { value: "morale", label: "Personne moral (Entreprise)" }
          ]}
          className="max-w-xs"
          selectClassName="border border-[#F97316] bg-white"
          disabled
        />

        <div className="grid gap-16 md:grid-cols-3">
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Nom</label>
            <input
              type="text"
              value="KOUASSI"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Prénoms</label>
            <input
              type="text"
              value="KONAN JEAN"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Numéro CNI</label>
            <input
              type="text"
              value="CI2020123456"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Numéro de téléphone</label>
            <input
              type="text"
              value="+225 07 12 34 56 78"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Adresse e-mail</label>
            <input
              type="text"
              value="konan.jean@email.ci"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
        </div>
      </div>

      {/* Personne 1 */}
      <div className="bg-white rounded-xl p-8 mb-6 sm:p-10">
        <h2 className="text-xl font-bold text-[#F97316] mb-6">Personne 1</h2>
        
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Nom</label>
            <input
              type="text"
              value="YAO MARIE"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Rôle</label>
            <input
              type="text"
              value="Conducteur secondaire"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Numéro de téléphone</label>
            <input
              type="text"
              value="+225 05 98 76 54 32"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
          <div>
            <label className="text-sm font-bold sm:text-base text-gray-800">Adresse e-mail</label>
            <input
              type="text"
              value="yao.marie@email.ci"
              readOnly
              className="mt-4 w-full rounded-lg bg-white border border-[#F97316] px-4 py-4 text-base text-gray-700 sm:px-6 sm:py-5 sm:text-lg"
            />
          </div>
        </div>
      </div>
    </>
  );
}
