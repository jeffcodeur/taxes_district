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
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        {options.map((option) => (
          <div key={option.id} className="flex items-center gap-3">
            <input
              type="radio"
              id={option.id}
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="w-[25px] h-[25px] cursor-pointer appearance-none rounded-full border-4 border-[#CCD6ED] focus:outline-none focus:ring-2 focus:ring-primary/20"
              style={{
                backgroundColor: selectedValue === option.value ? '#FF772C' : 'white',
                borderColor: selectedValue === option.value ? '#FF772C' : '#CCD6ED',
                boxShadow: selectedValue === option.value ? 'inset 0 0 0 3px white' : 'none'
              }}
            />
            <label htmlFor={option.id} className="text-base text-gray-700">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
