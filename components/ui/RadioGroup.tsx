interface RadioOption {
  id: string;
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  selectedValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function RadioGroup({ 
  label, 
  name, 
  options, 
  selectedValue, 
  onChange,
  className = "" 
}: RadioGroupProps) {
  return (
    <div className={className}>
      <label className="text-sm font-bold sm:text-xl mb-4 block">{label}</label>
      <div className="flex items-center gap-6">
        {options.map((option) => (
          <div key={option.id} className="flex items-center gap-3">
            <input
              type="radio"
              id={option.id}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="w-[25px] h-[25px] border-4 border-[#CCD6ED] text-primary focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-full"
              style={{ 
                appearance: 'none',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                position: 'relative',
                cursor: 'pointer'
              }}
            />
            <style jsx>{`
              input[type="radio"]:checked {
                background-color: #F97316;
                box-shadow: inset 0 0 0 3px white;
              }
            `}</style>
            <label htmlFor={option.id} className="text-base text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
