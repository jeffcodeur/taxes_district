"use client";

import React from "react";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      <div className="relative h-full w-1/2 bg-primary overflow-hidden flex items-center justify-center">
        {/* Vecteur orange */}
        <img
          src="/images/vector.svg"
          alt=""
          className="absolute w-[55%] top-[8%] -left-1"
        />

        {/* Logo — positionné en absolu en haut */}
        <div className="absolute top-[13%] left-1/2 -translate-x-1/2 bg-white rounded-xl py-4 px-12 flex items-center z-20 whitespace-nowrap">
          <img
            src="/images/logo-district.png"
            alt="logo district"
            className="w-15 h-15 mr-6"
          />
          <img src="/images/2.svg" alt="logo" className="w-5 mr-1" />
          <p className="font-semibold text-[#14183E] text-lg">
            taxes.district<span className="text-secondary">.ci</span>
          </p>
        </div>

        {/* Illustration centrale */}
        <img
          src="/images/3.svg"
          alt="illustration 3"
          className="absolute z-10 w-[64%] top-[28%] right-22"
        />
        <img
          src="/images/taxe.png"
          alt="illustration"
          className="absolute z-10 w-[77%] top-[20%]  left-[13%]"
        />
      </div>

      <div className="h-full w-1/2 flex items-center bg-white p-18">
        <div className="w-full">
          <h1 className="font-bold text-4xl leading-none tracking-normal text-[#14183E] mb-8">
            Connexion
          </h1>
          <form>
            <div className="flex flex-col gap-3 mb-8">
              <label htmlFor="email" className="font-bold text-xl">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Votre adresse email"
                className="w-full h-[70px] border border-[rgba(20,24,62,0.21)] rounded-[9px] bg-white px-4 focus:outline-none focus:border-primary focus:border transition duration-200"
                required
              />
            </div>

            <div className="flex flex-col gap-3 mb-8">
              <label htmlFor="password" className="font-bold text-xl ">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                placeholder="•• ••• ••• ••"
                className="w-full h-[70px] border border-[rgba(20,24,62,0.21)] rounded-[9px] bg-white px-4 focus:outline-none focus:border-primary focus:border transition duration-200"
                required
              />
            </div>

            <button className="w-full h-[80px] bg-primary hover:bg-[#044d8a] text-white font-semibold flex items-center justify-center rounded-[6px] gap-[10px] transition duration-200 font-sans font-bold text-2xl leading-none tracking-[-0.06em]">
              Suivant
            </button>
          </form>
          <div className="mt-8">
            <p className="text-[#757575] text-lg font-light">
              Mot de passe oublié ?{" "}
              <a
                href="#"
                className="font-bold text-primary transition-all duration-300 ease-out hover:opacity-80"
              >
                réinitialiser le
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
