import type { ComponentProps } from "react";

const fieldClassName =
  "mt-4 w-full rounded-lg bg-[#F7F7F7] px-4 py-4 text-base text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 sm:px-6 sm:py-5 sm:text-lg";

type TextareaFieldProps = {
  id: string;
  label: string;
  className?: string;
  textareaClassName?: string;
} & Omit<ComponentProps<"textarea">, "id">;

export default function TextareaField({
  id,
  label,
  className,
  textareaClassName,
  ...textareaProps
}: TextareaFieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm font-bold sm:text-xl">
        {label}
      </label>
      <textarea
        id={id}
        className={
          textareaClassName
            ? `${fieldClassName} ${textareaClassName}`
            : fieldClassName
        }
        {...textareaProps}
      />
    </div>
  );
}
