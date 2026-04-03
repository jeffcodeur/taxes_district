"use client";

import SelectField from "../../../../components/ui/SelectField";
import SectionTitle from "../../../../components/layout/SectionTitle";

export default function Resume() {
  return (
    <>

      {/* Informations du véhicule */}
      <div className="bg-white rounded-xl p-8 mb-6 sm:p-10 space-y-8">
        <h2 className="text-2xl font-bold text-[#F97316]">Informations du véhicule</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Marque du véhicule</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Modèle du véhicule</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Date de mise en circulation</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Numéro de carte grise</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-[200px_1fr_200px]">
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Utilisation</label>
            <input
              type="text"
              value="VTC"
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Préciser</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
          <div className="flex items-end">
            <button className="w-full rounded-lg bg-gray-500 px-4 py-4 text-base text-white font-medium flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              carte grise
            </button>
          </div>
        </div>
      </div>

      {/* Type de personne */}
      <div className="bg-white rounded-xl p-8 mb-6 sm:p-10 space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">Type de personne</h2>
        
        <div className="max-w-xs">
          <SelectField
            id="type-personne-resume"
            label=""
            defaultValue="physique"
            options={[
              { value: "physique", label: "Personne physique" },
              { value: "morale", label: "Personne moral (Entreprise)" }
            ]}
            selectClassName="border border-[#F97316]"
            style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            disabled
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Nom</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Prénoms</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Numéro CNI</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Numéro de téléphone</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Adresse e-mail</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
        </div>
      </div>

      {/* Personne 1 */}
      <div className="bg-white rounded-xl p-8 mb-6 sm:p-10 space-y-8">
        <h2 className="text-2xl font-bold text-[#F97316]">Personne 1</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Nom</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Rôle</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Numéro de téléphone</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
          <div>
            <label className="text-base font-semibold text-gray-900 block mb-3">Adresse e-mail</label>
            <input
              type="text"
              value=""
              readOnly
              className="w-full rounded-lg border border-[#F97316] px-4 py-4 text-base text-gray-700"
              style={{ background: 'rgba(254, 236, 217, 0.23)' }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
