import type { ComponentProps } from "react";

const primaryClassName =
  "w-full rounded-lg bg-primary px-22 py-4 text-lg font-medium text-white transition-colors duration-300 ease-out hover:bg-[#175885] sm:w-auto sm:py-5";

type ButtonProps = ComponentProps<"button">;

export default function Button({
  className,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={className ? `${primaryClassName} ${className}` : primaryClassName}
      {...props}
    >
      {children}
    </button>
  );
}
