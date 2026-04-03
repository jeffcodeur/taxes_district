import Image from "next/image";
import type { ReactNode } from "react";

interface PhoneFieldProps {
  id: string;
  label: ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  countryCode?: string;
  flagSrc?: string;
}

export default function PhoneField({
  id,
  label,
  value,
  onChange,
  placeholder = "",
  required = false,
  countryCode = "+225",
  flagSrc = "/images/ci.png",
}: PhoneFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-bold sm:text-base text-gray-800 block mb-4">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex items-center gap-3 mt-4">
        <div className="flex items-center gap-2 px-4 py-4 bg-[#F7F7F7] rounded-lg sm:py-5 shrink-0">
          <Image
            src={flagSrc}
            alt="Country flag"
            width={24}
            height={16}
            className="object-contain"
          />
          <span className="text-base font-medium sm:text-lg">{countryCode}</span>
        </div>
        <input
          type="tel"
          id={id}
          value={value}
          onChange={onChange}
          className="flex-1 rounded-lg border-0 bg-[#F7F7F7] px-4 py-4 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 sm:px-6 sm:py-5 sm:text-lg"
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
}
