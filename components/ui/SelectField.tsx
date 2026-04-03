import type { ComponentProps } from "react";

const fieldClassName =
  "w-full rounded-lg bg-[#F7F7F7] pl-4 pr-10 py-4 text-base text-gray-700 focus:outline-none focus:ring-0 sm:pl-6 sm:pr-12 sm:py-5 sm:text-lg appearance-none";

type SelectFieldProps = {
  id: string;
  label: string;
  className?: string;
  selectClassName?: string;
  options: { value: string; label: string }[];
} & Omit<ComponentProps<"select">, "id">;

export default function SelectField({
  id,
  label,
  className,
  selectClassName,
  options,
  ...selectProps
}: SelectFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-bold sm:text-xl">
        {label}
      </label>
      <div className="relative mt-4">
        <select
          id={id}
          className={
            selectClassName
              ? `${fieldClassName} ${selectClassName}`
              : fieldClassName
          }
          {...selectProps}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 sm:right-6">
          <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
}
