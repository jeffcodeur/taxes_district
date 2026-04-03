import type { ChangeEvent } from "react";

type InputProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col gap-3 mb-8">
      <label htmlFor={id} className="font-bold text-xl">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full h-[70px] border border-[rgba(20,24,62,0.21)] rounded-[9px] bg-white px-4 focus:outline focus:border-primary focus:border transition duration-200"
        required
      />
    </div>
  );
}
