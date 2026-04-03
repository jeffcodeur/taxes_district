type SectionTitleProps = {
  title: string;
  subtitle?: string;
  sectionClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  separatorText?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  separatorText,
  sectionClassName = "max-w-4xl px-3 py-4 sm:px-6 sm:py-8",
  titleClassName = "text-primary",
  subtitleClassName,
}: SectionTitleProps) {
  return (
    <section
      className={`mx-auto px-4 sm:px-0 flex flex-col items-center justify-center text-center ${sectionClassName}`}
    >
      <h2
        className={`font-bold text-3xl leading-[1.2] sm:text-4xl md:text-5xl ${titleClassName}`}
      >
        {title}
      </h2>
      {separatorText && <span className="mt-3 text-lg font-normal uppercase text-gray-400 tracking-[.5em]">{separatorText}</span>}
      {subtitle && (
        <p
          className={`mt-4 text-[1.7rem] font-medium not-italic leading-[1.533] tracking-[-0.04em] [leading-trim:cap-height]${subtitleClassName ? ` ${subtitleClassName}` : ""}`}
        >
          {subtitle}
        </p>
      )}
    </section>
  );
}
