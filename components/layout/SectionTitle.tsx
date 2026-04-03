type SectionTitleProps = {
  title: string;
  subtitle: string;
  sectionClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  sepatorText?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  sepatorText,
  sectionClassName = "max-w-4xl px-4 sm:px-6",
  titleClassName = "text-primary",
  subtitleClassName,
}: SectionTitleProps) {
  return (
    <section
      className={`mx-auto flex flex-col items-center justify-center text-center ${sectionClassName}`}
    >
      <h2
        className={`font-bold text-3xl leading-[1.2] sm:text-4xl md:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {sepatorText && <span className="mt-3 text-lg font-normal uppercase text-gray-400 tracking-[.5em]">{sepatorText}</span>}
      <p
        className={`mt-4 text-[1.7rem] font-medium not-italic leading-[1.533] tracking-[-0.04em] [leading-trim:cap-height]${subtitleClassName ? ` ${subtitleClassName}` : ""}`}
      >
        {subtitle}
      </p>
    </section>
  );
}
