interface ReadOnlyFieldProps {
  label: string;
  value: string;
}

const readOnlyInputClass =
  "w-full rounded-lg border border-secondary px-4 py-4 text-base text-gray-700 bg-[rgba(254,236,217,0.23)]";
const labelClass = "text-base font-semibold text-gray-900 block mb-3";

export default function ReadOnlyField({ label, value }: ReadOnlyFieldProps) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <input type="text" value={value} readOnly className={readOnlyInputClass} />
    </div>
  );
}
