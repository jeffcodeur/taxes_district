import type { ComponentProps } from "react";

const fieldClassName =
  "mt-4 w-full rounded-lg bg-[#F7F7F7] px-4 py-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 sm:px-6 sm:py-5 sm:text-lg";

type TextFieldProps = {
  id: string;
  label: string;
  className?: string;
  inputClassName?: string;
} & Omit<ComponentProps<"input">, "id">;

export default function TextField({
  id,
  label,
  className,
  inputClassName,
  type = "text",
  ...inputProps
}: TextFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-bold sm:text-xl">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={
          inputClassName
            ? `${fieldClassName} ${inputClassName}`
            : fieldClassName
        }
        {...inputProps}
      />
    </div>
  );
}
