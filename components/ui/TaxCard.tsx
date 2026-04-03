import Image from "next/image";

export type TaxCardProps = {
  badge: string;
  badgeClassName: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
};

export default function TaxCard({ badge, badgeClassName, title, imageSrc, imageAlt }: TaxCardProps) {
  return (
    <article className="relative flex flex-1 w-full flex-col bg-white rounded-lg p-6 min-h-[340px]">
      <span className={`inline-block w-fit rounded-full px-4 py-1.5 text-sm font-semibold ${badgeClassName}`}>
        {badge}
      </span>
      <h3 className="mt-4 text-2xl font-bold leading-tight text-[#1F2A44]">{title}</h3>
      <div className="mt-auto pb-2">
        <Image src={imageSrc} alt={imageAlt} width={96} height={96} />
      </div>
      <svg width="38" height="38" viewBox="0 0 24 24" fill="none" className="absolute bottom-6 right-6 text-gray-300">
        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </article>
  );
}
