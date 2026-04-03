import Breadcrumb from "../../../components/layout/Breadcrumb";
import SectionTitle from "../../../components/layout/SectionTitle";
import TextField from "../../../components/ui/TextField";
import Button from "../../../components/ui/Button";

export default function TaxesPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Taxes" },
        ]}
      />

      <SectionTitle
        title="Choisir la catégorie de votre taxe"
        subtitle=""
        sectionClassName="max-w-4xl py-8"
        titleClassName="text-title"
        subtitleClassName="font-normal"
      />

    </>
  );
}
