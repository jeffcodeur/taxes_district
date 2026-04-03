"use client";

import SectionTitle from "../../../components/layout/SectionTitle";
import Button from "../../../components/ui/Button";
import TextField from "../../../components/ui/TextField";
import TextareaField from "../../../components/ui/TextareaField";

export default function ContactPage() {
  return (
    <>
      <SectionTitle
        title="Contact"
        subtitle=""
        titleClassName="text-[#374151]"
        sectionClassName="my-12"
      />

      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 md:flex-row">
          <div className="rounded-2xl py-2 text-[#1F2A44] md:flex-1">
            <div>
              <h2 className="text-4xl font-bold leading-[1.1] tracking-[-0.02em]">
                Nous simplifions vos <br></br>paiements, et restons à <br></br> votre écoute !
              </h2>

              <p className="mt-8 text-xl leading-[1.1] tracking-[-0.02em]">
                Contactez-nous pour toute assistance.
              </p>
            </div>

            <div>
              <h3 className="mt-10 text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-[#0076D0]">
                District autonome d&apos;Abidjan
              </h3>

              <p className="mt-8 text-xl leading-[1.25] tracking-[-0.02em]">
                Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit. Ut fringilla rhoncus orci,
                eu eleifend neque pellentesque non.
              </p>
            </div>

            <p className="mt-16 text-xl text-[#5E6282] font-semibold tracking-[-0.02em]">+225 27 22 000 000</p>

            <div className="mt-2 text-lg inline-flex rounded-lg bg-secondary px-2 py-2 font-bold text-white tracking-[-0.02em]">
              taxe@districtabidjan.ci
            </div>
          </div>
          <div className="rounded-[28px] bg-white px-6 py-8 sm:px-10 sm:py-12 md:flex-1">
            <form>
              <TextField
                id="nom"
                label="Votre nom"
                placeholder=""
                className="mb-8"
                inputClassName="bg-[#E4E4E4]"
              />

              <TextField
                id="email"
                label="Adresse mail"
                type="email"
                placeholder=""
                className="mb-8"
                inputClassName="bg-[#E4E4E4]"
              />

              <TextareaField
                id="message"
                label="Ecrivez votre message"
                rows={10}
                className="mb-8"
                textareaClassName="bg-[#E4E4E4] resize-none"
              />

              <Button type="submit" className="px-14">
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </section>

    </>
  );
}
