"use client";

import React from "react";
import Image from "next/image";
import Input from "../../components/ui/Input";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      <div className="relative h-full w-1/2 bg-primary overflow-hidden flex items-center justify-center">
        <Image
          src="/images/vector.svg"
          alt=""
          width={500}
          height={500}
          className="absolute w-[55%] h-auto top-[8%] -left-1"
          priority
        />

        <div className="absolute top-[13%] left-1/2 -translate-x-1/2 bg-white rounded-xl py-4 px-12 flex items-center z-20 whitespace-nowrap">
          <Image
            src="/images/logo-district.png"
            alt="logo district"
            width={60}
            height={60}
            className="mr-6"
            priority
          />
          <Image
            src="/images/2.svg"
            alt="logo"
            width={20}
            height={20}
            className="w-5 mr-1 h-auto"
            priority
          />
          <p className="font-semibold text-dark text-lg">
            taxes.district<span className="text-secondary">.ci</span>
          </p>
        </div>

        <Image
          src="/images/3.svg"
          alt="illustration 3"
          width={600}
          height={600}
          className="absolute z-10 w-[64%] h-auto top-[28%] right-22"
          priority
        />
        <Image
          src="/images/taxe.png"
          alt="illustration"
          width={700}
          height={700}
          className="absolute z-10 w-[77%] h-auto top-[20%] left-[13%]"
          priority
        />
      </div>

      <div className="h-full w-1/2 flex items-center bg-white p-18">
        <div className="w-full">
          <h1 className="font-bold text-4xl leading-none tracking-normal text-dark mb-8">
            Connexion
          </h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Votre adresse email"
            />
            <Input
              id="password"
              label="Mot de passe"
              type="password"
              placeholder="•• ••• ••• ••"
            />

            <button className="w-full h-[80px] bg-primary hover:bg-[#044d8a] text-white font-bold flex items-center justify-center rounded-[6px] gap-[10px] transition duration-200 font-sans text-2xl leading-none tracking-[-0.06em]">
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
